import React, { useState } from 'react';
import { ShieldCheck, Search, Award, CheckCircle2, FileText, Download } from 'lucide-react';

export const CertificateVerification: React.FC = () => {
  const [certId, setCertId] = useState('DEFEB-2025-8842');
  const [verifiedCert, setVerifiedCert] = useState<any>(null);
  const [error, setError] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (certId.trim().length > 3) {
      setError(false);
      setVerifiedCert({
        id: certId.toUpperCase(),
        candidateName: 'Dr. Rahul Sharma, MBBS',
        program: 'PGDEMS - Post Graduate Diploma in Emergency Medical Services',
        issueDate: '15 March 2025',
        internshipCompleted: '600 Hours at Apollo Hospitals ER',
        verificationStatus: 'GENUINE & OFFICIALLY SEALED',
        universitySeal: 'Govt. Recognized University Post Graduate Diploma',
        skillsVerified: [
          'Advanced Airway Management & Endotracheal Intubation',
          '12-Lead ECG STEMI Diagnostic Localization',
          'ATLS Primary & Secondary Trauma Survey',
          'ACLS Cardiac Arrest MegaCode Protocols'
        ]
      });
    } else {
      setError(true);
      setVerifiedCert(null);
    }
  };

  return (
    <section id="verification" className="py-24 bg-[#071936] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>OFFICIAL CREDENTIAL VERIFICATION PORTAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Verify DEFEB <span className="text-cyan-300">Certificate Credential</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            Hospitals and HR departments can instantly verify DEFEB graduate certificates and skill logbook authenticity using the unique credential ID.
          </p>
        </div>

        {/* Search Bar Container */}
        <div className="bg-[#091f42] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
          <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-cyan-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                placeholder="Enter Certificate ID (e.g. DEFEB-2025-8842)"
                className="w-full bg-[#030d1d] border border-cyan-500/30 rounded-2xl pl-12 pr-4 py-3.5 text-white font-mono text-xs focus:outline-none focus:border-cyan-400"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs rounded-2xl shadow-lg flex items-center justify-center space-x-2 shrink-0"
            >
              <ShieldCheck className="w-4 h-4 text-slate-950" />
              <span>Verify Credential</span>
            </button>
          </form>

          {/* Verification Result Preview */}
          {verifiedCert && (
            <div className="bg-[#030e20] border-2 border-cyan-400/50 rounded-2xl p-6 sm:p-8 space-y-6 animate-fadeIn relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 text-[10px] font-mono font-black uppercase px-4 py-1 rounded-bl-xl flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>VERIFIED & AUTHENTIC</span>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] font-mono font-bold text-cyan-400 uppercase">OFFICIAL CREDENTIAL RECORD:</p>
                <h3 className="text-2xl font-black text-white">{verifiedCert.candidateName}</h3>
                <p className="text-xs text-slate-300 font-medium">{verifiedCert.program}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs bg-[#081a38] p-4 rounded-xl border border-white/10">
                <div>
                  <p className="text-[10px] text-slate-400">CERTIFICATE ID:</p>
                  <p className="font-bold text-cyan-300">{verifiedCert.id}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400">ISSUE DATE:</p>
                  <p className="font-bold text-white">{verifiedCert.issueDate}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-[10px] text-slate-400">CLINICAL INTERNSHIP RECORD:</p>
                  <p className="font-bold text-emerald-400">{verifiedCert.internshipCompleted}</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-mono font-bold text-cyan-400 uppercase">VERIFIED COMPETENCIES LOGGED:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                  {verifiedCert.skillsVerified.map((s: string, idx: number) => (
                    <div key={idx} className="flex items-center space-x-2 bg-white/5 p-2 rounded-lg border border-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
