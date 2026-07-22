import { AnatomyRegion } from '../types';

export const ANATOMY_REGIONS: AnatomyRegion[] = [
  {
    id: 'heart',
    name: 'Cardiovascular System',
    system: 'Cardiology & Arrhythmia',
    anatomicalFocus: 'Heart, Coronary Arteries, Pericardium, Great Vessels',
    color: '#D32F2F', // Emergency Red
    svgCoordinates: { cx: 200, cy: 210, r: 24 },
    keyModules: [
      '12-Lead ECG STEMI Localization (LAD, RCA, LCx)',
      'Defibrillation & Synchronized Cardioversion',
      'Cardiac Arrest ACLS MegaCode Algorithms',
      'Inotrope & Vasopressor Dosing (Noradrenaline, Adrenaline, Vasopressin)'
    ],
    emergencyCases: [
      'Acute Anterior Wall STEMI with Cardiogenic Shock',
      'Unstable Ventricular Tachycardia with Pulse',
      'Complete Heart Block with Syncope (Transcutaneous Pacing)',
      'Cardiac Tamponade (Emergency Pericardiocentesis)'
    ],
    description: 'Learn to diagnose life-threatening ACS, malignant arrhythmias, and obstructive shock. Master biphasic defibrillation, transcutaneous pacing, and pharmacological stabilization.'
  },
  {
    id: 'airway',
    name: 'Respiratory System & Airway',
    system: 'Pulmonology & Airway',
    anatomicalFocus: 'Larynx, Trachea, Lungs, Pleural Cavity',
    color: '#0284C7', // Sky Cyan
    svgCoordinates: { cx: 200, cy: 150, r: 22 },
    keyModules: [
      'Rapid Sequence Intubation (RSI) & Difficult Airway Algorithm',
      'Video Laryngoscopy (C-MAC & GlideScope) & Bougie Techniques',
      'Mechanical Ventilation Modes (AC/VC, PCV, SIMV, PEEP)',
      'Arterial Blood Gas (ABG) Acid-Base Interpretation'
    ],
    emergencyCases: [
      'Acute Severe Asthma in Respiratory Failure',
      'Tension Pneumothorax (Immediate Needle Decompression & ICD)',
      'ARDS Secondary to Severe Sepsis (Prone Ventilation)',
      'Foreign Body Airway Obstruction & Surgical Cricothyroidotomy'
    ],
    description: 'Master the ABCs of life support. Develop foolproof skills in endotracheal intubation, difficult airway rescue devices, intercostal chest drains, and ventilator troubleshooting.'
  },
  {
    id: 'brain',
    name: 'Central Nervous System',
    system: 'Neurology & Resuscitation',
    anatomicalFocus: 'Cerebral Hemispheres, Brainstem, Spinal Cord',
    color: '#7C3AED', // Violet
    svgCoordinates: { cx: 200, cy: 90, r: 22 },
    keyModules: [
      'Acute Ischemic Stroke & Thrombolysis (rtPA / Tenecteplase Window)',
      'Traumatic Brain Injury (TBI) & Intracranial Pressure (ICP) Control',
      'Status Epilepticus Resuscitation Algorithm',
      'Glasgow Coma Scale (GCS) Rapid Assessment'
    ],
    emergencyCases: [
      'Acute Ischemic Stroke within 3-Hour Door-to-Needle Window',
      'Extradural Hematoma with Anisocoria & Cushing Triad',
      'Refractory Status Epilepticus (Midazolam & Propofol Infusion)',
      'Bacterial Meningitis with Septic Shock'
    ],
    description: 'Protect brain tissue in critical minutes. Master rapid GCS evaluation, stroke thrombolysis protocols, cerebral edema management, and spinal immobilization.'
  },
  {
    id: 'abdomen',
    name: 'Abdominal & FAST Scan System',
    system: 'Gastroenterology & Trauma FAST',
    anatomicalFocus: 'Peritoneum, Liver, Spleen, Aorta, Pelvic Cavity',
    color: '#059669', // Emerald
    svgCoordinates: { cx: 200, cy: 280, r: 25 },
    keyModules: [
      'Point-of-Care Emergency Ultrasound (eFAST Protocol)',
      'Acute Abdomen Differential Diagnosis & Shock Assessment',
      'Gastrointestinal Bleed Resuscitation (Massive Transfusion Protocol)',
      'Abdominal Trauma & Solid Organ Injury Triage'
    ],
    emergencyCases: [
      'Ruptured Ectopic Pregnancy with Hemoperitoneum',
      'Splenic Laceration Secondary to Blunt Abdominal Trauma',
      'Variceal Upper GI Bleed with Hemorrhagic Shock',
      'Acute Mesenteric Ischemia'
    ],
    description: 'Perform bedside eFAST ultrasound in under 3 minutes to detect free peritoneal fluid, pericardial effusion, and internal hemorrhage.'
  },
  {
    id: 'trauma',
    name: 'Musculoskeletal & Poly-Trauma System',
    system: 'Traumatology & Orthopedics',
    anatomicalFocus: 'Spine, Long Bones, Pelvic Ring, Extremities',
    color: '#D97706', // Amber
    svgCoordinates: { cx: 200, cy: 360, r: 24 },
    keyModules: [
      'ATLS Primary & Secondary Survey Execution',
      'Pelvic Fracture Stabilization with Pelvic Binder',
      'Open Fracture Management & Compartment Syndrome',
      'Spinal Immobilization & Log Roll Technique'
    ],
    emergencyCases: [
      'High-Velocity Motor Vehicle Collision with Open Femur Fracture',
      'Unstable Pelvic Ring Disruption with Refractory Hypotension',
      'Compartment Syndrome of Lower Limb',
      'Traumatic Amputation & Tourniquet Application'
    ],
    description: 'Execute ATLS protocols with military precision. Master fracture reduction, pelvic binding, compartment pressure testing, and massive transfusion.'
  },
  {
    id: 'vascular',
    name: 'Vascular Access & Toxicology System',
    system: 'Emergency Pharmacology & Access',
    anatomicalFocus: 'Internal Jugular, Subclavian, Femoral Veins & Radial Artery',
    color: '#2563EB', // Royal Blue
    svgCoordinates: { cx: 200, cy: 240, r: 18 },
    keyModules: [
      'Ultrasound-Guided Central Line Insertion (IJV & Subclavian)',
      'Intraosseous (IO) Access (EZ-IO Drill)',
      'Arterial Line Cannulation & Invasive BP Monitoring',
      'Toxicology Antidotes (Organophosphate, Paracetamol, Opioid Overdose)'
    ],
    emergencyCases: [
      'Severe Dehydration Shock in Elderly (Rapid IO Placement)',
      'Organophosphate Poisoning (Atropinization Protocol)',
      'Septic Shock Requiring Ultrasound IJV Central Line',
      'Anaphylactic Shock (IM Epinephrine Dosing)'
    ],
    description: 'Gain blood vessel access in seconds even in collapsed veins using ultrasound guidance, intraosseous drills, and arterial lines.'
  }
];
