# Kryonix Labs Portfolio Register

**Last reviewed:** 2026-09-10
**Status:** CIOO access inventory; repository, domain, DNS, and hosting controls reviewed

## Portfolio

| Venture | Current public direction | Known domain | Current stage | Immediate decision |
|---|---|---|---|---|
| Kryonix Labs | Parent product studio for operator intelligence | https://kryonixlabs.com | Operating foundation | Confirm parent/venture naming and company formation path |
| Vantav Commerce | Commerce venture whose live platform is currently branded `Prometheus OS` | https://vantavcommerce.com | Deployed beta surface; commercial and partner status unverified | Define the Vantav/Prometheus hierarchy and verify current launch dependency |
| Zyven | Deterministic daily profit, committed cash, and cash-cliff alerts for single-location Square cafes and quick-service operators | https://thezyven.com | Deployed sandbox foundation; no live provider data reported | Complete security cleanup, verify Plaid Trial eligibility, and recruit the first cohort |
| Aegis Alpha | Trading research, journaling, and operator-facing wealth tools | https://aegisalphaengine.com | Active shadow research and platform development | Preserve shadow-trial and platform-layout guardrails |

## Repository Access

`Listed` means the repository appears in Devin's organization repository inventory. `Clone` means current remote read access was independently verified.

| Repository | Portfolio role | Listed | Local copy | Remote clone | Notes |
|---|---|---:|---:|---:|---|
| `shawnzyluxe-lab/kryonix-labs` | Parent site and brand kit | Yes | Yes | Yes | Read and branch-push access verified; current portfolio source of truth |
| `shawnzyluxe-lab/EcommerceAI` | Vantav Commerce | Yes | Yes | No | Local snapshot exists; current remote access fails |
| `shawnzyluxe-lab/zyven` | Zyven application | Yes | No | No | Rechecked 2026-09-10: listing exists, but clone and PR reads return not found; handoff reports main at `1a081de` |
| `shawnzyluxe-lab/aegisalpha-wealth-hub` | Aegis platform | Yes | Yes | No | Local snapshot exists; current remote access fails |
| `shawnzyluxe-lab/aegisalpha-trading-engine` | Aegis shadow research engine | Yes | Yes | No | Local snapshot exists; current remote access fails |
| `shawnzyluxe-lab/aegisalpha-trading-journal` | Private shadow journal | Yes | No | No | Do not use a production journal for testing |
| `shawnzyluxe-lab/aegis-manual-lab` | Aegis manual research sandbox | Yes | No | Yes | Remote read access verified |
| `shawnzyluxe-lab/aegis-nano-scanner` | Aegis crypto observation sandbox | Yes | No | No | Current remote access fails |

## Domain and Hosting Access

All listed public endpoints returned valid HTTPS responses on 2026-09-10. A `404` from the Zyven API root confirms that the service is reachable but does not establish application health.

| Venture | Public endpoints | DNS / registrar | Hosting control | Current access |
|---|---|---|---|---|
| Kryonix Labs | `kryonixlabs.com` | Cloudflare nameservers and registrar | GitHub Pages | Site and repository verified; no stored token can administer this Cloudflare zone |
| Vantav Commerce | `vantavcommerce.com` | Cloudflare nameservers and registrar | Render service `shawnzyluxe`; Render Postgres and Redis | Render API and Cloudflare DNS read/edit access verified |
| Zyven | `thezyven.com`, `app.thezyven.com`, `api.thezyven.com` | Cloudflare nameservers and registrar | Render web, API, worker, Postgres, and Redis | Render API access verified; no stored token can administer this Cloudflare zone |
| Aegis Alpha | `aegisalphaengine.com` | Cloudflare nameservers; Porkbun registrar | Render web services and scheduled jobs | Render API access verified; no stored token can administer this Cloudflare zone or its Porkbun registration |

### Control-plane findings

- The native GitHub integration is installed, but Git Manager can clone only `kryonix-labs` and `aegis-manual-lab`.
- Both stored GitHub administrative PATs return `401 Bad credentials`; repair repository access through the native GitHub integration rather than relying on them.
- The stored Render API access covers Vantav, Zyven, Aegis web services, scheduled jobs, and their Postgres/Redis resources.
- The stored Cloudflare API token is active but restricted to `vantavcommerce.com`.
- The stored Porkbun credentials do not authorize `aegisalphaengine.com`.
- `www.thezyven.com` resolves and serves HTTPS, but Render reports that custom-domain alias as unverified; the apex, app, and API names are verified.

