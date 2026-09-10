# Kryonix Labs Operating System

## Purpose

This operating system keeps Kryonix focused on evidence, customer value, and founder-controlled risk while managing Vantav, Zyven, and Aegis as separate ventures.

## Source-of-Truth Order

When sources disagree, use this order:

1. Founder decision recorded with a date
2. Current production behavior and authoritative provider data
3. Current repository and deployment configuration
4. Current customer or partner evidence
5. Venture document with an owner and review date
6. Public website copy
7. Historical plans, old sessions, and unsourced assumptions

Flag conflicts rather than quietly selecting the most convenient source.

## Portfolio Roles

### Founder and CEO

Founder approval is required for:

- Company, venture, and customer-facing naming
- Company formation, ownership, fundraising, and legal commitments
- New production integrations and access grants
- Venture launch, pricing, or shutdown
- Spending above the approved operating limit
- Regulated, financial, security, or customer-data risk acceptance
- Any Aegis action prohibited by its active-trial guardrails

### CIOO function

The CIOO function:

- Maintains the portfolio register and evidence links
- Ranks company priorities
- Prepares decisions and trade-offs
- Tracks owners, deadlines, dependencies, and risks
- Challenges unsupported claims and stale plans
- Protects venture-specific constraints
- Produces the weekly founder brief
- Coordinates work after approval

The CIOO function does not infer founder approval from silence.

### Venture owner

Each venture must have one owner responsible for:

- Current objective
- Customer evidence
- Product and deployment health
- Weekly metrics
- Largest risk
- Next gate

Until delegated, the founder is the owner.

## Venture Stages

| Stage | Required evidence | Exit decision |
|---|---|---|
| Thesis | Defined customer, problem, proposed workflow, and falsifiable assumptions | Begin interviews or stop |
| Discovery | Repeated problem evidence from the chosen segment | Build a concierge or design-partner workflow |
| Design partner | Customers complete the workflow with founder support | Begin a paid pilot |
| Paid pilot | Customers pay, use the workflow, and receive measurable value | Productize the repeated workflow |
| Commercial | Repeatable onboarding, retention, support, pricing, and reliable operations | Invest in a scalable channel |
| Scale | Efficient acquisition, strong retention, controlled support, and secure infrastructure | Increase capital allocation |
| Research | Controlled evaluation with locked rules and defined verdict criteria | Promote, extend under a new protocol, or archive |
| Paused | No active allocation beyond maintenance and evidence preservation | Resume only with a dated thesis |

A venture cannot graduate because a website, feature set, waitlist, or pricing page exists.

## Allocation Method

Score each proposed initiative from 1–5:

| Factor | Question |
|---|---|
| Customer evidence | How clearly has the target customer demonstrated the problem? |
| Urgency | How costly is delay for the customer or company? |
| Revenue proximity | How directly can the work produce paid validation? |
| Strategic fit | Does it strengthen the chosen venture thesis? |
| Defensibility | Does it create proprietary data, workflow depth, trust, or distribution? |
| Readiness | Are data, integrations, skills, and access available now? |
| Reversibility | Can the decision be changed without significant loss? |
| Risk | What legal, security, financial, operational, or brand exposure does it add? |
| Founder cost | How much direct founder time and attention will it consume? |

Prioritize high-evidence, high-urgency, revenue-near, reversible work. Penalize risk and founder load. The score supports judgment; it does not replace it.

## Operating Cadence

### Monday — Founder priorities

Duration: 30 minutes.

1. Review portfolio cash, runway, recurring spend, and revenue.
2. Review one scorecard line per venture.
3. Identify stale or conflicting evidence.
4. Select the company’s three outcomes for the week.
5. Select one explicit pause or defer decision.
6. Assign one owner and deadline to every action.

### Wednesday — Blocker review

Duration: 15 minutes.

Review only:

- External approvals
- Access failures
- Production incidents
- Customer onboarding failures
- Decisions that cannot wait until Monday

Do not use the meeting to add speculative scope.

### Friday — Evidence review

Duration: 20 minutes.

For each venture:

1. What changed in customer evidence?
2. What changed in product or operational evidence?
3. Which assumption was strengthened or weakened?
4. Which metric changed?
5. What should stop?

### Monthly — Portfolio allocation

Duration: 60 minutes.

- Apply the venture stage gates.
- Reallocate founder time and approved spend.
- Review naming, legal, security, access, and vendor risks.
- Validate all public status and proof claims.
- Decide whether any venture should narrow, pause, or graduate.

### Quarterly — Company direction

