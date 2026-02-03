# The Nursing Collective - Platform Planning Document

## Vision & Positioning

### What We're Building
A **nursing school survival platform** for nursing students who feel lost, overwhelmed, and unsure if they're "doing it right."

This is **NOT** an NCLEX prep site. We position earlier in the student journey.

### Target Student
Nursing students throughout their program, with a focus on **first through third semester** when they need the most support. Fourth semester shifts toward NCLEX prep and transition to practice - but the foundational semesters are where students struggle most and where we provide the most value.

These students are thinking:
- "How do I survive this week?"
- "What do I actually do in clinicals tomorrow?"
- "Everyone else seems to get it but me"
- "Am I going to fail out?"

### Three Core Pillars

| Pillar | What It Means |
|--------|---------------|
| **Nursing School Survival** | Help students get THROUGH school, not just pass NCLEX |
| **Clinical Confidence** | Bridge the gap between classroom and bedside |
| **Simple & Affordable** | No bloat, no overwhelm, accessible to broke students |

### How We're Different From Competitors

| Competitor Mindset | Our Mindset |
|-------------------|-------------|
| "Here's 5,000 questions, good luck" | "Here's exactly what you need to know" |
| "Pass the NCLEX" | "Survive and thrive through nursing school" |
| "Content dump" | "Clarity and confidence" |
| "Premium pricing" | "Accessible to broke students" |
| "Figure out your own study plan" | "We guide you through it" |

### Competitive Landscape Summary
The major players (UWorld, Nursing.com, SimpleNursing, Kaplan, ATI, Archer) all focus heavily on NCLEX prep. They compete on question banks, video hours, and pass rates.

**Gaps we're filling:**
- Nursing school support (pre-NCLEX)
- Clinical confidence and "what do I actually do"
- Affordable and non-overwhelming resources

---

## Business Model

### Pricing Tiers (FINALIZED)

| Tier | Price | Duration | Value Prop |
|------|-------|----------|------------|
| **Monthly** | $14.99/mo | Cancel anytime | Flexible, try it out |
| **Semester** | $44.99 one-time | 4 months | 25% savings vs monthly |
| **Lifetime** | $119 one-time | Forever | All future content included |

### Why These Prices
- Lower than competitors (Nursing.com $29+/month, UWorld $139+)
- Accessible to broke nursing students
- Aligns with "affordable" pillar
- Semester tier highlighted as "Best Value"

### Optional Free Tier

| Free | Paid |
|------|------|
| 1-2 study guides | All study guides |
| Basic "how to survive" blog posts | Full survival guides |
| Limited cheat sheets | All quick reference tools |
| | Clinical confidence content |
| | New content as released |

---

## Site Structure (Future State)

```
The Nursing Collective
├── Dashboard (logged in home)
│   ├── My Progress
│   ├── Quick Access (favorites, recently viewed)
│   └── What's New
│
├── By Semester
│   ├── First Semester Survival
│   ├── Second Semester
│   ├── Third Semester
│   └── Fourth Semester / NCLEX Transition
│
├── Study Guides (by system)
│   ├── Cardiovascular
│   ├── Respiratory
│   └── ... etc
│
├── Clinical Confidence
│   ├── Before Your First Clinical
│   ├── Common Scenarios
│   ├── Communication Scripts
│   └── By Rotation (Med-Surg, Peds, etc.)
│
├── Quick References
│   ├── Lab Values
│   ├── Vital Signs
│   ├── Common Meds
│   └── Assessment Checklists
│
├── Resources
│   ├── How to Study for Nursing Exams
│   ├── Care Plan Templates
│   └── Time Management
│
└── Practice (Future Phase)
    ├── Topic Quizzes
    └── Clinical Judgment Scenarios
```

---

## Phase 1 Content Plan

### Overview

| Category | Count | Status |
|----------|-------|--------|
| Study Guides | 17 | ✅ Complete |
| How to Survive Guides | 5 | ✅ Complete |
| Clinical Confidence Guides | 7 | ✅ Complete |
| Quick Reference Tools | 5 | ✅ Complete |
| **Total** | **34** | ✅ All Complete |

---

### Existing Study Guides (17 - Complete)

**Cardiovascular**
- Arrhythmias ✓
- CAD ✓
- Heart Failure ✓
- Hypertension ✓
- MI ✓
- Peripheral Vascular Disease ✓

**Respiratory**
- Asthma ✓
- Chest Tubes ✓
- COPD ✓
- Oxygen Therapy ✓
- Pneumonia ✓
- Tuberculosis ✓

**Other Systems**
- GI Bleeding ✓
- Stroke ✓
- Fractures ✓
- Hip and Knee Replacement ✓
- Assessment Skills ✓

---

### Phase 1A: "How to Survive" Guides ✅ COMPLETE

| Guide | File | Status |
|-------|------|--------|
| How to Study for Nursing Exams | `/resources/how-to-study.html` | ✅ |
| How to Not Be Overwhelmed by the Content | `/resources/not-overwhelmed.html` | ✅ |
| Time Management for Nursing Students | `/resources/time-management.html` | ✅ |
| How to Write a Care Plan | `/resources/care-plans.html` | ✅ |
| What to Do When You Feel Like You're Failing | `/resources/feeling-like-failing.html` | ✅ |

**Notes:** All guides use a consistent "survival guide" layout template. They are publicly accessible (free tier content) and located in `/resources/` folder.

---

### Phase 1B: Clinical Confidence Guides ✅ COMPLETE

