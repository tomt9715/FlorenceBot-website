// Documentation and Charting Guide Sidebar Configuration
const sidebarConfig = {
    sections: [
        { id: 'start-here', icon: 'fa-crosshairs', title: 'What actually gets you' },
        { id: 'high-yield-summary', icon: 'fa-bolt', title: 'The four things' },
        { id: 'what-belongs', icon: 'fa-eye', title: 'Objective or subjective' },
        { id: 'corrections', icon: 'fa-pen', title: 'Errors and late entries' },
        { id: 'abbreviations', icon: 'fa-ban', title: 'Banned abbreviations' },
        { id: 'formats', icon: 'fa-list-alt', title: 'Charting formats' },
        { id: 'handoff', icon: 'fa-comments', title: 'Handoff and SBAR' },
        { id: 'orders', icon: 'fa-phone', title: 'Telephone orders' },
        { id: 'privacy', icon: 'fa-lock', title: 'Privacy and breaches' },
        { id: 'interventions', icon: 'fa-user-nurse', title: 'What you do first' },
        { id: 'numbers-cold', icon: 'fa-hashtag', title: 'Numbers to have cold' },
        { id: 'rebuild', icon: 'fa-pencil-alt', title: 'Now close the guide' },
        { id: 'practice-questions', icon: 'fa-flask', title: 'Test yourself' },
        { id: 'cross-references', icon: 'fa-book-open', title: 'Related Guides' }
    ],
    quickRef: [
        { type: 'critical', icon: 'fa-pen', value: '1 line', label: 'Original stays readable', section: 'corrections' },
        { type: 'warning', icon: 'fa-clock', value: 'After', label: 'Never chart in advance', section: 'corrections' },
        { type: 'info', icon: 'fa-phone', value: '24 hours', label: 'Countersign a phone order', section: 'orders' },
        { type: 'target', icon: 'fa-eye', value: 'Observed', label: 'Not concluded', section: 'what-belongs' },
        { type: 'critical', icon: 'fa-ban', value: '0.5 mg', label: 'Leading zero, no trailing', section: 'abbreviations' },
        { type: 'warning', icon: 'fa-lock', value: 'Minimum', label: 'Only what care requires', section: 'privacy' }
    ],
    clinicalPearls: [
        { id: 'tip-observation-not-conclusion', title: 'Write the Evidence, Not the Verdict', text: 'Ask what made you think that and chart the answer. Uncooperative becomes refused twice. Confused becomes could not state the year.' },
        { id: 'tip-single-line', title: 'The Original Has to Stay Readable', text: 'One line, initials, date, time. Correction fluid, erasing, scribbling and deleting are all wrong however tidy they look.' },
        { id: 'tip-sbar-recommendation', title: 'Say What You Are Asking For', text: 'The recommendation is what turns a report into a request. Reporting numbers and waiting to be told is the version that fails.' },
        { id: 'tip-minimum-necessary', title: 'Caring About Someone Is Not Authorisation', text: 'Looking up a colleague, a neighbour or your own record is a breach. So is a post with the name removed if details identify them.' }
    ]
};
