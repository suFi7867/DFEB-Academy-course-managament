import React, { useState } from 'react';
import { COURSES_DATA } from '../data/coursesData';
import { Course } from '../types';
import { Activity, HeartPulse, Wind, Zap, ShieldAlert, Baby, BookOpen, Star, Check, ArrowRight } from 'lucide-react';

interface CourseShowcaseProps {
  onSelectCourse: (course: Course) => void;
  onOpenEnroll: (courseId?: string) => void;
}

export const CourseShowcase: React.FC<CourseShowcaseProps> = ({ onSelectCourse, onOpenEnroll }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Diplomas' | 'Certifications' | 'Workshops' | 'Doctors' | 'Nursing'>('All');

  const filteredCourses = COURSES_DATA.filter((course) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Diplomas') return course.category === 'Diploma';
    if (activeFilter === 'Certifications') return course.category === 'Certification';
    if (activeFilter === 'Workshops') return course.category === 'Workshop' || course.category === 'Masterclass';
    if (activeFilter === 'Doctors') return course.eligibility.some(e => e.includes('MBBS') || e.includes('BAMS') || e.includes('BHMS'));
    if (activeFilter === 'Nursing') return course.eligibility.some(e => e.includes('Nursing') || e.includes('GNM'));
    return true;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return Activity;
      case 'HeartPulse': return HeartPulse;
      case 'Wind': return Wind;
      case 'Zap': return Zap;
      case 'ShieldAlert': return ShieldAlert;
      case 'Baby': return Baby;
      default: return Activity;
    }
  };

  return (
    <section id="courses" className="py-20 bg-[#040D1A] text-white relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#7EE8FA]/10 border border-[#7EE8FA]/30 text-[#7EE8FA] text-xs font-mono tracking-widest uppercase rounded-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#7EE8FA]" />
            <span>ACADEMIC PROGRAMS & WORKSHOPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
            Transformative <span className="text-[#7EE8FA]">Clinical Programs</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base border-l-2 border-red-600 pl-4 inline-block text-left">
            Select from DEFEB’s gold-standard post-graduate diploma, AHA-aligned certifications, and specialized simulation workshops.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'All', label: 'All Programs' },
            { id: 'Diplomas', label: '1-Year Diplomas (PGDEMS)' },
            { id: 'Certifications', label: 'ACLS & Trauma Certifications' },
            { id: 'Workshops', label: 'Airway & ECG Workshops' },
            { id: 'Doctors', label: 'For Doctors (MBBS/AYUSH)' },
            { id: 'Nursing', label: 'For Nursing & Paramedics' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2.5 rounded-sm text-xs font-mono uppercase tracking-wider transition-all ${
                activeFilter === tab.id
                  ? 'bg-[#7EE8FA] text-slate-950 font-bold shadow-[0_0_15px_rgba(126,232,250,0.4)]'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course Cards Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const IconComp = getIcon(course.iconName);
            const isFlagship = course.id === 'pgdems';

            return (
              <div
                key={course.id}
                className={`group rounded-sm bg-[#071933] border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl ${
                  isFlagship
                    ? 'border-[#7EE8FA]/50 lg:col-span-2'
                    : 'border-white/10 hover:border-[#7EE8FA]/40'
                }`}
              >
                {/* Flagship Banner */}
                {isFlagship && (
                  <div className="bg-red-600 py-1.5 px-4 text-xs font-mono font-bold uppercase tracking-widest text-white text-center flex items-center justify-center space-x-2">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    <span>DEFEB FLAGSHIP PROGRAM — 990 TOTAL HOURS (210 THEORY + 180 PRACTICAL + 600 INTERNSHIP)</span>
                  </div>
                )}

                <div className="p-6 sm:p-8 space-y-5">

                  {/* Header Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#7EE8FA]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#7EE8FA]">
                          {course.category}
                        </span>
                        <div className="flex items-center space-x-1 text-amber-400 text-xs font-mono font-bold">
                          <Star className="w-3 h-3 fill-amber-400" />
                          <span>{course.rating} / 5.0</span>
                        </div>
                      </div>
                    </div>

                    {course.badge && (
                      <span className="px-2.5 py-1 rounded-sm text-[10px] font-mono uppercase tracking-wider bg-red-600/20 text-red-400 border border-red-500/40">
                        {course.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase group-hover:text-[#7EE8FA] transition-colors font-sans">
                      {course.title}
                    </h3>
                    <p className="text-slate-300 text-xs font-mono mt-1">
                      {course.tagline}
                    </p>
                  </div>

                  {/* Key Stats Bar */}
                  <div className="grid grid-cols-3 gap-2 bg-[#040D1A] p-3 rounded-sm border border-white/10 text-center font-mono text-xs">
                    <div>
                      <p className="text-[9px] text-slate-400 uppercase">DURATION</p>
                      <p className="font-bold text-[#7EE8FA] mt-0.5">{course.duration}</p>
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-400 uppercase">TOTAL HOURS</p>
                      <p className="font-bold text-white mt-0.5">{course.totalHours} Hrs</p>
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-400 uppercase">INTERNSHIP</p>
                      <p className="font-bold text-emerald-400 mt-0.5">{course.internshipHours > 0 ? `${course.internshipHours} Hrs` : 'N/A'}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                    {course.description}
                  </p>

                  {/* Competencies */}
                  <div className="space-y-1.5 pt-1">
                    <p className="text-[10px] font-mono font-bold text-[#7EE8FA] uppercase tracking-wider">
                      TOP COMPETENCIES MASTERED:
                    </p>
                    {course.keySkills.slice(0, 3).map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center space-x-2 text-xs text-slate-200 font-mono">
                        <Check className="w-3.5 h-3.5 text-[#7EE8FA] shrink-0" />
                        <span className="truncate">{skill}</span>
                      </div>
                    ))}
                  </div>

                  {/* Eligibility Tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <span className="text-[10px] font-mono text-slate-400 mr-1 self-center">ELIGIBILITY:</span>
                    {course.eligibility.map((e, eIdx) => (
                      <span key={eIdx} className="px-2 py-0.5 rounded-sm bg-white/5 text-[10px] text-slate-300 border border-white/10 font-mono">
                        {e}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Footer */}
                <div className="p-6 bg-[#040D1A] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="flex items-baseline space-x-1.5">
                      <span className="text-2xl font-black text-white font-mono">
                        ₹{course.feeINR.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase font-mono">Total Fee</span>
                    </div>
                    {course.emiMonthlyINR > 0 && (
                      <p className="text-[10px] text-[#7EE8FA] font-mono">
                        EMI from ₹{course.emiMonthlyINR.toLocaleString('en-IN')}/mo (0% Interest)
                      </p>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onSelectCourse(course)}
                      className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest border border-white/10 rounded-sm transition-all"
                    >
                      Curriculum
                    </button>
                    <button
                      onClick={() => onOpenEnroll(course.id)}
                      className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-sm shadow-[0_0_15px_rgba(211,47,47,0.3)] flex items-center space-x-1"
                    >
                      <span>Enroll</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
