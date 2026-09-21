import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

interface CaseStudiesPageProps {
  onOpenConsultation: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onOpenConsultation }) => {
  const caseStudies = [
    {
      title: 'B2B Industrial Supply Chain & E-Commerce Overhaul',
      sector: 'Manufacturing & Distribution',
      impact: '74% reduction in order dispatch lag; $1.4M ARR processed seamlessly',
      timeframe: '6-Week Rapid Rollout',
      stack: 'React + Vite, PHP 8.3 Core, MySQL High-Availability, Cloudflare CDN',
      challenge: 'The client operated on an outdated monolithic order system suffering from race conditions, frequent lockups during peak morning ordering cycles, and manual warehouse dispatching.',
      solution: 'Architected a decoupled frontend interface communicating with high-efficiency PHP endpoints, automated inventory reservation locks, and instant PDF PO generation pipelines.',
      metrics: [
        { label: 'API P99 Latency', value: '38ms' },
        { label: 'Uptime Benchmark', value: '99.99%' },
        { label: 'Daily Orders Handled', value: '12,000+' }
      ]
    },
    {
      title: 'Multi-Agent Autonomous Legal Discovery & Document Verification',
      sector: 'LegalTech & Compliance',
      impact: '88% operational time saved on cross-jurisdictional contract review',
      timeframe: '8-Week Architecture Sprint',
      stack: 'Python AST Sandboxes, Vector DB (Chroma), TypeScript Dashboard, FastPath Routing',
      challenge: 'Legal attorneys spent an average of 4.5 hours per contract manually validating clauses across multi-jurisdictional compliance registries.',
      solution: 'Engineered a specialized multi-agent pipeline: an AST validator parses legal clauses, queries an encrypted vector memory database, and compiles a redline discrepancy report with verified audit citations.',
      metrics: [
        { label: 'Extraction Accuracy', value: '99.4%' },
        { label: 'Contract Audit Time', value: '42 seconds' },
        { label: 'Compliance Score', value: 'SOC2 Ready' }
      ]
    },
    {
      title: 'Healthcare SaaS Patient Flow & Booking Automation',
      sector: 'Healthcare & Clinical Services',
      impact: 'Zero double-bookings; 3.2x increase in patient retention rate',
      timeframe: '5-Week Modular Sprint',
      stack: 'React SPA, Secure Microservice Gateway, Real-time SMS/WhatsApp Webhooks',
      challenge: 'Multiple clinic branches were suffering from asynchronous calendar discrepancies, dropped appointments, and high cancellation rates due to lack of automated communication.',
      solution: 'Deployed an event-driven booking engine with distributed calendar mutexes and proactive automated follow-up sequences via multi-channel messaging.',
      metrics: [
        { label: 'No-Show Rate Drop', value: '-62%' },
        { label: 'Sync Latency', value: '< 150ms' },
        { label: 'Patient Rating', value: '4.9 / 5.0' }
      ]
    }
  ];

  return (
    <div className="w-full pt-28 sm:pt-32 lg:pt-36 pb-24 px-4 sm:px-8 lg:px-14 xl:px-20">
      {/* Header */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
          PROVEN ENTERPRISE IMPACT
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Case Studies &amp; Performance Benchmarks
        </h1>
        <p className="mt-4 text-slate-600 text-base leading-relaxed">
          Verifiable results delivered across regulated industries. We replace brittle manual workflows with resilient, automated, and observable software architectures.
        </p>
      </div>

      {/* Case Study Cards */}
      <div className="space-y-12 mb-20 max-w-6xl mx-auto">
        {caseStudies.map((study, idx) => (
          <div
            key={idx}
            className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
                  {study.sector}
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  {study.timeframe}
                </span>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                {study.impact}
              </span>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
                {study.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-2">The Challenge</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{study.challenge}</p>
                </div>
                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">The Engineered Solution</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{study.solution}</p>
                </div>
              </div>

              <div className="text-xs text-slate-500 mb-6">
                <strong className="text-slate-800">Stack Architecture: </strong> {study.stack}
              </div>

              {/* Metrics Strip */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                {study.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="text-center sm:text-left">
                    <div className="text-xl sm:text-2xl font-black text-slate-900">{m.value}</div>
                    <div className="text-[11px] text-slate-500 font-semibold uppercase">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Banner */}
      <div className="text-center max-w-xl mx-auto space-y-4">
        <h3 className="text-2xl font-bold text-slate-900">Want to achieve similar benchmarks?</h3>
        <p className="text-xs text-slate-600">
          We perform comprehensive architectural audits before writing a single line of production code.
        </p>
        <button
          type="button"
          onClick={onOpenConsultation}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all shadow-md active:scale-95 cursor-pointer"
        >
          Request an Architectural Audit
        </button>
      </div>
    </div>
  );
};