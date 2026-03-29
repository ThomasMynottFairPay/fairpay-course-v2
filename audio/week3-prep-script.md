# Week 3 Audio Prep: Cards & Processing Stack
## FairPay Payments Foundations Course

**Duration:** 16-18 minutes  
**Purpose:** Listen before starting Week 3 to understand card economics and architecture decisions  
**Best for:** Commute, gym, walking

---

### INTRO [0:00-1:00]

Welcome to Week 3. You might be wondering: if FairPay is focused on PayTo, why are we spending time on cards?

Two reasons. First, cards are your competitive context. When a merchant evaluates FairPay, they're comparing your costs and capabilities against what they already know—cards. You need to understand what you're up against.

Second, this week is about more than cards. It's about how payments technology stacks work, and the build-versus-partner decisions you'll make as CEO. These principles apply whether you're thinking about cards, NPP, BECS, or anything else.

Let's start with card economics.

---

### CARD ECONOMICS: THE MERCHANT PERSPECTIVE [1:00-6:00]

When a merchant accepts a card payment, they pay something called the Merchant Service Fee, or MSF. That fee has three components, and understanding each one helps you articulate why PayTo is compelling.

**Component one: Interchange.**
This is the fee paid to the card-issuing bank—the bank that gave the customer their card. The RBA regulates interchange through benchmarks: 0.5% weighted average for credit cards, 8 cents weighted average for debit. But these are averages. Premium rewards cards have higher interchange. Different merchant categories have different rates. A small business accepting a Platinum Frequent Flyer card might pay well over 1% just in interchange.

**Component two: Scheme fees.**
These are paid to Visa, Mastercard, or eftpos—the card schemes that operate the networks. Scheme fees have been growing and are less transparent than interchange. They include assessment fees, network access fees, various program fees. The RBA is examining these as part of their current review. When you see merchants frustrated about card costs, scheme fees are often a hidden driver.

**Component three: Acquirer margin.**
The acquirer is the company that connects the merchant to the card networks—companies like Tyro, Square, or the merchant services divisions of major banks. The acquirer bundles all these costs together, adds their margin, and quotes the merchant a rate. That's the MSF the merchant actually sees.

Add these together and a typical merchant might pay 1.5-2% on card transactions. For a business doing a million dollars in card payments, that's $15,000-$20,000 a year just in payment processing fees.

Now here's why this matters for FairPay: PayTo costs a fraction of this. If you can offer reliable collections at, say, 0.3% or a fixed fee under a dollar, the cost savings alone can be a compelling pitch. A gym collecting $100,000 a month in memberships could save $10,000-15,000 a year by moving from cards to PayTo.

But cost isn't the only factor. Cards have broad acceptance, customer familiarity, consumer protections. Your pitch can't just be "we're cheaper"—it needs to be "we're cheaper AND better for your use case."

---

### LEAST-COST ROUTING [6:00-8:00]

There's one more card concept you should understand: Least-Cost Routing, or LCR.

Most Australian debit cards are dual-network. They have both a scheme network—Visa or Mastercard—and eftpos. When a customer taps their debit card, the merchant can choose which network to route the transaction through.

eftpos is often cheaper than Visa or Mastercard for debit transactions. Least-Cost Routing lets merchants automatically route through the cheaper network—usually eftpos for contactless.

The RBA supports LCR as pro-competition and pro-merchant. It's putting pressure on scheme fees and giving merchants more control.

Why does this matter for FairPay? Because it changes the competitive landscape. If merchants can reduce their debit card costs through LCR, the gap between cards and PayTo narrows. Your value proposition needs to account for this—you're not always competing against 1.5%; sometimes you're competing against a merchant who's optimized their card costs through LCR.

Also, the RBA's current review may change card economics further. Their conclusions are expected by end of March 2026. Build flexibility into your pricing and positioning assumptions.

---

### THE PAYMENTS TECHNOLOGY STACK [8:00-13:00]

Now let's zoom out from cards specifically and talk about how payments technology stacks work. As CEO, you'll be making build-versus-partner decisions at each layer. Understanding the stack helps you make those decisions deliberately rather than accidentally.

