// Mobility and Transfers Guide Sidebar Configuration
const sidebarConfig = {
    sections: [
        { id: 'start-here', icon: 'fa-crosshairs', title: 'What actually gets you' },
        { id: 'high-yield-summary', icon: 'fa-bolt', title: 'The four things' },
        { id: 'body-mechanics', icon: 'fa-people-carry-box', title: 'Moving people safely' },
        { id: 'transfers', icon: 'fa-chair', title: 'Bed to chair, in order' },
        { id: 'devices', icon: 'fa-crutch', title: 'Canes, walkers, crutches' },
        { id: 'positioning', icon: 'fa-bed', title: 'Positions and their problems' },
        { id: 'immobility', icon: 'fa-walking', title: 'What immobility does' },
        { id: 'skin', icon: 'fa-band-aid', title: 'Pressure injuries' },
        { id: 'interventions', icon: 'fa-user-nurse', title: 'What you do first' },
        { id: 'numbers-cold', icon: 'fa-hashtag', title: 'Numbers to have cold' },
        { id: 'rebuild', icon: 'fa-pencil-alt', title: 'Now close the guide' },
        { id: 'practice-questions', icon: 'fa-flask', title: 'Test yourself' },
        { id: 'cross-references', icon: 'fa-book-open', title: 'Related Guides' }
    ],
    quickRef: [
        { type: 'critical', icon: 'fa-user-friends', value: 'Weak side', label: 'Where you stand', section: 'transfers' },
        { type: 'warning', icon: 'fa-clock', value: '1-5 min', label: 'Dangle before standing', section: 'transfers' },
        { type: 'target', icon: 'fa-crutch', value: 'Opposite', label: 'Cane hand to weak leg', section: 'devices' },
        { type: 'info', icon: 'fa-people-carry-box', value: '35 lb', label: 'Manual lift ceiling', section: 'body-mechanics' },
        { type: 'critical', icon: 'fa-bed', value: 'q2h', label: 'Reposition in bed', section: 'skin' },
        { type: 'info', icon: 'fa-band-aid', value: '18 or less', label: 'Braden flags risk', section: 'skin' }
    ],
    clinicalPearls: [
        { id: 'tip-slide-not-lift', title: 'Equipment Beats Technique', text: 'Good form does not raise the weight limit. Any option with one nurse lifting a dependent patient alone is wrong.' },
        { id: 'tip-dangle-first', title: 'Lie, Sit, Dangle, Stand', text: 'The dangle is the step the answer options leave out. After days in bed, the option that sits them on the edge first is usually correct.' },
        { id: 'tip-cane-opposite', title: 'Opposite Hand, Same Step', text: 'Cane in the hand opposite the weak leg, moving at the same time as that leg. Up with the good, down with the bad.' },
        { id: 'tip-get-them-up', title: 'Bed Rest Is a Drug With Side Effects', text: 'Early ambulation answers clots, lungs, gut, skin and mood at once, so it usually beats a passive measure.' },
        { id: 'tip-cannot-stage', title: 'If You Cannot See the Base, You Cannot Stage It', text: 'Slough or eschar makes a wound unstageable. Intact purple skin is a deep tissue injury, not stage 1.' }
    ]
};
