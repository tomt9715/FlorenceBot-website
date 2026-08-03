// Patient Safety Guide Sidebar Configuration
const sidebarConfig = {
    sections: [
        { id: 'start-here', icon: 'fa-crosshairs', title: 'What actually gets you' },
        { id: 'high-yield-summary', icon: 'fa-bolt', title: 'The four things' },
        { id: 'identification', icon: 'fa-id-card', title: 'Right patient, every time' },
        { id: 'falls', icon: 'fa-user-injured', title: 'Falls, before and after' },
        { id: 'restraints', icon: 'fa-link', title: 'Restraints and alternatives' },
        { id: 'medication-safety', icon: 'fa-pills', title: 'Medication safety' },
        { id: 'environment', icon: 'fa-fire', title: 'Fire, oxygen and the room' },
        { id: 'errors', icon: 'fa-file-alt', title: 'When something goes wrong' },
        { id: 'populations', icon: 'fa-users', title: 'Safety by age' },
        { id: 'interventions', icon: 'fa-user-nurse', title: 'What you do first' },
        { id: 'numbers-cold', icon: 'fa-hashtag', title: 'Numbers to have cold' },
        { id: 'rebuild', icon: 'fa-pencil-alt', title: 'Now close the guide' },
        { id: 'practice-questions', icon: 'fa-flask', title: 'Test yourself' },
        { id: 'cross-references', icon: 'fa-book-open', title: 'Related Guides' }
    ],
    quickRef: [
        { type: 'critical', icon: 'fa-user-injured', value: 'Assess', label: 'Before you lift them', section: 'falls' },
        { type: 'warning', icon: 'fa-stopwatch', value: 'q15 min', label: 'Violent restraint checks', section: 'restraints' },
        { type: 'critical', icon: 'fa-clock', value: '1 hour', label: 'Face-to-face after restraint', section: 'restraints' },
        { type: 'info', icon: 'fa-link', value: 'q2h', label: 'Release, ROM, toilet', section: 'restraints' },
        { type: 'target', icon: 'fa-id-card', value: '2 IDs', label: 'Never the room number', section: 'identification' },
        { type: 'warning', icon: 'fa-fire', value: 'RACE', label: 'Rescue comes first', section: 'environment' }
    ],
    clinicalPearls: [
        { id: 'tip-two-identifiers', title: 'The Bed Is Not the Patient', text: 'Room number, bed number and the name on the door are never identifiers. Have the patient state it, then check the band.' },
        { id: 'tip-assess-before-lift', title: 'Assess Them Where They Landed', text: 'Any option that starts with helping the patient back to bed is wrong. Anticoagulated patients get neuro checks even after a minor fall.' },
        { id: 'tip-least-restrictive', title: 'Find the Untried Alternative', text: 'Scan for the least restrictive option nobody has tried yet. A restraint order written as needed is never valid.' },
        { id: 'tip-clarify-not-interpret', title: 'Clarify, Never Interpret', text: 'Ambiguous order, unsafe abbreviation or a dose that does not fit the patient means contact the prescriber, not give it.' },
        { id: 'tip-race-order', title: 'People, Alarm, Doors, Fire', text: 'Rescue anyone in danger before pulling the alarm. In a seizure, never restrain the limbs and never put anything in the mouth.' },
        { id: 'tip-patient-then-paper', title: 'Patient First, Paper Second', text: 'Assessment always comes before reporting. And the chart records the facts, never the fact that an incident report exists.' }
    ]
};
