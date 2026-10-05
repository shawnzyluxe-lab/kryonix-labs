# Zyven Build Register

**Source:** Cross-organization CIOO handoff provided by the founder on 2026-09-10

**Confidence:** Repository access, `main` HEAD `1a081de`, open PR #25, and merged PR #29 were independently verified on 2026-09-10. Architecture, deployment configuration, and provider state remain reported until reviewed directly.

**Security:** The handoff contained a production credential. It is intentionally omitted here and must be rotated.

## Product

Zyven is an owner-controlled operations and treasury assistant for Square sellers. Stripe is Phase 2.

Approved first cohort:

- Single-location cafes and quick-service restaurants
- Square-based
- Owner-operated or small teams
- No in-house CFO, COO, or bookkeeper

Initial product promise:

> Explain yesterday's real profit, today's committed cash, and the next cash risk using deterministic financial calculations.

Stripe should not appear as an equal launch dependency. It expands the product after the Square and Plaid workflow is validated.

## Reported Architecture

- Next.js 15 web application
- NestJS API and background worker
- Prisma database package
- Shared deterministic financial-math package
- Render Postgres and Redis
- Tailwind web UI
- Resend Daily Profit Brief
- Anthropic function-calling behind a provider-agnostic `LlmClient`
- Zod validation for structured AI output
- CI for lint, typecheck, test, build, dependency audit, and secret scanning
- CODEOWNERS and branch protection; Devin can open PRs but cannot merge

## Technical Invariants

1. Money remains integer cents across calculations and API contracts.
2. Financial arithmetic is deterministic and never delegated to an LLM.
3. The LLM reads precomputed metrics and can explain or draft recommendations only.
4. Financial telemetry remains camelCase and integer cents.
5. All tenant data access is scoped by `business_id`.
6. Provider tokens are encrypted at rest and never logged or returned by endpoints.
7. Approval and dismissal events are recorded in an audit trail.
8. The public landing page is `/`; the application dashboard begins at `/today`.

## Reported Features

### Identity

- Signup and login
- Scrypt password hashes
- JWT claims for user, business, and role
- Tenant-scoped access

### Square

- OAuth connection
- Sandbox webhooks
- Idempotent backfill
- Payment, refund, and payout data models

### Plaid

- Link-token creation and exchange
- Transactions Sync worker
- Webhook verification
- Item, account, and transaction data models

### Profit and treasury

- Daily profit and loss with sales, fees, refunds, COGS, operating expenses, net profit, and channel split
- 14-, 30-, and 90-day runway and cash-flow forecasts
- Cash-cliff detection
- Committed-cash calculation
- Payout-versus-payroll collision detection
- Reconciliation that excludes Square and Stripe transfers from double-counted bank revenue
- Cached treasury telemetry endpoint

### Assistant and workflow

- Owner approve or dismiss flow for drafted money moves
- Grounded Ask Zyven workflow over stored metrics
- Ask audit trail
- Daily Profit Brief with local-time scheduling and preferences

### Web

- Landing page
- Today
- Cash
- Ask
- Integrations
- Settings

## Reported Deployments

| Service | URL | State |
|---|---|---|
| Web | https://app.thezyven.com | Deployed |
| API | https://api.thezyven.com | Deployed |
| Public domain | https://thezyven.com | Cloudflare in front of Render |
| Database | Render Postgres | Deployed |
| Queue and cache | Render Redis | Deployed |

Provider environments remain `SQUARE_ENV=sandbox` and `PLAID_ENV=sandbox`. No live production transaction data has been reported.

## Reported Repository State

- Repository: `shawnzyluxe-lab/zyven`
- Main HEAD at handoff: `1a081de`
- Open UI PR at handoff: `#25`, a premium landing and application visual refresh
- Open dependency PRs at handoff: `#1` through `#7`
- Main reportedly includes treasury telemetry and a Vitest security update

Repository read access, the reported `main` HEAD, and PR reads are independently verified. Branch-push access will be verified only when this account has a legitimate scoped change; no disposable push test will be used.

## Current Decision Reconciliation

| Handoff item | Current operating decision |
|---|---|
| Broad Square seller target | Begin with single-location cafes and quick-service restaurants |
| Wait for real Plaid and Square access until LLC formation | Pursue eligible Plaid Trial access first; use Square Sandbox while preparing seller OAuth; make entity and scaled security readiness gates for broader access |
| Square and Stripe pitch | Lead with Square and Plaid; keep Stripe as Phase 2 |
| Dark landing and white dashboard | Direction remains provisional until the founder resolves the UI review |
| Selected Zyven brand | Use Zyven internally and on its existing domain; complete professional trademark and common-law review before major promotion |

The latest founder instruction supersedes conflicting older handoff text.

## Immediate Security Actions

Builder-reported outcome from `ZYV-20260910-001` on 2026-09-10:

- The disclosed password was replaced with a random 24-character credential and production login succeeded.
- The founder does not possess that generated password, so account ownership recovery remains open.
- The temporary Render Postgres allowlist entry was removed and the builder reported the allowlist as empty.
- The repository, open PRs, and builder-session filesystem were scanned for the disclosed credential; no repository occurrence was reported and local plaintext artifacts were deleted.
- Focused auth and password tests, workspace typecheck, and lint reportedly passed.
- Existing JWTs remain valid for up to seven days because authentication uses stateless HS256 tokens without per-user revocation.

Founder decision:

1. Rotate `JWT_SECRET` now to invalidate all current tokens.
2. Defer `tokenVersion` and broader auth code hardening.
3. Replace the unknown generated password with a founder-chosen value supplied through a temporary secret-input flow and stored by the founder in an independent password manager.
4. Do not copy production credentials into repository documents, knowledge notes, tickets, or test commands.
5. Confirm that provider webhook verification, token encryption, tenant isolation, and audit logging are exercised by CI or integration tests before live customer data.

## Revised Milestones

| Milestone | Target | Exit evidence |
|---|---|---|
| M1 — Security cleanup and demo lock | 1–2 weeks | Exposed credential rotated, temporary database allowlist removed, UI direction chosen, and Northside Cafe sandbox demo approved |
| M2 — Plaid-first limited data validation | Within 30 days | Trial eligibility verified, first approved real connection or documented blocker, and forecast error recorded |
| M3 — Square and Plaid closed cohort | 30–60 days | Five completed design-partner onboardings with consent, revocation, monitoring, support, and repeat Daily Brief use |
| M4 — Paid cohort and Stripe decision | 60–90 days | Three paid continuations and evidence that Stripe is required by the target cohort |
| M5 — Broader launch readiness | 90–120 days | Accurate legal entity, current policies, provider approvals, measured retention, reliable operations, and evidence-backed marketing claims |

Dates are targets, not commitments to skip security or evidence gates.

## Open Work

- Resolve or replace UI PR #25 after founder review.
- Approve and seed a complete Northside Cafe sandbox profile.
- Verify Plaid Trial eligibility and required products for the actual team.
- Prepare Square production OAuth for approved design partners.
- Apply the Trial-Phase Security Controls for external accounts.
- Draft and review privacy, terms, DPA, consent, retention, deletion, and incident-response materials.
- Run professional trademark and common-law clearance for Zyven.
- Decide whether and when Stripe materially improves the approved cohort's workflow.
