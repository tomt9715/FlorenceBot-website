// Stroke Guide Sidebar Configuration
const sidebarConfig = {
    sections: [
        { id: 'anatomy', icon: 'fa-brain', title: 'Brain Anatomy' },
        { id: 'types', icon: 'fa-code-branch', title: 'Stroke Types' },
        { id: 'fast', icon: 'fa-bolt', title: 'FAST Assessment' },
        { id: 'tpa', icon: 'fa-syringe', title: 'tPA Criteria' },
        { id: 'interventions', icon: 'fa-user-nurse', title: 'Interventions' },
        { id: 'medications', icon: 'fa-pills', title: 'Medications' }
    ],
    quickRef: [
        { type: 'time', icon: 'fa-clock', value: '4.5 hrs', label: 'tPA Window' },
        { type: 'critical', icon: 'fa-brain', value: '1.9M', label: 'Neurons lost/minute' },
        { type: 'target', icon: 'fa-heartbeat', value: '<185/110', label: 'BP before tPA' },
        { type: 'target', icon: 'fa-tachometer-alt', value: '<180/105', label: 'BP during/after tPA' },
        { type: 'success', icon: 'fa-stopwatch', value: '<60 min', label: 'Door-to-needle goal' },
        { type: 'time', icon: 'fa-syringe', value: '0.9 mg/kg', label: 'tPA dose (max 90mg)' }
    ],
    clinicalPearls: [
        { id: 'tip-ct-before-tpa', title: 'CT Before tPA!', text: 'Always get non-contrast CT to rule out hemorrhage before giving thrombolytics.' },
        { id: 'tip-npo-first', title: 'NPO First', text: 'Keep patient NPO until swallow screen completed. Dysphagia occurs in up to 78% of stroke patients.' },
        { id: 'tip-time-brain', title: 'Time = Brain', text: 'Note the exact time symptoms started—this determines tPA eligibility.' },
        { id: 'tip-watch-afib', title: 'Watch for A-fib', text: 'Continuous cardiac monitoring helps identify atrial fibrillation as embolic stroke source.' },
        { id: 'tip-permissive-htn', title: 'Permissive HTN', text: 'Without tPA, allow BP up to 220/120 to maintain cerebral perfusion.' }
    ]
};
