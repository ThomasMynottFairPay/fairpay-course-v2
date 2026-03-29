# Week 4 Audio Prep: Standards & Regulatory Mapping
## FairPay CEO Payments Course

**Duration:** 18-20 minutes  
**Purpose:** Listen before starting Week 4 to understand compliance landscape  
**Best for:** Commute, gym, walking

---

### INTRO [0:00-1:30]

Welcome to Week 4. This week might feel like the least exciting of the course—standards and regulations don't have the strategic appeal of rail selection or the tangible clarity of unit economics.

But here's the reality: regulatory mistakes are existential risks. Build the wrong product without understanding licensing requirements, and you might need to shut down. Miss an AUSTRAC obligation, and you face criminal penalties. Get PCI compliance wrong, and a data breach destroys your reputation and your business.

This week is about mapping your regulatory perimeter—understanding exactly which rules apply to FairPay and building a compliance roadmap that lets you launch confidently.

Let me walk you through the key standards and regulators.

---

### TECHNICAL STANDARDS [1:30-7:00]

Let's start with the technical standards that affect FairPay.

**ISO 20022.**
This is the international standard for financial messaging. It's not a protocol—it's a methodology for designing financial messages with rich, structured data. Think of it as a dictionary and grammar for payments communication.

NPP uses ISO 20022 natively. This is one of its major advantages. When a PayTo payment goes through, it carries structured data: payment purpose codes, reference information, detailed party identification. This rich data makes reconciliation dramatically easier than legacy formats.

BECS, by contrast, uses older fixed-width file formats with extremely limited data—remember those 18 characters? The difference in operational efficiency is significant when you're processing thousands of payments.

For FairPay, ISO 20022 means you can build sophisticated reconciliation, offer detailed reporting to merchants, and reduce the manual work of matching payments to invoices. Lean into this advantage.

**EMV Tokenisation.**
EMV stands for Europay-Mastercard-Visa, the consortium that develops card standards. Tokenisation replaces actual card numbers—the PAN, or Primary Account Number—with constrained tokens that are only valid in specific contexts.

Why does this matter? If tokens are compromised in a data breach, their fraud value is limited. They can't be used anywhere; they're tied to a specific merchant or device. This is a security layer for anyone storing card data.

If FairPay handles cards as a fallback—and you might, for merchant segments that need it—you should use tokenisation rather than storing raw PANs. It reduces your PCI scope and limits breach exposure.

**EMV 3-D Secure.**
3-D Secure is the authentication layer for online card payments. When you buy something online and get redirected to your bank to approve the transaction, that's 3DS. It enables data exchange between the merchant and the issuing bank to verify the cardholder is legitimate.

The tradeoff is friction versus security. Strong authentication reduces fraud but adds steps to checkout. Finding the right balance depends on your transaction profile.

**PCI DSS v4.0.**
PCI DSS is the Payment Card Industry Data Security Standard. If you handle card data—storing, processing, or transmitting card numbers—you're in scope for PCI compliance.

Version 4.0 is the current standard. Some requirements that were "future-dated" became mandatory on March 31, 2025. As CEO, your job isn't to understand every technical requirement—it's to define scope, assign responsibilities, and ensure audit readiness.

The key insight: minimize your card data handling to reduce scope. Use tokenisation, use hosted payment pages, push card processing to partners where possible. Every piece of card data you touch adds compliance burden.

---

### AUSTRALIAN REGULATORS [7:00-13:00]

Now let's map the regulators you need to track.

**RBA and the Payments System Board.**
The Reserve Bank's Payments System Board sets policy direction for Australian payments. They focus on efficiency, competition, and resilience. They operate the Fast Settlement Service that settles NPP payments.

Currently, the RBA is reviewing card costs, surcharging, and system resilience. Their conclusions are expected by end of March 2026—right around now. Whatever they decide will affect your competitive positioning against cards.

For FairPay, the RBA shapes your environment. They don't regulate you directly unless you become a significant payment system, but their policy decisions ripple through everything. Track their publications, understand their priorities.

**ASIC and the ePayments Code.**
ASIC—the Australian Securities and Investments Commission—administers the ePayments Code. This code sets consumer protections for electronic payments: liability allocation for unauthorized transactions, complaint handling requirements, disclosure obligations.

The ePayments Code is currently voluntary—businesses subscribe to it. But here's the important part: it's been extended to cover NPP payments, including PayTo. And Treasury's licensing reforms may make subscription mandatory for licensed payment service providers.

If FairPay needs to become licensed under the new regime, you'll likely need to comply with the ePayments Code. Start understanding it now rather than scrambling later.

