import React, { useState } from 'react';
import { Laptop, Activity, Syringe, BookOpen, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

export const StudentDashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'logbook' | 'dosing' | 'simcases'>('logbook');

  // Emergency Drug Dosing Calculator Interactive Tool
  const [patientWeightKg, setPatientWeightKg] = useState<number>(70);
  const [selectedDrug, setSelectedDrug] = useState<'Noradrenaline' | 'Adrenaline' | 'Amiodarone' | 'Propofol'>('Noradrenaline');

  const getDoseCalculation = () => {
    if (selectedDrug === 'Noradrenaline') {
      const mcgMin = (0.05 * patientWeightKg).toFixed(1);
      return `${mcgMin} mcg/min initial infusion rate (0.05 mcg/kg/min for septic shock)`;
    }
    if (selectedDrug === 'Adrenaline') {
      return `1mg IV/IO push (1:10,000 solution) every 3-5 mins during cardiac arrest`;
    }
    if (selectedDrug === 'Amiodarone') {
      return `300mg IV/IO bolus in VF/pVT, followed by 150mg second dose if persistent`;
    }
    return `${(1.5 * patientWeightKg).toFixed(0)}mg IV bolus (1.5 mg/kg for RSI induction)`;
  };

  return (
    <section id="lms-preview" className="py-24 bg-gradient-to-b from-[#041026] via-[#081a38] to-[#06152e] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Laptop className="w-3.5 h-3.5 text-cyan-400" />
            <span>STUDENT PORTAL PREVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            DEFEB Student LMS & <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
              Clinical Decision Tools
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Every enrolled candidate gains lifetime access to DEFEB's digital learning platform, live procedure logbooks, and emergency drug dosing calculators.
          </p>
        </div>

        {/* Portal Window Container */}
        <div className="bg-[#081e3f] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl max-w-5xl mx-auto space-y-6">

          {/* Top Bar Navigation Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
            {[
              { id: 'logbook', label: '1. Skill Verification Logbook', icon: CheckCircle2 },
              { id: 'dosing', label: '2. Emergency Drug Dose Tool', icon: Syringe },
              { id: 'simcases', label: '3. Virtual ER Case Bank', icon: Activity },
            ].map((tab) => {
              const IconComp = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === tab.id
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                      : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab 1: Logbook */}
          {activeTab === 'logbook' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Logged Hospital Procedures (50+ Required)</h3>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-500/30">
                  Status: 38 / 50 Verified
                </span>
              </div>

              <div className="space-y-2 font-mono text-xs">
                {[
                  { procedure: 'Endotracheal Intubation (Video Laryngoscopy)', status: 'VERIFIED BY MENTOR', date: '14 May 2025', location: 'Apollo ER Bay 2' },
                  { procedure: '12-Lead ECG STEMI Localization & Defibrillation', status: 'VERIFIED BY MENTOR', date: '18 May 2025', location: 'Fortis ICU Unit' },
                  { procedure: 'Intercostal Drain (ICD) Chest Tube Insertion', status: 'VERIFIED BY MENTOR', date: '22 May 2025', location: 'Trauma Bay 1' },
                  { procedure: 'Ultrasound-Guided Internal Jugular Central Line', status: 'PENDING SIGN-OFF', date: '28 May 2025', location: 'Govt Trauma Center' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#030d1d] p-3.5 rounded-xl border border-white/5 flex items-center justify-between text-slate-200">
                    <div>
                      <p className="font-bold text-white">{item.procedure}</p>
                      <p className="text-[10px] text-slate-400">{item.location} • {item.date}</p>
                    </div>
                    <span className={`px-2.5 py-1 rounded text-[10px] font-bold ${
                      item.status.includes('VERIFIED') ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30' : 'bg-amber-500/20 text-amber-300 border border-amber-400/30'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Drug Dosing Calculator */}
          {activeTab === 'dosing' && (
            <div className="space-y-4 animate-fadeIn text-xs">
              <h3 className="text-lg font-bold text-white">Emergency Resuscitation Drug Calculator</h3>
              <p className="text-slate-300">Select a resuscitation drug and patient weight in kg to calculate precise infusion rates.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#030d1d] p-5 rounded-2xl border border-cyan-500/20">
                <div>
                  <label className="block font-mono font-bold text-cyan-300 mb-1">Select Resuscitation Medication:</label>
                  <select
                    value={selectedDrug}
                    onChange={(e) => setSelectedDrug(e.target.value as any)}
                    className="w-full bg-[#081e3f] border border-cyan-500/30 rounded-xl p-3 text-white focus:outline-none"
                  >
                    <option value="Noradrenaline">Noradrenaline (Norepinephrine)</option>
                    <option value="Adrenaline">Adrenaline (Epinephrine)</option>
                    <option value="Amiodarone">Amiodarone (Cordarone)</option>
                    <option value="Propofol">Propofol (Sedative / Induction)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono font-bold text-cyan-300 mb-1">Patient Weight (kg): {patientWeightKg} kg</label>
                  <input
                    type="range"
                    min="30"
                    max="120"
                    value={patientWeightKg}
                    onChange={(e) => setPatientWeightKg(Number(e.target.value))}
                    className="w-full accent-cyan-400 mt-2"
                  />
                </div>
              </div>

              <div className="bg-cyan-950/40 p-5 rounded-2xl border border-cyan-400/30 space-y-1">
                <span className="font-mono font-bold text-cyan-300 text-[10px] uppercase">CALCULATED RESUSCITATION DOSAGE:</span>
                <p className="text-sm font-bold text-white font-mono">{getDoseCalculation()}</p>
              </div>
            </div>
          )}

          {/* Tab 3: Virtual ER Cases */}
          {activeTab === 'simcases' && (
            <div className="space-y-4 animate-fadeIn text-xs">
              <h3 className="text-lg font-bold text-white">Interactive Case Library (100+ Emergency Scenarios)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: 'Case #14: Acute Anterior STEMI with Pulmonary Edema', level: 'ADVANCED CARDIOLOGY', modules: 'PGDEMS Module 3' },
                  { title: 'Case #28: Traumatic Flail Chest & Tension Pneumothorax', level: 'ATLS POLY-TRAUMA', modules: 'PGDEMS Module 4' },
                  { title: 'Case #42: Pediatric Status Epilepticus in Septic Shock', level: 'PALS RESUSCITATION', modules: 'PGDEMS Module 6' },
                  { title: 'Case #59: Organophosphate Poisoning & Secretion Management', level: 'TOXICOLOGY', modules: 'PGDEMS Module 5' },
                ].map((c, idx) => (
                  <div key={idx} className="bg-[#030d1d] p-4 rounded-xl border border-white/10 space-y-2">
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-cyan-500/20 text-cyan-300">{c.level}</span>
                    <p className="font-bold text-white text-xs">{c.title}</p>
                    <p className="text-[10px] text-slate-400 font-mono">{c.modules}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
