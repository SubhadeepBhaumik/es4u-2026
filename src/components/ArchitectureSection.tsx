import React, { useState } from 'react';
import { 
  Layers, 
  Shield, 
  Zap, 
  GitFork, 
  Check, 
  ArrowRight, 
  Server, 
  Cpu, 
  Lock, 
  Database, 
  Terminal, 
  Sparkles,
  Network,
  RefreshCw,
  CheckCircle2,
  Workflow
} from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mesh' | 'security' | 'pipeline'>('mesh');

  const principles = [
    {
      num: '01',
      title: 'Decoupled Router & Scalable Execution',
      text: 'Decision routing logic operates independently from compute-heavy worker nodes, allowing dynamic auto-scaling of worker pools without degrading gateway latency.',
      icon: <GitFork className="w-5 h-5 text-blue-700" />,
      tag: 'SCALABILITY',
      iconBg: 'bg-blue-50 border-blue-200',
    },
    {
      num: '02',
      title: 'Deterministic State Machines',
      text: 'AI models propose actions, but deterministic state machines execute them. Every side-effect is bounded by transactional guarantees and compensating rollbacks.',
      icon: <Cpu className="w-5 h-5 text-indigo-700" />,
      tag: 'DETERMINISM',
      iconBg: 'bg-indigo-50 border-indigo-200',
    },
    {
      num: '03',
      title: 'Zero Data Leakage Sandboxing',
      text: 'Ephemeral isolated runtimes wipe memory structures upon task completion. Sensitive user parameters are tokenized prior to vector processing or external calls.',
      icon: <Lock className="w-5 h-5 text-emerald-700" />,
      tag: 'ZERO-TRUST',
      iconBg: 'bg-emerald-50 border-emerald-200',
    },
    {
      num: '04',
      title: 'Continuous Audit Trails & Governance',
      text: 'Every prompt token, tool invocation, and decision path is logged to an immutable audit record for regulatory compliance and enterprise transparency.',
      icon: <Shield className="w-5 h-5 text-amber-700" />,
      tag: 'COMPLIANCE',
      iconBg: 'bg-amber-50 border-amber-200',
    },
  ];

  return (
    <section id="architecture" className="relative w-full max-w-7xl mx-auto py-16 border-t border-slate-200">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 relative z-10">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1.5 flex items-center gap-2">
            <Network className="w-4 h-4 text-blue-600" />
            SYSTEM TOPOLOGY &amp; PRINCIPLES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Architectural Blueprint: <span className="text-blue-700">Resilient Systems</span>
          </h2>
          <p className="text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Engineered to eliminate fragility in production enterprise software. Replacing unpredictable chains with deterministic state machines and rock-solid tool execution.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-xs">
          <button
            type="button"
            onClick={() => setActiveTab('mesh')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'mesh'
                ? 'bg-white text-blue-800 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Mesh Topology
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('security')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'security'
                ? 'bg-white text-emerald-800 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Zero-Trust Security
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('pipeline')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'pipeline'
                ? 'bg-white text-indigo-800 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Latency SLA Pipeline
          </button>
        </div>
      </div>

      {/* Featured Architecture Interactive Visual Showcase */}
      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm mb-10 overflow-hidden">
        <div className="p-6 sm:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Blueprint Details */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-lg text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
                    {activeTab === 'mesh' && 'DECENTRALIZED DAG TOPOLOGY'}
                    {activeTab === 'security' && 'AIR-GAPPED COMPLIANCE ENCLAVE'}
                    {activeTab === 'pipeline' && 'SUB-SECOND DETERMINISTIC RUNTIME'}
                  </span>
                  <span className="text-xs text-emerald-800 flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Production Verified
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {activeTab === 'mesh' && 'Peer-to-Peer Actor Model with Central State Router'}
                  {activeTab === 'security' && 'Hardware Isolated MicroVMs with Ephemeral Memory'}
                  {activeTab === 'pipeline' && 'Streaming AST Validator & Semantic Cache Engine'}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {activeTab === 'mesh' && 'Each service executes within isolated worker containers with non-blocking message buses. If an agent node encounters a network glitch or rate limit, compensating fallback paths ensure zero job starvation.'}
                  {activeTab === 'security' && 'All external API tool invocations execute inside isolated sandboxes or WASM runtimes. Memory is scrubbed upon completion, preventing cross-tenant data retention and prompt injection exfiltration.'}
                  {activeTab === 'pipeline' && 'Sub-second tool dispatch via pre-warmed syntax trees and semantic caching in Redis. Eliminates repetitive computations for known deterministic logic.'}
                </p>

                {/* Key Spec Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200 hover:border-blue-200 transition-all duration-250 hover:scale-[1.02] shadow-2xs">
                    <span className="text-slate-500 block text-[11px] font-medium">THROUGHPUT SLA</span>
                    <span className="text-slate-900 font-bold text-sm">4,500 req/sec</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200 hover:border-blue-200 transition-all duration-250 hover:scale-[1.02] shadow-2xs">
                    <span className="text-slate-500 block text-[11px] font-medium">FAILOVER RECOVERY</span>
                    <span className="text-blue-700 font-bold text-sm">&lt; 120ms</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200 hover:border-indigo-200 transition-all duration-250 hover:scale-[1.02] shadow-2xs">
                    <span className="text-slate-500 block text-[11px] font-medium">CONTAINER OVERHEAD</span>
                    <span className="text-indigo-700 font-bold text-sm">5ms cold start</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 hover:bg-emerald-50/60 border border-slate-200 hover:border-emerald-200 transition-all duration-250 hover:scale-[1.02] shadow-2xs">
                    <span className="text-slate-500 block text-[11px] font-medium">AUDIT CHAIN</span>
                    <span className="text-emerald-700 font-bold text-sm">SHA-256 Merkle</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-500">Spec Status:</span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 shadow-xs">
                  PRODUCTION READY
                </span>
              </div>
            </div>

            {/* Right Rich Visual Graphic Preview */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group transition-all duration-350 hover:shadow-2xl hover:border-blue-300">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                alt="Cloud Architecture Diagram"
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Overlay HUD Chips */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none transition-transform duration-300 group-hover:-translate-y-0.5">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 text-xs font-bold shadow-sm">
                  <Cpu className="w-3.5 h-3.5 text-blue-600" />
                  <span>CLUSTER NODE: PROD-US-EAST-01</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-[11px] font-bold shadow-xs">
                  HEALTHY
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-between shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-200">
                <div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">ACTIVE ROUTER SPEC</div>
                  <div className="text-slate-900 font-bold text-xs">Distributed Service Mesh &amp; Gateway</div>
                </div>
                <span className="text-xs text-blue-700 font-bold px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  99.999% SLA
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4 Core Architectural Principles Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        {principles.map((item) => (
          <div
            key={item.num}
            className="group rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 flex flex-col justify-between transition-all duration-350 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/12 hover:border-blue-400/80 shadow-sm overflow-hidden hover-gradient-top hover-inner-sheen cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 transition-colors duration-300 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200">
                  SPEC {item.num}
                </span>
                <div className={`p-2.5 rounded-xl border ${item.iconBg} shadow-xs group-hover:scale-115 group-hover:rotate-6 group-hover:shadow-md transition-all duration-300`}>
                  {item.icon}
                </div>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-700 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.text}
              </p>
            </div>

            <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
              <span className="flex items-center gap-1 text-emerald-800 font-bold">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                Production Ready
              </span>
              <span className="text-slate-500 font-bold group-hover:text-blue-600 transition-colors">{item.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
