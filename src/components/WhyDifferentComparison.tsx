import React, { useState } from 'react';
import { EQUIPMENT_DATA } from '../data/equipmentData';
import { EquipmentItem } from '../types';
import { Check, X, ShieldAlert, Cpu, Zap, Wind, Eye, Activity, Package, ArrowRight } from 'lucide-react';

export const WhyDifferentComparison: React.FC = () => {
  const [selectedEq, setSelectedEq] = useState<EquipmentItem>(EQUIPMENT_DATA[0]);

  const comparisonRows = [
    {
      parameter: 'Primary Training Focus',
      others: 'Rote theory lectures & textbook memorization',
      defeb: '100% Hands-on simulation drills + 600 Hours Hospital Internship',
      icon: Activity
    },
    {
      parameter: 'Batch Size & Mentorship',
      others: 'Large crowded batches (50 - 100 students)',
      defeb: 'Small focused squads (15 - 20 doctors per batch max)',
      icon: Cpu
    },
    {
      parameter: 'Simulation Equipment',
      others: 'Basic plastic arms, missing active monitors or video laryngoscopes',
      defeb: 'High-fidelity Ambu SimPads, Zoll 200J Defibrillators & C-MAC Laryngoscopes',
      icon: Zap
    },
    {
      parameter: 'Hospital ER & ICU Rotation',
      others: 'Minimal observation-only hospital exposure',
      defeb: '600 Hours Mandatory Rotation in Level-1 ERs with 50+ Logged Intubations',
      icon: ShieldAlert
    },
    {
      parameter: 'Faculty Credentials',
      others: 'General medical tutors or junior lecturers',
      defeb: 'MD/DNB Emergency Specialists, Cleveland Clinic & EDIC Alums',
      icon: Eye
    },
    {
      parameter: 'Career & Salary Impact',
      others: 'Paper certificate with minimal salary progression',
      defeb: '35% to 140% verified salary boost into Senior ER Officer & ICU Registrar roles',
      icon: Package
    }
  ];

  return (
    <section id="why-different" className="py-24 bg-gradient-to-b from-[#06152e] via-[#091f42] to-[#041026] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <span>THE BENCHMARK IN MEDICAL EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Why DEFEB Training Is <span className="bg-gradient-to-r from-cyan-300 to-sky-100 bg-clip-text text-transparent">Fundamentally Different</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            We don't train students to pass written exams. We train healthcare professionals to lead cardiac arrest resuscitations, secure difficult airways, and manage trauma bays independently.
          </p>
        </div>

        {/* Split Grid: Left 3D Equipment Showcase, Right Comparison Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Interactive Simulation Equipment Lab */}
          <div className="lg:col-span-5 bg-[#030e20] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl backdrop-blur-xl">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>3D SIMULATION EQUIPMENT LAB</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Train On Real Life-Saving Medical Technology
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Select an equipment item to inspect its role in DEFEB’s simulation lab:
              </p>

              {/* Equipment Cards Selector Tabs */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                {EQUIPMENT_DATA.map((eq) => (
                  <button
                    key={eq.id}
                    onClick={() => setSelectedEq(eq)}
                    className={`p-3 rounded-xl text-left transition-all border text-xs font-semibold ${
                      selectedEq.id === eq.id
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-md'
                        : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <p className="font-bold truncate">{eq.name}</p>
                    <p className="text-[10px] text-cyan-400/80 font-mono mt-0.5">{eq.category}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Equipment Display Card */}
            <div className="bg-[#081b3b] border border-cyan-500/30 p-5 rounded-2xl space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-xs font-mono font-bold text-amber-300 uppercase">
                  EQUIPMENT SPECIFICATION
                </span>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-400/30">
                  {selectedEq.category}
                </span>
              </div>

              <h4 className="text-lg font-black text-white">
                {selectedEq.name}
              </h4>

              <p className="text-xs text-slate-200 leading-relaxed font-medium">
                {selectedEq.description}
              </p>

              <div className="bg-[#030d1d] p-3 rounded-xl border border-white/5 space-y-1 text-xs">
                <p className="text-[10px] font-mono font-bold text-cyan-400">ROLE IN DEFEB SIMULATION:</p>
                <p className="text-slate-300 text-[11px] leading-snug">{selectedEq.simulationRole}</p>
              </div>

              <div className="text-[10px] font-mono text-slate-400">
                <strong>Tech Specs:</strong> {selectedEq.specs}
              </div>
            </div>
          </div>

          {/* Right Column: Comparison Table (Others vs DEFEB) */}
          <div className="lg:col-span-7 bg-[#081e3f]/90 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4 mb-4">
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Traditional Institutes vs <span className="text-cyan-300">DEFEB Academy</span>
                </h3>
                <span className="text-xs font-mono font-bold text-red-400 bg-red-950/60 px-3 py-1 rounded-full border border-red-500/30">
                  COMPARISON
                </span>
              </div>

              <div className="space-y-4">
                {comparisonRows.map((row, idx) => (
                  <div key={idx} className="bg-[#030f24] border border-cyan-500/15 rounded-2xl p-4 text-xs space-y-3">
                    <div className="flex items-center space-x-2 font-mono font-bold text-cyan-300 text-xs border-b border-white/5 pb-1.5">
                      <row.icon className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{row.parameter}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Traditional */}
                      <div className="bg-red-950/20 border border-red-500/20 p-2.5 rounded-xl text-slate-300 flex items-start space-x-2">
                        <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-red-300 text-[10px] uppercase font-mono">Other Academies</p>
                          <p className="text-[11px] text-slate-300 leading-snug">{row.others}</p>
                        </div>
                      </div>

                      {/* DEFEB */}
                      <div className="bg-cyan-950/40 border border-cyan-400/40 p-2.5 rounded-xl text-white flex items-start space-x-2 shadow-sm">
                        <Check className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-cyan-300 text-[10px] uppercase font-mono">DEFEB Academy</p>
                          <p className="text-[11px] text-cyan-100 font-semibold leading-snug">{row.defeb}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
