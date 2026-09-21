import React from 'react';
import { 
  Bot, 
  Server, 
  Workflow, 
  ShieldCheck, 
  Code2, 
  Database, 
  CloudLightning, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

interface CapabilitiesPageProps {
  onOpenConsultation: () => void;
}

export const CapabilitiesPage: React.FC<CapabilitiesPageProps> = ({ onOpenConsultation }) => {
  const capabilities = [
    {
      category: 'Agentic AI & Orchestration',
      icon: Bot,
      color: 'blue',
      description: 'Production-ready AI systems capable of deterministic reasoning, automated routing, and external tool execution.',
      features: [
        'Multi-agent swarms with directed acyclic graph (DAG) routing',
        'State-machine memory and session continuity (Vector RAG + Redis)',
        'Sandboxed code execution and external API integration',
        'Model fine-tuning, latency optimization, and token cost controls'
      ]
    },
    {
      category: 'Enterprise Full-Stack Engineering',
      icon: Code2,
      color: 'indigo',
      description: 'Modern, reactive web applications and mobile ecosystems built for speed, responsiveness, and zero downtime.',
      features: [
        'Ultra-fast Vite + React + TypeScript frontends with SSR/SPA flexibility',
        'Robust PHP 8.3 / Node / Python microservices and secure REST/GraphQL APIs',
        'Native and cross-platform mobile app development (React Native & Flutter)',
        'Modern relational and NoSQL database modeling (MySQL, PostgreSQL, Vector DBs)'
      ]
    },
    {
      category: 'Legacy Modernization & Cloud Systems',
      icon: Server,
      color: 'sky',
      description: 'Revamping legacy codebases into high-velocity, edge-ready architectures without disrupting active operations.',
      features: [
        'Monolith-to-microservice refactoring with zero data loss',
        'HostGator / AWS / GCP high-throughput deployment engineering',
        'Apache / NGINX rewrite optimization and automated asset caching',
        'Database indexing, query profiling, and multi-tenant scaling'
      ]
    },
    {
      category: 'Workflow Automation & CRM Architecture',
      icon: Workflow,
      color: 'emerald',
      description: 'End-to-end operational automation that eliminates manual bottlenecks and synchronizes enterprise data.',
      features: [
        'Custom CRM & GoHighLevel (GHL) funnel architectures and webhooks',
        'Automated document verification and extraction pipelines',
        'Automated transactional email, SMS, and WhatsApp dispatch engines',
        'Audited enterprise reporting dashboards with real-time analytics'
      ]
    }
  ];

  return (
    <div className="w-full pt-28 sm:pt-32 lg:pt-36 pb-24 px-4 sm:px-8 lg:px-14 xl:px-20">
      {/* Header */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
          ENGINEERING CAPABILITIES
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Enterprise Systems. Autonomous AI. Modern Web.
        </h1>
        <p className="mt-4 text-slate-600 text-base leading-relaxed">
          From deterministic agent workflows to high-throughput cloud platforms, we engineer mission-critical software built for stability, security, and measurable performance.
        </p>
      </div>

      {/* Grid of Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {capabilities.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.category}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="space-y-3 pt-6 border-t border-slate-100">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action Banner */}
      <div className="w-full rounded-3xl bg-linear-to-r from-blue-900 to-slate-900 p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="space-y-2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Have a custom engineering or migration challenge?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl">
            Schedule a technical strategy session to review your current architecture and chart a clear roadmap.
          </p>
        </div>
        <button
          type="button"
          onClick={onOpenConsultation}
          className="px-8 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold text-sm transition-all shadow-md active:scale-95 whitespace-nowrap cursor-pointer"
        >
          Book Architecture Strategy Session
        </button>
      </div>
    </div>
  );
};