import React, { useState } from 'react';
import { EQUIPMENT_DATA } from '../data/equipmentData';
import { Cpu, Zap, Wind, Eye, Activity, CheckCircle2, ChevronRight } from 'lucide-react';

export const VirtualSimLab: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<'manikin' | 'defib' | 'vent' | 'monitor' | 'crashcart'>('manikin');

  const hotspots = [
    {
      id: 'manikin',
      title: 'Ambu SimPad Resuscitation Manikin',
      category: 'Simulated Patient',
      coords: { x: '45%', y: '50%' },
      description: 'Anatomically realistic airway for intubation, chest compressions depth sensors, carotid pulses, and dynamic ECG pupil responses.'
    },
    {
      id: 'defib',
      title: 'Zoll 200J Biphasic Defibrillator',
      category: 'Cardiac Arrest Station',
      coords: { x: '25%', y: '35%' },
      description: 'Provides real CPR depth and rate audio prompts, biphasic shock delivery, and transcutaneous pacing controls.'
    },
    {
      id: 'vent',
      title: 'Mindray SV300 ICU Ventilator',
      category: 'Airway & ICU Unit',
      coords: { x: '75%', y: '40%' },
      description: 'Teaches ventilator setup, PEEP adjustments, ABG compensation, and weaning protocols in respiratory failure.'
    },
    {
      id: 'monitor',
      title: '12-Lead Cardiac & Patient HUD Monitor',
      category: 'Diagnostic Telemetry',
      coords: { x: '50%', y: '25%' },
      description: 'Real-time telemetry showing invasive arterial lines, central venous pressure (CVP), SpO2, and continuous 12-lead ECG.'
    },
    {
      id: 'crashcart',
      title: 'Standardized Level-1 Emergency Crash Cart',
      category: 'Resuscitation Logistics',
      coords: { x: '80%', y: '70%' },
      description: 'Color-coded ACLS & ATLS drug drawers, pediatric Broselow tape, and emergency airway intubation trays.'
    }
  ];

  const selectedData = hotspots.find(h => h.id === activeHotspot) || hotspots[0];

  return (
    <section id="simlab" className="py-24 bg-gradient-to-b from-[#041026] via-[#081a38] to-[#06152e] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>360° HIGH-FIDELITY SIMULATION ROOM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Step Inside DEFEB’s <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
              Emergency Resuscitation Lab
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Click the interactive hotspots on the simulation bay below to inspect how candidates practice acute emergency care under mentor supervision.
          </p>
        </div>

        {/* Interactive Sim Room Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Stage Room Visualization */}
          <div className="lg:col-span-8 bg-[#020b18] border border-cyan-500/30 rounded-3xl p-6 relative aspect-video flex items-center justify-center overflow-hidden shadow-2xl group">
            {/* Background Medical Bay Image / Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/30 via-[#04132b] to-[#020914]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffcc08_1px,transparent_1px),linear-gradient(to_bottom,#00ffcc08_1px,transparent_1px)] bg-[size:20px_20px]"></div>

            {/* Room Schematic Background Graphics */}
            <div className="relative w-full h-full flex items-center justify-center opacity-80">
              <div className="w-3/4 h-1/2 border-2 border-cyan-500/20 rounded-2xl flex items-center justify-center bg-cyan-950/20 relative">
                <span className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest absolute top-2 left-3">
                  RESUSCITATION BAY 1 (SIMULATION MODE)
                </span>
                <div className="w-32 h-16 bg-blue-900/30 border border-cyan-400/40 rounded-lg flex items-center justify-center text-xs font-bold text-cyan-300">
                  EMERGENCY BED
                </div>
              </div>
            </div>

            {/* Clickable Hotspot Pins */}
            {hotspots.map((spot) => {
              const isSelected = spot.id === activeHotspot;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot.id as any)}
                  style={{ top: spot.coords.y, left: spot.coords.x }}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all group/pin z-20`}
                >
                  <span className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all ${
                    isSelected
                      ? 'bg-red-600 border-white text-white shadow-lg shadow-red-500/50 scale-125 animate-pulse'
                      : 'bg-cyan-500/80 border-cyan-200 text-slate-950 hover:scale-110'
                  }`}>
                    <span className="text-xs font-black">●</span>
                  </span>
                  <span className="absolute left-1/2 -translate-x-1/2 top-9 px-2 py-0.5 rounded bg-slate-950/90 text-[10px] font-mono text-cyan-300 border border-cyan-500/30 whitespace-nowrap opacity-90 group-hover/pin:opacity-100">
                    {spot.title.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Hotspot Information */}
          <div className="lg:col-span-4 bg-[#081e3f] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center space-x-2 text-xs font-mono font-extrabold uppercase tracking-widest text-cyan-400">
              <Eye className="w-4 h-4 text-cyan-400" />
              <span>SIMULATION BAY INSPECTOR</span>
            </div>

            <div>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-cyan-950 text-cyan-300 border border-cyan-400/30">
                {selectedData.category}
              </span>
              <h3 className="text-2xl font-black text-white mt-2">
                {selectedData.title}
              </h3>
            </div>

            <p className="text-xs text-slate-200 leading-relaxed bg-[#030e20] p-4 rounded-xl border border-cyan-500/15">
              {selectedData.description}
            </p>

            <div className="space-y-2 pt-2 text-xs text-cyan-100">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Supervised by MD Emergency Specialists</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Live Audio/Visual Feedback Recording</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Patient Risk - Maximum Skill Repetition</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
