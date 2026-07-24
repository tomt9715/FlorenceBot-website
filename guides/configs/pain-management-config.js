// Pain Management Guide Sidebar Configuration
const sidebarConfig = {
    sections: [
        { id: 'start-here', icon: 'fa-crosshairs', title: 'What actually gets you' },
        { id: 'high-yield-summary', icon: 'fa-bolt', title: 'The four things' },
        { id: 'assessment', icon: 'fa-stethoscope', title: 'Assessment and the tool' },
        { id: 'non-opioids', icon: 'fa-prescription-bottle', title: 'Non-opioids and ceilings' },
        { id: 'opioids', icon: 'fa-pills', title: 'Opioids' },
        { id: 'safety', icon: 'fa-bed', title: 'Sedation comes first' },
        { id: 'pca', icon: 'fa-hand-paper', title: 'Patient-controlled analgesia' },
        { id: 'tolerance-dependence', icon: 'fa-balance-scale', title: 'Tolerance or addiction' },
        { id: 'adjuvants', icon: 'fa-layer-group', title: 'Adjuvants and multimodal' },
        { id: 'special-populations', icon: 'fa-users', title: 'Special populations' },
        { id: 'interventions', icon: 'fa-user-nurse', title: 'What you do first' },
        { id: 'numbers-cold', icon: 'fa-hashtag', title: 'Numbers to have cold' },
        { id: 'rebuild', icon: 'fa-pencil-alt', title: 'Now close the guide' },
        { id: 'practice-questions', icon: 'fa-flask', title: 'Test yourself' },
        { id: 'cross-references', icon: 'fa-book-open', title: 'Related Guides' }
    ],
    quickRef: [
        { type: 'critical', icon: 'fa-bed', value: 'Level 3', label: 'Hold, reduce, notify', section: 'safety' },
        { type: 'warning', icon: 'fa-wind', value: '<12/min', label: 'Hold the next dose', section: 'safety' },
        { type: 'target', icon: 'fa-prescription-bottle', value: '4 g/day', label: 'Acetaminophen ceiling', section: 'non-opioids' },
        { type: 'info', icon: 'fa-clock', value: '30 / 15 min', label: 'Reassess oral / IV', section: 'assessment' },
        { type: 'warning', icon: 'fa-hand-paper', value: '5-15 min', label: 'Usual PCA lockout', section: 'pca' },
        { type: 'critical', icon: 'fa-syringe', value: '30-90 min', label: 'Naloxone outlasted', section: 'safety' }
    ],
    clinicalPearls: [
        { id: 'tip-believe-the-number', title: 'Normal Vitals Are Not Evidence', text: 'Sympathetic signs fade in days, so chronic pain and tolerance both look calm. Doubting the patient is almost never the correct answer.' },
        { id: 'tip-neuropathic-adjuvant', title: 'Burning Means Adjuvant', text: 'Burning, shooting and electric move you off the opioid ladder and onto gabapentin, pregabalin, a tricyclic or duloxetine.' },
        { id: 'tip-count-the-acetaminophen', title: 'Add Up Every Source', text: 'Combination opioids, cold remedies and plain tablets all count. The combination tablet is what caps the dose.' },
        { id: 'tip-bowel-regimen', title: 'Constipation Never Wears Off', text: 'Tolerance rescues you from nausea, itching and drowsiness. It never rescues you from constipation, so the laxative starts on day one.' },
        { id: 'tip-sedation-first', title: 'Sedation Is the Early Sign', text: 'Sedation goes up, then respirations come down. Always that order. Naloxone is shorter-acting than the opioid, so keep watching.' },
        { id: 'tip-only-the-patient', title: 'No Proxy Pressing', text: 'Family, visitors and nurses never press the button. The pump is safe because a sedated hand cannot press it.' },
        { id: 'tip-pseudoaddiction', title: 'Clock-Watching Is Usually Undertreatment', text: 'Asking early is far more often pain than addiction. Check the interval, the dose and the reassessment scores first.' },
        { id: 'tip-multimodal', title: 'Add a Mechanism, Not a Milligram', text: 'When pain is uncontrolled, add a different mechanism rather than more opioid. It costs the patient less sedation.' },
        { id: 'tip-tolerant-baseline', title: 'Baseline Plus, Never Instead', text: 'An opioid-tolerant patient keeps the home dose and gets acute relief on top. Substituting gives withdrawal and pain at once.' },
        { id: 'tip-new-pain-is-a-finding', title: 'New Pain Is a Finding, Not a Dose', text: 'Pain that changes character or stops responding is new information. Assess it before you medicate it.' }
    ]
};
