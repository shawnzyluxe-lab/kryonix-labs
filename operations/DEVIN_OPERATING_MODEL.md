# Kryonix Multi-Devin Operating Model

## Roles

### CIOO control tower — this Devin account

- Maintains portfolio priorities, decisions, risks, and evidence
- Issues one numbered work order per builder session
- Reviews PRs, deployment evidence, and reported blockers
- Protects venture-specific guardrails
- Decides what should be built next, subject to founder approval
- Does not duplicate builder implementation work

### Builder sessions — the other Devin account

- One session owns one venture or tightly scoped work order
- Reads the current repository and existing PRs before changing code
- Implements, tests, documents, and deploys only the approved scope
- Opens a PR instead of pushing directly to the default branch
- Returns a standardized handoff to the CIOO control tower
- Never mixes credentials, customer data, or code between ventures

Aegis remains managed in the CIOO account because its research guardrails and active-trial state require direct oversight.

## Work-Order Lifecycle

1. CIOO records the current objective, evidence, risks, and founder decision.
2. CIOO sends a separate prompt to the relevant builder session.
3. The builder confirms the repository, branch, environment, and guardrails.
4. The builder completes only the stated scope and opens or updates a PR.
5. The builder returns the required completion report.
6. CIOO reviews the evidence and either accepts, requests a focused revision, or stops the work.
7. CIOO updates the portfolio register, decision log, and next priority.

Do not keep a builder session active without a concrete work order.

## Work-Order Format

Every work order must state:

- Work-order ID
- Venture and repository
- Objective and reason
- Included and excluded scope
- Security, product, and design guardrails
- Required verification
- Required deliverables
- Stop conditions and decisions that return to the founder

Use IDs in the form `VENTURE-YYYYMMDD-NNN`, such as `ZYV-20260910-001`.

## Builder Completion Report

Each builder session must return:

```markdown
# Builder Completion Report

- Work order:
- Repository:
- Branch:
- PR:
- Default-branch HEAD reviewed:
- Production changes:

## Outcome
-

## Verification
-

## Risks or blockers
-

## Decisions needed
-

## Recommended next work order
-
```

Never include passwords, tokens, customer data, private journal data, or provider secrets.

## Existing-Session Intake

For an existing builder session, first request:

- Current purpose and venture
- Repository, branch, default-branch HEAD, and open PRs
- Work completed and remaining
- Production URLs and deployment state
- Tests and checks actually run
- Security, legal, customer-data, and access risks
- Decisions already made and who approved them
- Three recommended next actions

The session must distinguish verified, reported, inferred, and unknown facts.

## Review Rules

- PR and provider evidence outrank session summaries.
- A builder may not broaden scope because related code is nearby.
- Public claims, pricing, legal identity, production integrations, and irreversible actions return to the founder.
- Failed or incomplete verification remains open; it is not reported as complete.
- Cross-account handoffs use repository documents or sanitized reports, never credentials.
