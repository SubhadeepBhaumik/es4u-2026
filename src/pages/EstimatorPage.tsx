import React from 'react';
import { ScopeEstimatorSection } from '../components/ScopeEstimatorSection';

interface EstimatorPageProps {
  onOpenConsultation: () => void;
}

export const EstimatorPage: React.FC<EstimatorPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="w-full pt-28 sm:pt-32 lg:pt-36 pb-20 px-4 sm:px-8 lg:px-14 xl:px-20">
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider mb-4">
          Interactive Scoping
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Scope &amp; Sprint Estimator
        </h1>
        <p className="mt-3 text-slate-600 text-base leading-relaxed">
          Configure architectural parameters, simulate sprint milestones, and calculate precise implementation timelines.
        </p>
      </div>

      <div className="w-full">
        <ScopeEstimatorSection onOpenConsultation={onOpenConsultation} />
      </div>
    </div>
  );
};