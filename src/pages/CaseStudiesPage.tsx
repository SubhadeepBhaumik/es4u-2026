import React from 'react';
import { CaseStudiesSection } from '../components/CaseStudiesSection';

interface CaseStudiesPageProps {
  onOpenConsultation: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="w-full pt-28 sm:pt-32 lg:pt-36 pb-20 px-4 sm:px-8 lg:px-14 xl:px-20">
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
          Verified Outcomes
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Case Studies &amp; Benchmarks
        </h1>
        <p className="mt-3 text-slate-600 text-base leading-relaxed">
          Production case studies demonstrating sub-50ms latency, 99.99% uptime, and audited ROI across enterprise environments.
        </p>
      </div>

      <div className="w-full">
        <CaseStudiesSection onOpenConsultation={onOpenConsultation} />
      </div>
    </div>
  );
};