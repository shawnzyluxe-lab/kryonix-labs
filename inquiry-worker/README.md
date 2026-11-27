# Enterprise inquiry Worker

Receives the enterprise inquiry form on kryonixlabs.com and runs on the existing Cloudflare account (free tier). It is not part of the published GitHub Pages site.

- Endpoint: `POST https://inquiry.kryonixlabs.com/inquiry` (JSON). Requests are accepted only from `https://kryonixlabs.com` and `https://www.kryonixlabs.com`.
- Spam protection: Cloudflare Turnstile token, verified server-side with `siteverify` (hostname checked), plus a hidden honeypot field.
- Validation: all five fields are required, length-limited and stripped of control characters. The email format is checked, and the category must be one of the listed options.
- Storage: Cloudflare D1 database `kryonix-inquiries`, table `inquiries` (`schema.sql`). Private: readable only by Cloudflare account members.
- Notification: one plain-text email per inquiry from `inquiries@kryonixlabs.com` to the verified company inbox, through Cloudflare Email Routing (`send_email` binding). The inquiry is stored before the email is sent, so a failed email never loses an inquiry; `notified = 0` marks rows whose email failed.
- Errors: the form shows a clear message and the `contact@kryonixlabs.com` fallback on any failure.

## Privacy, retention and deletion

- The form asks visitors not to include confidential information, and collects only name, work email, organization, category and a high-level challenge.
- Retention: a daily cron trigger (03:17 UTC) deletes inquiries older than 365 days (12 months; candidate policy for non-engaged inquiries, pending Founder and legal approval).
- Deletion on request: `DELETE FROM inquiries WHERE email = '<address>';` in the D1 console, then reply to confirm.
- Access: limit Cloudflare account membership to people who handle enterprise inquiries.

## Operations

- Review undelivered notifications: `SELECT id, created_at, organization FROM inquiries WHERE notified = 0;`
- Deploy: `wrangler deploy`, with `NOTIFY_TO` and the `send_email` destination set to the verified company inbox, and `TURNSTILE_SECRET` set as a Worker secret.
