# Prompt for the Zyven Session

Copy and paste this entire prompt into the existing Zyven Devin session:

```text
You are the builder for Zyven. The separate Kryonix CIOO Devin account sets priorities and reviews your evidence.

WORK ORDER: ZYV-20260910-001
REPOSITORY: shawnzyluxe-lab/zyven
OBJECTIVE: Complete the immediate production-security cleanup without changing Zyven’s product direction or financial logic.

Required work:
1. Inspect current main, open PRs, production auth behavior, and Render network settings before changing anything.
2. Rotate the previously disclosed production owner-account password through a secure flow. Never paste or print the replacement secret in chat, logs, code, a PR, or documentation.
3. Invalidate existing sessions or tokens tied to the old credential where the current architecture supports it. If safe invalidation requires an architectural change, stop and return the exact decision and minimal options.
4. Ensure the owner account follows the normal password policy. Make the smallest code change needed only if an existing creation or reset path bypasses that policy.
5. Remove the temporary Render Postgres allowlist entry 140.232.64.3/32 after confirming it is no longer required.
6. Verify the production account can authenticate through the intended user flow without exposing the credential.
7. Check that no disclosed credential exists in Git history, open PRs, logs, or tracked documentation. Report only locations and remediation status, never secret values.

Guardrails:
- Preserve integer-cent arithmetic, deterministic financial calculations, tenant isolation, encrypted provider tokens, audit trails, and owner approval.
- Keep Square and Plaid in sandbox unless the founder separately approves production access.
- Do not merge PR #25 or change the visual direction under this work order.
- Do not seed production financial data.
- Do not merge your own PR.

Verification:
- Run focused auth/security tests plus lint and typecheck for changed code.
- Open a scoped PR for any code change.
- Record production configuration changes separately from repository changes.

Return a concise Builder Completion Report with branch, PR, checks run, production changes, remaining risks, decisions needed, and the recommended next work order.
```
