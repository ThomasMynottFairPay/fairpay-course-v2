# Week 2 Audio Prep: Rails Selection & Account-to-Account
## FairPay Payments Foundations Course

**Duration:** 17-19 minutes  
**Purpose:** Listen before starting Week 2 to understand the rail selection framework  
**Best for:** Commute, gym, walking

---

### INTRO [0:00-1:00]

Welcome back. In Week 1, you built the mental model—clearing versus settlement, finality, push versus pull. Now we're going to apply that model to a real decision: which payment rails should FairPay use, and for what?

This week is about building your rail decision matrix. By the end, you'll have a framework for evaluating any payment rail against your use cases, and a specific roadmap for NPP/PayTo and BECS.

Let me walk you through the framework and the key considerations.

---

### THE 8-CRITERIA FRAMEWORK [1:00-6:00]

When you're comparing payment rails, there are eight criteria that matter. Let me walk through each one so you know what to look for in the readings.

**Criterion one: Availability.**
When can transactions happen? NPP is 24/7/365, real-time. BECS is batch processing—files submitted, processed overnight or in batches, results come back a day or two later. Cards are near real-time but with batch settlement. For a gym collecting membership fees at midnight when someone signs up? NPP wins. For a business processing thousands of invoices in a batch run? BECS might be fine.

**Criterion two: Data richness.**
What information travels with the payment? This matters enormously for reconciliation. NPP uses ISO 20022—the modern international standard for financial messaging. Rich, structured data. You can include invoice references, customer IDs, detailed descriptions. BECS? Eighteen characters. That's it. Eighteen characters to describe what a payment is for. If you've ever struggled to match a bank statement entry to an invoice, you understand why this matters.

**Criterion three: Authorization model.**
How does the payer give consent? For PayTo, they authorize an agreement in their banking app—they see your business name, the payment terms, and they approve it with their bank's security. For BECS, they sign a Direct Debit Request form—increasingly digital, but still a form that lives with you, not with their bank. For cards, they enter their card details and you store them. Each model has different friction, different trust signals, different ongoing management requirements.

**Criterion four: Reversibility.**
We covered this in Week 1 with finality, but let me be specific. Cards: chargebacks possible for 120+ days. BECS: indemnity claims possible, but more limited. PayTo: once settled, it's final. Your risk profile is completely different depending on which rail you use.

**Criterion five: Fraud posture.**
Where does fraud risk concentrate? Cards have massive card-not-present fraud—$816 million in Australia in 2024, representing 89% of all card fraud. Why? Because stolen card details can be used anywhere online. PayTo shifts this model fundamentally. The customer authorizes in their bank app with bank-grade security. There's no credential to steal from you. But new risks emerge: agreement abuse, social engineering, merchant fraud. Different risk profile, not zero risk.

**Criterion six: Integration burden.**
How hard is it to build and maintain? Cards have mature SDKs, tons of documentation, many providers. BECS is old but stable—batch file formats are well understood. NPP/PayTo is newer, APIs are still evolving, documentation is improving but not as mature. If you're building a team, the talent pool matters too—more developers have worked with cards than with PayTo.

**Criterion seven: Unit economics.**
What does each transaction cost? Cards: interchange plus scheme fees plus acquirer margin—often 1.5-2% or more. BECS: very cheap, fractions of a cent per transaction. PayTo: low to moderate, typically under a dollar per transaction depending on your sponsor agreement. When you're processing thousands of transactions, these differences compound.

**Criterion eight: Access constraints.**
How do you actually get on the rail? You can't just connect to NPP—you need a sponsor relationship with an NPP participant. Same for BECS. Cards require an acquiring relationship. These partnerships take time to establish and come with commercial negotiations.

---

### NPP AND PAYTO DEEP DIVE [6:00-10:00]

Let me give you more depth on NPP and PayTo since that's FairPay's primary focus.

The NPP—New Payments Platform—launched in 2018. It's the modern backbone of Australian payments. Key characteristics: ISO 20022 messaging, 24/7/365 availability, settlement via the RBA's Fast Settlement Service. PayID is the addressing layer—pay someone with their phone number or email. PayTo is the mandate management layer—authorized agreements for recurring or variable payments.

The architecture matters for you. NPP participants connect through Payment Access Gateways, or PAGs. You won't be a participant yourself—FairPay will connect through a sponsor. But understanding the architecture helps you evaluate sponsors and understand constraints.

PayTo has a specific agreement lifecycle you need to understand:
- **Created**: You've initiated an agreement, it's pending customer authorization
- **Active**: Customer has approved it in their banking app
- **Suspended**: Either party has paused it
- **Cancelled**: Terminated, no more collections possible

