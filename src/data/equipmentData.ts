import { EquipmentItem } from '../types';

export const EQUIPMENT_DATA: EquipmentItem[] = [
  {
    id: 'defib-zoll',
    name: 'Zoll R Series Biphasic Defibrillator',
    category: 'Cardiac Resuscitation',
    specs: 'Real CPR Help®, See-Thru CPR®, 200J Biphasic Waveform, Transcutaneous Pacing',
    simulationRole: 'Used in ACLS MegaCode simulation to practice defibrillation, cardioversion, and pacing.',
    icon: 'Zap',
    description: 'High-end biphasic defibrillator with real-time audio/visual CPR depth and rate feedback for high-quality resuscitation.'
  },
  {
    id: 'vent-mindray',
    name: 'Mindray SV300 ICU Ventilator',
    category: 'Respiratory & ICU',
    specs: 'Comprehensive modes (V-AC, P-AC, PRVC, SIMV, CPAP/PSV), NIV, High Flow Nasal Cannula (HFNC)',
    simulationRole: 'Practiced by PGDEMS & Airway workshop students for ARDS, COPD, and weaning protocols.',
    icon: 'Wind',
    description: 'Turbine-based portable ICU ventilator used to teach advanced mechanical ventilation modes and lung protective strategies.'
  },
  {
    id: 'laryngoscope-video',
    name: 'C-MAC / GlideScope Video Laryngoscope',
    category: 'Airway Management',
    specs: 'High-Resolution CMOS Sensor, Anti-Fog Blade, Digital Video Recording Output',
    simulationRole: 'Ensures 100% glottic view in difficult airway scenarios and cervical spine restricted patients.',
    icon: 'Eye',
    description: 'State-of-the-art video laryngoscopy system used to train candidates on first-pass intubation success.'
  },
  {
    id: 'usg-sonosite',
    name: 'Fujifilm Sonosite Sonograph FAST Probe',
    category: 'Point-of-Care Imaging',
    specs: 'Phased Array Cardiac & Abdominal Transducer, Color Doppler, 5-Second Boot Time',
    simulationRole: 'Utilized for eFAST trauma scans, cardiac contractility assessment, and central venous line placement.',
    icon: 'Activity',
    description: 'Rugged point-of-care ultrasound system used to teach bedside emergency diagnostic scanning.'
  },
  {
    id: 'manikin-ambu',
    name: 'Ambu SimPad Advanced Wireless Resuscitation Manikin',
    category: 'Simulation Technology',
    specs: 'Anatomically Accurate Airway, Dynamic Pupil Reaction, Carotid Pulses, Wireless SimPad Control',
    simulationRole: 'Provides computerized objective feedback during CPR, intubation, and emergency drug responses.',
    icon: 'Cpu',
    description: 'High-fidelity simulation manikin that responds dynamically to drug dosages and ventilation pressures.'
  },
  {
    id: 'crash-cart',
    name: 'DEFEB Level-1 Emergency Crash Cart',
    category: 'Resuscitation Logistics',
    specs: 'Color-Coded Drawer System (Airway, Cardiac, Drugs, IV Access, Pediatric Broselow)',
    simulationRole: 'Teaches emergency team coordination, rapid drug withdrawal, and equipment localization.',
    icon: 'Package',
    description: 'Fully stocked emergency trolley with standardized ACLS/ATLS medications and equipment layout.'
  }
];
