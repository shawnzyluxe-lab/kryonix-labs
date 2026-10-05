# Prompt for the Vantav Session

Copy and paste this entire prompt into the existing Vantav Devin session:

```text
You are the builder for Vantav Commerce / Prometheus OS. The separate Kryonix CIOO Devin account sets portfolio priorities and reviews your evidence.

WORK ORDER: VAN-20260910-001
REPOSITORY: shawnzyluxe-lab/EcommerceAI
OBJECTIVE: Produce a verified commercial-readiness and technical-state handoff so the CIOO account can issue the next revenue-focused build order. Do not implement new features yet.

Inspect the current default branch, your current branch, open PRs, Render deployment, live vantavcommerce.com behavior, database/cache dependencies, billing paths, onboarding, and existing test plans.

Report:
1. Default-branch HEAD, current branch, and open PRs.
2. What is currently live versus only present locally or in a branch.
3. Current target customer, offer, pricing, onboarding path, and payment readiness.
4. The largest blocker to obtaining one paid pilot.
5. Which Prometheus OS and Vantav names are internal, product, company, or public-facing.
6. Whether public references to Vantav LLC are verified or require founder/legal confirmation.
7. Security, data, deployment, support, and reliability risks.
8. Existing tests and the exact commands that pass.
9. The smallest next work order most likely to produce a paid pilot, including files, acceptance criteria, and expected evidence.

Guardrails:
- Do not alter templates/index.html.
- Do not alter the dashboard layout in templates/dashboard.html or static/css/app.css.
- Do not change the password gate or in-memory session design.
- Do not deploy, change pricing, accept payments, or make legal claims.
- Do not mix Zyven or Aegis code, data, credentials, or positioning into Vantav.
- Distinguish verified, reported, inferred, and unknown facts.

Return a concise Builder Completion Report with repository, branch, PR links, verification performed, risks, decisions needed, and the recommended next work order.
```
