import React from 'react';
import { Phone, MessageSquare, Download, ArrowRight, ShieldCheck } from 'lucide-react';

interface StickyCTAProps {
  onOpenEnroll: (courseId?: string) => void;
  onOpenAdvisor: () => void;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ onOpenEnroll, onOpenAdvisor }) => {
  const handleDownloadBrochure = () => {
    const textContent = `
DEFEB ACADEMY - OFFICIAL ACADEMIC PROSPECTUS & SYLLABUS
==========================================================
India's Premier Emergency Medicine & Clinical Excellence Academy

PROGRAM HIGHLIGHTS:
- PGDEMS: 1-Year Post Graduate Diploma in Emergency Medical Services
- Total Training: 990 Hours (210 Theory + 180 Practical Sim Lab + 600 Hospital Internship)
- Hospital Network: Apollo, Fortis, Max & Regional Trauma Centers
- Eligibility: MBBS, BAMS, BHMS, BUMS, BSc Nursing, Paramedics
- Fee: ₹75,000 (0% Interest Monthly EMI starting ₹6,250/mo)

CONTACT ADMISSIONS:
Toll-Free Helpline: +91 1800-DEF-ERMED
WhatsApp Counselor: +91 98765 43210
Website: https://defeb.academy
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'DEFEB_Academy_Official_Prospectus_2025.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#020b18]/95 border-t border-cyan-500/30 backdrop-blur-xl py-3 px-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">

        {/* Left Live Admissions Status */}
        <div className="hidden md:flex items-center space-x-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-white font-mono font-bold">
            ADMISSIONS OPEN FOR 2025 BATCH <span className="text-cyan-300 font-normal">(Limited Seats Remaining)</span>
          </span>
        </div>

        {/* Right Quick Action Buttons */}
        <div className="flex items-center justify-between w-full md:w-auto space-x-2 sm:space-x-3">
          <button
            onClick={onOpenAdvisor}
            className="px-3.5 py-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 font-bold transition-all flex items-center space-x-1.5"
          >
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">AI Career Advisor</span>
            <span className="sm:hidden">AI Advisor</span>
          </button>

          <button
            onClick={handleDownloadBrochure}
            className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold border border-white/10 transition-all flex items-center space-x-1.5"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">Brochure</span>
          </button>

          <a
            href="https://wa.me/919876543210?text=Hello%20DEFEB%20Academy,%20I%20am%20interested%20in%20the%20PGDEMS%20course."
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow transition-all flex items-center space-x-1.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp Counselor</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenEnroll('pgdems')}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-800 text-white font-black shadow-lg shadow-red-600/30 flex items-center space-x-1 shrink-0"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
