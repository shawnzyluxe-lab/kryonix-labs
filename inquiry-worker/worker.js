import { EmailMessage } from "cloudflare:email";

const CATEGORIES = [
  "Enterprise decision intelligence",
  "Partnership",
  "Research collaboration",
  "Investor relations",
  "Other",
];
const LIMITS = { name: 120, email: 200, organization: 160, challenge: 2000 };
const EMAIL_RE = /^[^\s@<>()",;:\\]+@[^\s@<>()",;:\\]+\.[^\s@<>()",;:\\]{2,}$/;
const RETENTION_DAYS = 730;

function json(body, status, origin) {
  const headers = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };
  if (origin) {
    headers["access-control-allow-origin"] = origin;
    headers["vary"] = "Origin";
  }
  return new Response(JSON.stringify(body), { status, headers });
}

function allowedOrigin(request, env) {
  const origin = request.headers.get("origin") || "";
  const allowed = (env.ALLOWED_ORIGINS || "").split(",").map((o) => o.trim()).filter(Boolean);
  return allowed.includes(origin) ? origin : null;
}

function clean(value, max) {
  if (typeof value !== "string") return "";
  const text = value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();
  return text.length > max ? null : text;
}

async function verifyTurnstile(token, ip, env) {
  if (!token || typeof token !== "string" || token.length > 2048) return false;
  const form = new FormData();
  form.append("secret", env.TURNSTILE_SECRET);
  form.append("response", token);
  if (ip) form.append("remoteip", ip);
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body: form });
  if (!res.ok) throw new Error(`siteverify ${res.status}`);
  const out = await res.json();
  return out.success === true && (!env.TURNSTILE_HOSTNAMES || env.TURNSTILE_HOSTNAMES.split(",").includes(out.hostname));
}

async function notify(env, row) {
  const body = [
    "A new enterprise inquiry was submitted on kryonixlabs.com.",
    "",
    `Reference: ${row.id}`,
    `Received: ${row.created_at}`,
    `Name: ${row.name}`,
    `Work email: ${row.email}`,
    `Organization: ${row.organization}`,
    `Category: ${row.category}`,
    "",
    "Decision challenge:",
    row.challenge,
  ].join("\r\n");
  const raw = [
    `From: Kryonix Labs Inquiries <${env.NOTIFY_FROM}>`,
    `To: <${env.NOTIFY_TO}>`,
    `Subject: New enterprise inquiry: ${row.category}`,
    `Message-ID: <${row.id}@kryonixlabs.com>`,
    `Date: ${new Date().toUTCString()}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=utf-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    body,
  ].join("\r\n");
  await env.NOTIFY.send(new EmailMessage(env.NOTIFY_FROM, env.NOTIFY_TO, raw));
}

async function handleInquiry(request, env) {
  const origin = allowedOrigin(request, env);
  if (!origin) return json({ ok: false, error: "origin_not_allowed" }, 403, null);
  if (!(request.headers.get("content-type") || "").includes("application/json")) {
    return json({ ok: false, error: "unsupported_content_type" }, 415, origin);
  }
  const length = Number(request.headers.get("content-length") || 0);
  if (length > 8192) return json({ ok: false, error: "too_large" }, 413, origin);

  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400, origin);
  }
  if (!data || typeof data !== "object") return json({ ok: false, error: "invalid_json" }, 400, origin);

  if (typeof data.website === "string" && data.website.trim() !== "") {
    return json({ ok: true }, 200, origin);
  }

  const row = {
    name: clean(data.name, LIMITS.name),
    email: clean(data.email, LIMITS.email),
    organization: clean(data.organization, LIMITS.organization),
    category: clean(data.category, 80),
    challenge: clean(data.challenge, LIMITS.challenge),
  };
  const invalid = [];
  for (const key of ["name", "email", "organization", "category", "challenge"]) {
    if (!row[key]) invalid.push(key);
  }
  if (row.email && !EMAIL_RE.test(row.email)) invalid.push("email");
  if (row.category && !CATEGORIES.includes(row.category)) invalid.push("category");
  if (invalid.length) return json({ ok: false, error: "invalid_fields", fields: [...new Set(invalid)] }, 400, origin);

  let human;
  try {
    human = await verifyTurnstile(data.turnstileToken, request.headers.get("cf-connecting-ip"), env);
  } catch (err) {
    console.error("turnstile_unavailable", err.message);
    return json({ ok: false, error: "verification_unavailable" }, 503, origin);
  }
  if (!human) return json({ ok: false, error: "verification_failed" }, 403, origin);

  row.id = crypto.randomUUID();
  row.created_at = new Date().toISOString();
  try {
    await env.DB.prepare(
      "INSERT INTO inquiries (id, created_at, name, email, organization, category, challenge) VALUES (?, ?, ?, ?, ?, ?, ?)"
    ).bind(row.id, row.created_at, row.name, row.email.toLowerCase(), row.organization, row.category, row.challenge).run();
  } catch (err) {
    console.error("store_failed", err.message);
    return json({ ok: false, error: "store_failed" }, 500, origin);
  }

  try {
    await notify(env, row);
    await env.DB.prepare("UPDATE inquiries SET notified = 1 WHERE id = ?").bind(row.id).run();
  } catch (err) {
    console.error("notify_failed", row.id, err.message);
  }
  return json({ ok: true, reference: row.id }, 200, origin);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== "/inquiry") return json({ ok: false, error: "not_found" }, 404, null);
    if (request.method === "OPTIONS") {
      const origin = allowedOrigin(request, env);
      if (!origin) return new Response(null, { status: 403 });
      return new Response(null, {
        status: 204,
        headers: {
          "access-control-allow-origin": origin,
          "access-control-allow-methods": "POST",
          "access-control-allow-headers": "content-type",
          "access-control-max-age": "86400",
          vary: "Origin",
        },
      });
    }
    if (request.method !== "POST") return json({ ok: false, error: "method_not_allowed" }, 405, null);
    return handleInquiry(request, env);
  },

  async scheduled(event, env) {
    const cutoff = new Date(Date.now() - RETENTION_DAYS * 86400000).toISOString();
    const res = await env.DB.prepare("DELETE FROM inquiries WHERE created_at < ?").bind(cutoff).run();
    console.log("retention_deleted", res.meta && res.meta.changes);
  },
};
