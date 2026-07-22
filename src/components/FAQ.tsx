import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Who is eligible to join the PGDEMS Post Graduate Diploma?',
      a: 'DEFEB PGDEMS is open to MBBS, AYUSH (BAMS, BHMS, BUMS), BSc Nursing officers, and GNM candidates looking to specialize in emergency room resuscitations, ICU care, and trauma management.'
    },
    {
      q: 'Is the 600 Hours Hospital Internship mandatory?',
      a: 'Yes! 600 hours of clinical rotation in Level-1 Emergency Departments & ICUs is a core requirement for PGDEMS certification. This ensures you log hands-on procedural experience (intubation, central line, ICD, defibrillation) under senior MD consultants.'
    },
    {
      q: 'Are BAMS and BHMS doctors eligible for ER Officer / ICU Registrar roles in hospitals?',
      a: 'Absolutely. Hospitals across India actively hire AYUSH doctors with PGDEMS certification for Resident ER Officer and Critical Care Registrar positions, as DEFEB candidates possess verified practical emergency resuscitation competencies.'
    },
    {
      q: 'What is the fee structure and EMI options available?',
      a: 'The complete PGDEMS tuition fee is ₹75,000 (inclusive of all simulation lab sessions, course materials, and internship logbook). DEFEB offers 0% interest monthly EMI starting from ₹6,250/month with zero processing fees.'
    },
    {
      q: 'Can I complete theory classes online while working at my current hospital job?',
      a: 'Yes. DEFEB offers a flexible Hybrid Model: theory lectures and case discussions are conducted via evening online webinars, while hands-on simulation lab drills take place on weekend modules.'
    },
    {
      q: 'What certificates will I receive upon graduation?',
      a: 'You will receive the DEFEB Post Graduate Diploma in Emergency Medical Services (PGDEMS), accompanied by an Official Verified Competency Logbook and ACLS/BLS Provider credentials.'
    },
    {
      q: 'How does DEFEB assist with job placement?',
      a: 'DEFEB has formal placement tie-ups with Apollo, Fortis, Max, and regional trauma centers. Our career cell coordinates direct interviews, resume building, and credential verification for all graduates.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-[#041026] via-[#081a38] to-[#06152e] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Got Questions? <span className="text-cyan-300">We Have Answers</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            Everything you need to know about DEFEB admissions, clinical rotations, eligibility, and career advancement.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#081e3f] border border-cyan-500/20 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4 bg-[#030e20]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