Your system needs to track these states, handle transitions gracefully, and communicate status clearly to merchants. A merchant asking "why didn't the payment go through?" needs to know whether the agreement is suspended, whether there were insufficient funds, or whether something else happened.

The value proposition is compelling: real-time feedback on whether a payment will succeed, customer authorization in a trusted environment, rich data for reconciliation, final settlement. But the ecosystem is still maturing—bank UX varies, customer awareness is building, not every edge case is documented.

---

### BECS REALITY CHECK [10:00-13:00]

Now let's talk about BECS—the Bulk Electronic Clearing System. This is the legacy direct debit infrastructure that's been running since the 1990s. Most existing direct debits in Australia still run on BECS.

Here's the strategic context: there was a 2030 end-date floated for BECS migration to NPP. That date has been removed. The transition is now market-driven, not deadline-driven. BECS isn't disappearing any time soon.

What does this mean for FairPay?

First, many of your merchants will have existing customers on BECS direct debits. When they onboard to FairPay, they may want to migrate those customers to PayTo—but that's a migration project. You need to decide whether you support BECS as a fallback, as a migration path, or not at all.

Second, some merchants may have use cases where BECS is fine. High-volume, low-value batch processing where real-time feedback doesn't matter much. The cost advantage of BECS might outweigh PayTo's features.

Third, you're building a company with limited resources. Every rail you support is engineering effort, operational complexity, partner relationships. BECS compatibility has costs.

My guidance: lead with PayTo. It's the future, it's differentiated, it's what you're building the company around. Maintain BECS compatibility where necessary for merchant migration, but don't invest heavily in BECS innovation. You're not trying to build the best BECS product—you're trying to build the best PayTo product.

---

### BUILDING YOUR DECISION MATRIX [13:00-16:00]

This week, you'll build a rail decision matrix for FairPay's use cases. Let me walk you through how to approach it.

First, identify your top use cases. Not abstractly—specifically. "Gym memberships" is better than "subscriptions." "SaaS invoicing for SMBs" is better than "B2B payments." Get concrete about who the merchant is, what they're collecting, how often, how much.

Second, for each use case, evaluate against the eight criteria. Some criteria will matter more than others depending on the use case. A gym collecting $50/month from consumers probably cares more about authorization UX than data richness. A SaaS business collecting variable invoices from other businesses probably cares a lot about data richness for reconciliation.

Third, make a decision and document your rationale. Don't just say "PayTo for gyms"—say why. What's the tradeoff you're accepting? What would change your mind?

Fourth, identify hybrid scenarios. Maybe new customers get PayTo, but you offer BECS migration support for merchants moving existing customer bases. Maybe high-value invoices use PayTo for real-time confirmation, but batch processing uses BECS. Be specific about where the boundaries are.

---

### THE A2A ROADMAP [16:00-18:00]

Your deliverable this week includes an A2A—account-to-account—roadmap hypothesis. This is your strategic view of the next 12-24 months.

What should go in it?

**What to build now:** Your core PayTo implementation. Agreement creation, payment initiation, status tracking, merchant dashboard. The features that differentiate FairPay.

**What to maintain:** BECS compatibility for merchant migration. Basic functionality, not innovation. The goal is to make it easy for merchants to move their existing customers to PayTo over time.

**What to avoid:** Over-investing in BECS. Building card processing unless there's a clear strategic reason. Features that don't serve your core PayTo positioning.

**Key assumptions:** What are you betting on? That PayTo adoption will accelerate? That banks will improve their UX? That merchants will value real-time over cost savings? Document these so you can revisit them.

**Triggers for revisiting:** What would make you change this roadmap? If BECS end-date gets reinstated, if a major competitor takes a different approach, if customer adoption stalls. Know what you're watching for.

---

### CLOSING [18:00-19:00]

That's your Week 2 prep. The concepts to lock in:
- Eight criteria for rail selection: availability, data richness, authorization model, reversibility, fraud posture, integration burden, unit economics, access constraints
- NPP and PayTo are your primary rail—understand the agreement lifecycle
- BECS isn't going away, but don't over-invest in it
- Build a decision matrix that's specific to your use cases

When you go through the readings, pay special attention to the PayTo documentation from AP+ and the NPP platform overview. These are the primary sources you'll reference as you build.

See you in Week 3, where we'll tackle card economics and your technical architecture.

---

## Production Notes

**Tone:** Strategic and practical. This week is about frameworks and decisions.

**Pacing:** Slightly faster than Week 1—the listener has context now.

**File naming:** `week2-prep.mp3`
