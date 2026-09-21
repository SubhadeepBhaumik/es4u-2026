import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Layers, ShieldCheck, Terminal, Cpu, Building2, Calculator } from 'lucide-react';
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

      {/* Deep-Dive Architectural Teasers */}
      <section className="w-full px-4 sm:px-8 lg:px-14 xl:px-20 py-16 border-t border-slate-200">
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1.5 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            ENTERPRISE DIVISIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Engineered Systems &amp; Solutions
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-2xl">
            Explore our specialized architectural disciplines, technical blueprints, and client outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Capabilities */}
          <Link
            to="/capabilities"
            className="group p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                Solutions &amp; Capabilities
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Autonomous agent workflows, high-throughput cloud migration, custom enterprise software, and SOC2 governance.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
              <span>View Capabilities</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2: Architecture */}
          <Link
            to="/architecture"
            className="group p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                Architecture Blueprints
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Decoupled DAG topologies, deterministic state machines, AST-isolated MicroVM sandboxing, and interactive pipelines.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
              <span>Inspect Topology</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 3: Case Studies */}
          <Link
            to="/case-studies"
            className="group p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                Case Studies &amp; Benchmarks
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Audited enterprise outcomes in FinTech, Healthcare, and SaaS with verified P99 latency and uptime benchmarks.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
              <span>Read Audits</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 4: Estimator */}
          <Link
            to="/estimator"
            className="group p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 border border-sky-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Calculator className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                Scope &amp; Sprint Estimator
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Configure project specifications, compute delivery timelines, and generate tailored architectural deliverables.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
              <span>Calculate Scope</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};