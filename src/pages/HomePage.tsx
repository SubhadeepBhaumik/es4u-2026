import React, { useState } from 'react';
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
  Server, 
  Activity, 
  Network, 
  Lock, 
  Gauge, 
  Bot, 
  Workflow, 
  PhoneCall,
  Flame,
  FileCode2,
  Database
} from 'lucide-react';
import { HeroHeader } from '../components/HeroHeader';
import { MetricsStrip } from '../components/MetricsStrip';
import { AgentVisualizer } from '../components/AgentVisualizer';
import { SandboxModal } from '../components/SandboxModal';
import { WORKFLOW_TASKS } from '../data/workflowPresets';
import { WorkflowTask } from '../types';

interface HomePageProps {
  onOpenConsultation: () => void;
  onOpenSandbox: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenConsultation,
  onOpenSandbox,
}) => {
  const [sandboxOpen, setSandboxOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<WorkflowTask>(WORKFLOW_TASKS[0]);

  const handleOpenSandboxModal = (task: WorkflowTask) => {
    setSelectedTask(task);
    setSandboxOpen(true);
  };

  return (
    <div className="w-full flex flex-col space-y-24">
      {/* 1. HERO + LIVE METRICS BANNER */}
      <section className="relative w-full pt-28 sm:pt-32 lg:pt-36 px-4 sm:px-8 lg:px-14 xl:px-20">
        <HeroHeader
          onOpenConsultation={onOpenConsultation}
          onOpenSandbox={onOpenSandbox}
        />
        <div className="w-full mt-6">
          <MetricsStrip />
        </div>
      </section>

      {/* 2. LIVE AI RUNTIME FLARE: TERMINAL & TELEMETRY STREAM */}
      <section className="w-full px-4 sm:px-8 lg:px-14 xl:px-20">
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle glow backdrops */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                AUTONOMOUS ENGINE STATE: DETERMINISTIC VERIFIED
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Zero-Drift Multi-Agent Orchestration Telemetry
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700">
                P99: 42ms
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700">
                Isolation: MicroVM Level
              </span>
              <button
                type="button"
                onClick={onOpenSandbox}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Terminal className="w-3.5 h-3.5" />
                Launch Sandbox
              </button>
            </div>
          </div>

          {/* Terminal Viewports Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
            <div className="lg:col-span-8 bg-slate-950 rounded-2xl p-5 border border-slate-800 font-mono text-xs text-slate-300 space-y-3">
              <div className="flex items-center justify-between text-slate-500 text-[11px] pb-2 border-b border-slate-800">
                <span>SYSTEM ROUTER // AGENT_DISPATCH_PIPELINE</span>
                <span>STATUS: OPERATIONAL</span>
              </div>
              <div className="space-y-1.5 text-[11px] sm:text-xs">
                <p className="text-blue-400">
                  &gt; [00:00:01] Inbound Event: REST /webhook/v2/ingest [Token: Verified]
                </p>
                <p className="text-slate-400">
                  &gt; [00:00:02] DAG Router: Decomposing payload into 3 parallel execution nodes...
                </p>
                <p className="text-emerald-400">
                  &gt; [00:00:03] Worker #1 (Vector Memory Retriever): Query completed in 14ms (Cosine similarity: 0.941)
                </p>
                <p className="text-emerald-400">
                  &gt; [00:00:04] Worker #2 (Deterministic AST Sandbox): Evaluated code payload - No side-effects detected
                </p>
                <p className="text-indigo-400">
                  &gt; [00:00:05] Consensus Arbiter: Validation matched across agents. Committing state to transactional store.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950/60 rounded-2xl p-5 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-blue-400" />
                  Cluster Health Gauges
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Worker Concurrency</span>
                      <span className="font-mono text-blue-400">94.2%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '94.2%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Deterministic Pass Rate</span>
                      <span className="font-mono text-emerald-400">99.98%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '99.98%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Memory Safety Bounds</span>
                      <span className="font-mono text-indigo-400">Protected</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full" style={{ width: '100%' }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800 text-[11px] text-slate-500">
                Audited &amp; isolated runtime powered by modern cloud infrastructure.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE AGENT VISUALIZER SECTION */}
      <section className="w-full px-4 sm:px-8 lg:px-14 xl:px-20">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            Real-Time Visual Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Observe Multi-Agent Execution in Action
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            Simulate payload routing, see parallel worker threads isolate tasks, and examine consensus verification live.
          </p>
        </div>
        <AgentVisualizer onOpenSandboxModal={handleOpenSandboxModal} />
      </section>

      {/* 4. UNITS OF INTENT (UOI) ROUTING HUB: DIRECT GATEWAYS TO DEEP-DIVE PAGES */}
      <section className="w-full px-4 sm:px-8 lg:px-14 xl:px-20 py-16 bg-slate-100/70 border-y border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider mb-3">
            Strategic Routing Hub
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineered For What You Need To Solve Today
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Skip generic presentations. Select your architectural priority below to inspect verified implementations and dedicated benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* UOI 1: Capabilities */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Bot className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-1">Intent: Capabilities</div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                Autonomous AI &amp; Modern Stacks
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Explore our core engineering capabilities in agent swarms, full-stack React + TypeScript development, and high-concurrency cloud environments.
              </p>
            </div>
            <Link
              to="/capabilities"
              className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-800"
            >
              <span>Explore Capabilities</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* UOI 2: Architecture */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-400 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Network className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 mb-1">Intent: Blueprints</div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                Deterministic Blueprints
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Deep-dive into microVM isolation sandboxes, DAG routing models, zero-drift memory systems, and sub-50ms API gateways.
              </p>
            </div>
            <Link
              to="/architecture"
              className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-800"
            >
              <span>View Blueprints</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* UOI 3: Case Studies */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-400 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 mb-1">Intent: Proof &amp; ROI</div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Audited Case Studies
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Review verified metrics: 74% dispatch reduction, 88% legal review acceleration, and 99.99% system availability records.
              </p>
            </div>
            <Link
              to="/case-studies"
              className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600 group-hover:text-emerald-800"
            >
              <span>Read Case Studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* UOI 4: Estimator */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Calculator className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-sky-600 mb-1">Intent: Timeline &amp; Cost</div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                Interactive Sprint Calculator
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Configure your project scope, compute engineering sprints, and generate resource requirements before scheduling your consultation.
              </p>
            </div>
            <Link
              to="/estimator"
              className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-600 group-hover:text-sky-800"
            >
              <span>Calculate Scope</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. ENTERPRISE TRUST & ARCHITECTURAL STANDARDS */}
      <section className="w-full px-4 sm:px-8 lg:px-14 xl:px-20 py-8">
        <div className="max-w-6xl mx-auto rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Deterministic Guarantees
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Why Senior Leadership Trusts Easy Solutions 4 U
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Zero Code-Leakage NDA</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Your proprietary workflows, databases, and enterprise data models remain 100% confidential under mutual non-disclosure.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                <Gauge className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Fixed Milestone Scoping</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  No hidden retainer surprises. Deliverables, sprints, and acceptance benchmarks are locked prior to line-one execution.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Production-Ready Delivery</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Complete static asset compilation, Apache/HostGator routing, and database optimization ready to serve real users from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CALL-TO-ACTION SECTION */}
      <section className="w-full px-4 sm:px-8 lg:px-14 xl:px-20 pb-16">
        <div className="w-full rounded-3xl bg-linear-to-r from-slate-900 via-blue-950 to-slate-900 p-8 sm:p-14 border border-slate-800 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-3 text-center lg:text-left relative z-10">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
              Immediate Engagement
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to modernise your architecture?
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              Connect directly with a Principal Solutions Architect. We evaluate your current stack, bottlenecks, and AI expansion vectors under mutual NDA.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Architecture Call</span>
            </button>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all border border-white/20 flex items-center justify-center gap-2"
            >
              <span>Submit Project Scope</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <SandboxModal
        isOpen={sandboxOpen}
        onClose={() => setSandboxOpen(false)}
        task={selectedTask}
      />
    </div>
  );
};