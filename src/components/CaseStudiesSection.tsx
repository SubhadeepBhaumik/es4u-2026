import React from 'react';
import { Building2, ArrowUpRight, CheckCircle2, Activity, TrendingUp, Sparkles, Shield, Cpu, ExternalLink } from 'lucide-react';

export const CaseStudiesSection: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const cases = [
    {
      id: 'case-fintech',
      sector: 'FINTECH & CAPITAL MARKETS',
      sectorColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      title: 'Real-Time Settlement & Regulatory Audit Mesh',
      outcome: 'Reduced reconciliation latency from 4.2 hours to 380ms with 99.98% deterministic audit accuracy across distributed transaction records.',
      specs: ['Distributed Gateway', 'Vector Search Cache', 'ISO-20022 Schema', 'mTLS Security'],
      metrics: '€1.4B Daily Volume Processed',
      metricGrowth: '+99.2% speedup',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'case-health',
      sector: 'HEALTHCARE & LIFE SCIENCES',
      sectorColor: 'bg-blue-50 text-blue-800 border-blue-200',
      title: 'HIPAA-Compliant Clinical Intake & Protocol Verification',
      outcome: 'Intelligent cohort analyzer accelerated multi-site patient qualification by 14x with zero PHI leaks or cross-tenant data retention.',
      specs: ['Private Cloud VPC', 'Cryptographic Audits', 'FHIR API Gateway', 'Isolated Sandboxes'],
      metrics: '250,000+ Patient Cohorts Correlated',
      metricGrowth: '14x faster qualification',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'case-cloud',
      sector: 'GLOBAL ENTERPRISE SAAS',
      sectorColor: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      title: 'Self-Healing Cloud Infrastructure & Automated Incident Triage',
      outcome: 'Autonomous root-cause detection and automated pull-request remediation resolved 68% of Tier-1 alerts without human on-call fatigue.',
      specs: ['Kubernetes Cluster', 'OpenTelemetry Metrics', 'Automated Canary Rollback', 'Real-Time Alerts'],
      metrics: '82% Reduction in MTTR',
      metricGrowth: '68% Tier-1 automated',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="case-studies" className="relative w-full max-w-7xl mx-auto py-16 border-t border-slate-200">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 relative z-10">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1.5 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            DEPLOYED PRODUCTION BENCHMARKS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Proven Outcomes Across <span className="text-blue-700">Critical Sectors</span>
          </h2>
          <p className="text-base text-slate-600 mt-2 max-w-2xl">
            Real enterprise case studies with audited outcomes, guaranteed SLAs, and quantifiable business value.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenConsultation}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all font-bold text-xs shadow-md shadow-blue-600/20 self-start md:self-auto group active:scale-95"
        >
          <span>Discuss Your Production Architecture</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* 3 Rich Cards with Full Photography and Detailed Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {cases.map((c) => (
          <div
            key={c.id}
            id={c.id}
            onClick={onOpenConsultation}
            className="group rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 flex flex-col justify-between transition-all duration-350 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/12 hover:border-blue-400/80 shadow-sm overflow-hidden hover-gradient-top hover-inner-sheen cursor-pointer"
          >
            <div>
              {/* Photo Banner with Top Floating Badges */}
              <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5 border border-slate-100 group-hover:border-blue-200/80 transition-all duration-500 shadow-xs">
                <img
                  src={c.image}
                  alt={c.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent transition-opacity duration-300 group-hover:opacity-85" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg backdrop-blur-md shadow-xs border ${c.sectorColor} transition-transform duration-300 group-hover:scale-105`}>
                    {c.sector}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-600 text-white shadow-xs transition-transform duration-300 group-hover:scale-105">
                    {c.metricGrowth}
                  </span>
                </div>
              </div>

              {/* Title & Outcome */}
              <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-700 transition-colors duration-200">
                {c.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {c.outcome}
              </p>
            </div>

            {/* Bottom Specs & Metrics */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between transition-colors duration-300 group-hover:bg-emerald-50/70 group-hover:border-emerald-300/80">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-slate-800 group-hover:text-emerald-950">{c.metrics}</span>
                </div>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {c.specs.map((spec) => (
                  <span
                    key={spec}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-100/90 text-slate-600 border border-slate-200/80 group-hover:border-slate-300 transition-colors"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Action link */}
              <div className="pt-2 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                <span className="group-hover:underline underline-offset-4">Read Full Architectural Audit</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
