import React from 'react';
import { Activity, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenEnroll: (courseId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenEnroll }) => {
  return (
    <footer className="bg-[#040D1A] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      
      {/* Animated Heartbeat ECG Trace Line */}
      <div className="w-full h-10 bg-gradient-to-r from-transparent via-[#7EE8FA]/10 to-transparent flex items-center justify-center overflow-hidden mb-12">
        <svg className="w-full h-full text-[#7EE8FA] opacity-50 stroke-current fill-none" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path
            d="M 0,30 L 300,30 L 310,10 L 320,50 L 330,5 L 340,55 L 350,30 L 600,30 L 610,10 L 620,50 L 630,5 L 640,55 L 650,30 L 900,30 L 910,10 L 920,50 L 930,5 L 940,55 L 950,30 L 1200,30"
            strokeWidth="2"
            strokeDasharray="1200"
            strokeDashoffset="0"
            className="animate-pulse"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">

          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-red-600 rounded-sm flex items-center justify-center font-black text-white text-lg shadow-[0_0_15px_rgba(211,47,47,0.4)]">
                D
              </div>
              <div>
                <span className="text-xl font-black tracking-tighter text-white uppercase font-sans">
                  DEFEB<span className="text-red-500">.ACADEMY</span>
                </span>
                <p className="text-[10px] font-mono tracking-widest text-[#7EE8FA] uppercase">
                  EMERGENCY CARE EXCELLENCE
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              India’s premier academy for Emergency Medicine, Critical Care, and ICU resuscitation training. Transforming healthcare professionals into confidence-backed clinical leaders through 990 hours of simulation and Level-1 hospital rotations.
            </p>

            <div className="pt-2 flex items-center space-x-4 text-xs text-slate-300">
              <div className="flex items-center space-x-1.5 text-[#7EE8FA] font-mono">
                <ShieldCheck className="w-4 h-4 text-[#7EE8FA]" />
                <span>Govt. Recognized University Partner</span>
              </div>
            </div>
          </div>

          {/* Col 2: Academic Programs */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold text-[#7EE8FA] uppercase tracking-widest">
              ACADEMIC PROGRAMS
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><button onClick={() => onNavigateSection('courses')} className="hover:text-[#7EE8FA] transition-colors">PGDEMS (1-Year Diploma)</button></li>
              <li><button onClick={() => onNavigateSection('courses')} className="hover:text-[#7EE8FA] transition-colors">ACLS & BLS Certification</button></li>
              <li><button onClick={() => onNavigateSection('courses')} className="hover:text-[#7EE8FA] transition-colors">Airway Masterclass</button></li>
              <li><button onClick={() => onNavigateSection('courses')} className="hover:text-[#7EE8FA] transition-colors">12-Lead ECG STEMI Workshop</button></li>
              <li><button onClick={() => onNavigateSection('courses')} className="hover:text-[#7EE8FA] transition-colors">ATLS Trauma Resuscitation</button></li>
              <li><button onClick={() => onNavigateSection('courses')} className="hover:text-[#7EE8FA] transition-colors">Pediatric PALS Resuscitation</button></li>
            </ul>
          </div>

          {/* Col 3: Interactive Features */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold text-[#7EE8FA] uppercase tracking-widest">
              COMMAND CENTER TOOLS
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><button onClick={() => onNavigateSection('anatomy')} className="hover:text-[#7EE8FA] transition-colors">Interactive 3D Anatomy</button></li>
              <li><button onClick={() => onNavigateSection('calculator')} className="hover:text-[#7EE8FA] transition-colors">Career & Salary Calculator</button></li>
              <li><button onClick={() => onNavigateSection('simlab')} className="hover:text-[#7EE8FA] transition-colors">360° Sim Room Inspector</button></li>
              <li><button onClick={() => onNavigateSection('quiz')} className="hover:text-[#7EE8FA] transition-colors">Emergency Clinical Decision Quiz</button></li>
              <li><button onClick={() => onNavigateSection('verification')} className="hover:text-[#7EE8FA] transition-colors">Certificate Authenticity Verification</button></li>
            </ul>
          </div>

          {/* Col 4: Admissions Helpline */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest">
              ADMISSIONS & HELPLINE
            </h4>
            <div className="bg-[#071933] p-4 rounded-sm border border-white/10 space-y-2 text-xs font-mono">
              <div className="flex items-center space-x-2 text-white font-bold">
                <Phone className="w-4 h-4 text-[#7EE8FA] shrink-0" />
                <span>+91 1800-DEF-ERMED</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Mail className="w-4 h-4 text-[#7EE8FA] shrink-0" />
                <span>admissions@defeb.academy</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[#7EE8FA] shrink-0" />
                <span>Simulation Command Center, New Delhi & Mumbai</span>
              </div>
            </div>

            <button
              onClick={() => onOpenEnroll('pgdems')}
              className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-sm shadow-[0_0_15px_rgba(211,47,47,0.3)] transition-all"
            >
              Apply for Next Batch Seat
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-400 text-[11px] gap-4 font-mono">
          <p>© 2025 DEFEB Academy. All rights reserved. Emergency Medicine & Clinical Excellence Institute.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#7EE8FA]">Privacy Policy</a>
            <a href="#" className="hover:text-[#7EE8FA]">Terms of Admission</a>
            <a href="#" className="hover:text-[#7EE8FA]">Medical Disclaimers</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
