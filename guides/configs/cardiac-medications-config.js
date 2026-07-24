// Cardiac Medications Guide Sidebar Configuration
const sidebarConfig = {
    sections: [
        { id: 'start-here', icon: 'fa-crosshairs', title: 'What actually gets you' },
        { id: 'high-yield-summary', icon: 'fa-bolt', title: 'The four things' },
        { id: 'antihypertensives', icon: 'fa-gauge-high', title: 'The pressure drugs' },
        { id: 'heart-failure-drugs', icon: 'fa-droplet', title: 'Diuretics and potassium' },
        { id: 'antianginals', icon: 'fa-heart-pulse', title: 'Nitrates and chest pain' },
        { id: 'antiarrhythmics', icon: 'fa-wave-square', title: 'Rate and rhythm drugs' },
        { id: 'anticoagulants', icon: 'fa-tint', title: 'Clot drugs' },
        { id: 'lipid-agents', icon: 'fa-flask', title: 'Statins and lipids' },
        { id: 'interventions', icon: 'fa-user-nurse', title: 'What you do first' },
        { id: 'numbers-cold', icon: 'fa-hashtag', title: 'Numbers to have cold' },
        { id: 'rebuild', icon: 'fa-pencil-alt', title: 'Now close the guide' },
        { id: 'practice-questions', icon: 'fa-flask', title: 'Test yourself' },
        { id: 'cross-references', icon: 'fa-book-open', title: 'Related Guides' }
    ],
    quickRef: [
        { type: 'critical', icon: 'fa-ban', value: '<60 bpm', label: 'Hold beta-blocker or digoxin', section: 'interventions' },
        { type: 'warning', icon: 'fa-flask-vial', value: '>5.5 mEq/L', label: 'Hold ACE, ARB, spironolactone', section: 'heart-failure-drugs' },
        { type: 'target', icon: 'fa-vial', value: '0.5-2.0 ng/mL', label: 'Digoxin therapeutic range', section: 'heart-failure-drugs' },
        { type: 'critical', icon: 'fa-heart-pulse', value: '<90 mmHg', label: 'Hold nitroglycerin', section: 'antianginals' },
        { type: 'target', icon: 'fa-droplet', value: 'INR 2-3', label: 'Warfarin target', section: 'anticoagulants' },
        { type: 'info', icon: 'fa-clock', value: '24-48 hr', label: 'PDE5 window blocking nitrates', section: 'antianginals' }
    ],
    clinicalPearls: [
        { id: 'tip-hold-parameter', title: 'One Gate Per Class', text: 'Write the gate before the mechanism. Beta-blockers and digoxin have a pulse. ACE inhibitors have a potassium. Nitroglycerin has a systolic pressure.' },
        { id: 'tip-ace-cough', title: 'Cough Means Swap, Not Stop', text: 'A dry cough on an ACE inhibitor is expected and the fix is an ARB. Facial or tongue swelling is angioedema, and the drug stops at once.' },
        { id: 'tip-dipine-vessels', title: 'Dipine Means Vessels', text: 'Dipine equals vessels. Diltiazem and verapamil equal the heart. Swollen ankles points at amlodipine; a slow pulse with constipation points at verapamil.' },
        { id: 'tip-potassium-directions', title: 'Two Directions, One Lab', text: 'Loops and thiazides drop potassium. ACE inhibitors, ARBs, ARNIs and aldosterone antagonists raise it. Low potassium makes a therapeutic digoxin level toxic.' },
        { id: 'tip-digoxin-visual', title: 'Halos and a Slow Pulse', text: 'Halos with a slow pulse mean digoxin toxicity. Rising weight with a fast pulse means the heart failure is getting worse.' },
        { id: 'tip-nitro-teaching', title: 'Ask the PDE5 Question', text: 'Before any nitrate, ask about sildenafil or tadalafil in the last 24 to 48 hours. Patients do not volunteer it, and the combination is dangerous.' },
        { id: 'tip-adenosine-push', title: 'Fast Push, Big Flush', text: 'Adenosine is 6 mg then 12 mg, rapid push, 20 mL flush, closest port to the heart. Half-life is under 10 seconds.' },
        { id: 'tip-clot-location', title: 'Where Was the Clot Made', text: 'Artery and plaque means antiplatelet. Vein or a fibrillating atrium means anticoagulant. Aspirin is not adequate stroke prevention in A-fib.' },
        { id: 'tip-statin-muscle', title: 'Dark Urine With Muscle Pain', text: 'Ask about muscle symptoms at every statin visit. Muscle pain plus dark urine is the rhabdomyolysis pattern and it is reported the same day.' }
    ]
};
