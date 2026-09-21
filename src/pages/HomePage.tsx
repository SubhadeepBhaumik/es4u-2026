import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Cpu, 
  Building2, 
  Calculator, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Terminal, 
  Server
} from 'lucide-react';
import { HeroHeader } from '../components/HeroHeader';
import { MetricsStrip } from '../components/MetricsStrip';

interface HomePageProps {
  onOpenConsultation: () => void;
  onOpenSandbox: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenConsultation,
  onOpenSandbox,
}) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-14 xl:px-20">
        <HeroHeader
          onOpenConsultation={onOpenConsultation}
          onOpenSandbox={onOpenSandbox}
        />
        <div className="w-full mt-6">
          <MetricsStrip />
        </div>
      </section>

      {/* Engineering Pillars / Core Focus */}
      <section className="w-full px-4 sm:px-8 lg:px-14 xl:px-20 py-20 border-t border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              ARCHITECTURAL PILLARS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Deterministic Engineering. Proven at Scale.
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              We bridge modern agentic intelligence with battle-tested enterprise infrastructure to deliver high-throughput software that stands the test of time.
            </p>
          </div>
          <Link
            to="/capabilities"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors whitespace-nowrap"
          >
            Explore all capabilities <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Agentic AI */}
          <Link
            to="/capabilities"
            className="group p-7 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                Autonomous Agent Workflows
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Multi-agent DAG orchestration, deterministic state routing, and sandboxed tool-calling environments built for zero-drift execution.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
              <span>Inspect Systems</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2: Modernization */}
          <Link
            to="/capabilities"
            className="group p-7 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                Legacy Stack Modernization
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Seamless migration of monolithic PHP, MySQL, and legacy backends into lightning-fast, reactive web and mobile architectures.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
              <span>View Blueprints</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 3: Architecture & Benchmarks */}
          <Link
            to="/architecture"
            className="group p-7 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 border border-sky-200 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                Distributed Topologies
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                AST-isolated MicroVM sandboxing, sub-50ms API throughput, and self-healing worker pools engineered for high resilience.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
              <span>Explore Topology</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 4: Estimator */}
          <Link
            to="/estimator"
            className="group p-7 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                Scope &amp; Sprint Estimator
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Real-time architectural project calculator. Compute sprint milestones, deliverables, and resource allocations on demand.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
              <span>Run Calculations</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* Why Easy Solutions 4 U / Value Proposition Strip */}
      <section className="w-full px-4 sm:px-8 lg:px-14 xl:px-20 py-20 bg-white border-y border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-sm">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900">Senior Architect Direct Engagement</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Work directly with seasoned solutions architects—no non-technical middlemen or handoffs. Requirements are converted directly into deterministic architecture.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black text-sm">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900">Zero Technical Debt Guarantee</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Strict modular decoupling, clean TypeScript interfaces, automated CI/CD pipelines, and high-performance server configurations designed for effortless scale.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-sm">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900">Audited Security &amp; Observability</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              End-to-end data encryption, SOC2-aligned permission controls, and real-time observability dashboards built into every tier of delivery.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};