import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, UserCheck, CreditCard, Sparkles, Phone, Mail, Award } from 'lucide-react';

interface EnrollmentWizardProps {
  isOpen: boolean;
  initialCourseId?: string;
  onClose: () => void;
}

export const EnrollmentWizard: React.FC<EnrollmentWizardProps> = ({ isOpen, initialCourseId = 'pgdems', onClose }) => {
  const [step, setStep] = useState(1);

  // Form State
  const [candidateType, setCandidateType] = useState('Doctor (MBBS/AYUSH)');
  const [selectedCourse, setSelectedCourse] = useState(initialCourseId);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [learningMode, setLearningMode] = useState('Hybrid (Classroom + Hospital Rotation)');
  const [paymentChoice, setPaymentChoice] = useState('0% EMI (₹6,250/mo)');
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 5) {
      setStep(prev => prev + 1);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.5 }
      });
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(prev => prev - 1);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-[#091f42] border border-cyan-400/40 rounded-3xl max-w-2xl w-full text-white relative my-8 shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
              STEP {step} OF 5 — DEFEB ENROLLMENT WIZARD
            </span>
            <h3 className="text-xl font-black text-white mt-0.5">
              {step === 1 && 'Select Your Medical Background'}
              {step === 2 && 'Choose Academic Program'}
              {step === 3 && 'Enter Candidate Credentials'}
              {step === 4 && 'Select Training Mode & Batch'}
              {step === 5 && 'Tuition Fee & EMI Options'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white bg-white/10 p-2 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isCompleted ? (
          <div className="space-y-6 text-xs">

            {/* Step 1: Candidate Type */}
            {step === 1 && (
              <div className="space-y-3">
                <p className="text-slate-300">Select your professional degree to customize your training logbook:</p>
                {[
                  'Doctor (MBBS / Post Graduate)',
                  'AYUSH Doctor (BAMS / BHMS / BUMS)',
                  'Nursing Officer (BSc Nursing / GNM)',
                  'Paramedic / Emergency Medical Technician',
                  'Final Year Medical Student'
                ].map((type) => (
                  <button
                    key={type}
                    onClick={() => setCandidateType(type)}
                    className={`w-full text-left p-4 rounded-xl border text-xs font-bold transition-all flex items-center justify-between ${
                      candidateType === type
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <span>{type}</span>
                    {candidateType === type && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Course Selection */}
            {step === 2 && (
              <div className="space-y-3">
                <p className="text-slate-300">Select the certification or diploma program you wish to join:</p>
                {[
                  { id: 'pgdems', title: 'PGDEMS — Post Graduate Diploma in Emergency Medical Services (1 Year)', price: '₹75,000' },
                  { id: 'acls', title: 'ACLS & BLS Instructor Certification (AHA Aligned)', price: '₹18,500' },
                  { id: 'airway', title: 'Airway & Mechanical Ventilation Masterclass', price: '₹12,000' },
                  { id: 'atls', title: 'ATLS & Emergency Trauma Resuscitation', price: '₹22,000' },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCourse(c.id)}
                    className={`w-full text-left p-4 rounded-xl border text-xs font-bold transition-all flex items-center justify-between ${
                      selectedCourse === c.id
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <div>
                      <p className="font-bold text-white">{c.title}</p>
                      <p className="text-[10px] text-cyan-400 font-mono mt-0.5">{c.price}</p>
                    </div>
                    {selectedCourse === c.id && <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 ml-2" />}
                  </button>
                ))}
              </div>
            )}

            {/* Step 3: Candidate Personal Details */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block font-mono font-bold text-cyan-300 mb-1">Full Legal Name (For Certificate):</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Dr. Rajesh Kumar"
                    className="w-full bg-[#030d1d] border border-cyan-500/30 rounded-xl p-3 text-white focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-mono font-bold text-cyan-300 mb-1">Mobile WhatsApp Number:</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#030d1d] border border-cyan-500/30 rounded-xl p-3 text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono font-bold text-cyan-300 mb-1">Email Address:</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="doctor@gmail.com"
                      className="w-full bg-[#030d1d] border border-cyan-500/30 rounded-xl p-3 text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono font-bold text-cyan-300 mb-1">Medical Registration / Council ID (Optional):</label>
                  <input
                    type="text"
                    value={regNumber}
                    onChange={(e) => setRegNumber(e.target.value)}
                    placeholder="e.g. MCI-2021-99812 / State Medical Council"
                    className="w-full bg-[#030d1d] border border-cyan-500/30 rounded-xl p-3 text-white focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Mode & Batch */}
            {step === 4 && (
              <div className="space-y-3">
                <p className="text-slate-300">Select your preferred training schedule mode:</p>
                {[
                  'Hybrid (Weekend Classroom Sim Lab + 600 Hours Hospital Internship)',
                  'Full Regular (Daily Classroom + Morning ICU Rotations)',
                  'Online Distance Theory + 2-Week Intensive Hands-on Sim Lab'
                ].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setLearningMode(mode)}
                    className={`w-full text-left p-4 rounded-xl border text-xs font-bold transition-all flex items-center justify-between ${
                      learningMode === mode
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <span>{mode}</span>
                    {learningMode === mode && <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 ml-2" />}
                  </button>
                ))}
              </div>
            )}

            {/* Step 5: Payment Choice */}
            {step === 5 && (
              <div className="space-y-3">
                <p className="text-slate-300">Select your fee payment plan (No Hidden Charges):</p>
                {[
                  '0% Interest Easy EMI (₹6,250 / month x 12 months)',
                  'One-Time Full Payment (₹5,000 Special Discount Applied)',
                  'Scholarship Request (For Final Year Candidates)'
                ].map((plan) => (
                  <button
                    key={plan}
                    onClick={() => setPaymentChoice(plan)}
                    className={`w-full text-left p-4 rounded-xl border text-xs font-bold transition-all flex items-center justify-between ${
                      paymentChoice === plan
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <span>{plan}</span>
                    {paymentChoice === plan && <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 ml-2" />}
                  </button>
                ))}
              </div>
            )}

            {/* Wizard Navigation Bar */}
            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl flex items-center space-x-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              ) : <div></div>}

              <button
                onClick={handleNext}
                className="px-6 py-3 bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-bold rounded-xl shadow-lg flex items-center space-x-1.5"
              >
                <span>{step === 5 ? 'Confirm Seat Reservation' : 'Continue Step'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        ) : (
          /* Final Confirmation */
          <div className="text-center space-y-6 py-6 animate-fadeIn text-xs">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-white">
              Provisional Seat Reserved!
            </h3>

            <p className="text-slate-200 leading-relaxed max-w-md mx-auto">
              Thank you, <strong className="text-cyan-300">{fullName || 'Doctor'}</strong>. Your provisional seat for <strong className="text-cyan-300">{selectedCourse.toUpperCase()}</strong> has been locked. Our Senior Admissions Counselor will contact you on <strong className="text-amber-300">{phone || 'your phone'}</strong> with your formal welcome kit and hospital posting options.
            </p>

            <div className="bg-[#030e20] p-4 rounded-xl border border-cyan-500/30 text-left space-y-2 max-w-md mx-auto font-mono text-[11px]">
              <p className="text-cyan-400 font-bold">RESERVATION DETAILS:</p>
              <p>• Category: {candidateType}</p>
              <p>• Training Mode: {learningMode}</p>
              <p>• Selected Plan: {paymentChoice}</p>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-3 bg-cyan-500 text-slate-950 font-bold rounded-xl shadow"
            >
              Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
