/**
 * Quiz Bank — Fractures
 * The Nursing Collective
 *
 * 20 questions: 11 single, 4 ordering, 5 matrix
 * Difficulty mix: 6 knowledge, 8 application, 6 analysis
 */

if (typeof QUIZ_BANK_QUESTIONS === 'undefined') { var QUIZ_BANK_QUESTIONS = []; }

QUIZ_BANK_QUESTIONS = QUIZ_BANK_QUESTIONS.concat([

    // ── SINGLE BEST ANSWER (11) ──────────────────────────────

    {
        id: "fx-qb-001",
        category: "musculoskeletal",
        topic: "fractures",
        topicLabel: "Fractures",
        type: "single",
        difficulty: "analysis",
        stem: "A patient with a closed tibial fracture had a long leg cast applied 6 hours ago. The patient reports severe, unrelenting pain in the lower leg that is not relieved by the prescribed opioid analgesic. The nurse assesses pain with passive dorsiflexion of the toes and the patient screams in agony. Which complication does the nurse suspect?",
        options: [
            { id: "a", text: "Deep vein thrombosis from venous stasis" },
            { id: "b", text: "Compartment syndrome from increased pressure within the fascial compartment" },
            { id: "c", text: "Fat embolism from bone marrow release into the bloodstream" },
            { id: "d", text: "Infection at the fracture site causing cellulitis" }
        ],
        correct: "b",
        rationale: {
            correct: "Compartment syndrome is characterized by the '5 P's': Pain (out of proportion, unrelieved by opioids), Pain with passive stretch (the earliest and most reliable sign), Pressure (compartment feels tense), Paresthesias, Pulselessness (late sign). Pain with passive stretch of the muscles within the affected compartment is the hallmark finding. This is a surgical emergency requiring fasciotomy within 6 hours to prevent irreversible tissue death. DVT presents with calf tenderness and swelling but not pain with passive stretch. Fat embolism presents with respiratory distress and petechiae."
        },
        testTakingTip: "Pain out of proportion + pain with passive stretch + unrelieved by opioids = compartment syndrome until proven otherwise. This is a TIME-SENSITIVE emergency — fasciotomy within 6 hours or permanent damage occurs. Never elevate the limb above heart level (reduces arterial inflow).",
        relatedGuide: "fractures.html",
        relatedGuideSection: "compartment-syndrome"
    },

    {
        id: "fx-qb-002",
        category: "musculoskeletal",
        topic: "fractures",
        topicLabel: "Fractures",
        type: "single",
        difficulty: "application",
        stem: "A nurse is performing a neurovascular assessment on a patient with a newly applied forearm cast. Which finding requires IMMEDIATE action?",
        options: [
            { id: "a", text: "The patient reports mild itching under the cast" },
            { id: "b", text: "Capillary refill in the fingers is 2 seconds" },
            { id: "c", text: "The fingers are pale, cool, and the patient cannot feel the nurse's touch" },
            { id: "d", text: "Mild swelling visible at the edges of the cast" }
        ],
        correct: "c",
        rationale: {
            correct: "Pale, cool fingers with absent sensation indicate neurovascular compromise — the cast may be too tight, causing compression of blood vessels and nerves. This requires immediate intervention: elevate the extremity, notify the provider, and prepare for cast bivalving (cutting the cast in half to relieve pressure). Capillary refill of 2 seconds is normal (<3 seconds). Mild itching and mild edge swelling are common and expected after cast application."
        },
        testTakingTip: "CMS checks (Circulation, Motion, Sensation) on casted extremities: check color, temperature, capillary refill, pulses, movement, and sensation distal to the cast. Any change from baseline = immediate action. The mnemonic 'pale, pulseless, painful, paresthesias, paralysis' indicates neurovascular emergency.",
        relatedGuide: "fractures.html",
        relatedGuideSection: "cast-care"
    },

    {
        id: "fx-qb-003",
        category: "musculoskeletal",
        topic: "fractures",
        topicLabel: "Fractures",
        type: "single",
        difficulty: "knowledge",
        stem: "A nurse is providing discharge teaching to a patient with a new fiberglass cast on the left forearm. Which patient statement indicates correct understanding of cast care?",
        options: [
            { id: "a", text: "I can use a hair dryer on the cool setting to blow air into the cast if it gets itchy" },
            { id: "b", text: "I should insert a knitting needle to scratch any itchy areas under the cast" },
            { id: "c", text: "I can submerge my cast in the bath since fiberglass is waterproof" },
            { id: "d", text: "I should cover the cast with plastic wrap and tape before showering" }
        ],
        correct: "d",
        rationale: {
            correct: "Casts must be kept dry to prevent skin breakdown, maceration, and infection underneath. Covering with plastic wrap and taping the edges creates a waterproof barrier during showering. A hair dryer can cause burns to skin under the cast (even cool setting can create heat in the enclosed space). Inserting objects can damage skin and cause infection or pressure sores. While fiberglass is water-resistant, the padding underneath is NOT — a wet cast lining causes skin maceration."
        },
        testTakingTip: "Cast care teaching: keep dry (cover for showers), nothing inside the cast (no scratching tools), elevate above heart level to reduce swelling, check CMS regularly, and report numbness/tingling/color changes immediately.",
        relatedGuide: "fractures.html",
        relatedGuideSection: "cast-care"
    },

    {
        id: "fx-qb-004",
        category: "musculoskeletal",
        topic: "fractures",
        topicLabel: "Fractures",
        type: "single",
        difficulty: "analysis",
        stem: "A patient with a femur fracture sustained in a motor vehicle collision develops sudden dyspnea, tachycardia, confusion, and a petechial rash across the chest and axillae 36 hours after injury. SpO2 drops to 86%. The nurse suspects:",
        options: [
            { id: "a", text: "Pulmonary embolism from a deep vein thrombosis" },
            { id: "b", text: "Fat embolism syndrome from marrow fat entering the bloodstream" },
            { id: "c", text: "Pneumothorax from a concurrent rib fracture" },
            { id: "d", text: "Acute respiratory distress syndrome from fluid overload" }
        ],
        correct: "b",
        rationale: {
            correct: "The classic triad of fat embolism syndrome (FES) is: (1) respiratory distress (dyspnea, hypoxemia), (2) neurological changes (confusion, agitation), and (3) petechial rash (chest, axillae, conjunctivae). FES typically presents 24-72 hours after long bone fractures (especially femur and pelvis). Fat globules from disrupted bone marrow enter the venous system and lodge in pulmonary and cerebral capillaries. PE from DVT does NOT cause petechial rash — this is the key differentiator. Treatment is supportive: oxygen, fluids, and immobilization."
        },
        testTakingTip: "Fat embolism vs PE: Both cause dyspnea and tachycardia. The differentiators are: petechial rash (FES only, pathognomonic), timing (FES 24-72 hrs after long bone fracture; PE can occur anytime), and confusion (more common with FES). FES treatment is supportive; PE may need anticoagulation or embolectomy.",
        relatedGuide: "fractures.html",
        relatedGuideSection: "complications"
    },

    {
        id: "fx-qb-005",
        category: "musculoskeletal",
        topic: "fractures",
        topicLabel: "Fractures",
        type: "single",
        difficulty: "application",
        stem: "A patient is in balanced suspension skeletal traction for a femoral shaft fracture. During morning care, the nurse notes the weights are resting on the floor. What is the appropriate action?",
        options: [
            { id: "a", text: "Remove the weights temporarily to reposition the patient, then reapply" },
            { id: "b", text: "Lift the weights and reposition them so they hang freely without touching the floor" },
            { id: "c", text: "Leave the weights on the floor and notify the provider" },
            { id: "d", text: "Add additional weights to compensate for the loss of traction force" }
        ],
        correct: "b",
        rationale: {
            correct: "Traction weights must hang freely at all times to maintain continuous, appropriate pull on the fracture for alignment and healing. Weights resting on the floor means the traction is ineffective — the nurse should reposition them to hang freely. Weights should NEVER be removed (breaks traction continuity) or added without a provider order. Leaving them on the floor allows the fracture to shift. The nurse should ensure the rope is in the pulley groove and the bed is positioned so weights clear the floor."
        },
        testTakingTip: "Traction rules: weights hang freely (never on floor, bed, or frame), never remove weights, ropes must be in pulleys and free of knots, maintain body alignment with countertraction, pin care per protocol for skeletal traction.",
        relatedGuide: "fractures.html",
        relatedGuideSection: "traction"
    },

    {
        id: "fx-qb-006",
        category: "musculoskeletal",
        topic: "fractures",
        topicLabel: "Fractures",
        type: "single",
        difficulty: "knowledge",
        stem: "A nurse is caring for a patient with an open (compound) fracture of the tibia with bone protruding through the skin. Which intervention is the HIGHEST priority in the initial management?",
        options: [
            { id: "a", text: "Attempt to realign the bone and push it back below the skin surface" },
            { id: "b", text: "Apply a sterile, moist dressing to the wound and administer IV antibiotics as ordered" },
            { id: "c", text: "Splint the extremity in the position found and prepare for surgical debridement" },
            { id: "d", text: "Apply a tourniquet proximal to the fracture to control bleeding" }
        ],
        correct: "b",
        rationale: {
            correct: "Open fractures have direct communication between the fracture and the external environment, creating a high risk for osteomyelitis (bone infection). The priority is: cover the wound with a sterile, saline-moistened dressing to prevent contamination and desiccation, and administer IV antibiotics (typically a first-generation cephalosporin) within 1 hour. NEVER attempt to push bone back in — this introduces more bacteria. Splinting is important but secondary to infection prevention. Tourniquets are reserved for life-threatening hemorrhage only."
        },
        testTakingTip: "Open fracture priorities: sterile moist dressing + IV antibiotics within 1 hour + tetanus prophylaxis + surgical debridement within 6 hours. Never push bone back in. Cover, medicate, and prepare for surgery.",
        relatedGuide: "fractures.html",
        relatedGuideSection: "open-fracture"
    },

    {
        id: "fx-qb-007",
        category: "musculoskeletal",
        topic: "fractures",
        topicLabel: "Fractures",
        type: "single",
        difficulty: "application",
        stem: "An 82-year-old woman with osteoporosis is admitted after a fall resulting in an intertrochanteric hip fracture. She is scheduled for surgical repair tomorrow. Which nursing intervention is the priority during the preoperative period?",
        options: [
            { id: "a", text: "Apply Buck's traction to the affected leg to maintain alignment and reduce muscle spasm" },
            { id: "b", text: "Encourage the patient to perform active range of motion exercises on the affected hip" },
            { id: "c", text: "Position the patient on the affected side to reduce edema" },
            { id: "d", text: "Apply ice packs directly to the surgical site to reduce preoperative swelling" }
        ],
        correct: "a",
        rationale: {
            correct: "Buck's traction (skin traction with 5-10 lbs of weight) is commonly applied preoperatively for hip fractures to immobilize the fracture, reduce muscle spasm, and maintain alignment until surgical repair. Active ROM of the fractured hip would worsen displacement and cause extreme pain. Positioning on the fractured side increases pain and can displace the fracture. There is no surgical site yet — surgery is tomorrow."
        },
        testTakingTip: "Pre-op hip fracture care: Buck's traction (temporary), pain management, DVT prevention (Ted hose, SCDs), assess for surgical fitness (cardiac clearance, labs), and preoperative teaching. Surgery should occur within 24-48 hours to reduce complications.",
        relatedGuide: "fractures.html",
        relatedGuideSection: "hip-fracture"
    },

    {
        id: "fx-qb-008",
        category: "musculoskeletal",
        topic: "fractures",
        topicLabel: "Fractures",
        type: "single",
        difficulty: "analysis",
        stem: "A pediatric nurse is assessing a 4-year-old child brought in with a spiral fracture of the humerus. The parent states the child 'fell off the couch.' The nurse notes bruises of varying ages on the child's back and upper arms. What is the nurse's MOST important action?",
        options: [
            { id: "a", text: "Document the findings and discuss injury prevention with the parent" },
            { id: "b", text: "Report the suspected non-accidental trauma to the appropriate authorities as a mandated reporter" },
            { id: "c", text: "Ask the child directly if someone hurt them while the parent is in the room" },
            { id: "d", text: "Consult with the attending physician before taking any action" }
        ],
        correct: "b",
        rationale: {
            correct: "A spiral fracture in a young child (caused by twisting force) combined with bruises at various stages of healing in areas typically covered by clothing are classic indicators of non-accidental trauma (child abuse). Nurses are mandated reporters — they are legally REQUIRED to report suspected abuse to child protective services. The nurse does not need to prove abuse, only to have reasonable suspicion. Questioning the child in front of the alleged abuser is inappropriate and potentially dangerous. While consulting the physician is reasonable, it should not delay reporting."
        },
        testTakingTip: "Red flags for non-accidental trauma in children: spiral fractures in non-ambulatory children, bruises in various stages of healing, injuries inconsistent with the stated mechanism, injuries in unusual locations (back, upper arms, torso), and delay in seeking care. Nurses must report — no exceptions.",
        relatedGuide: "fractures.html",
        relatedGuideSection: "pediatric"
    },

    {
        id: "fx-qb-009",
        category: "musculoskeletal",
        topic: "fractures",
        topicLabel: "Fractures",
        type: "single",
        difficulty: "knowledge",
        stem: "A nurse is caring for a patient with an external fixation device on the lower leg. Which pin care intervention is most appropriate?",
        options: [
            { id: "a", text: "Apply antibiotic ointment thickly around each pin site to prevent infection" },
            { id: "b", text: "Clean pin sites per facility protocol, assess for signs of infection, and keep the area free of crusting" },
            { id: "c", text: "Leave pin sites completely uncovered and avoid any cleaning to prevent disrupting healing" },
            { id: "d", text: "Wrap all pin sites tightly with gauze to prevent environmental contamination" }
        ],
        correct: "b",
        rationale: {
            correct: "External fixation pin care involves cleaning pin sites per facility protocol (typically with chlorhexidine or normal saline), monitoring for signs of infection (redness, warmth, purulent drainage, pain, loosening), and keeping sites free of excessive crusting that can harbor bacteria. Thick antibiotic ointment can trap bacteria and create a moist environment promoting infection. Leaving sites completely unattended increases infection risk. Tight wrapping can cause pressure and impede assessment."
        },
        testTakingTip: "External fixator care: clean pins per protocol, assess for infection at every shift, never adjust the fixator frame, check pin tightness (report loosening), and elevate the extremity to reduce edema. Pin site infection is the most common complication.",
        relatedGuide: "fractures.html",
        relatedGuideSection: "external-fixation"
    },

    {
        id: "fx-qb-010",
        category: "musculoskeletal",
        topic: "fractures",
        topicLabel: "Fractures",
        type: "single",
        difficulty: "application",
        stem: "A patient is being discharged after ORIF (open reduction internal fixation) of an ankle fracture. The provider has ordered toe-touch weight bearing (TTWB) on the affected side. Which patient demonstration indicates correct understanding?",
        options: [
            { id: "a", text: "The patient walks normally, placing full weight on the affected foot" },
            { id: "b", text: "The patient uses crutches and touches only the toes of the affected foot to the floor for balance, bearing no true weight" },
            { id: "c", text: "The patient keeps the affected foot completely off the ground at all times" },
            { id: "d", text: "The patient places approximately half their body weight on the affected leg" }
        ],
        correct: "b",
        rationale: {
            correct: "Toe-touch weight bearing (TTWB) means the patient may rest the toes of the affected foot on the ground for balance only — no actual weight transfer through the extremity. The crutches or walker bear the patient's full weight. Full weight bearing is unrestricted walking. Non-weight bearing (NWB) means the foot cannot touch the ground at all. Partial weight bearing (PWB) allows a specified percentage of body weight (typically 25-50%). Weight-bearing progression: NWB → TTWB → PWB → WBAT → FWB."
        },
        testTakingTip: "Weight-bearing progression: NWB (no contact) → TTWB (toes touch for balance only) → PWB (25-50% weight) → WBAT (as much as tolerated) → FWB (normal). Always verify the specific order before teaching the patient.",
        relatedGuide: "fractures.html",
        relatedGuideSection: "rehabilitation"
    },

    {
        id: "fx-qb-011",
        category: "musculoskeletal",
        topic: "fractures",
        topicLabel: "Fractures",
        type: "single",
        difficulty: "knowledge",
        stem: "A nurse is developing a falls prevention plan for an elderly patient with osteoporosis who was admitted after a Colles fracture from a fall at home. Which intervention addresses the PRIMARY modifiable risk factor?",
        options: [
            { id: "a", text: "Recommend the patient wear a medical alert device at all times" },
            { id: "b", text: "Conduct a home safety assessment to remove trip hazards, improve lighting, and install grab bars" },
            { id: "c", text: "Advise the patient to limit all physical activity to prevent future falls" },
            { id: "d", text: "Prescribe a wheelchair for all mobility to eliminate fall risk" }
        ],
        correct: "b",
        rationale: {
            correct: "Environmental hazards (loose rugs, poor lighting, cluttered walkways, lack of grab bars) are the most common modifiable risk factor for falls in the elderly. A home safety assessment with targeted modifications significantly reduces fall risk. A medical alert device aids in getting help after a fall but doesn't prevent falls. Limiting activity increases deconditioning, weakness, and actually INCREASES fall risk. A wheelchair for ambulatory patients promotes dependency and further weakness."
        },
        testTakingTip: "Falls prevention is multi-factorial: environment modification (home safety), medication review (sedatives, antihypertensives), vision correction, strength/balance training, calcium/vitamin D for bone health, and assistive devices (cane, walker). Never restrict mobility — it worsens the problem.",
        relatedGuide: "fractures.html",
        relatedGuideSection: "prevention"
    },

    // ── ORDERING (4) ─────────────────────────────────────────

    {
        id: "fx-qb-012",
        category: "musculoskeletal",
        topic: "fractures",
        topicLabel: "Fractures",
        type: "ordering",
        difficulty: "application",
        stem: "A nurse suspects compartment syndrome in a patient with a casted lower leg fracture. The patient reports escalating pain unrelieved by morphine, and the cast feels tight. Place the nurse's interventions in the correct priority order.",
        options: [
            { id: "s1", text: "Notify the surgeon immediately — this is a surgical emergency" },
            { id: "s2", text: "Bivalve (split) the cast and cut through the padding down to the skin" },
            { id: "s3", text: "Lower the extremity to heart level (do NOT elevate above the heart)" },
            { id: "s4", text: "Prepare the patient for emergent fasciotomy if compartment pressures exceed 30 mmHg" },
            { id: "s5", text: "Reassess neurovascular status: pulses, sensation, motor function, capillary refill" }
        ],
        correct: ["s2", "s3", "s1", "s5", "s4"],
        rationale: {
            s2: "Bivalving the cast is the FIRST action because it can immediately relieve external compression. Cut through the cast AND the padding — padding alone can restrict up to 85% of the pressure relief.",
            s3: "Position the extremity at heart level, NOT elevated. Elevation above the heart reduces arterial inflow to already ischemic tissue, worsening the compartment syndrome.",
            s1: "Notify the surgeon immediately after relieving external pressure. The patient will likely need emergent fasciotomy if compartment pressures remain elevated after cast removal.",
            s5: "Reassess neurovascular status after cast removal to determine if the intervention relieved the compression. Document findings for the surgeon's evaluation.",
            s4: "Prepare for fasciotomy if symptoms persist despite cast removal. Normal compartment pressure is 0-8 mmHg; pressures above 30 mmHg (or within 30 mmHg of diastolic BP) indicate need for fasciotomy."
        },
        testTakingTip: "Compartment syndrome response: Remove all external constriction FIRST (bivalve cast) → Lower to heart level (never elevate) → Call surgeon → Reassess → Prepare for fasciotomy. The 6-hour rule: irreversible damage begins after 6 hours of compartment syndrome.",
        relatedGuide: "fractures.html",
        relatedGuideSection: "compartment-syndrome"
    },

    {
        id: "fx-qb-013",
        category: "musculoskeletal",
        topic: "fractures",
        topicLabel: "Fractures",
        type: "ordering",
        difficulty: "application",
        stem: "A nurse receives a patient from the PACU after ORIF of a hip fracture. Place the post-operative nursing assessments and interventions in the correct priority order.",
        options: [
            { id: "s1", text: "Assess airway, breathing, oxygen saturation, and level of consciousness" },
            { id: "s2", text: "Perform neurovascular assessment of the operative extremity (CMS checks)" },
            { id: "s3", text: "Verify surgical dressing is intact and check drain output (Hemovac/JP drain)" },
            { id: "s4", text: "Initiate DVT prophylaxis (sequential compression devices, anticoagulant as ordered)" },
            { id: "s5", text: "Position the patient with an abduction pillow between the legs per hip precautions" }
        ],
        correct: ["s1", "s2", "s5", "s3", "s4"],
        rationale: {
            s1: "ABCs first: assess airway patency, respiratory status (anesthesia effects), oxygen saturation, and consciousness level. Post-anesthesia complications are the most immediate threat.",
            s2: "Neurovascular assessment of the operative leg establishes a post-operative baseline: pulses, sensation, movement, temperature, color, and capillary refill. Detect vascular or nerve compromise early.",
            s5: "Correct positioning prevents hip dislocation — the most common early complication. An abduction pillow maintains the hip in abduction and neutral alignment per the surgical approach used.",
            s3: "Check the surgical site for excessive bleeding and verify drain function. Expected drain output varies but typically 200-500 mL in the first 24 hours. Report excessive output.",
            s4: "DVT prophylaxis should begin promptly post-operatively. SCDs can be applied immediately; pharmacologic anticoagulation timing depends on the surgeon's preference (typically within 12-24 hours)."
        },
        testTakingTip: "Post-op hip fracture repair: ABCs → Neurovascular check → Position correctly (abduction pillow) → Surgical site and drain → DVT prevention. The abduction pillow is not optional — hip dislocation is the complication to prevent.",
        relatedGuide: "fractures.html",
        relatedGuideSection: "post-operative"
    },

    {
        id: "fx-qb-014",
        category: "musculoskeletal",
        topic: "fractures",
        topicLabel: "Fractures",
        type: "ordering",
        difficulty: "knowledge",
        stem: "Place the following weight-bearing statuses in order from MOST restrictive to LEAST restrictive.",
        options: [
            { id: "s1", text: "Non-weight bearing (NWB): affected foot may not touch the ground" },
            { id: "s2", text: "Toe-touch weight bearing (TTWB): toes may touch for balance only" },
            { id: "s3", text: "Partial weight bearing (PWB): 25-50% of body weight on affected limb" },
            { id: "s4", text: "Weight bearing as tolerated (WBAT): as much weight as the patient can comfortably bear" },
            { id: "s5", text: "Full weight bearing (FWB): no restrictions on weight bearing" }
        ],
        correct: ["s1", "s2", "s3", "s4", "s5"],
        rationale: {
            s1: "NWB is the most restrictive — the affected extremity cannot contact the ground at all. Patient uses crutches or walker with the injured leg suspended.",
            s2: "TTWB allows the toes to contact the floor for balance only — no actual weight transfer. The crutches or walker bear full body weight.",
            s3: "PWB allows a specified percentage of body weight (usually 25-50%). A bathroom scale can help patients learn how this feels.",
            s4: "WBAT allows the patient to bear as much weight as comfortable. Pain guides the limit. Most body weight can be placed on the affected leg.",
            s5: "FWB means no weight-bearing restrictions. The patient can walk normally without assistive devices if balance and strength allow."
        },
        testTakingTip: "Weight-bearing progression follows healing: NWB → TTWB → PWB → WBAT → FWB. The provider advances the status as bone healing progresses on follow-up X-rays. Never advance weight bearing without a provider order.",
        relatedGuide: "fractures.html",
        relatedGuideSection: "rehabilitation"
    },

    {
        id: "fx-qb-015",
        category: "musculoskeletal",
        topic: "fractures",
        topicLabel: "Fractures",
        type: "ordering",
        difficulty: "analysis",
        stem: "A patient arrives at the ED after a motorcycle accident with a grossly deformed, open femur fracture with active bleeding. Place the initial management steps in the correct priority order.",
        options: [
            { id: "s1", text: "Apply direct pressure to control hemorrhage and cover the wound with a sterile moist dressing" },
            { id: "s2", text: "Assess and secure the airway; check breathing and circulation (primary survey)" },
            { id: "s3", text: "Splint the extremity in the position found; do NOT attempt to realign" },
            { id: "s4", text: "Establish large-bore IV access, draw trauma labs, and begin fluid resuscitation" },
            { id: "s5", text: "Administer IV antibiotics (cefazolin) and tetanus prophylaxis within 1 hour" }
        ],
        correct: ["s2", "s1", "s4", "s3", "s5"],
        rationale: {
            s2: "Primary survey (ABCDE) is ALWAYS first in trauma: airway, breathing, circulation, disability, exposure. A motorcycle accident may involve multiple injuries — a femur fracture may not be the most life-threatening.",
            s1: "Control hemorrhage with direct pressure (femur fractures can lose 1-2 liters of blood into the thigh). Cover the open wound with a sterile saline-moistened dressing to prevent contamination.",
            s4: "Large-bore IV access enables fluid resuscitation and blood product administration. Femur fractures cause significant hemorrhage — anticipate need for transfusion. Trauma labs guide ongoing management.",
            s3: "Splint the extremity as found to prevent further neurovascular damage, reduce pain, and minimize blood loss. Traction splints (Hare, Sager) may be applied for femoral shaft fractures.",
            s5: "IV antibiotics within 1 hour and tetanus prophylaxis are essential for open fractures to prevent osteomyelitis. This can occur simultaneously with other interventions but is lower priority than hemorrhage control."
        },
        testTakingTip: "Trauma with open fracture: primary survey first (other injuries may be more lethal) → hemorrhage control → IV/fluids → splint in position found → antibiotics within 1 hour. Never focus on the dramatic-looking fracture before completing the primary survey.",
        relatedGuide: "fractures.html",
        relatedGuideSection: "emergency"
    },

    // ── MATRIX (5) ───────────────────────────────────────────

    {
        id: "fx-qb-016",
        category: "musculoskeletal",
        topic: "fractures",
        topicLabel: "Fractures",
        type: "matrix",
        difficulty: "analysis",
        stem: "A nurse is assessing patients with lower extremity injuries. For each set of findings, indicate whether they suggest compartment syndrome, deep vein thrombosis (DVT), or fat embolism syndrome.",
        columns: ["Compartment Syndrome", "DVT", "Fat Embolism Syndrome"],
        rows: [
            { id: "r1", text: "Severe pain unrelieved by opioids, worsened by passive stretch of the toes, tense swelling in the anterior leg", correct: "Compartment Syndrome" },
            { id: "r2", text: "Unilateral calf tenderness and swelling, warmth and redness, positive Homans sign, no respiratory symptoms", correct: "DVT" },
            { id: "r3", text: "Dyspnea, confusion, and petechial rash on chest/axillae appearing 36 hours after a femur fracture", correct: "Fat Embolism Syndrome" },
            { id: "r4", text: "Paresthesias progressing to paralysis with diminishing pulses, 8 hours after cast placement", correct: "Compartment Syndrome" },
            { id: "r5", text: "SpO2 85%, tachycardia, altered mental status, and thrombocytopenia 48 hours after pelvic fracture", correct: "Fat Embolism Syndrome" }
        ],
        rationale: {
            correct: "Compartment syndrome: pain out of proportion, pain with passive stretch, tense compartment, late findings include paresthesias/paralysis/pulselessness. Occurs within hours of injury or cast application. DVT: unilateral calf swelling, tenderness, warmth, redness — affects the venous system, not arterial or compartmental. Fat embolism syndrome: respiratory distress + neurological changes + petechial rash, occurs 24-72 hours after long bone/pelvic fractures, thrombocytopenia is a supporting lab finding."
        },
        testTakingTip: "Three major fracture complications and their unique features: Compartment syndrome = pain with passive stretch (unique to CS). DVT = unilateral calf swelling/warmth. Fat embolism = petechial rash (pathognomonic). Time of onset also helps: CS = hours, DVT = days to weeks, FES = 24-72 hours.",
        relatedGuide: "fractures.html",
        relatedGuideSection: "complications"
    },

    {
        id: "fx-qb-017",
        category: "musculoskeletal",
        topic: "fractures",
        topicLabel: "Fractures",
        type: "matrix",
        difficulty: "knowledge",
        stem: "For each type of traction, indicate whether it is skin traction or skeletal traction.",
        columns: ["Skin Traction", "Skeletal Traction"],
        rows: [
            { id: "r1", text: "Buck's traction: foam boot applied to the leg with 5-10 lbs of weight", correct: "Skin Traction" },
            { id: "r2", text: "Steinmann pin inserted through the distal femur with 25 lbs of weight", correct: "Skeletal Traction" },
            { id: "r3", text: "Russell's traction: sling under the knee with skin wraps and 5-7 lbs", correct: "Skin Traction" },
            { id: "r4", text: "Halo vest attached to skull pins for cervical spine immobilization", correct: "Skeletal Traction" },
            { id: "r5", text: "Balanced suspension with a Thomas splint and Kirschner wire through the tibia", correct: "Skeletal Traction" }
        ],
        rationale: {
            correct: "Skin traction applies force through the skin surface using wraps, boots, or slings with lower weights (5-10 lbs to prevent skin breakdown). Examples: Buck's (leg), Russell's (knee sling), Bryant's (pediatric bilateral leg). Skeletal traction applies force directly through bone using surgically inserted pins, wires, or tongs, allowing higher weights (15-40 lbs). Examples: Steinmann pins, Kirschner wires, Crutchfield/Gardner-Wells tongs, halo devices."
        },
        testTakingTip: "Skin traction = applied to skin surface, lower weight (5-10 lbs), temporary, simpler care. Skeletal traction = pins through bone, higher weight (15-40 lbs), longer term, requires pin care. If you see pins/wires/tongs, it's skeletal.",
        relatedGuide: "fractures.html",
        relatedGuideSection: "traction"
    },

    {
        id: "fx-qb-018",
        category: "musculoskeletal",
        topic: "fractures",
        topicLabel: "Fractures",
        type: "matrix",
        difficulty: "application",
        stem: "A nurse is assessing patients with casts. For each finding, indicate whether it is 'Expected — Continue Monitoring' or 'Abnormal — Take Immediate Action.'",
        columns: ["Expected — Continue Monitoring", "Abnormal — Take Immediate Action"],
        rows: [
            { id: "r1", text: "Mild swelling of the fingers visible above the cast edge after the first 24 hours", correct: "Expected — Continue Monitoring" },
            { id: "r2", text: "Hot spot on the cast surface with a foul odor emanating from under the cast", correct: "Abnormal — Take Immediate Action" },
            { id: "r3", text: "Patient reports mild itching under the cast on post-cast day 3", correct: "Expected — Continue Monitoring" },
            { id: "r4", text: "Cyanotic (blue) fingertips that are cold to touch with capillary refill of 5 seconds", correct: "Abnormal — Take Immediate Action" },
            { id: "r5", text: "A warm sensation over the cast during the first 24 hours while the plaster sets", correct: "Expected — Continue Monitoring" },
            { id: "r6", text: "Increasing pain despite elevation and prescribed analgesics", correct: "Abnormal — Take Immediate Action" }
        ],
        rationale: {
            correct: "Expected findings: mild swelling above the cast edge (normal post-injury response), mild itching (skin irritation from cast padding), and warmth during plaster curing (exothermic reaction, first 24 hours). Abnormal findings: hot spot with foul odor (suggests pressure sore or infection under the cast — requires windowing or removal), cyanotic cold fingers with delayed cap refill (neurovascular compromise — bivalve the cast), increasing pain despite treatment (possible compartment syndrome — urgent assessment needed)."
        },
        testTakingTip: "Cast red flags requiring immediate action: color/temperature changes in digits, prolonged cap refill, numbness/tingling, unrelieved pain, foul odor, and hot spots on the cast. Mild swelling, itching, and warmth during setting are normal.",
        relatedGuide: "fractures.html",
        relatedGuideSection: "cast-care"
    },

    {
        id: "fx-qb-019",
        category: "musculoskeletal",
        topic: "fractures",
        topicLabel: "Fractures",
        type: "matrix",
        difficulty: "knowledge",
        stem: "For each Salter-Harris fracture classification, match it to the correct description of which growth plate structures are involved.",
        columns: ["Type I", "Type II", "Type III", "Type IV"],
        rows: [
            { id: "r1", text: "Fracture through the growth plate (physis) ONLY — often not visible on initial X-ray", correct: "Type I" },
            { id: "r2", text: "Fracture through the growth plate AND the metaphysis (above the plate) — most common type", correct: "Type II" },
            { id: "r3", text: "Fracture through the growth plate AND the epiphysis (below the plate into the joint)", correct: "Type III" },
            { id: "r4", text: "Fracture through the metaphysis, growth plate, AND epiphysis — crosses the entire growth plate region", correct: "Type IV" }
        ],
        rationale: {
            correct: "Salter-Harris classification (mnemonic SALTR): Type I = Straight across/Separated (physis only, may need MRI to diagnose), Type II = Above (physis + metaphysis, most common ~75%), Type III = Lower/beLow (physis + epiphysis, involves the joint), Type IV = Through/Through everything (metaphysis + physis + epiphysis, often requires surgical fixation). Type V (not listed) = crushed/Rammed (compression of the growth plate, worst prognosis). Higher types have greater risk of growth disturbance."
        },
        testTakingTip: "Salter-Harris mnemonic SALTR: I = Separated (physis only), II = Above (most common), III = Lower (into joint), IV = Through all, V = Rammed (crushed). Higher number = higher risk of growth arrest. Type II is the most commonly tested because it's the most common.",
        relatedGuide: "fractures.html",
        relatedGuideSection: "pediatric"
    },

    {
        id: "fx-qb-020",
        category: "musculoskeletal",
        topic: "fractures",
        topicLabel: "Fractures",
        type: "matrix",
        difficulty: "application",
        stem: "A nurse is planning care for a patient with a femur fracture. For each task, indicate whether it can be delegated to a UAP or must be performed by the RN.",
        columns: ["Delegate to UAP", "RN Only"],
        rows: [
            { id: "r1", text: "Applying ice packs to the affected extremity per the established protocol", correct: "Delegate to UAP" },
            { id: "r2", text: "Performing neurovascular assessment (CMS checks) of the affected extremity", correct: "RN Only" },
            { id: "r3", text: "Elevating the extremity on pillows as directed by the care plan", correct: "Delegate to UAP" },
            { id: "r4", text: "Assessing for signs and symptoms of fat embolism syndrome", correct: "RN Only" },
            { id: "r5", text: "Reporting to the nurse that the patient's toes appear blue and feel cold", correct: "Delegate to UAP" },
            { id: "r6", text: "Determining whether pain is consistent with compartment syndrome vs expected post-fracture pain", correct: "RN Only" }
        ],
        rationale: {
            correct: "UAPs can perform standardized tasks that do not require clinical judgment: applying ice packs, elevating extremities, and reporting objective observations (blue toes, cold temperature) to the RN. RN-only tasks require clinical judgment: neurovascular assessment interpretation (normal vs abnormal CMS), recognizing complications (fat embolism triad), and differentiating pain types (expected vs compartment syndrome). The UAP observes and reports; the RN assesses, interprets, and intervenes."
        },
        testTakingTip: "Delegation in fracture care: UAPs can apply ice, elevate, position, and report observations. RNs assess neurovascular status, interpret findings, recognize complications, differentiate pain quality, and make clinical decisions. If it requires judgment, it's an RN task.",
        relatedGuide: "fractures.html",
        relatedGuideSection: "nursing-care"
    }

]);
