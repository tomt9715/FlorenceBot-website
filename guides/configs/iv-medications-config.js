// IV Medications Guide Sidebar Configuration
const sidebarConfig = {
    sections: [
        { id: 'start-here', icon: 'fa-crosshairs', title: 'What actually gets you' },
        { id: 'high-yield-summary', icon: 'fa-bolt', title: 'The four things' },
        { id: 'high-alert', icon: 'fa-triangle-exclamation', title: 'High-alert medications' },
        { id: 'complications', icon: 'fa-hand-dots', title: 'When the line goes wrong' },
        { id: 'fluids', icon: 'fa-droplet', title: 'Which fluid, and why' },
        { id: 'access', icon: 'fa-diagram-project', title: 'Peripheral or central' },
        { id: 'administration', icon: 'fa-syringe', title: 'Giving it safely' },
        { id: 'transfusion', icon: 'fa-tint', title: 'Blood, the short version' },
        { id: 'calculations', icon: 'fa-calculator', title: 'Rate math' },
        { id: 'priority', icon: 'fa-user-nurse', title: 'What you do first' },
        { id: 'numbers-cold', icon: 'fa-hashtag', title: 'Numbers to have cold' },
        { id: 'rebuild', icon: 'fa-pencil-alt', title: 'Now close the guide' },
        { id: 'practice-questions', icon: 'fa-flask', title: 'Test yourself' },
        { id: 'cross-references', icon: 'fa-book-open', title: 'Related Guides' }
    ],
    quickRef: [
        { type: 'critical', icon: 'fa-ban', value: 'Never push', label: 'Concentrated potassium', section: 'high-alert' },
        { type: 'warning', icon: 'fa-vial', value: '10 mEq/hr', label: 'Potassium infusion ceiling', section: 'high-alert' },
        { type: 'critical', icon: 'fa-clock', value: '15 min', label: 'Stay after blood starts', section: 'transfusion' },
        { type: 'info', icon: 'fa-hourglass-half', value: '4 hours', label: 'Finish one unit within', section: 'transfusion' },
        { type: 'target', icon: 'fa-syringe', value: '10 mL', label: 'Smallest central line syringe', section: 'access' },
        { type: 'warning', icon: 'fa-gauge-high', value: '20 mg/min', label: 'Furosemide push ceiling', section: 'administration' }
    ],
    clinicalPearls: [
        { id: 'tip-potassium-never-push', title: 'Potassium Is Never Pushed', text: 'Any option that pushes potassium is wrong. Dilute, pump, 10 mEq per hour, never into a hanging bag.' },
        { id: 'tip-infiltration-extravasation', title: 'Vesicant Makes It an Emergency', text: 'Sort by what was running, not how the arm looks. Vesicant in tissue means aspirate, do not flush, and escalate now.' },
        { id: 'tip-air-embolism', title: 'Left Side, Head Down', text: 'Sudden dyspnea with a central line is air until proven otherwise. Clamp, turn left with the head down, oxygen, call.' },
        { id: 'tip-hypotonic-head', title: 'Hypotonic and the Brain', text: 'Hypotonic fluid swells cells and a brain has nowhere to swell. Head injury rules it out.' },
        { id: 'tip-central-criteria', title: 'Vesicants Go Central', text: 'Vesicant, parenteral nutrition, weeks of therapy, extreme pH. Any one sends you central, and a midline is not central.' },
        { id: 'tip-scrub-the-hub', title: 'Scrub the Hub, Then Wait', text: 'Fifteen seconds of friction, then let it dry. The dry time is the part that kills organisms.' },
        { id: 'tip-first-fifteen', title: 'The First 15 Minutes', text: 'Start slow and stay in the room. Any reaction means stop first, then saline through new tubing, then call.' },
        { id: 'tip-drop-formula', title: 'Minutes on the Bottom', text: 'Drops per minute needs minutes in the denominator. Convert hours first; dividing by 8 instead of 480 is the classic error.' }
    ]
};
