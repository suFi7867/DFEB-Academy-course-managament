import React, { useState } from 'react';
import { FACULTY_DATA } from '../data/facultyData';
import { Faculty } from '../types';
import { Star, Award, Building, BookOpen, Calendar, X, ArrowRight } from 'lucide-react';

interface FacultySpotlightProps {
  onOpenEnroll: (courseId?: string) => void;
}

export const FacultySpotlight: React.FC<FacultySpotlightProps> = ({ onOpenEnroll }) => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  return (
    <section id="faculty" className="py-24 bg-[#071936] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>WORLD-CLASS ACADEMIC LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Learn From Renowned <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
              Emergency Physicians & Intensivists
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Our faculties aren't just teachers—they actively direct Level-1 Trauma Centers and ICUs, bringing real-time bedside experience directly to your training.
          </p>
        </div>

        {/* Faculty 3D-Styled Floating Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FACULTY_DATA.map((fac) => (
            <div
              key={fac.id}
              className="group rounded-3xl bg-[#091f42]/90 border border-white/10 hover:border-cyan-400/50 p-6 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between space-y-5"
            >
              <div>
                {/* Image Avatar */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 border border-cyan-500/30 shadow-md">
                  <img
                    src={fac.avatarUrl}
                    alt={fac.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091f42] via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 bg-[#030d1d]/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-cyan-400/30 text-[10px] font-mono text-cyan-300 flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{fac.rating} Instructor Score</span>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                  {fac.role}
                </span>

                <h3 className="text-lg font-black text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                  {fac.name}
                </h3>

                <p className="text-xs text-slate-300 font-medium leading-tight mt-1">
                  {fac.qualification}
                </p>

                <div className="flex items-center space-x-1.5 text-xs text-slate-400 mt-2">
                  <Building className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{fac.hospital}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <button
                  onClick={() => setSelectedFaculty(fac)}
                  className="w-full py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 font-bold text-xs transition-all"
                >
                  View Profile & Modules
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Faculty Modal */}
      {selectedFaculty && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#091f42] border border-cyan-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 text-white relative shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedFaculty(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white bg-white/10 p-2 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-4">
              <img
                src={selectedFaculty.avatarUrl}
                alt={selectedFaculty.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-cyan-400"
              />
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase">{selectedFaculty.role}</span>
                <h3 className="text-2xl font-black text-white">{selectedFaculty.name}</h3>
                <p className="text-xs text-slate-300">{selectedFaculty.qualification}</p>
                <p className="text-xs text-amber-300 font-medium mt-1">{selectedFaculty.experienceYears} Years Clinical Leadership</p>
              </div>
            </div>

            <div className="bg-[#030e20] p-4 rounded-xl border border-cyan-500/20 text-xs text-slate-200 leading-relaxed">
              {selectedFaculty.bio}
            </div>

            <div className="space-y-2 text-xs">
              <p className="font-mono font-bold text-cyan-300 uppercase">Hospital Affiliation:</p>
              <p className="text-slate-200">{selectedFaculty.hospital}</p>
              <p className="font-mono font-bold text-cyan-300 uppercase pt-2">Speciality Focus:</p>
              <p className="text-slate-200">{selectedFaculty.speciality}</p>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end space-x-3">
              <button
                onClick={() => setSelectedFaculty(null)}
                className="px-4 py-2.5 bg-white/10 text-xs font-bold rounded-xl"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedFaculty(null);
                  onOpenEnroll('pgdems');
                }}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow-lg"
              >
                Enroll in PGDEMS with {selectedFaculty.name.split(' ')[1]}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
