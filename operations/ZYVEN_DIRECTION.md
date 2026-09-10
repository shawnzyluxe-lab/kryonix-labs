# Zyven Product Direction

**Status:** Founder approved the first design-partner cohort on 2026-09-10. Remaining recommendations are based on the live product, Kryonix materials, and public market research and must be reconciled with the cross-account build handoff before changing the roadmap.

## Executive Decision

Build Zyven as the **cash-cliff early-warning system for owner-operated businesses on Square**, beginning with single-location cafes and quick-service businesses.

Do not position it as a broad “AI CFO,” generic analytics dashboard, bookkeeping replacement, or autonomous treasury product. Those categories are crowded and create a larger trust and integration burden. Zyven's sharp promise should be:

> Know when cash gets tight, why it happens, and what you can safely change — before the cliff arrives.

## Venture Thesis

### Customer

An owner-operator with:

- One Square-powered location
- Daily card sales and Square payouts
- Recurring payroll, rent, supplier, loan, and tax obligations
- Limited cash buffer
- No full-time finance employee

The founder selected cafes and quick-service operators as the first design-partner cohort. Their high-frequency sales, recurring expenses, payout timing, and narrow cash buffers create a frequent, measurable problem. Expand to retail and service businesses only after the forecast and onboarding process work repeatedly for the first segment.

### Problem

Square shows sales and operating activity, while bank and accounting tools show other fragments. Owners still struggle to answer:

1. How much cash is genuinely free after committed bills?
2. On what date could the balance become unsafe?
3. Which obligation or payout timing creates the problem?
4. What changes would remove the risk?

The customer does not need more charts. The customer needs enough warning to act.

### Product

Zyven combines Square sales and payout data, bank balances and transactions, and an owner-confirmed obligation calendar. A deterministic forecasting engine calculates:

- Cash on hand
- Free cash after committed bills
- Next projected cash-cliff date
- Lowest projected balance
- Drivers of the shortfall
- Scenario impact of changing timing or spending

AI can explain the forecast and draft options. It must not perform arithmetic, silently alter assumptions, or move money.

## Market Position

### Category

Use **cash-flow early warning for Square businesses** as the category. “Financial intelligence” can remain supporting language, but it is too broad to establish the product.

### Competitive distinction

| Alternative | What it already does | Zyven's wedge |
|---|---|---|
| Square Dashboard | Sales, operations, reports, and other seller tools | Combine payouts, external cash, and committed obligations into a forward-looking cliff |
| Spark Business Intelligence | Natural-language analysis of Square operating data | Lead with cash survival and timing, not general business questions |
| CashPulse and similar tools | Generic bookkeeping, categorization, invoicing, and 13-week cash forecasts | Faster vertical setup using Square-native operating patterns |
| AI CFO platforms | Broad accounting-connected analysis and scenario planning | One urgent daily decision for owner-operators, without enterprise-style complexity |
| Spreadsheet or bookkeeper | Flexible manual forecast and periodic advice | Continuous monitoring, traceable assumptions, and early alerts |

The durable differentiation is not “uses AI.” It is:

1. Square-specific data interpretation
2. Deterministic, explainable cash math
3. An owner-confirmed calendar of committed obligations
4. Forecast accuracy tracked against actual outcomes
5. A narrow daily workflow that earns trust

## Minimum Lovable Product

### Required

1. **Connect or simulate Square data.** Use OAuth for real multi-seller access; keep the sandbox path for demos.
2. **Connect one operating bank account.** Plaid is appropriate for external balances and transactions when production requirements are met.
3. **Confirm obligations.** Let the owner review payroll, rent, debt, taxes, subscriptions, and supplier bills.
4. **Show a 30-day deterministic forecast.** Make every input and assumption inspectable.
5. **Identify the next cliff.** Display date, projected low balance, severity, and top drivers.
6. **Run simple scenarios.** Examples: delay a discretionary purchase, change a bill date, or adjust an owner draw.
7. **Deliver a daily brief.** Include only current cash, free cash, next cliff, changed assumptions, and one recommended review.
8. **Track forecast error.** Compare projected balances with actual balances and surface drift.

### Explicitly defer

- Autonomous transfers or payments
- Lending, credit underwriting, or investment recommendations
- Full bookkeeping and tax filing
- Accounts receivable and invoicing suites
- Payroll execution
- A generic conversational assistant as the home screen
- Multi-platform POS support
- Multi-location enterprise reporting
- Long lists of AI recommendations

## Trust Model

Every forecast must show:

- Data freshness
- Source of each balance, payout, and obligation
- Whether an item is observed, recurring, estimated, or owner-entered
- Confidence or uncertainty range
- Last forecast error
- The exact assumptions changed by a scenario

