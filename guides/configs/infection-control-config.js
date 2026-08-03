// Infection Control Guide Sidebar Configuration
const sidebarConfig = {
    sections: [
        { id: 'start-here', icon: 'fa-crosshairs', title: 'What actually gets you' },
        { id: 'high-yield-summary', icon: 'fa-bolt', title: 'The four things' },
        { id: 'chain', icon: 'fa-link', title: 'The chain, and where you break it' },
        { id: 'hand-hygiene', icon: 'fa-hands-wash', title: 'When alcohol fails' },
        { id: 'precautions', icon: 'fa-shield-virus', title: 'Sorting the route' },
        { id: 'ppe', icon: 'fa-head-side-mask', title: 'Equipment, in order' },
        { id: 'asepsis', icon: 'fa-square', title: 'Clean or sterile' },
        { id: 'device-infections', icon: 'fa-procedures', title: 'The four device infections' },
        { id: 'protective', icon: 'fa-user-shield', title: 'Protecting the patient' },
        { id: 'interventions', icon: 'fa-user-nurse', title: 'What you do first' },
        { id: 'numbers-cold', icon: 'fa-hashtag', title: 'Numbers to have cold' },
        { id: 'rebuild', icon: 'fa-pencil-alt', title: 'Now close the guide' },
        { id: 'practice-questions', icon: 'fa-flask', title: 'Test yourself' },
        { id: 'cross-references', icon: 'fa-book-open', title: 'Related Guides' }
    ],
    quickRef: [
        { type: 'critical', icon: 'fa-soap', value: 'C. diff', label: 'Soap and water, not rub', section: 'hand-hygiene' },
        { type: 'warning', icon: 'fa-wind', value: 'N95', label: 'Airborne, negative pressure', section: 'precautions' },
        { type: 'info', icon: 'fa-arrows-alt-h', value: '3-6 ft', label: 'How far droplets travel', section: 'precautions' },
        { type: 'target', icon: 'fa-hand-paper', value: 'Gloves', label: 'On last, off first', section: 'ppe' },
        { type: 'info', icon: 'fa-square', value: '1 inch', label: 'Sterile field border', section: 'asepsis' },
        { type: 'critical', icon: 'fa-thermometer-half', value: 'ANC <500', label: 'Fever is an emergency', section: 'protective' }
    ],
    clinicalPearls: [
        { id: 'tip-break-the-chain', title: 'Name the Link, Then Answer', text: 'Say which link the action targets before you read the options. Emptying a bag is reservoir. A mask is transmission. Turning a patient is portal of entry.' },
        { id: 'tip-cdiff-soap', title: 'Spores Do Not Care About Alcohol', text: 'C. difficile changes three things at once: soap and water, bleach-based cleaning, contact precautions with dedicated equipment.' },
        { id: 'tip-route-first', title: 'Sort the Route Before You Read the Options', text: 'Cover the answers and say contact, droplet or airborne out loud. Most distractors are the right equipment for the wrong route.' },
        { id: 'tip-doff-first', title: 'Gloves Off First, Respirator Off Outside', text: 'Gloves are dirtiest so they go first. The respirator comes off after you leave, because the reason you wore it is still in the room.' },
        { id: 'tip-remove-the-device', title: 'The Best Line Is the One That Came Out', text: 'Early removal and daily review of need beat meticulous care of a device that should not still be there.' },
        { id: 'tip-neutropenic-fever', title: 'A Quiet Wound Is Not a Clean Wound', text: 'Neutropenic patients cannot make redness or pus. Fever alone is the emergency, so culture and treat rather than observe.' }
    ]
};
