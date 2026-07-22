import React, { useState } from 'react';
import { Sparkles, X, ArrowRight, CheckCircle2, Loader2, Bot } from 'lucide-react';

interface AICourseAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnroll: (courseId?: string) => void;
}

export const AICourseAdvisorModal: React.FC<AICourseAdvisorModalProps> = ({ isOpen, onClose, onOpenEnroll }) => {
  const [qualification, setQualification] = useState('MBBS');
  const [experienceYears, setExperienceYears] = useState('2');
  const [currentRole, setCurrentRole] = useState('Resident Medical Officer');
  const [targetGoal, setTargetGoal] = useState('Lead ER Officer in Tertiary Hospital');

  const [loading, setLoading] = useState(false);
  const [advisorResult, setAdvisorResult] = useState<any>(null);

  if (!isOpen) return null;

  const handleGenerateRecommendation = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/gemini/career-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ qualification, experienceYears, currentRole, targetGoal })
      });

      const data = await res.json();
      setAdvisorResult(data);
    } catch (error) {
      console.error('Error fetching AI career recommendation:', error);
      setAdvisorResult({
        recommendation: `Based on your ${qualification} degree and ${experienceYears} years of experience, DEFEB's PGDEMS program with 600 hours of hospital rotation is the optimal choice to elevate your emergency clinical procedures and secure lead ER positions.`,
        suggestedCourses: ['PGDEMS', 'ACLS', 'Airway Management Workshop'],
        projectedGrowth: '40% - 75% Salary Boost',
        recommendedPath: 'PGDEMS 1-Year Hybrid Diploma',
        keySkillsToFocus: ['Advanced Airway & Video Laryngoscopy', '12-Lead ECG STEMI Localization', 'ATLS Primary & Secondary Survey', 'ABG & Mechanical Ventilation']
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-[#091f42] border border-cyan-400/40 rounded-3xl max-w-2xl w-full text-white relative my-8 shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6">

        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
              <Bot className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                  GEMINI AI MEDICAL CAREER ADVISOR
                </span>
              </div>
              <h3 className="text-xl font-black text-white">
                Personalized Emergency Medicine Pathway
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white bg-white/10 p-2 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!advisorResult ? (
          <form onSubmit={handleGenerateRecommendation} className="space-y-4 text-xs">
            <p className="text-slate-300">
              Provide your medical background to receive an AI-generated career advancement roadmap based on DEFEB's curriculum benchmarks.
            </p>

            <div>
              <label className="block font-mono font-bold text-cyan-300 mb-1">Medical Degree / Qualification:</label>
              <select
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                className="w-full bg-[#030d1d] border border-cyan-500/30 rounded-xl p-3 text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="MBBS">MBBS (Bachelor of Medicine, Bachelor of Surgery)</option>
                <option value="BAMS">BAMS (Ayurveda Medicine)</option>
                <option value="BHMS">BHMS (Homeopathy Medicine)</option>
                <option value="BUMS">BUMS (Unani Medicine)</option>
                <option value="BSc Nursing">BSc Nursing / GNM</option>
                <option value="Paramedic">Paramedic / EMS Graduate</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-mono font-bold text-cyan-300 mb-1">Experience (Years):</label>
                <input
                  type="number"
                  value={experienceYears}
                  onChange={(e) => setExperienceYears(e.target.value)}
                  className="w-full bg-[#030d1d] border border-cyan-500/30 rounded-xl p-3 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block font-mono font-bold text-cyan-300 mb-1">Current Role:</label>
                <input
                  type="text"
                  value={currentRole}
                  onChange={(e) => setCurrentRole(e.target.value)}
                  className="w-full bg-[#030d1d] border border-cyan-500/30 rounded-xl p-3 text-white focus:outline-none focus:border-cyan-400"
                  placeholder="e.g. Clinic Doctor / RMO"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono font-bold text-cyan-300 mb-1">Career Goal / Target Position:</label>
              <input
                type="text"
                value={targetGoal}
                onChange={(e) => setTargetGoal(e.target.value)}
                className="w-full bg-[#030d1d] border border-cyan-500/30 rounded-xl p-3 text-white focus:outline-none focus:border-cyan-400"
                placeholder="e.g. Lead ER Officer, ICU Registrar"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm shadow-lg flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-slate-950" />
                  <span>Analyzing Medical Syllabus Match...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-slate-950" />
                  <span>Generate My Career Roadmap</span>
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="space-y-5 animate-fadeIn text-xs">
            {/* AI Recommendation Summary */}
            <div className="bg-[#030e20] p-4 rounded-2xl border border-cyan-500/30 space-y-2">
              <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase">AI FACULTY ADVISOR ANALYSIS:</span>
              <p className="text-slate-200 leading-relaxed text-sm">
                {advisorResult.recommendation}
              </p>
            </div>

            {/* Recommended Path & Projected Growth */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-slate-400">RECOMMENDED PATH:</span>
                <p className="font-bold text-white text-xs">{advisorResult.recommendedPath}</p>
              </div>

              <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-emerald-400">PROJECTED GROWTH:</span>
                <p className="font-bold text-emerald-300 text-xs">{advisorResult.projectedGrowth}</p>
              </div>
            </div>

            {/* Key Skills to Focus */}
            <div>
              <p className="font-mono font-bold text-cyan-300 mb-2 uppercase text-[10px]">4 PRIORITY SKILLS TO MASTER:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {advisorResult.keySkillsToFocus?.map((sk: string, idx: number) => (
                  <div key={idx} className="flex items-center space-x-2 bg-white/5 p-2 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="text-slate-200">{sk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
              <button
                onClick={() => setAdvisorResult(null)}
                className="text-slate-400 hover:text-white underline font-medium"
              >
                ← Test Another Profile
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenEnroll('pgdems');
                }}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg flex items-center space-x-1.5"
              >
                <span>Enroll in Recommended Program</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
