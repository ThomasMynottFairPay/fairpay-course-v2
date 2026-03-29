# Week 6 Audio Prep: Partnerships, Trends & Capstone
## FairPay Payments Foundations Course

**Duration:** 15-17 minutes  
**Purpose:** Listen before starting Week 6 to understand partnerships and prepare your capstone  
**Best for:** Commute, gym, walking

---

### INTRO [0:00-1:00]

Welcome to Week 6—the final week.

You've built the foundation: mental models, rail selection, architecture, compliance, economics, operations. Now it's time to pull it all together.

This week is about two things: partnerships—who you need and how to negotiate with them—and your capstone, the FairPay Payments Strategy Pack that synthesizes everything you've learned.

Let me walk you through the partnership landscape first.

---

### PARTNER CATEGORIES [1:00-7:00]

FairPay can't do everything alone. You need partners at critical points in your stack. Let me map the categories.

**NPP Access Partner—Critical.**
This is your most important partnership. Without an NPP access partner, you don't have a PayTo product.

Your sponsor provides the actual connection to the NPP platform. They handle the technical integration with Australian Payments Plus. They hold the Exchange Settlement Account at the RBA. They take on some regulatory obligations.

What to negotiate:
- *Pricing*: Per-transaction fees, monthly minimums, volume discounts. Get clarity on what's fixed versus variable.
- *SLAs*: Uptime guarantees, latency requirements, incident response commitments. PayTo is real-time—your sponsor's reliability is your reliability.
- *API quality*: How good is their developer documentation? How responsive is their technical support? How often do they make breaking changes?
- *Roadmap alignment*: Are they investing in PayTo? Do they see it as strategic or legacy? Will they keep up with platform enhancements from AP+?

This partnership shapes your product capabilities. Choose carefully.

**BECS Sponsor.**
If you're supporting BECS for backward compatibility—merchant migration, legacy use cases—you need a BECS sponsor.

This is typically a simpler relationship than NPP. BECS is mature and stable. Focus on:
- *Pricing*: Usually very competitive—BECS is cheap
- *File handling*: How do you submit batch files? What formats?
- *Settlement timing*: When do funds arrive?

Don't over-invest here. BECS compatibility is a bridge, not a destination.

**KYC/KYB Provider.**
Merchant identity verification. Before you onboard a merchant, you need to verify they're legitimate.

Consider:
- *Coverage*: Can they verify ABN? Check director identities? Scan sanctions lists?
- *Speed*: How fast do checks complete? Real-time or batch?
- *Integration*: API quality, documentation, support
- *Cost per check*: This adds to your onboarding cost

Options range from simple ABN lookups to comprehensive KYB platforms. Match the depth to your risk appetite.

**Fraud and Risk Tools.**
Transaction monitoring, risk scoring, behavioral analytics.

Evaluate:
- *False positive rates*: Too many false positives means legitimate transactions get blocked, merchants get frustrated, your support team gets overwhelmed.
- *Integration effort*: How hard is it to plug in?
- *Pricing model*: Per-transaction, per-decision, flat fee?
- *Configurability*: Can you tune the rules to your use cases?

Early on, you might use lighter-touch tools and rely more on your own rules. As you scale, specialized fraud tools become more valuable.

**Compliance Advisory.**
Especially valuable at pre-revenue stage.

AUSTRAC program setup, licensing navigation, regulatory interpretation—these are specialized skills. A good compliance consultant can:
- Help you build your AML/CTF program correctly from the start
- Navigate the licensing consultation process
- Provide opinions on gray areas where the rules aren't clear

Don't cheap out here. The cost of getting compliance wrong far exceeds advisory fees.

---

### NEGOTIATION PRIORITIES [7:00-10:00]

When you're at the negotiation table with any of these partners, keep four categories in mind.

**Commercial.**
The obvious one. Pricing structure, minimum commitments, pass-through costs, volume discounts.

Watch for:
- Minimums that are unrealistic for your early stage
- Price escalation clauses buried in contract terms
- Unclear definitions of what's included versus extra
- Exclusivity requirements that limit your flexibility

**Risk allocation.**
Who bears the cost when things go wrong?

- Fraud liability: If a fraudulent transaction happens, who pays?
- Dispute handling: Who manages customer disputes? Who bears the cost?
- Indemnities: What are you agreeing to cover if your partner is sued?

Read these clauses carefully. They can shift significant risk onto you.

**Data access.**
You need data to run your business.

- Settlement reports: What detail do you get? Real-time or delayed?
- Reconciliation data: Can you match payments to your records?
- Transaction history: Can you pull historical data for reporting?
- API access: Is there good programmatic access or is it all manual exports?

Good data access enables automation. Poor data access means manual work forever.