**Layer one: Frontend and UX.**
This is what your merchants and their customers see. Your merchant dashboard, the payment flows, the agreement authorization screens. This is typically where you build—it's your differentiation. Nobody else can build FairPay's UX better than FairPay.

**Layer two: Orchestration.**
This is the brain of your payments system. It handles routing logic—which rail to use for which transaction. Retry logic—what to do when a payment fails. Webhook management—notifying merchants about payment events. State management—tracking where every payment is in its lifecycle. This is core product logic. You build this.

**Layer three: Risk and compliance.**
Fraud screening, KYC for merchant onboarding, AML monitoring, transaction surveillance. Here the decision is usually hybrid. You buy tools—there are excellent fraud screening APIs, KYC providers, monitoring platforms. But you build the rules—the specific thresholds, the risk appetite, the decision trees that reflect FairPay's strategy.

**Layer four: Rail connections.**
The actual technical connections to NPP, BECS, card networks if relevant. This is where you partner. FairPay isn't going to become an NPP participant—you'll connect through a sponsor. You're not becoming a card acquirer—if you offer cards, you'll use an acquiring partner. Rail access requires regulatory licenses, settlement accounts, massive compliance infrastructure. Partner for this.

**Layer five: Ledger.**
Your system of record for balances and transactions. This is your source of truth. When a merchant asks "what's my balance?" or "what happened to payment X?", the answer comes from your ledger. Build this. It's core infrastructure you need to control.

**Layer six: Reconciliation.**
Matching what you expected to happen with what actually happened. Expected settlements versus actual bank movements. Identifying exceptions—missing payments, duplicates, timing differences. This is operational efficiency. Build it, because good reconciliation is what lets you scale without drowning in manual work.

---

### BUILD VS PARTNER DECISIONS [13:00-16:00]

Let me give you a framework for these build-versus-partner decisions.

**Build when:**
- It's core to your differentiation
- You need deep control over the experience
- It's essential for your strategic positioning
- The market doesn't offer adequate solutions

**Partner when:**
- It requires regulatory licenses you don't have
- It's commodity functionality where many good options exist
- The integration cost is lower than the build cost
- Speed to market matters more than perfect fit

**Buy tools when:**
- The functionality is well-defined and stable
- You need the capability but it's not differentiating
- Specialist providers have better data or expertise
- You want to preserve engineering resources for core work

For FairPay specifically, I'd suggest:
- **Build:** Orchestration, ledger, reconciliation, merchant UX
- **Partner:** NPP access via sponsor, BECS access via sponsor
- **Buy tools:** Fraud screening, KYC/KYB verification, monitoring

The key principle: own the product logic, partner for rail access, buy commodity tools. Don't try to do everything yourself—you're building a payments product, not a payments infrastructure company.

---

### YOUR WEEK 3 DELIVERABLES [16:00-17:30]

This week you'll produce three things.

First, a card economics summary. One slide that captures what merchants pay for cards and why. This becomes part of your sales narrative—you need to understand the enemy to position against them.

Second, a reference architecture. One slide showing FairPay's technology stack with clear build/partner boundaries. This becomes a communication tool for your engineering team, your board, potential investors. Everyone should understand what you're building versus buying.

Third, a build-versus-partner table. Each layer, your decision, brief rationale. This documents your thinking so you can revisit it as circumstances change.

---

### CLOSING [17:30-18:00]

Week 3 is about competitive context and architectural clarity.

The key concepts:
- Card economics: interchange plus scheme fees plus acquirer margin
- RBA benchmarks and LCR are changing the landscape
- Build the stack deliberately: own orchestration, partner for rails, buy tools
- Your architecture decisions affect everything downstream

Go through the RBA materials on least-cost routing and interchange benchmarks. They're dry reading but essential context.

See you in Week 4, where we tackle standards and regulation—ISO 20022, PCI DSS, and the Australian regulatory landscape.

---

## Production Notes

**Tone:** Technical but accessible. Translating complexity into decisions.

**Pacing:** Moderate. Some sections need time to absorb.

**File naming:** `week3-prep.mp3`
