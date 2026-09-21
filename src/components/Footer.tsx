import React from 'react';
import { EasySolutionsLogo } from './EasySolutionsLogo';
import { ShieldCheck, Terminal, ArrowUpRight, Zap, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC<{ onOpenConsultation: () => void; onOpenSandbox: () => void }> = ({
  onOpenConsultation,
  onOpenSandbox,
}) => {
  return (
    <footer id="studio-footer" className="relative w-full border-t border-slate-200 bg-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <EasySolutionsLogo size="md" />
          <div>
            <div className="text-sm font-semibold text-slate-600 max-w-sm mt-1">
              Executive technology consulting, scalable cloud infrastructure, and intelligent automation systems.
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
          <button
            type="button"
            onClick={onOpenSandbox}
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 transition-colors font-bold flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5 text-blue-600" />
            Interactive Architecture Sandbox
          </button>
          <button
            type="button"
            onClick={onOpenConsultation}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-sm shadow-blue-600/20 flex items-center gap-1.5 active:scale-95 cursor-pointer"
          >
            <span>Book Strategy Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          &copy; {new Date().getFullYear()} <span className="text-slate-800 font-semibold">Easy Solutions 4 U</span>. All rights reserved.
        </div>
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium">
          <span className="flex items-center gap-1 text-emerald-700"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> Enterprise Reliability</span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1 text-blue-700"><ShieldCheck className="w-3 h-3 text-blue-600" /> SOC2 Compliance Ready</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-600">Confidentiality Protected</span>
        </div>
      </div>
    </footer>
  );
};
