# Week 5 Audio Prep: Fraud, Economics & Integration
## FairPay CEO Payments Course

**Duration:** 17-19 minutes  
**Purpose:** Listen before starting Week 5 to understand risk, pricing, and operations  
**Best for:** Commute, gym, walking

---

### INTRO [0:00-1:30]

Welcome to Week 5. We're in the home stretch now—this week is about making FairPay operationally real.

We'll cover three areas that often get underestimated by founders: fraud and risk management, unit economics and pricing, and operational integration—reconciliation, onboarding, support workflows.

These aren't glamorous topics, but they're the difference between a product that scales and one that collapses under its own complexity.

Let me start with the Australian fraud landscape.

---

### AUSTRALIAN FRAUD LANDSCAPE [1:30-6:00]

Let me give you the headline numbers from 2024.

Total card fraud in Australia: $913 million. That's actual fraud losses on Australian cards.

Of that $913 million, $816 million—89%—was card-not-present fraud. CNP fraud. Online transactions, phone orders, any transaction where the physical card isn't present.

Why is CNP so dominant? Because once someone's card details are stolen, they can be used anywhere online. There's no physical verification. The credentials travel and are valuable across the entire internet.

This is the environment cards operate in. Merchants accept that chargebacks will happen. They build the cost into their pricing. They invest in fraud screening tools. But fundamentally, the card system tolerates a high level of fraud because the convenience and ubiquity are worth it.

**PayTo has a fundamentally different profile.**

With PayTo, the customer authorizes agreements in their banking app using their bank's security—biometrics, PIN, whatever their bank uses. There's no card number to steal. There are no credentials stored at the merchant that can be harvested in a data breach.

This dramatically changes the attack surface. But it doesn't eliminate fraud—it shifts where fraud happens.

New risks with PayTo:
- **Agreement abuse**: A merchant creates agreements for customers who didn't really authorize them, through social engineering or deceptive practices.
- **Merchant fraud**: A merchant collects payments legitimately, then disappears without delivering goods or services.
- **Social engineering**: Scammers convince customers to authorize agreements under false pretenses.
- **Unauthorized merchants**: Someone uses FairPay to run a scam operation, and FairPay's brand takes the reputational hit.

Your fraud posture isn't "we don't have fraud." It's "we have different fraud, and we've built controls for it."

---

### BUILDING YOUR RISK REGISTER [6:00-10:00]

A risk register is a CEO-level tool for tracking what could go wrong and how you're managing it. Let me walk you through the categories you need.

**Fraud and scams.**
We just covered this. Unauthorized collections, merchant fraud, social engineering of customers. For each risk: what's the scenario? What controls exist? What would we see if it was happening? Who owns this?

**Compliance risk.**
AUSTRAC failures—not reporting suspicious matters, inadequate customer due diligence. ePayments Code breaches—mishandling complaints, wrong liability allocation. Licensing gaps—operating services that require a license you don't have.

**Cyber risk.**
Data breach, API security vulnerabilities, credential compromise, DDoS attacks on your infrastructure. Payments data is high-value target. What's your security posture?

**Operational risk.**
System outages—what happens when your platform goes down? Reconciliation failures—when expected settlements don't match actual bank movements. Support overload—when you're flooded with merchant queries you can't handle.

**Liquidity and safeguarding risk.**
If you hold merchant funds, even temporarily, what happens if FairPay has financial difficulty? Are those funds protected? What are the safeguarding requirements?

**Reputational risk.**
A merchant on your platform defrauds consumers. A scam uses FairPay. A public incident damages trust. How do you manage brand association risk?

For each risk in your register, document:
- **Scenario**: What specifically goes wrong?
- **Existing controls**: What do we already do to prevent or detect this?
- **Key Risk Indicators (KRIs)**: What metrics would tell us this risk is materializing?
- **Owner**: Who in the organization is responsible?
- **Residual rating**: After controls, is this high/medium/low risk?

Your risk register isn't a one-time exercise. It's a living document you review regularly.

---

### UNIT ECONOMICS [10:00-14:00]

Let's build your cost stack. What does it actually cost FairPay to process a transaction?

