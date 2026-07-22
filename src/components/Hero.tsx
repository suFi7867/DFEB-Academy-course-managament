import React, { useState, useEffect } from 'react';
import { Activity, Play, Sparkles, Stethoscope, Video, CheckCircle2, ChevronRight, HeartPulse } from 'lucide-react';

interface HeroProps {
  onOpenEnroll: (courseId?: string) => void;
  onOpenAIAdvisor: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnroll, onOpenAIAdvisor, onNavigateSection }) => {
  const [bpm, setBpm] = useState(76);
  const [spo2, setSpo2] = useState(99);
  const [bp, setBp] = useState('120/80');
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);

  // Live vitals simulation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBpm(prev => Math.floor(74 + Math.random() * 6));
      setSpo2(prev => Math.floor(98 + Math.random() * 2));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] bg-[#040D1A] text-[#F8FBFF] overflow-hidden flex items-center py-12 lg:py-20 border-b border-white/10">
      {/* Background Radial Ambient Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#0B2C5D_0%,transparent_70%)] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_80%_80%,#0B2C5D_0%,transparent_60%)] opacity-20 pointer-events-none"></div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"></div>

      {/* Vertical Eyebrow Badge on Left Margin */}
      <div className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 h-64 border-l border-white/10 flex-col justify-center gap-4 z-10 pointer-events-none">
        <span className="-rotate-90 text-[10px] uppercase tracking-[0.3em] text-slate-500 origin-center whitespace-nowrap font-mono">
          Clinical Excellence & Resuscitation
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Main Content */}
          <div className="lg:col-span-7 space-y-8">

            {/* Top Eyebrow */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#7EE8FA]/10 border border-[#7EE8FA]/30 text-[#7EE8FA] text-[11px] font-mono tracking-widest uppercase rounded-sm">
              <span className="w-2 h-2 rounded-full bg-[#7EE8FA] animate-ping"></span>
              <span>Premier Emergency Academy</span>
              <span className="text-white/30">|</span>
              <span className="text-white font-bold">PGDEMS 2025-26</span>
            </div>

            {/* Geometric Balance Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[64px] leading-[0.95] font-black tracking-tight text-white uppercase">
              Become the Doctor <br />
              Every <span className="text-[#7EE8FA]">ER</span> Trusts.
            </h1>

            {/* Geometric Accent Border Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed border-l-2 border-red-600 pl-6">
              Master Emergency Medicine, Trauma Care, and Life Saving Procedures through India’s most advanced medical training command center.
            </p>

            {/* Value Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              {[
                '600 Hrs Hospital Internship',
                '990 Total Training Hours',
                'High-Fidelity Sim Lab',
                '12-Lead ECG & Airway Skills',
                'ATLS & ACLS Protocols',
                '100% Placement Support'
              ].map((point, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs font-mono text-slate-300 bg-white/5 border border-white/10 px-3 py-2 rounded-sm backdrop-blur-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7EE8FA] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Geometric Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => onOpenEnroll('pgdems')}
                className="px-8 py-4 bg-red-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(211,47,47,0.35)] rounded-sm flex items-center space-x-2"
              >
                <span>Enroll Now</span>
              </button>

              <button
                onClick={() => setIsPlayingDemo(true)}
                className="px-8 py-4 bg-white/10 border border-white/20 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-all rounded-sm flex items-center space-x-2"
              >
                <Play className="w-4 h-4 text-[#7EE8FA] fill-[#7EE8FA]" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* AI Advisor Callout Box */}
            <div className="pt-2">
              <button
                onClick={onOpenAIAdvisor}
                className="w-full sm:w-auto inline-flex items-center space-x-2 px-4 py-2.5 bg-[#071933] border border-[#7EE8FA]/30 text-xs font-mono text-slate-300 hover:text-white transition-all rounded-sm group"
              >
                <Sparkles className="w-4 h-4 text-[#7EE8FA] group-hover:rotate-12 transition-transform" />
                <span>Need degree advisory (MBBS / AYUSH / Nursing)? <strong className="text-[#7EE8FA] uppercase ml-1">Ask AI Advisor →</strong></span>
              </button>
            </div>

          </div>

          {/* Right Geometric Simulation Widget */}
          <div className="lg:col-span-5 relative h-[480px] flex items-center justify-center">

            {/* Concentric Geometric Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full border border-[#7EE8FA]/20 animate-pulse flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border border-[#7EE8FA]/40 flex items-center justify-center">
                  <svg viewBox="0 0 100 40" className="w-48 stroke-[#7EE8FA] stroke-2 fill-none">
                    <path d="M0 20 L20 20 L25 10 L30 30 L35 20 L100 20" strokeDasharray="2 2" opacity="0.5" />
                    <path d="M0 20 L20 20 L25 5 L35 35 L40 20 L60 20 L65 15 L70 25 L75 20 L100 20" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Top Right Floating Tech Card */}
            <div className="absolute top-2 right-2 w-52 p-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-sm shadow-2xl space-y-2">
              <div className="text-[10px] text-[#7EE8FA] uppercase font-bold tracking-widest font-mono">Airway Management</div>
              <div className="text-base font-bold text-white uppercase font-sans">Simulation v.4.0</div>
              <div className="h-1 w-full bg-white/10 overflow-hidden rounded-full">
                <div className="w-3/4 h-full bg-[#7EE8FA]"></div>
              </div>
              <p className="text-[10px] text-slate-400 font-mono">C-MAC Video Laryngoscopy</p>
            </div>

            {/* Bottom Left Floating Alert Card */}
            <div className="absolute bottom-6 left-2 w-60 p-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-sm shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-600/50 flex items-center justify-center shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></div>
                </div>
                <div>
                  <div className="text-[10px] text-red-500 uppercase font-bold tracking-widest font-mono">Emergency Response</div>
                  <div className="text-xs font-bold text-white uppercase font-sans">Trauma Protocol Active</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">HR: {bpm} BPM | SpO2: {spo2}%</div>
                </div>
              </div>
            </div>

            {/* Geometric Side Gauge Control Bar */}
            <div className="absolute top-1/2 right-12 -translate-y-1/2 w-5 bg-[#7EE8FA]/5 border border-[#7EE8FA]/20 h-44 flex flex-col justify-around py-4 rounded-full items-center">
              <div className="w-1.5 h-1.5 bg-[#7EE8FA] rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-[#7EE8FA] rounded-full opacity-40"></div>
              <div className="w-1.5 h-1.5 bg-[#7EE8FA] rounded-full opacity-40"></div>
              <div className="w-2.5 h-2.5 bg-red-600 rounded-full shadow-[0_0_10px_red]"></div>
            </div>

          </div>

        </div>
      </div>

      {/* Video Simulation Modal */}
      {isPlayingDemo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#071933] border border-white/20 rounded-sm max-w-3xl w-full p-6 text-white relative space-y-4">
            <button
              onClick={() => setIsPlayingDemo(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-bold"
            >
              ✕
            </button>
            <div className="flex items-center space-x-2 text-[#7EE8FA] font-mono text-xs uppercase tracking-widest">
              <Video className="w-4 h-4" />
              <span>DEFEB Virtual Simulation Lab Demo</span>
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight">Advanced High-Fidelity Trauma & Cardiac Resuscitation</h3>
            <div className="aspect-video bg-[#040D1A] rounded-sm overflow-hidden relative flex items-center justify-center border border-white/10">
              <div className="text-center p-6 space-y-3">
                <Activity className="w-16 h-16 text-[#7EE8FA] mx-auto animate-pulse" />
                <p className="text-sm text-slate-300 font-mono">
                  Interactive Airway, Intubation & CPR Clinical Decision Modules
                </p>
                <div className="flex justify-center space-x-3 text-xs font-mono">
                  <span className="px-3 py-1 bg-[#7EE8FA]/10 rounded-sm text-[#7EE8FA] border border-[#7EE8FA]/30">Zoll Defibrillator</span>
                  <span className="px-3 py-1 bg-red-600/20 rounded-sm text-red-400 border border-red-500/30">Laryngoscopy</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-xs text-slate-300 pt-2">
              <span className="font-mono">Hands-on clinical mastery in real hospital ER environments.</span>
              <button
                onClick={() => {
                  setIsPlayingDemo(false);
                  onOpenEnroll('pgdems');
                }}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest rounded-sm text-xs"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
