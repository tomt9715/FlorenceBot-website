// Coronary Artery Disease Guide Sidebar Configuration
const sidebarConfig = {
    sections: [
        { id: 'high-yield-summary', icon: 'fa-bolt', title: 'High-Yield Summary' },
        { id: 'anatomy', icon: 'fa-heart', title: 'Coronary Anatomy' },
        { id: 'pathophysiology', icon: 'fa-dna', title: 'Pathophysiology' },
        { id: 'risk-factors', icon: 'fa-exclamation-triangle', title: 'Risk Factors & Targets' },
        { id: 'angina', icon: 'fa-heartbeat', title: 'ACS Continuum & Angina' },
        { id: 'diagnostics', icon: 'fa-stethoscope', title: 'Diagnostic Testing' },
        { id: 'catheterization', icon: 'fa-syringe', title: 'Cardiac Catheterization' },
        { id: 'management', icon: 'fa-pills', title: 'Medical Management & Rehab' },
        { id: 'interventions', icon: 'fa-user-md', title: 'Surgical Interventions' },
        { id: 'practice-questions', icon: 'fa-flask', title: 'NCLEX Challenge' },
        { id: 'cross-references', icon: 'fa-book-open', title: 'Related Guides' }
    ],
    quickRef: [
        { type: 'target', icon: 'fa-tint', value: 'LDL <70', label: 'High-risk goal (mg/dL)' },
        { type: 'critical', icon: 'fa-heartbeat', value: '<130/80', label: 'BP target (mmHg)' },
        { type: 'success', icon: 'fa-pills', value: '81 mg', label: 'Aspirin daily dose' },
        { type: 'time', icon: 'fa-clock', value: '5 min x3', label: 'NTG dosing interval' },
        { type: 'warning', icon: 'fa-bed', value: '2-6 hrs', label: 'Femoral cath bed rest' },
        { type: 'info', icon: 'fa-calendar', value: '6-12 mo', label: 'Minimum DAPT duration' }
    ],
    clinicalPearls: [
        { id: 'tip-plaque-stability', title: 'Plaque Stability Matters', text: 'Unstable plaques with thin fibrous caps cause acute events, not necessarily the largest plaques. Statins help stabilize plaques.' },
        { id: 'tip-risk-factor-modification', title: 'Risk Factor Power', text: 'Smoking cessation reduces CV risk by 50% in one year. Lifestyle changes have profound impact on CAD outcomes.' },
        { id: 'tip-acs-continuum', title: 'ACS Continuum Progression', text: 'Patients can move rapidly along the ACS spectrum. Recognize escalation signs: changing pain pattern, NTG failure, new diaphoresis, EKG changes.' },
        { id: 'tip-angina-pattern', title: 'Angina Pattern Changes', text: 'New-onset angina, angina at rest, or worsening pattern signals unstable angina - an emergency requiring immediate evaluation.' },
        { id: 'tip-stress-test-caffeine', title: 'Caffeine and Stress Tests', text: 'Caffeine is the #1 reason stress tests get cancelled. Check ALL sources: coffee, tea, chocolate, energy drinks, sodas, OTC meds.' },
        { id: 'tip-stress-test-prep', title: 'Stress Test Safety', text: 'Know stop criteria: chest pain, significant ST changes, BP drop >10 mmHg, sustained VT. Have crash cart and reversal agents ready.' },
        { id: 'tip-cath-prep', title: 'Mark Those Pulses', text: 'Document and mark pedal pulses before catheterization. Post-procedure comparison can detect arterial occlusion early.' },
        { id: 'tip-retroperitoneal-bleed', title: 'Retroperitoneal Bleed', text: 'The hidden killer: back/flank pain + hypotension + tachycardia + falling H&H without visible bleeding = emergency. Most dangerous post-cath complication.' },
        { id: 'tip-med-teaching', title: 'NTG Teaching', text: 'Take NTG sitting/lying down. One tablet, wait 5 min, repeat up to 3 times. Call 911 if pain persists after 3 doses.' },
        { id: 'tip-cardiac-rehab-advocacy', title: 'Cardiac Rehab Champion', text: 'Cardiac rehab reduces mortality 20-30% but only ~20% participate. Advocate for automatic referral at discharge - your endorsement increases enrollment.' },
        { id: 'tip-dapt-compliance', title: 'DAPT Compliance', text: 'Never stop dual antiplatelet therapy early after stent placement - stent thrombosis has 20-40% mortality.' }
    ]
};