**Transaction costs.**
What your NPP sponsor charges you per PayTo transaction. This might be a flat fee, a percentage, or tiered based on volume. Get this number from your sponsor conversations.

**Risk costs.**
Fraud losses you absorb. Dispute handling costs. Merchant failures where you can't recover funds. This is harder to predict early—you'll refine it with operational experience.

**Operations costs.**
Customer support per merchant, per transaction volume. Reconciliation effort. Manual intervention for exceptions. As you scale, these should become more efficient—but they're real costs.

**Compliance costs.**
Your AML program: people, tools, reporting. Regulatory filings. Audit costs if applicable. PCI assessment if you handle cards. These are often underestimated by early-stage companies.

**Infrastructure costs.**
Hosting, monitoring, security tools, development resources allocated to maintenance. Not just the build cost—the run cost.

Add these together: that's your total cost per transaction, or your cost to serve.

**Pricing strategy.**

Your price needs to cover costs plus margin. But how you structure it matters.

*Blended pricing*: One simple rate, like "0.5% per transaction." Easy to understand, easy to compare. Merchants know what they'll pay.

*Cost-plus pricing*: Pass through your sponsor costs plus a fixed margin. More transparent, but more complex. Good for sophisticated merchants who want visibility.

*Tiered pricing*: Different rates for different volumes or merchant segments. Rewards growth, but adds complexity.

*Fixed fee per transaction*: Flat cents per transaction regardless of amount. Great for high-value transactions, expensive for low-value.

My suggestion for early-stage: start simple. Blended or fixed fee. You can add complexity as you learn your market.

**Sensitivity analysis.**

Your pricing assumptions need stress-testing. What if:
- RBA changes card economics, making cards cheaper to accept? Does your value prop still hold?
- Your sponsor raises prices at contract renewal?
- Fraud rates are higher than expected?
- Merchant volumes are lower than projected, so you don't hit volume discounts?

Build three scenarios: baseline, optimistic, pessimistic. Know what breaks your model.

---

### OPERATIONAL INTEGRATION [14:00-17:00]

Let's talk about the operational workflows that make FairPay actually work.

**Daily reconciliation.**
Every day, you need to match expected settlements against actual bank movements.

Expected: Based on your records, these payments should have settled.
Actual: Your bank account shows these deposits.

The reconciliation process identifies exceptions:
- Missing settlements—we expected it, didn't happen
- Unexpected settlements—we got money we didn't expect
- Timing differences—it settled a day later than expected
- Amount mismatches—the amount differs from what we expected

ISO 20022's rich data makes matching much easier. You have structured references, not ambiguous 18-character strings. Build this into your system from day one—manual reconciliation doesn't scale.

**Merchant onboarding.**
The journey from "interested merchant" to "processing live payments."

- KYB: Know Your Business checks—ABN validation, director identification, business verification
- Agreement setup: Connecting their systems to FairPay's API
- Test transactions: Verifying the integration works
- Go-live: Production payments begin

Design for self-service where possible. A merchant shouldn't need to email your team for every onboarding step. But have human support available for complex cases.

**Support workflows.**
What questions will merchants ask?

- "Why didn't this payment go through?"
- "A customer says they didn't authorize this agreement."
- "When will I get my settlement?"
- "How do I read this report?"

Design your support tooling before you need it. What information does a support agent need to answer these questions? Build dashboards and query tools that give them instant answers.

---

### CLOSING [17:00-18:30]

Week 5 brings together risk, economics, and operations.

Key takeaways:
- PayTo has a different fraud profile than cards—different, not zero
- Build a risk register with scenarios, controls, KRIs, and owners
- Know your unit economics: transaction costs, risk costs, operations, compliance, infrastructure
- Test your pricing against sensitivity scenarios
- Design reconciliation and onboarding for scale from day one

The readings include AusPayNet's fraud statistics and APRA's CPS 234 information security standard. The fraud data gives you context for conversations with merchants. CPS 234 matters if your partners are APRA-regulated—and most NPP sponsors are.

See you in Week 6 for partnerships, trends, and your capstone.

---

## Production Notes

**Tone:** Practical and operational. This week is about execution.

**Pacing:** Moderate to brisk. Lists and frameworks can move faster.

**File naming:** `week5-prep.mp3`
