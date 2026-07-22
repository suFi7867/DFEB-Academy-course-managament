import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    topic: 'Cardiology (12-Lead ECG)',
    question: 'A 52-year-old male presents with 2 hours of crushing chest pain. ECG shows 3mm ST-segment elevation in Leads V1, V2, V3, and V4 with reciprocal ST depression in II, III, aVF. Which coronary artery is occluded?',
    options: [
      'Left Anterior Descending Artery (LAD)',
      'Right Coronary Artery (RCA)',
      'Left Circumflex Artery (LCx)',
      'Posterior Descending Artery (PDA)'
    ],
    correctAnswerIndex: 0,
    explanation: 'ST-segment elevation in leads V1-V4 corresponds to the Anterior Wall of the left ventricle, which is supplied by the Left Anterior Descending (LAD) artery. This is a classic "Widowmaker" STEMI requiring immediate primary PCI.'
  },
  {
    id: 'q2',
    topic: 'Airway Management',
    question: 'During rapid sequence intubation (RSI) of a trauma patient with cervical spine injury, which airway management technique is contraindicated?',
    options: [
      'Head Tilt-Chin Lift maneuver without manual in-line stabilization',
      'Jaw Thrust maneuver with manual in-line stabilization',
      'Direct Video Laryngoscopy with a rigid bougie',
      'Supraglottic airway device insertion (I-Gel)'
    ],
    correctAnswerIndex: 0,
    explanation: 'Head Tilt-Chin Lift causes significant cervical spine extension and motion, which can aggravate spinal cord injury in suspected trauma patients. Jaw thrust with manual in-line cervical stabilization (MILS) is the required method.'
  },
  {
    id: 'q3',
    topic: 'ATLS Trauma',
    question: 'A 28-year-old male involved in a motorcycle accident presents with severe respiratory distress, tracheal deviation to the right, hyper-resonance on the left chest, and absent left breath sounds. BP is 80/50 mmHg. What is the immediate life-saving intervention?',
    options: [
      'Immediate needle decompression in the 2nd intercostal space mid-clavicular line (or 5th ICS anterior axillary line)',
      'Perform urgent chest X-ray to confirm pneumothorax',
      'Endotracheal intubation with 100% oxygen',
      'Start IV fluid resuscitation with 2 liters Normal Saline'
    ],
    correctAnswerIndex: 0,
    explanation: 'Tension Pneumothorax is a clinical diagnosis. Waiting for a Chest X-ray delays life-saving care. Immediate needle decompression relieves trapped intrapleural air pressure and prevents cardiovascular collapse.'
  },
  {
    id: 'q4',
    topic: 'ACLS Arrhythmias',
    question: 'A patient in the Emergency Department suddenly becomes unresponsive. The monitor shows Pulseless Electrical Activity (PEA) at a rate of 48 bpm. What is the primary medical therapy alongside high-quality CPR?',
    options: [
      'Epinephrine 1mg IV/IO every 3-5 minutes + Identify reversible causes (5Hs & 5Ts)',
      'Immediate 200J Biphasic Defibrillation',
      'Intravenous Amiodarone 300mg bolus',
      'Atropine 3mg IV push'
    ],
    correctAnswerIndex: 0,
    explanation: 'PEA is a non-shockable rhythm. Defibrillation is ineffective. The priority is immediate CPR, Epinephrine 1mg IV/IO as soon as possible, and rapid identification and treatment of reversible causes (Hypoxia, Hypovolemia, Hydrogen ion, Hypo/Hyperkalemia, Hypothermia, Tension pneumothorax, Tamponade, Toxins, Thrombosis).'
  },
  {
    id: 'q5',
    topic: 'Pediatric Resuscitation',
    question: 'What is the correct compression-to-ventilation ratio for two-healthcare provider CPR in a 4-year-old child according to PALS guidelines?',
    options: [
      '15 compressions to 2 ventilations (15:2)',
      '30 compressions to 2 ventilations (30:2)',
      '5 compressions to 1 ventilation (5:1)',
      'Continuous compressions with 1 breath every 10 seconds'
    ],
    correctAnswerIndex: 0,
    explanation: 'For infants and children, 2-provider resuscitation uses a 15:2 compression-to-ventilation ratio to provide adequate oxygenation for pediatric asphyxial arrest. Single-provider CPR uses 30:2.'
  }
];