Avoid claims such as “12 days of runway added” or “$4,200 in shortfalls prevented” until they come from documented customer results. Sandbox examples should be labeled as illustrative.

## Technical Direction

### Data

- Square Orders and Payments: sales activity
- Square Payouts: transfer timing and reconciliation
- Square Bank Accounts: metadata for accounts linked to Square
- Plaid: external bank balances and transaction history
- User-entered obligations: known future outflows not reliably represented in transaction history

Square's Bank Accounts API exposes linked-account information, not a complete substitute for external bank-balance and transaction data. The forecast should reconcile Square payouts with Plaid-observed deposits rather than assume they are identical.

### Forecast engine

Keep the financial model separate from the explanation layer:

```text
observed cash
+ scheduled inflows
+ forecast inflows
- committed outflows
- forecast variable outflows
= projected daily cash
```

Version assumptions and retain forecast snapshots so the system can explain why a projection changed. Use AI only after deterministic calculations produce structured results.

### Security and partner readiness

- Use Square OAuth for seller authorization; never request seller personal access tokens.
- Encrypt OAuth tokens at rest and keep encryption keys outside source control.
- Use separate staging and production credentials.
- Support token refresh and revocation.
- Use Plaid Trial as the first real-data bridge when the Zyven Plaid team is eligible. For US/Canada teams created on or after April 15, 2026, Trial permits real production data for up to 10 lifetime Production Items.
- Treat full Plaid Production access, expanded institution access, and provider security review as scale gates, not prerequisites for building the intelligence layer.
- Keep money movement out of the first release.

## Provider Access Roadmap

Provider access is achievable in stages. Do not delay customer and forecast validation while pursuing enterprise-scale partnership status.

**Integration order:** Plaid first for connected cash and transaction data, then Square production OAuth. Develop the Square model in Sandbox while validating the initial intelligence layer through eligible Plaid Trial access.

### Phase 1 — Intelligence foundation

- Build the deterministic forecast, obligation model, scenarios, explanations, and forecast-error tracking.
- Implement the requested Plaid balance and transaction products first when they are available under the account's Trial access.
- Use Square Sandbox sellers and test data.
- Use Plaid Sandbox for systematic testing.
- If the Plaid team is Trial-eligible, use a controlled founder or test connection with real production data.
- Complete the minimum privacy, consent, authentication, token-storage, logging, and incident-response foundation needed to handle sensitive data responsibly.

### Phase 2 — Limited real-business cohort

- Onboard a small number of design partners through Square seller OAuth.
- Use Plaid Trial for up to 10 production Items if the account is eligible and the intended products and institutions are available.
- Keep onboarding founder-led.
- Record consent, data sources, token lifecycle, access revocation, forecast accuracy, and support load.
- Do not treat access to real data as permission for broad public launch.

### Phase 3 — Product proof

Prove that Zyven can accurately and repeatedly distinguish:

- Total connected cash
- Cash committed to confirmed obligations
- Payout timing versus obligation timing
- The date an operating safety threshold could be crossed
- The assumptions and data that create the warning

Use real customer evidence to replace illustrative claims. Track predicted versus actual balances so provider and customer conversations are grounded in measured performance.

### Phase 4 — Scale readiness

Approach Plaid, Square, and other providers with:

- A legitimate entity and clear ownership
- A narrow, documented use case
- Active users and usage evidence
- Current privacy policy and terms
- Security and data-handling controls
- Authentication and consent architecture
- Incident-response procedures
- Monitoring, auditability, revocation, and support processes

Request expanded production access only when the product is ready to exceed Trial or small-cohort limits. A serious financial platform is earned through trustworthy operations, not just successful API calls.

## Business Model

Test a founding-customer plan rather than designing a complex pricing matrix:

- Free sandbox with a representative demo business
- 30-day connected-data pilot
- Founding plan test at **$49 per location per month**
- Higher tier later for multiple locations, longer history, accountant access, or additional scenarios

The pricing test succeeds when owners pay to retain monitoring after seeing their own data. Waitlist signups and positive interviews are not payment validation.

## Go-to-Market

### First channel

Recruit 10–15 Square-powered cafes and quick-service operators through direct founder outreach. Sell the risk avoided, not the software:

> “Zyven watches your sales, payouts, cash, and upcoming obligations and warns you before the balance becomes unsafe.”

### Secondary channels

- Bookkeepers serving several Square businesses
- Fractional finance operators
- Local restaurant and retail associations
- Square ecosystem consultants
- Square App Marketplace after onboarding, OAuth, security, support, and customer proof are ready

Do not pursue a marketplace listing as the first validation channel. First prove that owners connect data, understand the forecast, and pay to keep the alert.