**AUSTRAC.**
AUSTRAC is Australia's financial intelligence agency, responsible for anti-money laundering and counter-terrorism financing—AML/CTF. This is the regulator with the sharpest teeth.

If FairPay provides "designated services"—and payment services can be designated services—you must:
1. Enrol with AUSTRAC before you start providing services
2. Have an AML/CTF program in place before you start
3. Report suspicious matters, threshold transactions, international funds transfers
4. Conduct customer due diligence

The "before you start" part is critical. This isn't something you can figure out after launch. Get this wrong and you face criminal penalties, not just civil ones.

AUSTRAC is also implementing reforms that add new designated services with staggered start dates—March 31, 2026 and July 1, 2026. Review whether these changes affect FairPay's obligations.

**Treasury and Licensing Reforms.**
Treasury has been driving payments licensing reforms for several years. The Payments System Modernisation Act commenced on December 19, 2025. This creates a new licensing framework for payment service providers.

The implementation is happening in tranches. Tranche 1a consultation closed in November 2025. Tranche 1b is expected in 2026. Depending on how FairPay handles funds—whether you hold merchant funds, whether you're an intermediary—you may need a license.

The key question: what's FairPay's "funds flow model"? Do merchants settle directly with their customers' banks? Does FairPay hold funds in between? Does FairPay take possession at any point? These answers determine your licensing exposure.

---

### KEY DATES TO TRACK [13:00-15:00]

Let me give you the timeline you need in your head.

**December 19, 2025:** Payments System Modernisation Act commenced. The legal framework exists.

**March 31, 2025:** PCI DSS v4.0 future-dated requirements became mandatory. If you handle cards, you need to be compliant.

**End of March 2026:** RBA card costs and surcharging conclusions expected. This will signal how card economics change over the next few years. Important competitive context.

**March 31, 2026:** AUSTRAC reforms start for some new designated services. Check if you're affected.

**July 1, 2026:** AUSTRAC reforms start for other new designated services. Another checkpoint.

**Throughout 2026:** Treasury Tranche 1b consultation and potential Tranche 2 considerations. The licensing picture will continue to clarify.

Build these into your planning. Some are deadlines; others are trigger points for strategic review.

---

### BUILDING YOUR COMPLIANCE ROADMAP [15:00-18:00]

Your deliverable this week is a regulatory perimeter memo and compliance roadmap. Let me walk you through what that should contain.

**The Regulatory Perimeter Memo.**
This document answers: which regulators and regulations apply to FairPay, and why?

Start by describing what FairPay does. Be specific. "We provide PayTo payment collection services to merchants in Australia. Merchants connect via API. Payments settle directly from consumer bank accounts to merchant accounts via our NPP sponsor."

Then analyze each regulator:
- ASIC/ePayments Code: Do we need to subscribe? What obligations follow?
- AUSTRAC: Are we providing designated services? What's our AML program?
- Treasury licensing: Based on our funds flow, do we need a license?
- RBA: Are we likely to become a significant payment system? (Probably not initially, but track this.)

For each, state your current understanding and any uncertainties. It's fine to say "we need legal advice on X"—documenting the question is valuable.

**The Compliance Roadmap.**
Break this into phases.

*Before launch:*
- AUSTRAC enrolment complete
- AML/CTF program documented and operational
- Legal opinion on licensing requirements
- PCI scope assessment (if handling cards)
- ePayments Code compliance review

*First 12 months:*
- Monitor licensing consultation progress
- Apply for license if required
- Audit readiness for AML/CTF
- Annual PCI assessment (if applicable)

*Ongoing:*
- Regulatory horizon scanning
- Policy change monitoring (especially RBA decisions)
- Training and awareness updates

The goal is no surprises. You should know, before launch, what obligations you have and how you're meeting them.

---

### CLOSING [18:00-19:00]

Week 4 is about mapping your regulatory landscape and building a compliance roadmap.

Key takeaways:
- ISO 20022 is an advantage; lean into rich data
- Minimize card data handling to reduce PCI scope
- AUSTRAC obligations start *before* you provide services—don't wait
- Treasury licensing may apply depending on your funds flow model
- Build compliance into your timeline, not as an afterthought

The readings this week include Treasury documents and AUSTRAC guidance. They're dense but important. Skim for relevance to FairPay—don't try to become an expert on everything.

See you in Week 5, where we tackle fraud, unit economics, and operational design.

---

## Production Notes

**Tone:** Serious but not scary. Emphasize that compliance is manageable if approached deliberately.

**Pacing:** Moderate. Regulatory content needs time to absorb.

**File naming:** `week4-prep.mp3`