- Reconfirm the Kryonix thesis.
- Review product-market evidence.
- Review entity, ownership, tax, insurance, and fundraising readiness with qualified professionals.
- Review portfolio concentration and founder capacity.
- Approve no more than three company-level priorities.

## Weekly Founder Brief

```markdown
# Kryonix Weekly Founder Brief — YYYY-MM-DD

## Company
- Cash:
- Monthly recurring spend:
- Monthly recurring revenue:
- Runway:
- Founder allocation: Vantav __% / Zyven __% / Kryonix __% / Aegis __%

## Venture scorecard
| Venture | Stage | Weekly objective | Evidence gained | Key metric | Largest risk | Next gate |
|---|---|---|---|---|---|---|
| Vantav | | | | | | |
| Zyven | | | | | | |
| Aegis | | | | | | |

## This week's three outcomes
1.
2.
3.

## Work paused or deferred
-

## Decisions required
| Decision | Recommendation | Options | Trade-off | Deadline | Review/reversal trigger |
|---|---|---|---|---|---|
| | | | | | |

## Actions
| Action | Owner | Deadline | Dependency | Status |
|---|---|---|---|---|
| | | | | |

## Evidence and changes
-

## Risks
-
```

## Decision Log

Record material decisions in this format:

| Date | Decision | Context and evidence | Alternatives | Owner | Review date | Reversal trigger |
|---|---|---|---|---|---|---|
| | | | | | | |

Always record:

- Product and company names
- Venture-stage changes
- Segment and positioning choices
- Pricing and launch decisions
- Major integrations and vendors
- Significant spending
- Security and data-risk acceptance
- Fundraising and legal commitments
- Venture pauses and shutdowns

## Risk Register

| Risk | Venture | Type | Likelihood | Impact | Mitigation | Owner | Review date | Status |
|---|---|---|---|---|---|---|---|---|
| Repository access is incomplete | Portfolio | Operational | High | High | Repair Git Manager scopes and verify access | Founder | Weekly | Open |
| Product naming is inconsistent and uncleared | Portfolio | Brand/legal | High | High | Founder naming decision plus professional review | Founder | Weekly | Open |
| Public claims may be stale or unsupported | Portfolio | Brand/legal | Medium | High | Add evidence owner and review date; remove unsupported claims | Founder | Weekly | Open |
| Zyven build context is in another Devin organization | Zyven | Operational | High | Medium | Import an explicit handoff and repository state | Founder | Weekly | Open |
| Vantav commercial and partner status is unverified | Vantav | Commercial | Medium | High | Confirm current blocker, owner, deadline, and proof | Founder | Weekly | Open |
| Vantav legal pages name an unverified `Vantav LLC` entity | Vantav | Legal | High | High | Confirm the entity and obtain qualified review before accepting contracts or payments | Founder | Immediate | Open |
| Aegis trial could be invalidated by unapproved changes | Aegis | Research | Low | High | Preserve all active-trial guardrails | Founder | Every review | Controlled |

## Evidence Freshness

Every material status should include:

- Source URL or repository location
- Owner
- Observed date
- Review date
- Confidence: verified, reported, inferred, or unknown

Use:

- **Verified:** directly observed in an authoritative source
- **Reported:** provided by the founder or venture owner
- **Inferred:** reasoned from incomplete evidence
- **Unknown:** required evidence is unavailable

Never convert reported or inferred information into verified fact through repetition.

## Access Review

Review monthly and after any ownership or account change:

- Source repositories
- Deployment providers
- Domain registrar and DNS
- Email and support systems
- Analytics and error monitoring
- Payment provider
- Data providers and partner portals
- Cloud accounts and databases
- Legal and finance document storage
- Devin organizations, sessions, knowledge, schedules, and automations

For each system record:

- Venture
- System
- Owner
- Purpose
- Environment
- Login method
- MFA enabled
- Recovery owner
- Last verified date
- Access status

Store no secret values in this repository.

## Work Intake

Before beginning a portfolio request:

1. Identify the venture.
2. Identify the current stage and objective.
3. Retrieve the relevant guardrails.
4. Confirm the source repository and environment.
5. State the expected evidence or decision.
6. Reject or defer work that does not advance the current gate unless it addresses critical risk.

## Automation Readiness

A recurring Devin automation can generate the founder brief after the founder chooses:

- Day and time
- Time zone
- Delivery destination
- Authoritative metric sources
- Who may approve follow-up work

Do not automate the brief until those inputs and repository/session access are reliable; an automated summary of stale data creates false confidence.
