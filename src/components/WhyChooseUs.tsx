import React from 'react';
import { Stethoscope, Activity, Wind, Zap, Eye, Radio, Syringe, Package, Check } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      title: 'Hands-on Practical Training',
      illustration: Stethoscope,
      iconColor: 'text-[#7EE8FA]',
      description: 'Practice real emergency procedures—intubation, central line insertion, chest tube placement, and cardioversion—on advanced training models.',
      skillsHighlighted: ['Intubation & Cricothyroidotomy', 'Intercostal Drain Insertion', 'Ultrasound-Guided Central Lines']
    },
    {
      title: 'Real ICU Exposure',
      illustration: Activity,
      iconColor: 'text-[#7EE8FA]',
      description: 'Work alongside senior intensivists during critical ICU shifts, managing arterial blood gases, mechanical ventilation, and multi-organ failure.',
      skillsHighlighted: ['ABG Acid-Base Analysis', 'Inotrope Dosing Protocols', 'PRVC & SIMV Ventilator Modes']
    },
    {
      title: 'Simulation Based Learning',
      illustration: Wind,
      iconColor: 'text-[#7EE8FA]',
      description: 'Experience high-stakes emergency room pressure without patient risk using computer-controlled Ambu SimPad manikins and live feedback.',
      skillsHighlighted: ['MegaCode Cardiac Arrest Team', 'Anaphylaxis Resuscitation', 'Pediatric Shock Scenarios']
    },
    {
      title: 'Hospital Internship (600 Hours)',
      illustration: Zap,
      iconColor: 'text-red-500',
      description: 'Undergo 600 hours of mandatory, supervised clinical rotation in Level-1 emergency departments and trauma bays with monthly stipend options.',
      skillsHighlighted: ['50+ Logged Live Intubations', 'Code Blue Team Leadership', 'Trauma Resuscitation Shifts']
    },
    {
      title: 'Expert Doctors Faculty',
      illustration: Eye,
      iconColor: 'text-[#7EE8FA]',
      description: 'Learn directly from Cleveland Clinic alums, MD Emergency Medicine directors, and European Diploma intensivist consultants.',
      skillsHighlighted: ['Bedside Clinical Teaching', 'Personalized Skill Mentorship', 'Case-Based Diagnostic Drills']
    },
    {
      title: 'Emergency Case Discussions',
      illustration: Radio,
      iconColor: 'text-[#7EE8FA]',
      description: 'Analyze 100+ real-world emergency cases weekly, covering STEMI equivalents, toxicological overdoses, stroke windows, and pediatric arrests.',
      skillsHighlighted: ['12-Lead ECG STEMI Localization', 'NIHSS Stroke Thrombolysis', 'Organophosphate Antidotes']
    },
    {
      title: 'Career & Salary Guidance',
      illustration: Syringe,
      iconColor: 'text-[#7EE8FA]',
      description: 'Specialized career coaching helping MBBS, AYUSH (BAMS/BHMS), and Nursing graduates transition into high-paying ER & ICU Officer roles.',
      skillsHighlighted: ['35%-140% Projected Salary Hike', 'ER Lead Officer Positioning', 'Hospital CV & Interview Prep']
    },
    {
      title: 'Placement Support Across Top Hospitals',
      illustration: Package,
      iconColor: 'text-[#7EE8FA]',
      description: 'Direct tie-ups with Apollo, Fortis, Max, and regional trauma centers ensures 100% placement assistance for DEFEB graduates.',
      skillsHighlighted: ['Apollo & Fortis Network', 'Government Trauma Centers', 'Instant Credential Verification']
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-[#040D1A] relative text-white overflow-hidden border-b border-white/10">
      {/* Background Gradients */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#0B2C5D]/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#7EE8FA]/10 border border-[#7EE8FA]/30 text-[#7EE8FA] text-xs font-mono uppercase tracking-widest rounded-sm">
            <span>THE DEFEB ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
            Why Doctors Choose <span className="text-[#7EE8FA]">DEFEB</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed border-l-2 border-red-600 pl-4 inline-block text-left">
            Unlike traditional institutes that focus purely on theory, DEFEB combines 3D simulation, equipment mastery, and 600 hours of live hospital clinical rotations.
          </p>
        </div>

        {/* 8 Geometric Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.illustration;
            return (
              <div
                key={idx}
                className="group relative rounded-sm bg-[#071933]/90 border border-white/10 p-6 backdrop-blur-xl shadow-xl hover:border-[#7EE8FA]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Illustration Badge */}
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <IconComp className={`w-5 h-5 ${pillar.iconColor}`} />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 uppercase tracking-wide group-hover:text-[#7EE8FA] transition-colors font-sans">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                {/* Highlighted Skills */}
                <div className="pt-3 border-t border-white/10 space-y-1.5 text-[11px] font-mono">
                  {pillar.skillsHighlighted.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center space-x-2 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-[#7EE8FA] shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
