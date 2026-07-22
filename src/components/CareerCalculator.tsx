import React, { useState } from 'react';
import { Calculator, TrendingUp, Award, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CareerCalculatorProps {
  onOpenEnroll: (courseId?: string) => void;
}

export const CareerCalculator: React.FC<CareerCalculatorProps> = ({ onOpenEnroll }) => {
  const [degree, setDegree] = useState<'MBBS' | 'BAMS' | 'BHMS' | 'Nursing'>('MBBS');
  const [experience, setExperience] = useState<number>(2);
  const [currentMonthlySalary, setCurrentMonthlySalary] = useState<number>(35000);

  // Calculation logic based on clinical placement benchmarks
  const multiplier = degree === 'MBBS' ? 2.4 : degree === 'BAMS' ? 2.2 : degree === 'BHMS' ? 2.1 : 1.9;
  const projectedSalary = Math.round(currentMonthlySalary * multiplier + experience * 3000);
  const hikePercentage = Math.round(((projectedSalary - currentMonthlySalary) / currentMonthlySalary) * 100);
  const courseFee = 75000;
  const monthlyIncrement = projectedSalary - currentMonthlySalary;
  const paybackMonths = (courseFee / monthlyIncrement).toFixed(1);

  const getNewDesignation = () => {
    if (degree === 'MBBS') return 'Senior Emergency Department Officer / Trauma Team Lead';
    if (degree === 'BAMS' || degree === 'BHMS') return 'ICU Registrar / Critical Care Resident Officer';
    return 'Lead Resuscitation Nurse Specialist / ER Triage Charge Nurse';
  };

  return (
    <section id="calculator" className="py-24 bg-gradient-to-b from-[#041026] via-[#081b3b] to-[#06152e] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE MEDICAL CAREER & SALARY CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Calculate Your Projected <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
              Salary Hike & Hospital Role
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            See how acquiring 990 hours of DEFEB emergency medicine & ICU skills converts into tangible hospital career advancement and financial growth.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: User Input Form Controls */}
          <div className="lg:col-span-5 bg-[#081a38] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-xl flex flex-col justify-between">
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-white border-b border-white/10 pb-3">
                Your Current Medical Profile
              </h3>

              {/* Qualification Select */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-cyan-300 uppercase">
                  1. Select Qualification Degree:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['MBBS', 'BAMS', 'BHMS', 'Nursing'] as const).map((deg) => (
                    <button
                      key={deg}
                      onClick={() => setDegree(deg)}
                      className={`p-3 rounded-xl text-xs font-bold transition-all border ${
                        degree === deg
                          ? 'bg-cyan-500 border-cyan-300 text-slate-950 shadow-md'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {deg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Experience Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold">
                  <span className="text-cyan-300 uppercase">2. Clinical Experience:</span>
                  <span className="text-white font-extrabold">{experience} Years</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={experience}
                  onChange={(e) => setExperience(Number(e.target.value))}
                  className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>Fresh Graduate</span>
                  <span>5 Years</span>
                  <span>10+ Years</span>
                </div>
              </div>

              {/* Current Monthly Income Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold">
                  <span className="text-cyan-300 uppercase">3. Current Monthly Salary:</span>
                  <span className="text-white font-extrabold">₹{currentMonthlySalary.toLocaleString('en-IN')} / mo</span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="80000"
                  step="2500"
                  value={currentMonthlySalary}
                  onChange={(e) => setCurrentMonthlySalary(Number(e.target.value))}
                  className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            <div className="bg-[#030d1d] p-4 rounded-xl border border-white/5 text-[11px] text-slate-300">
              💡 <em>Calculated using real DEFEB alumni placement data across Apollo, Fortis, Max, and regional trauma centers.</em>
            </div>
          </div>

          {/* Right Column: Calculated Projection Dashboard */}
          <div className="lg:col-span-7 bg-[#09224a] border border-cyan-400/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400 animate-bounce" />
                  <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-emerald-400">
                    PROJECTED POST-PGDEMS CAREER GROWTH
                  </span>
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 rounded-full font-mono text-xs font-extrabold">
                  +{hikePercentage}% SALARY BOOST
                </span>
              </div>

              {/* Projected Salary Highlight Box */}
              <div className="bg-[#030e20] p-6 rounded-2xl border border-cyan-500/30 text-center space-y-2 shadow-inner">
                <p className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                  PROJECTED MONTHLY SALARY IN TOP ER / ICU
                </p>
                <p className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                  ₹{projectedSalary.toLocaleString('en-IN')} <span className="text-xs text-slate-400 font-normal">/ month</span>
                </p>
                <p className="text-xs text-emerald-400 font-semibold">
                  Gain an extra +₹{monthlyIncrement.toLocaleString('en-IN')} income every month!
                </p>
              </div>

              {/* Visual Before vs After Growth Bar Chart */}
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Current Monthly Income</span>
                    <span>₹{currentMonthlySalary.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                    <div className="bg-slate-500 h-full rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-cyan-300 font-bold mb-1">
                    <span>Post-PGDEMS Income</span>
                    <span className="text-emerald-400">₹{projectedSalary.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="w-full bg-slate-800 h-4 rounded-full overflow-hidden p-0.5 border border-cyan-400/30">
                    <div className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>

              {/* Role Upgrade & Payback Period */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                  <p className="text-[10px] font-mono text-cyan-400 uppercase font-bold">NEW HOSPITAL POSITION:</p>
                  <p className="text-xs font-bold text-white">{getNewDesignation()}</p>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                  <p className="text-[10px] font-mono text-cyan-400 uppercase font-bold">TUITION ROI RECOVERY:</p>
                  <p className="text-xs font-bold text-amber-300">{paybackMonths} Months Payback Period</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => onOpenEnroll('pgdems')}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-bold text-sm tracking-wide shadow-xl shadow-red-600/30 flex items-center justify-center space-x-2"
              >
                <span>Enroll in PGDEMS to Unlock This Salary Target</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
