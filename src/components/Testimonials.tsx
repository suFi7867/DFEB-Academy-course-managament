import React from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import { StudentTestimonial } from '../types';
import { Star, Quote, TrendingUp, Building } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#071936] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>DEFEB GRADUATE SUCCESS STORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Real Doctors. Real Hospitals. <br />
            <span className="bg-gradient-to-r from-cyan-300 to-sky-100 bg-clip-text text-transparent">
              Verified Career Transformations
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Read how DEFEB alumni transitioned from general medical officers into high-paying Emergency Department leads and Critical Care specialists.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t: StudentTestimonial) => (
            <div
              key={t.id}
              className="rounded-3xl bg-[#091f42]/90 border border-white/10 p-6 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">

                {/* Top Profile Bar */}
                <div className="flex items-center space-x-3">
                  <img
                    src={t.photoUrl}
                    alt={t.name}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-cyan-400 shrink-0"
                  />
                  <div>
                    <h3 className="text-base font-bold text-white leading-snug">{t.name}</h3>
                    <p className="text-[11px] text-cyan-300 font-mono">{t.course}</p>
                    <div className="flex items-center space-x-1 text-amber-400 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Salary Hike Pill */}
                <div className="bg-emerald-950/60 border border-emerald-400/30 p-3 rounded-xl flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-sans truncate">{t.beforeRole}</span>
                    <span className="text-[10px] text-emerald-300 font-bold block font-sans truncate">{t.currentRole}</span>
                  </div>
                  <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 font-extrabold rounded-lg border border-emerald-400/40 text-[10px] shrink-0 ml-2">
                    {t.salaryIncrease}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-cyan-400/40" />

                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  "{t.quote}"
                </p>

              </div>

              {/* Hospital Affiliation */}
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
                <div className="flex items-center space-x-2 text-slate-300">
                  <Building className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="font-bold text-white truncate">{t.hospital}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
