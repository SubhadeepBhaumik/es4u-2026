import React from 'react';
import { Award, GitPullRequest, Building2, Zap, ArrowUpRight, TrendingUp, Sparkles, Shield, CheckCircle2 } from 'lucide-react';

interface MetricItem {
  id: string;
  metric: string;
  label: string;
  description: string;
  badge: string;
  iconBg: string;
  icon: React.ReactNode;
}

const METRICS: MetricItem[] = [
  {
    id: 'metric-pedigree',
    metric: '15+',
    label: 'Years Architecture Experience',
    description: 'Enterprise systems, cloud native microservices, distributed architectures, and mission-critical SLAs.',
    badge: 'Principal Architect',
    iconBg: 'bg-blue-50 text-blue-700 border-blue-200',
    icon: <Award className="w-5 h-5" />,
  },
  {
    id: 'metric-workflows',
    metric: '250+',
    label: 'Production Systems Delivered',
    description: 'High-reliability cloud pipelines, intelligent workflow orchestrators, and enterprise integrations.',
    badge: 'Enterprise Proven',
    iconBg: 'bg-sky-50 text-sky-700 border-sky-200',
    icon: <GitPullRequest className="w-5 h-5" />,
  },
  {
    id: 'metric-clients',
    metric: '40+',
    label: 'Enterprise Clients Supported',
    description: 'Advising fintech, healthcare, logistics, and SaaS leaders with tailored technology strategies.',
    badge: 'Proven Impact',
    iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    id: 'metric-latency',
    metric: '99.99%',
    label: 'Production Uptime SLA',
    description: 'Zero-downtime blue/green deployments, automated failovers, and robust multi-region clouds.',
    badge: 'Target Guarantee',
    iconBg: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: <Zap className="w-5 h-5" />,
  },
];

export const MetricsStrip: React.FC = () => {
  return (
    <section
      id="authority-metrics-strip"
      className="relative w-full max-w-7xl mx-auto pt-16 sm:pt-20 pb-8"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-5 border-b border-slate-200 relative z-10">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1.5 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            PROVEN ENGINEERING TRACK RECORD &amp; SLA BENCHMARKS
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Engineered for <span className="text-blue-700">Enterprise Reliability</span>
          </h2>
        </div>

        <div className="text-xs font-semibold text-slate-600 flex items-center gap-2.5">
          <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-1.5 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Verified Case Outcomes
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 flex items-center gap-1.5 shadow-xs">
            <Shield className="w-3.5 h-3.5 text-blue-600" />
            SOC2 Ready
          </span>
        </div>
      </div>

      {/* 4-Metric Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        {METRICS.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className="group relative rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 flex flex-col justify-between transition-all duration-350 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/12 hover:border-blue-400/80 shadow-sm overflow-hidden hover-gradient-top hover-inner-sheen cursor-pointer"
          >
            {/* Top row: badge and icon */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 transition-colors duration-300 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border group-hover:border-blue-200">
                {item.badge}
              </span>
              <div className={`p-2.5 rounded-xl border ${item.iconBg} shadow-xs group-hover:scale-115 group-hover:rotate-6 group-hover:shadow-md group-hover:shadow-blue-500/20 transition-all duration-300`}>
                {item.icon}
              </div>
            </div>

            {/* Metric Value */}
            <div className="mb-4">
              <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-none group-hover:text-blue-600 transition-colors duration-300">
                {item.metric}
              </div>
              <div className="mt-2.5 text-base font-bold tracking-tight text-slate-800 group-hover:text-slate-900 transition-colors">
                {item.label}
              </div>
            </div>

            {/* Metric Description */}
            <p className="text-xs text-slate-600 leading-relaxed pt-3.5 border-t border-slate-100">
              {item.description}
            </p>

            {/* Subtle verification link */}
            <div className="mt-3.5 flex items-center justify-between text-[11px] font-semibold text-blue-600 group-hover:text-blue-700">
              <span className="group-hover:underline underline-offset-4">Explore Deliverable Standards</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