**Security.**
Especially important with APRA-regulated partners.

- PCI scope: Does the partnership increase or decrease your card data handling?
- Incident response: If there's a breach, what's the communication protocol?
- CPS 234 alignment: If your partner is APRA-regulated, they should meet CPS 234. Make sure their security posture doesn't create risks for you.

---

### EXTERNAL CHANGE WATCHLIST [10:00-12:00]

Your strategy exists in a changing environment. Here are the external factors to monitor.

**RBA card costs and surcharging review.**
Conclusions expected end of March 2026. Whatever they decide will affect:
- How much merchants pay for cards
- Whether surcharging rules change
- Your competitive positioning versus cards

Build flexibility into your assumptions. If card costs drop significantly, your cost-based value proposition weakens.

**AUSTRAC reforms.**
New designated services coming into scope March 31 and July 1, 2026. Review whether FairPay's activities are affected. If so, ensure your AML program covers the new requirements.

**Treasury licensing.**
Tranche 1b consultation expected 2026. Tranche 2 potentially following. The licensing picture is still forming. Stay engaged with consultation processes. Join industry groups that provide input.

**PayTo adoption.**
The ecosystem is maturing but still early. Track:
- Bank coverage: Which banks support PayTo well? Which are lagging?
- Customer awareness: Are consumers understanding PayTo when they encounter it?
- Merchant adoption: Who else is building on PayTo? What can you learn from them?

Your strategy may need to adapt as the ecosystem evolves.

---

### CAPSTONE OVERVIEW [12:00-15:00]

Your capstone is the FairPay Payments Strategy Pack. Let me walk you through what it should contain.

**Format:**
- Slide deck: 10-15 slides, board/investor ready
- Executive memo: 2 pages, written narrative with assumptions

**Required contents:**

*FairPay positioning.*
Who do you serve? Which problems do you solve? Why now? This should be crisp—a board member should understand it in one slide.

*Rail strategy.*
Which rails for which use cases? Include your decision matrix from Week 2. Show that you've made deliberate choices.

*Reference architecture.*
Your technology stack with own-versus-partner boundaries. The visual from Week 3, refined with your current thinking.

*Unit economics.*
Your cost stack, pricing logic, and sensitivity scenarios from Week 5. Show that the business model works—and show what breaks it.

*Risk and compliance.*
Your regulatory perimeter memo and risk register highlights from Weeks 4 and 5. Show that you've mapped the obligations and built controls.

*Partner strategy.*
Who you need, what you're negotiating. Show that you understand the dependencies and have a plan to secure them.

*Roadmap.*
Next 12-24 months with external milestones. What are you building, in what sequence, and how does it relate to external events like RBA decisions or AUSTRAC reforms?

**Assessment rubric.**

If this were being graded—and in reality, your board and investors will be grading it—here's how it would break down:
- Strategic coherence: 20%. Do your choices hang together logically?
- Rail strategy realism: 15%. Is your rail selection defensible?
- Architecture and operability: 15%. Does your architecture support reconciliation, disputes, scaling?
- Economics and pricing: 20%. Are assumptions transparent and stress-tested?
- Risk and compliance: 20%. Have you scoped the perimeter and addressed obligations?
- Communication quality: 10%. Is the narrative clear? Are unknowns explicit?

---

### CEO DECISION LOG [15:00-16:00]

Your final action item: complete a CEO decision log.

**Top 5 decisions made.**
What have you actually decided through this course? Not "I learned about PayTo"—but "We will use PayTo as primary rail with BECS migration support but no ongoing BECS innovation."

**Next 3 meetings.**
Who do you need to talk to in the next two weeks? Potential sponsors? Compliance advisors? Early merchants? Put them on the calendar.

**Next 2 experiments.**
What will you test to validate your assumptions? A pricing test with beta merchants? A prototype of the onboarding flow? An assumption you need real-world data on?

Don't let this course end with knowledge. End it with action.

---

### CLOSING [16:00-17:00]

You've made it through six weeks of intensive payments education.

You now understand clearing versus settlement, finality, push versus pull. You can apply the eight-criteria framework for rail selection. You know how payment stacks work and where to build versus partner. You've mapped your regulatory perimeter. You can build a risk register and price your product. You know who to partner with and what to negotiate.

That's a lot. Most payments founders don't have this foundation.

The capstone is your chance to synthesize it all. Don't treat it as homework—treat it as your actual strategy document. If you build it well, you'll use it in sponsor conversations, investor pitches, and board meetings.

Good luck with the capstone. You've got this.

---

## Production Notes

**Tone:** Encouraging and forward-looking. Celebrating progress while focusing on action.

**Pacing:** Moderate. Give time for the capstone section.

**File naming:** `week6-prep.mp3`
