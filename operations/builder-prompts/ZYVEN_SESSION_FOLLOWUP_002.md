# Follow-up Prompt for the Zyven Session

Copy and paste this entire prompt into the same Zyven builder session:

```text
The founder reviewed ZYV-20260910-001 and made these decisions:

- Rotate JWT_SECRET now for immediate global token invalidation.
- Defer tokenVersion and other code hardening.
- The founder does not know the generated owner password, so it must not remain the final credential.

WORK ORDER: ZYV-20260910-002
REPOSITORY: shawnzyluxe-lab/zyven
OBJECTIVE: Restore founder-controlled account access and invalidate every existing production JWT through configuration-only changes.

Required work:
1. Do not generate another owner password that the founder cannot retrieve.
2. Ask the founder to generate and save a strong password in their own password manager, then provide it through Devin’s secret-input flow as ZYVEN_PRODUCTION_OWNER_PASSWORD. Present exactly these choices:
   - Skip — proceed without this for now
   - Provide a temporary secret for this session only
   - Set up a permanent secret for all future Devin sessions
   Recommend the temporary option because the founder’s password manager should be the durable source of truth.
3. After the temporary secret is supplied, hash it with the existing production scrypt implementation and replace the owner account’s current unknown password.
4. Rotate the Render production JWT_SECRET to a new cryptographically random value with at least 32 bytes of entropy. Update every service that must share the same signing secret and restart only the affected services.
5. Verify a token issued before the JWT_SECRET rotation is rejected.
6. Verify a new login succeeds using the founder-provided password and that a newly issued token works.
7. Delete or withdraw the previously generated password secret suggestion. Do not save the founder’s password in repository files, logs, commands, reports, or another persistent Devin secret unless the founder explicitly chooses the permanent option.
8. Do not implement tokenVersion, password-reset endpoints, failed-login audit changes, UI changes, provider changes, or unrelated code.

Guardrails:
- Configuration-only work is expected; do not open a PR unless a code or tracked configuration change becomes strictly necessary.
- Keep Square and Plaid in sandbox.
- Do not seed or inspect production financial data.
- Never print either the owner password or JWT_SECRET.
- Stop and report before broadening scope or changing auth architecture.

Return a concise Builder Completion Report covering affected Render services, old-token rejection, new-login verification, secret cleanup, remaining risk, and whether any code or repository state changed.
```
