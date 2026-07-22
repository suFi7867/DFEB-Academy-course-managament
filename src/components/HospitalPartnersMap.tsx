import React from 'react';
import { HOSPITALS_DATA } from '../data/hospitalsData';
import { Building, MapPin, Award, CheckCircle2, Users, ArrowRight } from 'lucide-react';

interface HospitalPartnersMapProps {
  onOpenEnroll: (courseId?: string) => void;
}

export const HospitalPartnersMap: React.FC<HospitalPartnersMapProps> = ({ onOpenEnroll }) => {
  return (
    <section id="hospitals" className="py-24 bg-[#071936] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Building className="w-3.5 h-3.5 text-cyan-400" />
            <span>CLINICAL INTERNSHIP NETWORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            600 Hours Hospital Internship <br />
            <span className="bg-gradient-to-r from-cyan-300 to-sky-100 bg-clip-text text-transparent">
              In Top Tertiary Centers
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            DEFEB candidates undergo hands-on clinical rotation at premier hospital networks across India, logging real emergency procedures and receiving monthly stipends.
          </p>
        </div>

        {/* Hospital Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOSPITALS_DATA.map((hosp) => (
            <div
              key={hosp.id}
              className="group rounded-3xl bg-[#091f42]/90 border border-white/10 hover:border-cyan-400/40 p-6 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                    {hosp.category}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                    {hosp.internshipSlots} Slots Available
                  </span>
                </div>

                <h3 className="text-xl font-black text-white group-hover:text-cyan-300 transition-colors">
                  {hosp.name}
                </h3>

                <div className="flex items-center space-x-2 text-xs text-slate-300 font-medium">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{hosp.city} ({hosp.state})</span>
                </div>

                <div className="bg-[#030d1d] p-3 rounded-xl border border-white/5 font-mono text-xs">
                  <p className="text-[10px] text-slate-400">INTERNSHIP STIPEND RANGE:</p>
                  <p className="font-bold text-amber-300 mt-0.5">{hosp.stipendRange}</p>
                </div>

                <div className="space-y-1.5 pt-1">
                  <p className="text-[10px] font-mono font-bold text-cyan-400 uppercase">CENTER HIGHLIGHTS:</p>
                  {hosp.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => onOpenEnroll('pgdems')}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-cyan-300 font-bold text-xs border border-white/10 hover:border-cyan-400/30 transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>Apply for Internship Posting</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
