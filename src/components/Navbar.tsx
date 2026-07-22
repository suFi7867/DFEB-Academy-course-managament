import React, { useState } from 'react';
import { Activity, Phone, Sparkles, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenEnroll: (courseId?: string) => void;
  onOpenAIAdvisor: () => void;
  onNavigateSection: (sectionId: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEnroll,
  onOpenAIAdvisor,
  onNavigateSection,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#040D1A]/90 backdrop-blur-md border-b border-white/10 text-white shadow-2xl transition-all">
      {/* Top Emergency Hotline & Ticker */}
      <div className="bg-[#071933] text-[11px] font-medium py-1.5 px-4 flex flex-wrap items-center justify-between border-b border-white/10">
        <div className="flex items-center space-x-3 overflow-hidden">
          <span className="flex items-center text-red-400 bg-red-600/15 px-2 py-0.5 rounded-sm text-[10px] tracking-widest uppercase border border-red-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1.5 animate-ping"></span>
            ADMISSIONS 2025-26
          </span>
          <span className="hidden sm:inline text-slate-300 font-mono text-[11px] truncate">
            PGDEMS 1-Year Hybrid Diploma with 600 Hours Hospital Internship | Limited Seats
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="tel:+911800333332"
            className="flex items-center text-[#7EE8FA] hover:text-white transition-colors font-mono text-[11px]"
          >
            <Phone className="w-3 h-3 mr-1 text-red-500 animate-pulse" />
            24/7 Helpline: <span className="ml-1 text-white underline decoration-red-500 underline-offset-2">+91 1800-DEF-ERMED</span>
          </a>
        </div>
      </div>

      {/* Main Geometric Command Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Geometric Brand Logo */}
        <div
          onClick={() => handleNavClick('hero')}
          className="cursor-pointer flex items-center gap-3 group"
        >
          <div className="w-9 h-9 bg-red-600 rounded-sm flex items-center justify-center font-black text-white text-lg shadow-[0_0_15px_rgba(211,47,47,0.4)] group-hover:bg-red-500 transition-colors">
            D
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter uppercase font-sans text-white">
                Defeb
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#7EE8FA] border border-[#7EE8FA]/30 px-1.5 py-0.5 rounded-sm font-mono">
                Premier Academy
              </span>
            </div>
            <p className="text-[10px] text-slate-400 tracking-wider font-mono">
              Emergency Medicine Training Command Center
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-6 text-xs uppercase tracking-widest font-medium text-slate-300">
          {[
            { id: 'courses', label: 'Courses' },
            { id: 'anatomy', label: '3D Anatomy' },
            { id: 'simlab', label: 'Sim Lab' },
            { id: 'skills', label: 'Skills' },
            { id: 'calculator', label: 'Calculator' },
            { id: 'faculty', label: 'Faculty' },
            { id: 'hospitals', label: 'Placements' },
            { id: 'verification', label: 'Verify' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`transition-all py-1 border-b-2 ${
                activeSection === item.id
                  ? 'text-[#7EE8FA] border-[#7EE8FA] font-bold'
                  : 'border-transparent text-slate-300 hover:text-[#7EE8FA]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          {/* AI Advisor Button */}
          <button
            onClick={onOpenAIAdvisor}
            className="flex items-center space-x-2 px-4 py-2 border border-white/20 bg-white/5 hover:bg-white/10 text-xs uppercase tracking-widest text-slate-200 hover:text-white transition-all rounded-sm backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#7EE8FA]" />
            <span>AI Advisor</span>
          </button>

          {/* Enroll Now Button */}
          <button
            onClick={() => onOpenEnroll('pgdems')}
            className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(211,47,47,0.3)] rounded-sm flex items-center space-x-2"
          >
            <span>Enroll Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex xl:hidden items-center space-x-2">
          <button
            onClick={onOpenAIAdvisor}
            className="p-2 border border-[#7EE8FA]/30 bg-[#7EE8FA]/10 text-[#7EE8FA] rounded-sm"
            title="AI Advisor"
          >
            <Sparkles className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-white/20 bg-white/5 text-white hover:bg-white/10 rounded-sm"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#071933] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            {[
              { id: 'courses', label: 'Courses' },
              { id: 'anatomy', label: '3D Anatomy' },
              { id: 'simlab', label: 'Virtual Sim Lab' },
              { id: 'skills', label: '100+ Skills' },
              { id: 'calculator', label: 'Salary Calculator' },
              { id: 'faculty', label: 'Faculty' },
              { id: 'hospitals', label: 'Hospital Placements' },
              { id: 'verification', label: 'Certificate Verification' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left px-3 py-2 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-[#7EE8FA] border border-white/10 rounded-sm uppercase tracking-wider text-[11px]"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col space-y-2">
            <button
              onClick={() => {
                onOpenAIAdvisor();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-sm"
            >
              <Sparkles className="w-4 h-4 text-[#7EE8FA]" />
              <span>Get AI Career Recommendation</span>
            </button>
            <button
              onClick={() => {
                onOpenEnroll('pgdems');
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(211,47,47,0.3)] rounded-sm flex items-center justify-center space-x-2"
            >
              <span>Enroll in PGDEMS 2025</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
