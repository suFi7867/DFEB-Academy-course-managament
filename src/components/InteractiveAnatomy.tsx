import React, { useState } from 'react';
import { ANATOMY_REGIONS } from '../data/anatomyData';
import { AnatomyRegion } from '../types';
import { Activity, ShieldAlert, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

interface InteractiveAnatomyProps {
  onOpenEnroll: (courseId?: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const InteractiveAnatomy: React.FC<InteractiveAnatomyProps> = ({ onOpenEnroll, onNavigateSection }) => {
  const [selectedRegion, setSelectedRegion] = useState<AnatomyRegion>(ANATOMY_REGIONS[0]);

  return (
    <section id="anatomy" className="py-20 bg-[#040D1A] text-white relative overflow-hidden border-b border-white/10">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#7EE8FA]/10 border border-[#7EE8FA]/30 text-[#7EE8FA] text-xs font-mono tracking-widest uppercase rounded-sm">
            <Activity className="w-3.5 h-3.5 text-[#7EE8FA]" />
            <span>INTERACTIVE ANATOMY EXPLORER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
            Click Organ Systems to Reveal <br />
            <span className="text-[#7EE8FA]">
              Emergency Clinical Skills
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base border-l-2 border-red-600 pl-4 inline-block text-left">
            Emergency medicine requires systemic mastery. Select any organ system on the 3D anatomical silhouette below to explore DEFEB’s exact curriculum modules, emergency procedures, and case scenarios.
          </p>
        </div>

        {/* Interactive Layout: Left Silhouette Map, Right Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Silhouette SVG */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-md aspect-[1/1.6] bg-[#071933] rounded-sm border border-white/10 p-6 shadow-2xl flex items-center justify-center backdrop-blur-xl overflow-hidden group">

              {/* Body Outline SVG */}
              <svg className="w-full h-full max-h-[480px]" viewBox="0 0 400 650" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M200,40 C215,40 225,55 225,75 C225,95 215,105 200,105 C185,105 175,95 175,75 C175,55 185,40 200,40 Z M200,105 L200,120 M175,120 L225,120 L260,150 L275,260 L255,270 L240,170 L230,170 L235,320 L210,320 L210,170 L190,170 L190,320 L165,320 L170,170 L160,170 L145,270 L125,260 L140,150 Z M210,320 L225,480 L235,620 L205,620 L195,490 L190,490 L180,620 L150,620 L160,480 L175,320 Z"
                  stroke="rgba(126, 232, 250, 0.3)"
                  strokeWidth="2"
                  fill="rgba(11, 44, 93, 0.4)"
                  strokeDasharray="4 4"
                />

                {ANATOMY_REGIONS.map((region) => {
                  const isSelected = selectedRegion.id === region.id;
                  return (
                    <g
                      key={region.id}
                      onClick={() => setSelectedRegion(region)}
                      className="cursor-pointer group/node"
                    >
                      <circle
                        cx={region.svgCoordinates.cx}
                        cy={region.svgCoordinates.cy}
                        r={region.svgCoordinates.r + (isSelected ? 10 : 4)}
                        fill={isSelected ? '#7EE8FA' : region.color}
                        opacity={isSelected ? '0.35' : '0.15'}
                        className={isSelected ? 'animate-ping' : 'group-hover/node:opacity-30 transition-opacity'}
                      />

                      <circle
                        cx={region.svgCoordinates.cx}
                        cy={region.svgCoordinates.cy}
                        r={region.svgCoordinates.r}
                        fill={isSelected ? '#7EE8FA' : region.color}
                        stroke="#ffffff"
                        strokeWidth={isSelected ? '3' : '1.5'}
                        className="transition-all duration-300"
                      />

                      <text
                        x={region.svgCoordinates.cx + (region.svgCoordinates.cx > 200 ? 30 : -30)}
                        y={region.svgCoordinates.cy + 4}
                        fill={isSelected ? '#7EE8FA' : '#94a3b8'}
                        fontSize="11"
                        fontWeight="bold"
                        textAnchor={region.svgCoordinates.cx > 200 ? 'start' : 'end'}
                        className="font-mono transition-colors uppercase tracking-wider"
                      >
                        {region.name}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Bottom Instructions HUD */}
              <div className="absolute bottom-3 left-4 right-4 bg-[#040D1A]/90 border border-white/10 rounded-sm py-2 px-3 text-center text-[11px] text-[#7EE8FA] font-mono">
                👆 Select any pulsing node to view clinical modules
              </div>
            </div>

            {/* Quick Chips */}
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {ANATOMY_REGIONS.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRegion(r)}
                  className={`px-3 py-1.5 rounded-sm text-xs font-mono transition-all uppercase tracking-wider ${
                    selectedRegion.id === r.id
                      ? 'bg-[#7EE8FA] text-slate-950 font-bold shadow-[0_0_15px_rgba(126,232,250,0.4)]'
                      : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                  }`}
                >
                  {r.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Selected System Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#071933] border border-white/10 rounded-sm p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">

              {/* Organ Header */}
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7EE8FA]"></span>
                    <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#7EE8FA]">
                      SYSTEM FOCUS: {selectedRegion.system}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase mt-1">
                    {selectedRegion.name} Emergency Skills
                  </h3>
                  <p className="text-slate-300 text-xs mt-1 font-mono">
                    <strong className="text-[#7EE8FA]">Focus Area:</strong> {selectedRegion.anatomicalFocus}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-200 text-sm leading-relaxed bg-[#040D1A] p-4 rounded-sm border border-white/10">
                {selectedRegion.description}
              </p>

              {/* Key Curriculum Modules */}
              <div>
                <h4 className="text-xs font-mono font-bold text-[#7EE8FA] uppercase tracking-wider mb-3 flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-[#7EE8FA]" />
                  <span>DEFEB PGDEMS Curriculum Modules Included:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedRegion.keyModules.map((mod, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-200 bg-white/5 p-2.5 rounded-sm border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[#7EE8FA] shrink-0 mt-0.5" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* High-Risk Scenarios */}
              <div>
                <h4 className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider mb-3 flex items-center space-x-2">
                  <ShieldAlert className="w-4 h-4 text-red-500" />
                  <span>Resuscitation Cases Trained in Sim Lab:</span>
                </h4>
                <div className="space-y-2">
                  {selectedRegion.emergencyCases.map((c, idx) => (
                    <div key={idx} className="flex items-center space-x-2.5 text-xs text-slate-200 bg-red-950/30 border border-red-500/20 px-3 py-2 rounded-sm font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-300 font-mono">
                  <span>Covered in: </span>
                  <strong className="text-white">PGDEMS, ACLS & Airway Masterclass</strong>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => onNavigateSection('quiz')}
                    className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase tracking-widest rounded-sm transition-all"
                  >
                    Quiz
                  </button>
                  <button
                    onClick={() => onOpenEnroll('pgdems')}
                    className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest rounded-sm shadow-[0_0_15px_rgba(211,47,47,0.3)] flex items-center space-x-1.5"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
