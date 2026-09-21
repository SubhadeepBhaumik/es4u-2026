import React from 'react';
import { 
  Bot, 
  Terminal, 
  ShieldCheck, 
  Workflow, 
  Sparkles, 
  Server, 
  ArrowUpRight,
  Code2,
  Lock,
  Layers,
  Zap,
  Globe2,
  CheckCircle2,
  FileCode,
  Braces
} from 'lucide-react';

interface CapabilityItem {
  id: string;
  icon: React.ReactNode;
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  metricsChip: string;
}

export const StudioCapabilities: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const capabilities: CapabilityItem[] = [
    {
      id: 'cap-automation',
      icon: <Workflow className="w-5 h-5 text-blue-700" />,
      tag: 'Intelligent AI Workflows',
      tagColor: 'bg-blue-50 text-blue-800 border-blue-200',
      title: 'Workflow Automation & Smart AI Systems',
      description: 'Streamline operational bottlenecks with automated AI pipelines, document extraction, intelligent customer triage, and human-in-the-loop workflows.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      techStack: ['Automated Routing', 'LLM Processing', 'Document AI', 'Smart Decision Engines', 'Human Validation'],
      metricsChip: '99.4% Workflow Accuracy',
    },
    {
      id: 'cap-cloud',
      icon: <Server className="w-5 h-5 text-sky-700" />,
      tag: 'Cloud & Infrastructure',
      tagColor: 'bg-sky-50 text-sky-800 border-sky-200',
      title: 'Cloud Architecture & Modernization',
      description: 'Migrate legacy workloads and build scalable, multi-region cloud infrastructures on AWS, GCP, and Azure designed for zero downtime and cost efficiency.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      techStack: ['AWS & GCP Cloud', 'Docker & Kubernetes', 'Terraform IaC', 'Serverless APIs', 'Global CDN'],
      metricsChip: '99.99% Uptime Guarantee',
    },
    {
      id: 'cap-integrations',
      icon: <Layers className="w-5 h-5 text-indigo-700" />,
      tag: 'Enterprise Systems',
      tagColor: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      title: 'Custom Software & Systems Integration',
      description: 'Seamlessly connect CRMs, ERPs, payment gateways, and third-party SaaS into unified, high-throughput data pipelines and modern user portals.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      techStack: ['REST & GraphQL', 'Salesforce & SAP Sync', 'Stripe & Banking APIs', 'Real-time Webhooks', 'Event Streaming'],
      metricsChip: 'Unified Data Flow',
    },
    {
      id: 'cap-security',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-700" />,
      tag: 'Security & Governance',
      tagColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      title: 'Enterprise Security, SOC2 & Compliance',
      description: 'Full-spectrum security reviews, data encryption at rest and in transit, air-gapped data protections, and audit-ready governance for sensitive industries.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      techStack: ['SOC2 & HIPAA Compliant', 'Zero-Trust Access', 'End-to-End Encryption', 'Penetration Testing', 'Audit Logging'],
      metricsChip: 'Zero-Leakage Assurance',
    },
  ];

  return (
    <section id="capabilities" className="relative w-full max-w-7xl mx-auto py-16 border-t border-slate-200">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 relative z-10">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1.5 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            COMPREHENSIVE SOLUTIONS &amp; CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            End-to-End Technology <span className="text-blue-700">Capabilities</span>
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-2xl">
            From strategic technical advisory to hands-on architecture and execution, we provide modern solutions that elevate your operations.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenConsultation}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all font-bold text-xs shadow-md shadow-blue-600/20 self-start md:self-auto group active:scale-95"
        >
          <span>Request Technical Scoping</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* 4 Rich Visual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {capabilities.map((cap) => (
          <div
            key={cap.id}
            id={cap.id}
            className="group relative rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 transition-all duration-350 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/12 hover:border-blue-400/80 shadow-sm flex flex-col justify-between overflow-hidden hover-gradient-top hover-inner-sheen"
          >
            {/* Visual Header with Image preview */}
            <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-5 border border-slate-100 group-hover:border-blue-200/80 transition-all duration-500 shadow-xs">
              <img
                src={cap.image}
                alt={cap.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/15 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Floating badges over image */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg backdrop-blur-md shadow-xs border ${cap.tagColor} transition-transform duration-300 group-hover:scale-105`}>
                  {cap.tag}
                </span>

                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-emerald-200 text-emerald-800 flex items-center gap-1 shadow-xs transition-transform duration-300 group-hover:scale-105">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  {cap.metricsChip}
                </span>
              </div>

              {/* Floating icon with kinetic pop */}
              <div className="absolute bottom-3 left-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-slate-200/80 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-blue-500/25 group-hover:border-blue-300 transition-all duration-300">
                {cap.icon}
              </div>
            </div>

            {/* Title & Description */}
            <div className="mb-5">
              <h3 className="text-xl font-bold tracking-tight mb-2 text-slate-900 group-hover:text-blue-700 transition-colors duration-200">
                {cap.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {cap.description}
              </p>
            </div>

            {/* Tech Stack Pills & Action link */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
                {cap.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200/80 border border-transparent text-slate-700 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div 
                onClick={onOpenConsultation}
                className="flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700 cursor-pointer pt-1 group/link"
              >
                <span className="flex items-center gap-1.5 group-hover:underline underline-offset-4">
                  <Code2 className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:rotate-6" />
                  Explore Solution Blueprint
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1.5 group-hover/link:-translate-y-1 transition-transform duration-300" />
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};
