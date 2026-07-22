import React, { useState, useEffect } from 'react';
import { Award, Clock, Users, ShieldCheck, Stethoscope, Briefcase } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  const [counts, setCounts] = useState({
    internshipHours: 0,
    faculties: 0,
    doctorsTrained: 0,
    skills: 0,
    modules: 0,
    placementRate: 0
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        internshipHours: Math.floor(600 * progress),
        faculties: Math.floor(15 * progress),
        doctorsTrained: Math.floor(5000 * progress),
        skills: Math.floor(100 * progress),
        modules: Math.floor(10 * progress),
        placementRate: Math.floor(100 * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({
          internshipHours: 600,
          faculties: 15,
          doctorsTrained: 5000,
          skills: 100,
          modules: 10,
          placementRate: 100
        });
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      value: `${counts.internshipHours}+`,
      label: 'Internship Hours',
      subtext: 'Rotations in ER & ICU',
      icon: Clock,
    },
    {
      value: `${counts.faculties}+`,
      label: 'Expert Faculty',
      subtext: 'MD / DNB Emergency Leads',
      icon: Users,
    },
    {
      value: `${counts.doctorsTrained}+`,
      label: 'Trained Pros',
      subtext: 'MBBS, AYUSH, Nursing',
      icon: Stethoscope,
    },
    {
      value: `${counts.skills}+`,
      label: 'Skill Competencies',
      subtext: 'Airway, ACLS & Lines',
      icon: Award,
    },
    {
      value: `${counts.modules}+`,
      label: 'Clinical Modules',
      subtext: 'Cardiology, Trauma & ICU',
      icon: ShieldCheck,
    },
    {
      value: `${counts.placementRate}%`,
      label: 'Placement Support',
      subtext: 'Top Tertiary Partners',
      icon: Briefcase,
      highlight: true
    }
  ];

  return (
    <section className="relative z-10 border-t border-b border-white/10 bg-[#071933]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {stats.map((stat, idx) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={idx}
              className={`p-6 flex flex-col items-center justify-center text-center transition-all ${
                stat.highlight ? 'bg-red-600/10' : 'hover:bg-white/5'
              }`}
            >
              <div className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                <IconComponent className="w-4 h-4 text-[#7EE8FA]" />
              </div>
              <span className="text-3xl font-black text-white font-mono tracking-tight">{stat.value}</span>
              <span className="text-xs font-bold uppercase tracking-wider text-white mt-1 font-sans">{stat.label}</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-0.5 font-mono">{stat.subtext}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