| Guide | File | Status |
|-------|------|--------|
| What to Actually Expect Your First Semester of Clinicals | `/resources/first-semester-clinicals.html` | ✅ |
| How to Prepare the Night Before Clinicals | `/resources/night-before-clinicals.html` | ✅ |
| What to Put in Your Clinical Bag | `/resources/clinical-bag.html` | ✅ |
| Head-to-Toe Assessment: A Practical Walkthrough | `/resources/head-to-toe-assessment.html` | ✅ |
| Common Clinical Skills You'll Actually Do | `/resources/clinical-skills.html` | ✅ |
| Clinical Safety: Scope, Supervision, and Protecting Yourself | `/resources/clinical-safety.html` | ✅ |
| When You Don't Know What to Do | `/resources/when-you-dont-know.html` | ✅ |

**Notes:** All guides use consistent survival guide layout. Key clinical realities addressed: patient access scenarios (with/without chart access), scope & supervision rules, license liability chain, polite pushback scripts.

---

### Phase 1C: Quick Reference Tools ✅ COMPLETE

| Tool | File | Status |
|------|------|--------|
| Lab Values Cheat Sheet | `/resources/lab-values.html` | ✅ |
| Vital Signs Reference (All Ages) | `/resources/vital-signs.html` | ✅ |
| First Semester Medications to Know | `/resources/medications.html` | ✅ |
| Clinical Documentation Phrases | `/resources/documentation-phrases.html` | ✅ |
| Medical Abbreviations & Terminology | `/resources/abbreviations.html` | ✅ |

**Notes:** Reference tool format (tables, cards, scannable). Features include: critical values highlighted, click-to-copy for documentation phrases, search/filter for abbreviations, "Do Not Use" section for banned abbreviations.

---

## Content Creation Order

### Recommended Priority

**Phase 1A (Start Here)**
1. How to Study for Nursing Exams
2. How to Not Be Overwhelmed by the Content
3. Time Management for Nursing Students
4. How to Write a Care Plan
5. What to Do When You Feel Like You're Failing

**Phase 1B (Second)**
1. What to Actually Expect Your First Semester of Clinicals
2. Clinical Safety: Scope, Supervision, and Protecting Yourself
3. Head-to-Toe Assessment: A Practical Walkthrough
4. How to Prepare the Night Before Clinicals
5. What to Put in Your Clinical Bag
6. Common Clinical Skills You'll Actually Do
7. When You Don't Know What to Do

**Phase 1C (Third)**
1. Lab Values Cheat Sheet
2. Vital Signs Reference
3. First Semester Medications to Know
4. Clinical Documentation Phrases
5. Medical Abbreviations & Terminology

---

## Content Tone & Style

- **Not textbook tone** - human and supportive
- **Like a mentor talking to a stressed first-semester student**
- **Practical and real-world** - acknowledge what actually happens, not ideal scenarios
- **Honest about struggles** - normalize that nursing school is hard
- **Actionable** - students should be able to use the advice immediately

---

## Future Phases (Not Yet Planned in Detail)

### Phase 2: Expanded Clinical Content
- Scenario guides ("Your patient's BP dropped - now what?")
- Communication scripts (SBAR, talking to doctors, angry families)
- Rotation-specific guides (Med-Surg, Peds, OB, Psych)

### Phase 3: Practice & Engagement
- Focused question banks (50-100 per topic, not thousands)
- Clinical judgment scenarios
- Self-assessments
- Weekly challenges

### Phase 4: Community & Retention
- Discussion forums
- Study groups
- Progress tracking
- What's new / weekly content

---

## Technical Notes

- Content will be HTML pages similar to existing study guides
- Check `/guides` folder for format and styling examples
- Follow patterns in `CLAUDE.md` for development workflow

---

## Decision Log

| Date | Decision |
|------|----------|
| Session 1 | Pivoted from "selling study guides" to "nursing school survival platform" |
| Session 1 | Identified three pillars: survival, clinical confidence, affordable |
| Session 1 | Decided against PDF downloads - content stays on-site |
| Session 1 | Set pricing tiers: $12-15/mo, $39-49/semester, $99-129 lifetime |
| Session 1 | Defined Phase 1 content: 17 existing + 17 new pieces |
| Session 1 | Broke Phase 1 into 1A (survive), 1B (clinical), 1C (references) |
| Session 1 | Added "Clinical Safety" as standalone guide |
| Session 1 | Noted clinical realities: no patient access, supervision requirements |
| Session 2 | Completed Phase 1A: 5 "How to Survive" guides created in `/resources/` |
| Session 3 | Completed Phase 1B: 7 Clinical Confidence guides created in `/resources/` |
| Session 4 | Completed Phase 1C: 5 Quick Reference Tools created in `/resources/` |
| Session 4 | **PHASE 1 COMPLETE** - All 34 content pieces finished |
| Session 5 | Added Resources landing page (`/resources.html`) and updated navigation |
| Session 5 | Updated all resource guides with "Back to Resources" links |
| Session 6 | Finalized pricing: $14.99/mo, $44.99/semester, $119 lifetime |
| Session 6 | Stripe subscription system integrated and tested |
| Session 6 | **PLATFORM READY FOR LAUNCH** |
| Session 7 | Removed store.html - all guides now part of subscription package |
| Session 7 | Updated all navigation to remove Store link (pricing.html handles subscriptions) |
| Session 7 | Redirected former store CTAs to pricing.html |