## Six-Week Validation Plan

### Week 1 — Problem evidence

- Interview 10 owner-operators.
- Collect the last three cash surprises each experienced.
- Determine how much warning would have changed the outcome.
- Validate the language “cash cliff” against alternatives such as “cash squeeze” or “unsafe balance.”

### Week 2 — Concierge forecast

- Enroll five design partners.
- Use Square Sandbox and Plaid Sandbox or eligible Trial connections while preparing seller OAuth for the first approved real businesses.
- Import or enter historical Square, bank, and obligation data with explicit consent.
- Reconstruct whether Zyven would have warned about prior cash problems.
- Document missing data and incorrect assumptions.

### Week 3 — Daily workflow

- Deliver a daily brief for each design partner.
- Measure whether the owner opens it, understands it, and changes a decision.
- Remove every field that does not affect a decision.

### Week 4 — Accuracy

- Compare each daily projected balance with actual results.
- Separate errors caused by missing obligations, payout timing, sales forecasting, and classification.
- Set an initial accuracy threshold only after observing real variance.

### Week 5 — Willingness to pay

- Offer the founding plan.
- Ask for payment rather than another non-binding waitlist commitment.
- Record objections by trust, accuracy, setup effort, urgency, and price.

### Week 6 — Gate decision

Proceed to closed beta only if:

- At least five businesses completed setup
- At least three used the daily brief repeatedly
- Forecasts were understandable and improved through measured error
- At least three owners agree to a paid continuation or equivalent signed pilot
- No unresolved critical data-security issue remains

Otherwise narrow the segment, revise the obligation workflow, or pause broader development.

## Scorecard

| Metric | Why it matters |
|---|---|
| Connection completion rate | Measures onboarding friction |
| Time to first usable forecast | Measures speed to value |
| Confirmed obligations per business | Measures forecast completeness |
| Forecast balance error | Measures product truthfulness |
| Cliffs detected before occurrence | Measures core product value |
| Daily-brief weekly active rate | Measures retained workflow |
| Owner decisions influenced | Measures actionability |
| Paid pilot conversion | Measures commercial evidence |
| Support minutes per connected business | Measures scalability |

## Current Directional Risks

1. **Name conflict:** Search results already show Zyven Labs, Zyven Technologies, and finance-adjacent “Zyven Yield.” This is not a trademark clearance, but it makes formal legal review urgent before major promotion.
2. **Brand inconsistency:** Kryonix materials use `Zyvrn`, while the live product and domain use `Zyven`.
3. **Unsupported proof claims:** The live site presents quantified outcomes and a testimonial that must be verified or labeled as sandbox examples.
4. **Scope expansion:** “Ask your business anything” pushes the product toward a generic assistant before the cash-cliff workflow is validated.
5. **Scale readiness:** Plaid Trial and Square Sandbox/OAuth can support early validation, but expanding beyond a small cohort requires stronger company, security, consent, support, and monitoring evidence.
6. **Trust:** Incorrect forecasts can damage credibility quickly; error measurement is a launch requirement, not a later analytics feature.

## Founder Decision Recorded

- **2026-09-10:** The first design-partner cohort is single-location cafes and quick-service restaurants using Square.

Review after 10 qualified interviews or at the six-week gate. Reconsider the segment if fewer than five operators report recurring cash-timing problems or if the necessary forecast data is unavailable.

## Founder Decisions Required

1. Confirm the public spelling: `Zyven` or `Zyvrn`.
2. Confirm whether the live testimonial and quantified outcomes are real customer evidence or sandbox copy.
3. Decide whether the next six weeks optimize for paid design partners or continued product construction.

## Sources

- Live Zyven product: https://thezyven.com
- Square Dashboard: https://squareup.com/us/en/point-of-sale/features/dashboard
- Square Spark Business Intelligence listing: https://squareup.com/us/en/app-marketplace/app/spark-business-intelligence
- Square Bank Accounts API: https://developer.squareup.com/docs/bank-accounts-api
- Square Payouts API: https://developer.squareup.com/docs/payouts-api/overview
- Square App Marketplace onboarding guidance: https://developer.squareup.com/docs/app-marketplace/listing-best-practices/get-started
- Plaid OAuth and production access: https://plaid.com/docs/link/oauth/
- Plaid Trial plans and billing: https://plaid.com/docs/account/billing/
- Plaid Sandbox and Trial testing: https://plaid.com/docs/sandbox/
- Square OAuth overview: https://developer.squareup.com/docs/oauth-api/overview
- Square seller authorization and token management: https://developer.squareup.com/docs/oauth-api/receive-and-manage-tokens
- CashPulse: https://getcashpulse.com/
- Finoya: https://www.finoya.ai/small-business-owners/
