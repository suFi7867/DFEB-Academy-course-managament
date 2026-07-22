import React, { useState } from 'react';
import { CheckCircle2, Zap, Wind, HeartPulse, ShieldAlert, Activity, Syringe, Stethoscope, ChevronRight } from 'lucide-react';

export const SkillsTimeline: React.FC = () => {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);

  const skillsList = [
    {
      title: 'Airway Management & Intubation',
      category: 'Airway & Ventilation',
      hoursSpent: '80 Hours',
      description: 'Bag-Valve-Mask ventilation, OPA/NPA placement, Direct & Video Laryngoscopy (C-MAC/GlideScope), Endotracheal Intubation, LMA/I-Gel insertion, and Surgical Cricothyroidotomy.',
      icon: Wind
    },
    {
      title: '12-Lead ECG & STEMI Localization',
      category: 'Emergency Cardiology',
      hoursSpent: '90 Hours',
      description: 'Rapid 10-minute ECG interpretation, anterior/inferior/lateral wall STEMI localization, Sgarbossa criteria, arrhythmia identification, and synchronized biphasic cardioversion.',
      icon: HeartPulse
    },
    {
      title: 'High-Quality CPR & ACLS MegaCode',
      category: 'Cardiac Resuscitation',
      hoursSpent: '45 Hours',
      description: 'High-performance CPR with chest compression depth/recoil feedback, PEA/Asystole algorithms, manual defibrillation, and post-cardiac arrest targeted temperature management.',
      icon: Zap
    },
    {
      title: 'Pediatric Resuscitation (PALS & NALS)',
      category: 'Pediatric Emergencies',
      hoursSpent: '70 Hours',
      description: 'Pediatric Assessment Triangle (PAT), Broselow tape dosage calculation, intraosseous (IO) drilling, pediatric defibrillation, and neonatal radiant warmer resuscitation.',
      icon: Activity
    },
    {
      title: 'ATLS Trauma & Primary Survey',
      category: 'Poly-Trauma Care',
      hoursSpent: '85 Hours',
      description: 'ABCDE primary and secondary trauma survey, pelvic binder application, log-roll spinal immobilization, and massive transfusion protocol execution during hemorrhagic shock.',
      icon: ShieldAlert
    },
    {
      title: 'Resuscitation Pharmacology & Inotropes',
      category: 'Emergency Drugs',
      hoursSpent: '60 Hours',
      description: 'Noradrenaline, Adrenaline, Vasopressin infusion calculations, anaphylaxis IM epinephrine, stroke thrombolytic windows, and organophosphate toxicology antidotes.',
      icon: Syringe
    },
    {
      title: 'Rapid Patient & Triage Assessment',
      category: 'Clinical Assessment',
      hoursSpent: '40 Hours',
      description: 'START & SALT mass casualty triage tagging, GCS rapid scoring, NIHSS stroke scale calculation, and structured SBAR emergency patient handovers.',
      icon: Stethoscope
    },
    {
      title: 'Mechanical Ventilation Basics & ABG',
      category: 'ICU Procedures',
      hoursSpent: '80 Hours',
      description: 'Ventilator mode setup (AC, SIMV, PSV, PEEP), lung protective ventilation in ARDS, peak vs plateau pressure monitoring, and bedside ABG acid-base compensation calculations.',
      icon: Wind
    },
    {
      title: 'Emergency Needle Decompression & ICD',
      category: 'Thoracic Emergencies',
      hoursSpent: '35 Hours',
      description: 'Immediate needle decompression for tension pneumothorax in 2nd/5th intercostal space, chest tube (ICD) insertion, and underwater seal bottle management.',
      icon: ShieldAlert
    },
    {
      title: 'Invasive Vascular Access & Central Lines',
      category: 'Procedures & Access',
      hoursSpent: '50 Hours',
      description: 'Ultrasound-guided Internal Jugular & Subclavian Central Line cannulation, Radial Arterial Line insertion, and peripheral EZ-IO intraosseous drilling.',
      icon: Syringe
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#071936] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>PRACTICAL COMPETENCY TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            100+ Emergency Skills <br />
            <span className="bg-gradient-to-r from-cyan-300 to-sky-100 bg-clip-text text-transparent">
              You Will Master in PGDEMS
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Aligned directly with DEFEB’s Post Graduate Diploma curriculum, every student logs individual competency verification in these high-stakes procedural stations.
          </p>
        </div>

        {/* Skills Interactive Grid & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Skill Selector Timeline Buttons */}
          <div className="lg:col-span-5 space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {skillsList.map((skill, idx) => {
              const IconComp = skill.icon;
              const isSelected = activeSkillIndex === idx;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveSkillIndex(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all border flex items-center justify-between ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-transparent border-cyan-400 text-white shadow-lg'
                      : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-cyan-500 border-cyan-300 text-slate-950 font-bold' : 'bg-white/5 border-white/10 text-cyan-300'
                    }`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wide">
                        {skill.category}
                      </p>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {skill.title}
                      </h4>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 text-cyan-400 transition-transform ${isSelected ? 'translate-x-1 text-cyan-300' : 'opacity-40'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Skill High-Fidelity Detail Card */}
          <div className="lg:col-span-7 bg-[#091f42] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-cyan-400">
                  PROCEDURAL COMPETENCY #{activeSkillIndex + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {skillsList[activeSkillIndex].title}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                {skillsList[activeSkillIndex].hoursSpent}
              </span>
            </div>

            <p className="text-slate-200 text-sm leading-relaxed bg-[#030e20] p-5 rounded-2xl border border-cyan-500/20">
              {skillsList[activeSkillIndex].description}
            </p>

            {/* Checklist items */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                DEFEB Skill Logbook Criteria:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                <div className="flex items-center space-x-2 bg-white/5 p-2.5 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Simulated Practice on Manikins</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 p-2.5 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mentor-Evaluated Speed & Precision</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 p-2.5 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>50+ Logged Hospital Rotations</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 p-2.5 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Official DEFEB Competency Seal</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
