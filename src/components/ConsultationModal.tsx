import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Calendar, Sparkles, Terminal, Cpu, Lock, Send } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    architectureFocus: 'Enterprise Cloud Architecture',
    timeline: 'Immediate (Next 30 Days)',
    projectOverview: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      id="consultation-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="consultation-modal-dialog"
        className="relative w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl text-left overflow-hidden"
      >
        {/* Close Button */}
        <button
          id="consultation-modal-close"
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          aria-label="Close consultation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                EXECUTIVE STRATEGY CONSULTATION
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Book Architecture <span className="text-blue-700">Consultation</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Connect directly with our Principal Solutions Architect to evaluate your technical roadmap, cloud modernization, or workflow automation.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="consultation-name" className="block text-xs font-semibold text-slate-700 mb-1">
                    FULL NAME *
                  </label>
                  <input
                    id="consultation-name"
                    required
                    type="text"
                    placeholder="Jane Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:outline-none text-slate-900 text-xs placeholder:text-slate-400 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="consultation-email" className="block text-xs font-semibold text-slate-700 mb-1">
                    WORK EMAIL *
                  </label>
                  <input
                    id="consultation-email"
                    required
                    type="email"
                    placeholder="jane@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:outline-none text-slate-900 text-xs placeholder:text-slate-400 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="consultation-company" className="block text-xs font-semibold text-slate-700 mb-1">
                    ORGANIZATION / COMPANY *
                  </label>
                  <input
                    id="consultation-company"
                    required
                    type="text"
                    placeholder="Acme Corporation"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:outline-none text-slate-900 text-xs placeholder:text-slate-400 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="consultation-focus" className="block text-xs font-semibold text-slate-700 mb-1">
                    PRIMARY SOLUTION FOCUS
                  </label>
                  <select
                    id="consultation-focus"
                    value={formData.architectureFocus}
                    onChange={(e) => setFormData({ ...formData, architectureFocus: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:outline-none text-slate-900 text-xs transition-all"
                  >
                    <option value="Enterprise Cloud Architecture">Enterprise Cloud Architecture</option>
                    <option value="Workflow Automation & Intelligent Systems">Workflow Automation &amp; Intelligent Systems</option>
                    <option value="Custom Software & System Integration">Custom Software &amp; System Integration</option>
                    <option value="Security, Compliance & SOC2">Security, Compliance &amp; SOC2</option>
                    <option value="Legacy Modernization & Performance">Legacy Modernization &amp; Performance</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="consultation-overview" className="block text-xs font-semibold text-slate-700 mb-1">
                  PROJECT OVERVIEW / CHALLENGES
                </label>
                <textarea
                  id="consultation-overview"
                  rows={3}
                  placeholder="Describe your current software stack, scale targets, or operational goals..."
                  value={formData.projectOverview}
                  onChange={(e) => setFormData({ ...formData, projectOverview: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:outline-none text-slate-900 text-xs placeholder:text-slate-400 transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Strict Confidentiality &amp; NDA Assured</span>
                </div>

                <button
                  id="consultation-submit-btn"
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 active:scale-95 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Consultation</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-8 text-center flex flex-col items-center relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4 shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>

            <span className="text-xs uppercase tracking-wider text-emerald-800 mb-1 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              CONSULTATION INQUIRY RECEIVED
            </span>
            <h4 className="text-2xl font-bold text-slate-900 mb-2">
              We'll Be in Touch Shortly
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mb-6 leading-relaxed">
              Thank you, <span className="text-slate-900 font-bold">{formData.fullName || 'Partner'}</span>. 
              Our Principal Solutions Architect has received your inquiry for <span className="text-slate-900 font-bold">{formData.company || 'your organization'}</span>. We will follow up with scheduling options and tailored insights within 4 business hours.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left w-full text-xs text-slate-700 space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-500">Response Window:</span>
                <span className="text-emerald-700 font-bold">&lt; 4 Business Hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Service Area:</span>
                <span className="text-slate-900 font-semibold">{formData.architectureFocus}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Confirmation Reference:</span>
                <span className="text-blue-700 font-bold">#ES4U-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
            </div>

            <button
              id="consultation-done-btn"
              type="button"
              onClick={handleReset}
              className="px-8 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-all active:scale-95"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
