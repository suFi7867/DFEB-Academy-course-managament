import { Course } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'pgdems',
    title: 'PGDEMS - Post Graduate Diploma in Emergency Medical Services',
    tagline: 'The Gold Standard 1-Year Comprehensive Emergency Medicine Program',
    category: 'Diploma',
    duration: '1 Year (12 Months)',
    totalHours: 990,
    theoryHours: 210,
    practicalHours: 180,
    internshipHours: 600,
    eligibility: ['MBBS', 'BAMS', 'BHMS', 'BUMS', 'BSc Nursing / GNM', 'Paramedical Graduates'],
    badge: 'FLAGSHIP PROGRAM',
    feeINR: 75000,
    emiMonthlyINR: 6250,
    rating: 4.9,
    certificateType: 'Govt. Recognized University Post Graduate Diploma + DEFEB Emergency Skill Seal',
    iconName: 'Activity',
    description: 'A 990-hour comprehensive post-graduate diploma designed to transform medical practitioners into emergency care leaders. Features 210 hours of interactive theory, 180 hours of high-fidelity simulation lab training, and 600 hours of mandatory clinical internship at partner tertiary hospitals.',
    keySkills: [
      'Advanced Airway Management & Endotracheal Intubation',
      '12-Lead ECG STEMI Localization & Arrhythmia Cardioversion',
      'ATLS Primary & Secondary Trauma Survey',
      'Mechanical Ventilation Modes & Blood Gas (ABG) Analysis',
      'Central Venous Line & Emergency Point-of-Care Ultrasound (eFAST)',
      'Pediatric & Neonatal Resuscitation (PALS & NALS)'
    ],
    modules: [
      {
        number: 1,
        title: 'Fundamentals of Emergency Medical Services & Triage System',
        hours: 45,
        topics: [
          'History & Architecture of Emergency Medicine in India',
          'START & SALT Disaster Triage Protocols',
          'Pre-Hospital Care & Ambulance Equipment Operation',
          'Medico-Legal Aspects & Consent in Emergency Care'
        ],
        practicalSkills: [
          'Triage Tagging in Mass Casualty',
          'Ambulance Transport Immobilization',
          'Radio Communications & Handover Protocols'
        ]
      },
      {
        number: 2,
        title: 'Emergency Patient Assessment & Airway Management',
        hours: 80,
        topics: [
          'Primary Survey (ABCDE Approach)',
          'Airway Anatomy & Difficult Airway Algorithm',
          'Endotracheal Intubation & Video Laryngoscopy',
          'Supraglottic Airway Devices (LMA, I-Gel)',
          'Emergency Surgical Airway (Cricothyroidotomy)'
        ],
        practicalSkills: [
          'Bag-Valve-Mask Ventilation & OPA/NPA Insertion',
          'Direct & Video Laryngoscopy Intubation on Manikins',
          'Needle Cricothyroidotomy Skill Station'
        ]
      },
      {
        number: 3,
        title: 'Emergency Cardiology & Advanced ECG Masterclass',
        hours: 90,
        topics: [
          'Acute Coronary Syndrome (STEMI vs NSTEMI Diagnosis)',
          '12-Lead ECG Interpretation & Axis Calculation',
          'LBBB, RBBB & Electrolyte ECG Patterns',
          'Bradyarrhythmias & Tachyarrhythmias Management',
          'Synchronized Cardioversion & Transcutaneous Pacing'
        ],
        practicalSkills: [
          '12-Lead ECG Placement & Rapid Diagnostic Drill',
          'Manual Defibrillation & Biphasic Cardioversion',
          'Cardiac Arrest Resuscitation Team Leader Drills'
        ]
      },
      {
        number: 4,
        title: 'Trauma Emergencies & ATLS Protocols',
        hours: 85,
        topics: [
          'ATLS Primary & Secondary Survey Execution',
          'Traumatic Brain Injury (TBI) & GCS Monitoring',
          'Tension Pneumothorax & Hemothorax Relief',
          'Pelvic Fractures & Hemorrhagic Shock Resuscitation',
          'Spinal Immobilization & Splinting'
        ],
        practicalSkills: [
          'Needle Decompression & Intercostal Drain (ICD) Insertion',
          'eFAST Ultrasound Scanning on Simulated Trauma Patients',
          'Log Roll & Cervical Collar Application'
        ]
      },
      {
        number: 5,
        title: 'Medical Emergencies & Resuscitation Pharmacology',
        hours: 90,
        topics: [
          'Sepsis & Septic Shock Guidelines (Surviving Sepsis)',
          'Anaphylaxis & Acute Severe Asthma Management',
          'Stroke Protocols (NIHSS & Thrombolysis Window)',
          'Diabetic Emergencies (DKA & HHS)',
          'Emergency Toxicology & Antidotes'
        ],
        practicalSkills: [
          'Inotrope & Vasopressor Dosing Calculation',
          'Intraosseous (IO) Access Drilling',
          'Gastric Lavage & Poisoning Protocol'
        ]
      },
      {
        number: 6,
        title: 'Pediatric & Neonatal Emergencies (PALS & NALS)',
        hours: 70,
        topics: [
          'Pediatric Assessment Triangle (PAT)',
          'Pediatric Airway Differences & Resuscitation',
          'Febrile Seizures & Pediatric Shock',
          'Neonatal Resuscitation Program (NRP) Steps'
        ],
        practicalSkills: [
          'BVM Ventilation in Infants & Broselow Tape Usage',
          'Pediatric Defibrillation & IO Access',
          'Neonatal Radiant Warmer Resuscitation'
        ]
      },
      {
        number: 7,
        title: 'Obstetric & Gynecological Emergencies',
        hours: 60,
        topics: [
          'Eclampsia & Severe Preeclampsia Management',
          'Postpartum Hemorrhage (PPH) Bundle',
          'Pre-Hospital Unplanned Delivery & Cord Prolapse',
          'Ectopic Pregnancy & Acute Abdomen'
        ],
        practicalSkills: [
          'Normal & Breech Precipitous Delivery Simulation',
          'Uterine Massage & Bakri Balloon Tamponade',
          'Magnesium Sulfate Infusion Protocol'
        ]
      },
      {
        number: 8,
        title: 'ICU Procedures & Mechanical Ventilation Basics',
        hours: 80,
        topics: [
          'Invasive Arterial Blood Pressure & Central Line Setup',
          'Mechanical Ventilator Modes (AC, SIMV, PSV, PEEP)',
          'ABG Analysis & Acid-Base Balance Interpretation',
          'Tracheostomy Care & Emergency Exchange'
        ],
        practicalSkills: [
          'Arterial Line Cannulation on Simulation Arms',
          'Setting Ventilator Initial Parameters for ARDS',
          'Endotracheal Suctioning & Tracheostomy Tube Change'
        ]
      },
      {
        number: 9,
        title: 'Disaster Management & Mass Casualty Incidents',
        hours: 40,
        topics: [
          'Incident Command System (ICS) Structure',
          'Chemical, Biological, Radiological (CBRN) Hazards',
          'Decontamination & PPE Level A-D Usage',
          'Psychological First Aid & Post-Traumatic Stress'
        ],
        practicalSkills: [
          'Hazardous PPE Donning & Doffing',
          'Mass Casualty Simulation Drill with Triage Cards'
        ]
      },
      {
        number: 10,
        title: 'Hospital Clinical Internship & Rotation',
        hours: 600,
        topics: [
          'Supervised Emergency Department Shift Rotation',
          'ICU & Medical Resuscitation Room Postings',
          'Operation Theatre Anesthesia Airway Attachment',
          'Trauma Resuscitation Bay Shifts'
        ],
        practicalSkills: [
          'Minimum 50 Live Intubation & Procedure Logbook',
          'Independent Emergency Patient Handover',
          'Code Blue Resuscitation Participation'
        ]
      }
    ]
  },
  {
    id: 'acls',
    title: 'ACLS - Advanced Cardiovascular Life Support Masterclass',
    tagline: 'High-Performance Cardiac Resuscitation & Arrhythmia Management',
    category: 'Certification',
    duration: '2 Days Intensive',
    totalHours: 24,
    theoryHours: 8,
    practicalHours: 16,
    internshipHours: 0,
    eligibility: ['Doctors (MBBS/AYUSH)', 'Nurses', 'Paramedics'],
    badge: 'POPULAR WORKSHOP',
    feeINR: 8500,
    emiMonthlyINR: 0,
    rating: 4.9,
    certificateType: 'DEFEB ACLS Provider Certificate + 12 CME Credits',
    iconName: 'HeartPulse',
    description: 'Master cardiac arrest algorithms, PEA/Asystole management, unstable tachycardia cardioversion, symptomatic bradycardia pacing, and post-cardiac arrest care in a state-of-the-art simulation lab.',
    keySkills: [
      'Biphasic Defibrillation & Cardioversion',
      'Cardiac Arrest Algorithm Execution',
      'ECG Rhythm Recognition in High-Stress Scenarios',
      'Airway Management during CPR'
    ],
    modules: [
      {
        number: 1,
        title: 'High-Quality CPR & Airway Management',
        hours: 6,
        topics: ['Compressions Depth & Recoil', 'Bag-Valve-Mask Mechanics', 'Supraglottic Airway Insertion'],
        practicalSkills: ['SimPad MegaCode CPR Testing']
      },
      {
        number: 2,
        title: 'Cardiac Arrest & Arrhythmia MegaCode Drills',
        hours: 18,
        topics: ['VF/pVT Algorithms', 'Asystole/PEA Causes (5Hs & 5Ts)', 'Cardioversion & Pacing'],
        practicalSkills: ['Team Leader Simulation Scenarios']
      }
    ]
  },
  {
    id: 'airway-masterclass',
    title: 'Advanced Airway & Mechanical Ventilation Workshop',
    tagline: 'Never Fail an Intubation or Ventilator Setup Again',
    category: 'Workshop',
    duration: '3 Days Hands-On',
    totalHours: 30,
    theoryHours: 8,
    practicalHours: 22,
    internshipHours: 0,
    eligibility: ['MBBS', 'BAMS/BHMS Doctors', 'Post-Graduates', 'ICU Nurses'],
    badge: 'SKILL BOOSTER',
    feeINR: 12000,
    emiMonthlyINR: 0,
    rating: 4.95,
    certificateType: 'DEFEB Emergency Airway Specialist Certification',
    iconName: 'Wind',
    description: 'Exclusive hands-on workshop featuring direct video laryngoscopy, bougie-assisted intubation, awake fibreoptic demonstration, difficult airway algorithms, and ICU ventilator troubleshooting.',
    keySkills: [
      'Video Laryngoscopy (C-MAC & GlideScope)',
      'Emergency Surgical Airway / Cricothyroidotomy',
      'Rapid Sequence Intubation (RSI) Protocol',
      'Ventilator Dyssynchrony & ARDS Mechanics'
    ],
    modules: [
      {
        number: 1,
        title: 'Difficult Airway Prediction & RSI',
        hours: 10,
        topics: ['LEMON & SHORT Mnemonics', 'RSI Pharmacology & Neuromuscular Blockers'],
        practicalSkills: ['Video Laryngoscopy Station']
      },
      {
        number: 2,
        title: 'Mechanical Ventilation & ABG Analysis',
        hours: 20,
        topics: ['Initiating Mechanical Ventilation', 'Peak vs Plateau Pressure Management', 'ABG Compensation Calculations'],
        practicalSkills: ['Ventilator Simulation Lab Drill']
      }
    ]
  },
  {
    id: 'ecg-masterclass',
    title: '12-Lead ECG & Cardiac Emergency Masterclass',
    tagline: 'From Basic Waves to Complex STEMI Localization',
    category: 'Masterclass',
    duration: '2 Weeks Hybrid',
    totalHours: 40,
    theoryHours: 20,
    practicalHours: 20,
    internshipHours: 0,
    eligibility: ['Open to All Healthcare Professionals & Students'],
    badge: 'ESSENTIAL CLINICAL SKILL',
    feeINR: 5000,
    emiMonthlyINR: 0,
    rating: 4.88,
    certificateType: 'DEFEB ECG Diagnostic Expertise Certificate',
    iconName: 'Zap',
    description: 'Decipher 100+ real clinical ECG tracings. Learn to localize culprit arteries in acute MI, identify subtle ischemia equivalents (Wellens, De Winter), and manage tachyarrhythmias confidently.',
    keySkills: [
      'Anterior, Inferior, Lateral STEMI Localization',
      'Bundle Branch Blockes & Sgarbossa Criteria',
      'Chamber Enlargement & Electrolyte Disturbance Recognition',
      'VT vs SVT Differentiation'
    ],
    modules: [
      {
        number: 1,
        title: 'ECG Fundamentals & Axis Calculation',
        hours: 15,
        topics: ['Cardiac Conduction System', 'Hexaxial Reference System', 'Normal Variant Waves'],
        practicalSkills: ['Axis & Interval Tracing Drills']
      },
      {
        number: 2,
        title: 'Ischemia, Infarction & Arrhythmias',
        hours: 25,
        topics: ['Coronary Anatomy vs Leads', 'High-Risk ECG Patterns', 'Arrhythmia Management'],
        practicalSkills: ['100 Clinical ECG Case Challenge']
      }
    ]
  },
  {
    id: 'trauma-management',
    title: 'ATLS & Emergency Trauma Management Certification',
    tagline: 'Rapid Resuscitation in the Golden Hour',
    category: 'Certification',
    duration: '4 Days Intensive',
    totalHours: 45,
    theoryHours: 15,
    practicalHours: 30,
    internshipHours: 0,
    eligibility: ['Doctors (MBBS/AYUSH)', 'Trauma Nurses'],
    badge: 'GOLDEN HOUR EXPERT',
    feeINR: 15000,
    emiMonthlyINR: 0,
    rating: 4.92,
    certificateType: 'DEFEB Trauma Resuscitation Specialist',
    iconName: 'ShieldAlert',
    description: 'Comprehensive trauma resuscitation training adhering to international ATLS standards. Covers chest tube insertion, pelvic binder application, eFAST ultrasound scan, and head injury management.',
    keySkills: [
      'eFAST Ultrasound Scanning',
      'Intercostal Drain (ICD) Chest Tube Insertion',
      'Hemorrhagic Shock & Massive Transfusion Protocol',
      'Traumatic Brain Injury Triage'
    ],
    modules: [
      {
        number: 1,
        title: 'ATLS Primary Survey & Trauma Airway',
        hours: 20,
        topics: ['C-Spine Control', 'Thoracic Trauma Interventions'],
        practicalSkills: ['C-Spine Log Roll & ICD Station']
      },
      {
        number: 2,
        title: 'Abdominal Trauma & eFAST Ultrasound',
        hours: 25,
        topics: ['Free Fluid Identification', 'Pelvic Fracture Immobilization'],
        practicalSkills: ['Ultrasound Phantom FAST Drills']
      }
    ]
  },
  {
    id: 'pals',
    title: 'PALS & Neonatal Resuscitation Certification',
    tagline: 'Life-Saving Emergency Care for Infants and Children',
    category: 'Certification',
    duration: '2 Days',
    totalHours: 20,
    theoryHours: 6,
    practicalHours: 14,
    internshipHours: 0,
    eligibility: ['Doctors', 'Nurses', 'Pediatric Residents'],
    badge: 'PEDIATRIC CARE',
    feeINR: 7500,
    emiMonthlyINR: 0,
    rating: 4.87,
    certificateType: 'DEFEB PALS & NALS Specialist',
    iconName: 'Baby',
    description: 'Recognize and prevent pediatric respiratory failure and shock. Master intraosseous access, pediatric dose calculation, and neonatal resuscitation steps.',
    keySkills: [
      'Pediatric Assessment Triangle (PAT)',
      'Intraosseous (IO) Needle Access',
      'Broselow Resuscitation Tape Usage',
      'Neonatal Bag-Mask Resuscitation'
    ],
    modules: [
      {
        number: 1,
        title: 'Pediatric Cardiac & Respiratory Arrest',
        hours: 20,
        topics: ['Shock Classification', 'Pediatric Arrhythmias', 'Neonatal Resuscitation'],
        practicalSkills: ['Infant Manikin Defibrillation & IO Drills']
      }
    ]
  }
];
