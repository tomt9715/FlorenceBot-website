// Antibiotics and Antivirals Guide Sidebar Configuration
const sidebarConfig = {
    sections: [
        { id: 'start-here', icon: 'fa-crosshairs', title: 'What actually gets you' },
        { id: 'high-yield-summary', icon: 'fa-bolt', title: 'The four things' },
        { id: 'penicillins-cephalosporins', icon: 'fa-shield-virus', title: 'Penicillins or cephalosporins' },
        { id: 'vancomycin-aminoglycosides', icon: 'fa-vial', title: 'Vancomycin or aminoglycoside' },
        { id: 'other-classes', icon: 'fa-capsules', title: 'The rest of the classes' },
        { id: 'antivirals', icon: 'fa-virus', title: 'Antivirals and the clock' },
        { id: 'antifungals', icon: 'fa-bacterium', title: 'Antifungals' },
        { id: 'nursing-care', icon: 'fa-user-nurse', title: 'What you do first' },
        { id: 'resistance', icon: 'fa-shield-halved', title: 'Resistance and stewardship' },
        { id: 'numbers-cold', icon: 'fa-hashtag', title: 'Numbers to have cold' },
        { id: 'rebuild', icon: 'fa-pencil-alt', title: 'Now close the guide' },
        { id: 'practice-questions', icon: 'fa-flask', title: 'Test yourself' },
        { id: 'cross-references', icon: 'fa-book-open', title: 'Related Guides' }
    ],
    quickRef: [
        { type: 'target', icon: 'fa-hourglass-half', value: '60 min', label: 'Minimum vancomycin infusion', section: 'vancomycin-aminoglycosides' },
        { type: 'info', icon: 'fa-vial', value: '30 min before', label: 'When you draw a trough', section: 'vancomycin-aminoglycosides' },
        { type: 'info', icon: 'fa-arrow-up', value: '30 min after', label: 'When you draw a peak', section: 'vancomycin-aminoglycosides' },
        { type: 'critical', icon: 'fa-bolt', value: '1 hour', label: 'First dose in sepsis', section: 'nursing-care' },
        { type: 'warning', icon: 'fa-clock', value: '48 hours', label: 'Oseltamivir window', section: 'antivirals' },
        { type: 'warning', icon: 'fa-wine-bottle', value: '3 days', label: 'No alcohol after metronidazole', section: 'other-classes' }
    ],
    clinicalPearls: [
        { id: 'tip-penicillin-allergy', title: 'Ask What Happened', text: 'A reported penicillin allergy is incomplete information. Ask what the reaction was, how fast it came on, and how long ago.' },
        { id: 'tip-peak-trough', title: 'Trough Before, Peak After', text: 'Trough within 30 minutes before the next dose. Peak about 30 minutes after the infusion ends.' },
        { id: 'tip-vanc-rate', title: 'Slow the Vanc', text: 'Flushing during a vancomycin infusion is a rate problem. Stop, assess, restart slower. Do not label it an allergy.' },
        { id: 'tip-alcohol-metronidazole', title: 'Metronidazole and Alcohol', text: 'The missed teaching is mouthwash and cough syrup. The rule runs 3 days past the last dose.' },
        { id: 'tip-cdiff-soap', title: 'C. diff Breaks the Gel Rule', text: 'Alcohol gel does not kill C. difficile spores. Soap and running water, plus contact precautions.' },
        { id: 'tip-antiviral-window', title: 'Two Windows, 48 and 72', text: 'Influenza is 48 hours from the first symptom. Shingles is 72 hours from the first rash.' },
        { id: 'tip-ampho-premedicate', title: 'Expect the Chills', text: 'Rigors on amphotericin B are expected, not an allergy. Premedicate before you start; watch creatinine, potassium and magnesium.' },
        { id: 'tip-culture-first', title: 'Culture First, Unless', text: 'Culture before the antibiotic, unless the patient is septic. Then the drug goes in and you collect around it.' },
        { id: 'tip-finish-course', title: 'Feeling Better Is Not Finished', text: 'Stopping early leaves the hardiest bacteria behind. Never save leftovers and never take a course prescribed for someone else.' }
    ]
};