### Access repair required

1. Synchronize this Devin organization's Git Manager access with all repositories above.
   - Devin setting: `/settings/connections/github#github-repo-permissions`
2. Create a least-privilege Cloudflare API token with `Zone:Read` and `DNS:Edit` for `kryonixlabs.com`, `vantavcommerce.com`, `thezyven.com`, and `aegisalphaengine.com`.
3. Provide Porkbun API credentials authorized for `aegisalphaengine.com`, or retain registrar actions as founder-only.
4. Confirm the `zyven` repository contains the work from the other Devin account and has a default branch.
5. Verify push access only when a scoped change is ready; do not test write access by pushing disposable commits.
6. Transfer cross-account project context using repository documents or explicit handoff files, not credentials.

## Devin Session Access

### Accessible in this organization

- Vantav product session: https://app.devin.ai/sessions/e6d3284f1b5d497a80deb412f8a1fc32
- Vantav partnership-agreement session: https://app.devin.ai/sessions/d0224d7fad3145d9bc6d8e52844c3183
- Aegis trading-desk review and scheduled-operation sessions are visible in this organization.

### Not accessible in this organization

- Zyven build session: https://app.devin.ai/sessions/44f19b99dd16461598c56dbb830a952b

The Zyven session returns `403 Unauthorized` because it belongs to another Devin organization. Its output must be handed off through an exported summary, attachments, or the `zyven` repository.

A sanitized CIOO handoff was received on 2026-09-10 and recorded in `ZYVEN_BUILD_REGISTER.md`. The session and repository remain independently inaccessible from this organization until access is repaired.

## Known Constraints

### Aegis

- Do not restart, reset, backfill, edit, or re-baseline the active shadow trial or journal.
- Do not change strategy, filters, sizing, universe, or execution policy while a trial is open.
- Do not run the daily process manually on top of its schedule.
- Do not enable live mode or integrate the engine into the public platform before a `PROMOTE` verdict.
- Do not change the Aegis platform layout, navigation, cards, styling, or theme without explicit founder approval.

### Portfolio

- Keep production credentials, customer data, regulated workflows, and deployment environments separated by venture.
- Treat the parent brand as an endorser and operator, not as a reason to merge product systems.
- Do not publish financial performance or market-size claims without traceable evidence.

### Zyven

- Provider environments are reported as Square Sandbox and Plaid Sandbox; no live provider transaction data is reported.
- Rotate the production account credential disclosed in the cross-account handoff and invalidate related sessions where supported.
- Remove the temporary Render Postgres network allowlist entry after its login task is confirmed.
- Keep Stripe as Phase 2 until the Square and Plaid workflow is validated.

## Naming Decisions Needed

1. The founder's handoff reports that **Zyven** was selected and `thezyven.com` was purchased, but the Kryonix site and brand documents still call it **Zyvrn**; legal clearance remains pending.
2. The founder and parent site call the commerce venture **Vantav Commerce**, while `vantavcommerce.com` presents **Prometheus OS** as the product; the intended umbrella/product relationship is not documented.
3. The founder describes the trading venture as **Aegis**, while the parent site presents **AAE**.
4. Public materials alternate between “product studio,” “startup,” and an investor-ready portfolio story.
5. Vantav's public terms, privacy, security, and footer copy identify the operator as **Vantav LLC**, while the founder reports that the Kryonix Labs entity is not yet formed; the legal contracting entity must be verified before accepting customers or payments.

Until these are resolved, use **Kryonix Labs**, **Vantav Commerce**, **Zyven**, and **Aegis Alpha** in internal operating documents. Do not change customer-facing names without founder approval.

## Missing Source-of-Truth Inputs

- Independent access to and verification of the Zyven repository
- Current Vantav launch blocker and commercial readiness
- Aegis current shadow-trial dates and latest verdict
- Entity state, target formation date, ownership, and fundraising intent
- Legal review of Vantav's use of `Vantav LLC` in customer-facing policies and contracts
- Portfolio cash, recurring spend, revenue, and approved spending limits
- Definitive domain, cloud account, vendor, and deployment inventory
