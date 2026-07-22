import React from 'react';
import { Course } from '../types';
import { X, CheckCircle2, Clock, BookOpen, Award, FileText, Download, ArrowRight, ShieldCheck, Star } from 'lucide-react';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onOpenEnroll: (courseId?: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({ course, onClose, onOpenEnroll }) => {
  if (!course) return null;

  const handleDownloadSyllabus = () => {
    const textContent = `
DEFEB ACADEMY - OFFICIAL COURSE SYLLABUS
===========================================
Program: ${course.title}
Duration: ${course.duration}
Total Training Hours: ${course.totalHours} Hours (Theory: ${course.theoryHours} | Practical: ${course.practicalHours} | Hospital Internship: ${course.internshipHours})
Certification: ${course.certificateType}
Fee Structure: ₹${course.feeINR.toLocaleString('en-IN')} (EMI: ₹${course.emiMonthlyINR}/mo)

ELIGIBILITY CRITERIA:
${course.eligibility.join(', ')}

CORE COMPETENCIES & PRACTICAL SKILLS:
${course.keySkills.map(s => `- ${s}`).join('\n')}

MODULE BREAKDOWN:
${course.modules.map(m => `
Module ${m.number}: ${m.title} (${m.hours} Hours)
Topics Covered:
${m.topics.map(t => `  * ${t}`).join('\n')}
Practical Competencies:
${m.practicalSkills.map(p => `  [x] ${p}`).join('\n')}
`).join('\n')}

DEFEB ACADEMY - India's Premier Emergency Medicine & Clinical Excellence Academy
Contact: +91 1800-DEF-ERMED | Website: https://defeb.academy
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `DEFEB_${course.id.toUpperCase()}_Syllabus_2025.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-[#091f42] border border-cyan-500/40 rounded-3xl max-w-4xl w-full text-white relative my-8 shadow-2xl overflow-hidden">

        {/* Modal Top Header Banner */}
        <div className="bg-gradient-to-r from-[#0B2C5D] via-[#081e3f] to-red-950 p-6 sm:p-8 border-b border-cyan-500/20 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-white bg-white/10 p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2 max-w-2xl">
            <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
              {course.category} PROGRAM
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {course.title}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              {course.tagline}
            </p>
          </div>

          {/* Quick Hours Summary Bar */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs bg-[#030d1d] p-4 rounded-xl border border-cyan-500/20">
            <div>
              <p className="text-[10px] text-slate-400">TOTAL HOURS</p>
              <p className="text-base font-bold text-cyan-300">{course.totalHours} Hrs</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400">THEORY LECTURES</p>
              <p className="text-base font-bold text-white">{course.theoryHours} Hrs</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400">PRACTICAL SIM LAB</p>
              <p className="text-base font-bold text-amber-300">{course.practicalHours} Hrs</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400">HOSPITAL INTERNSHIP</p>
              <p className="text-base font-bold text-emerald-400">{course.internshipHours} Hrs</p>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body Content */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-8">

          {/* Eligibility & Certification Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#030e20] p-5 rounded-2xl border border-cyan-500/20 space-y-2">
              <h4 className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>ELIGIBILITY CRITERIA:</span>
              </h4>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {course.eligibility.map((e, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-slate-200 border border-white/10 font-medium">
                    {e}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#030e20] p-5 rounded-2xl border border-cyan-500/20 space-y-2">
              <h4 className="text-xs font-mono font-bold text-red-300 uppercase tracking-wider flex items-center space-x-2">
                <Award className="w-4 h-4 text-red-400" />
                <span>CERTIFICATION AWARDED:</span>
              </h4>
              <p className="text-xs text-slate-200 font-semibold leading-relaxed">
                {course.certificateType}
              </p>
            </div>
          </div>

          {/* Comprehensive Module-by-Module Breakdown */}
          <div className="space-y-4">
            <h3 className="text-lg font-black text-white flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <span>Complete Curriculum Modules Breakdown ({course.modules.length} Core Modules)</span>
            </h3>

            <div className="space-y-4">
              {course.modules.map((mod) => (
                <div key={mod.number} className="bg-[#051630] border border-cyan-500/20 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center space-x-3">
                      <span className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold flex items-center justify-center">
                        M{mod.number}
                      </span>
                      <h4 className="font-bold text-white text-sm sm:text-base">
                        {mod.title}
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-cyan-300 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-400/20">
                      {mod.hours} Hours
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <p className="font-mono font-bold text-slate-400 mb-1.5 uppercase text-[10px]">THEORY TOPICS COVERED:</p>
                      <ul className="space-y-1 text-slate-300">
                        {mod.topics.map((t, tIdx) => (
                          <li key={tIdx} className="flex items-start space-x-2">
                            <span className="text-cyan-400 font-bold">•</span>
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="font-mono font-bold text-emerald-400 mb-1.5 uppercase text-[10px]">HANDS-ON PRACTICAL COMPETENCIES:</p>
                      <ul className="space-y-1 text-slate-200">
                        {mod.practicalSkills.map((p, pIdx) => (
                          <li key={pIdx} className="flex items-start space-x-2 bg-emerald-950/20 p-1.5 rounded border border-emerald-500/20">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Sticky CTA Bar */}
        <div className="p-6 bg-[#030d1d] border-t border-cyan-500/20 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={handleDownloadSyllabus}
            className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/15 transition-all"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Download Official Syllabus PDF</span>
          </button>

          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenEnroll(course.id);
              }}
              className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-bold text-xs shadow-lg shadow-red-600/30"
            >
              <span>Enroll in {course.id.toUpperCase()}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
