import React from 'react';
import { StudioCapabilities } from '../components/StudioCapabilities';

interface CapabilitiesPageProps {
  onOpenConsultation: () => void;
}

export const CapabilitiesPage: React.FC<CapabilitiesPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="w-full pt-28 sm:pt-32 lg:pt-36 pb-20 px-4 sm:px-8 lg:px-14 xl:px-20">
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
          Core Competencies
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Solutions &amp; Capabilities
        </h1>
        <p className="mt-3 text-slate-600 text-base leading-relaxed">
          Enterprise-scale autonomous agent topologies, high-concurrency cloud systems, and deterministic microVM environments.
        </p>
      </div>

      <div className="w-full">
        <StudioCapabilities onOpenConsultation={onOpenConsultation} />
      </div>
    </div>
  );
};