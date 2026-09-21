import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  PhoneCall,
  Terminal,
  Activity,
  Server,
  Bot,
  Database,
  Play,
  Radio
} from 'lucide-react';
import { EasySolutionsLogo } from './EasySolutionsLogo';
import { HeroParticleCanvas } from './HeroParticleCanvas';

interface HeroHeaderProps {
  onOpenConsultation: () => void;
  onOpenSandbox: () => void;
}

interface SwarmNode {
  id: string;
  title: string;
  category: string;
  status: string;
  metric: string;
  tech: string;
  icon: 'bot' | 'shield' | 'server' | 'database';
  color: string;
}

const SWARM_NODES: SwarmNode[] = [
  {
    id: 'mcp-agent',
    title: 'Autonomous MCP Agents',
    category: 'Swarm Orchestration',
    status: 'ACTIVE // DISPATCHED',
    metric: '8 Concurrent Workers',
    tech: 'Claude 3.7 & Gemini 2.5',
    icon: 'bot',
    color: 'blue'
  },
  {
    id: 'ast-microvm',
    title: 'AST MicroVM Sandbox',
    category: 'Deterministic Isolation',
    status: 'ENCLAVE LOCKED',
    metric: '0 Leakage // 100% Pass',
    tech: 'Rust MicroVM & AST Guard',
    icon: 'shield',
    color: 'emerald'
  },
  {
    id: 'cloud-devops',
    title: 'Self-Healing Cloud Mesh',
    category: 'Kubernetes Resilience',
    status: '99.99% SLA GOVERNED',
    metric: 'Automated Canary Rollback',
    tech: 'eBPF Probes & Terraform',
    icon: 'server',
    color: 'indigo'
  },
  {
    id: 'vector-rag',
    title: 'Hybrid Vector RAG',
    category: 'Semantic Knowledge',
    status: 'SUB-30ms INDEXED',
    metric: '4.8M Embeddings Cached',
    tech: 'Dense + Sparse Hybrid',
    icon: 'database',
    color: 'sky'
  }
];

export const HeroHeader: React.FC<HeroHeaderProps> = ({
  onOpenConsultation,
  onOpenSandbox,
}) => {
  const [activeNodeId, setActiveNodeId] = useState<string>('mcp-agent');
  const [isProbing, setIsProbing] = useState(false);
  const [liveThroughput, setLiveThroughput] = useState(194.2);
  const [liveLatency, setLiveLatency] = useState(38);
  const [probeCount, setProbeCount] = useState(148);

  const activeNode = SWARM_NODES.find(n => n.id === activeNodeId) || SWARM_NODES[0];

  const handleTriggerProbe = () => {
    setIsProbing(true);
    setProbeCount(prev => prev + 1);
    const targetThroughput = +(190 + Math.random() * 15).toFixed(1);
    const targetLatency = Math.floor(34 + Math.random() * 8);
    setTimeout(() => {
      setLiveThroughput(targetThroughput);
      setLiveLatency(targetLatency);
      setIsProbing(false);
    }, 1200);
  };

  return (
    <div id="hero-master-command" className="relative w-full flex flex-col items-center text-center">
      <HeroParticleCanvas />
      
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-blue-500/15 via-sky-400/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* Top Status Pill */}
      <div className="relative z-10 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/90 shadow-sm backdrop-blur-md mb-6 transition-all hover:border-blue-400 hover:shadow-md">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800">
          EASY SOLUTIONS 4 U // AUTONOMOUS AI &amp; CLOUD ARCHITECTURE
        </span>
        <span className="h-3 w-px bg-slate-300" />
        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          Production Engineering
        </span>
      </div>

      {/* Hero Headline */}
      <h1 className="relative z-10 text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 max-w-6xl leading-[1.08]">
        Architecting Autonomous <br className="hidden sm:inline" />
        <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700 bg-clip-text text-transparent">
          AI Systems &amp; High-Velocity Mesh
        </span>
      </h1>

      {/* Subtitle */}
      <p className="relative z-10 mt-5 text-base sm:text-xl text-slate-600 max-w-3xl font-normal leading-relaxed">
        We replace months of trial-and-error with production-hardened <strong className="text-slate-900 font-semibold">multi-agent topologies</strong>, AST-isolated microVM runtimes, and self-healing cloud backbones built for enterprise scale.
      </p>

      {/* Action Buttons */}
      <div className="relative z-10 mt-7 flex flex-wrap items-center justify-center gap-3">
        <button
          id="hero-primary-consult-btn"
          type="button"
          onClick={onOpenConsultation}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-sm transition-all duration-250 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 cursor-pointer group"
        >
          <PhoneCall className="w-4 h-4 text-blue-200 group-hover:scale-110 transition-transform" />
          <span>Book Strategy Consultation</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </button>
        <button
          id="hero-secondary-sandbox-btn"
          type="button"
          onClick={onOpenSandbox}
          className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-gradient-to-b hover:from-white hover:to-blue-50/60 active:scale-95 text-slate-800 font-bold text-sm border border-slate-300 hover:border-blue-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-250 cursor-pointer group"
        >
          <Terminal className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
          <span>Launch Interactive Sandbox</span>
        </button>
      </div>

      {/* FULL-WIDTH CONSOLE CENTERPIECE */}
      <div className="relative z-10 mt-12 w-full">
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/25 via-sky-500/20 to-emerald-500/25 rounded-3xl blur-2xl opacity-90 pointer-events-none animate-pulse-glow" />
        
        <div className="relative rounded-3xl border border-slate-200 bg-slate-950 text-white shadow-2xl shadow-blue-950/25 overflow-hidden w-full">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scanline pointer-events-none z-20" />
          
          {/* Topbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block" />
              </div>
              <span className="h-4 w-px bg-slate-700" />
              <div className="text-[11px] font-mono text-cyan-300 font-bold flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>EASY SOLUTIONS 4 U // AUTONOMOUS TOPOLOGY ENGINE v2.5</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-xs font-mono">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-300">
                <Activity className="w-3 h-3 text-cyan-400" />
                <span>{liveThroughput} tok/s</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-300">
                <Zap className="w-3 h-3 text-amber-400" />
                <span>{liveLatency}ms P99</span>
              </div>
            </div>
          </div>

          {/* Arena */}
          <div className="relative p-6 sm:p-12 min-h-[420px] flex flex-col justify-between bg-radial from-blue-950/50 via-slate-950 to-slate-950">
            <div className="absolute inset-0 bg-grid-tech opacity-10 pointer-events-none" />

            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
              <line x1="20%" y1="26%" x2="50%" y2="50%" stroke="#38bdf8" strokeWidth="2" className="animate-laser-flow" opacity={isProbing ? 1 : 0.6} />
              <line x1="80%" y1="26%" x2="50%" y2="50%" stroke="#818cf8" strokeWidth="2" className="animate-laser-flow-fast" opacity={isProbing ? 1 : 0.6} />
              <line x1="20%" y1="74%" x2="50%" y2="50%" stroke="#34d399" strokeWidth="2" className="animate-laser-flow" opacity={isProbing ? 1 : 0.6} />
              <line x1="80%" y1="74%" x2="50%" y2="50%" stroke="#38bdf8" strokeWidth="2" className="animate-laser-flow-fast" opacity={isProbing ? 1 : 0.6} />
            </svg>

            {/* Central Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/70 animate-spin-slow" />
                <div className="absolute -inset-2 rounded-full border border-sky-400/40 animate-ping opacity-25" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-2 rounded-full border border-blue-400/50 animate-spin" style={{ animationDuration: '24s' }} />
                
                <div 
                  className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-400 p-1 shadow-xl shadow-cyan-500/40 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                  onClick={handleTriggerProbe}
                >
                  <div className="w-full h-full rounded-full bg-blue-900/90 backdrop-blur-md flex flex-col items-center justify-center border border-white/20">
                    <EasySolutionsLogo variant="badge" size="sm" />
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900/90 border border-cyan-400/50 shadow-lg shadow-cyan-500/20 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-mono font-extrabold text-cyan-300 tracking-wider">
                  DISPATCHED &amp; ACTIVE
                </span>
              </div>
            </div>

            {/* Top Row Nodes */}
            <div className="relative z-10 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setActiveNodeId('mcp-agent')}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer backdrop-blur-md w-64 sm:w-80 group hover:-translate-y-1.5 ${
                  activeNodeId === 'mcp-agent'
                    ? 'bg-blue-900/90 border-cyan-400 shadow-xl shadow-cyan-500/30 scale-105 ring-1 ring-cyan-400/50'
                    : 'bg-slate-900/85 hover:bg-slate-900 hover:border-cyan-400/80 hover:shadow-xl hover:shadow-cyan-500/20 border-slate-700/80'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/40 text-cyan-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Bot className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold group-hover:text-cyan-300">NODE 01</span>
                </div>
                <div className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                  Autonomous MCP Swarm
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5 group-hover:text-slate-300">
                  Claude 3.7 &amp; Gemini 2.5
                </div>
              </button>

              <button
                type="button"
                onClick={() => setActiveNodeId('cloud-devops')}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer backdrop-blur-md w-64 sm:w-80 group hover:-translate-y-1.5 ${
                  activeNodeId === 'cloud-devops'
                    ? 'bg-indigo-900/90 border-indigo-400 shadow-xl shadow-indigo-500/30 scale-105 ring-1 ring-indigo-400/50'
                    : 'bg-slate-900/85 hover:bg-slate-900 hover:border-indigo-400/80 hover:shadow-xl hover:shadow-indigo-500/20 border-slate-700/80'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600/30 border border-indigo-400/40 text-indigo-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Server className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-indigo-400 font-bold group-hover:text-indigo-300">NODE 02</span>
                </div>
                <div className="text-sm font-bold text-white group-hover:text-indigo-200 transition-colors">
                  Self-Healing Mesh
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5 group-hover:text-slate-300">
                  eBPF &amp; K8s Auto-Canary
                </div>
              </button>
            </div>

            {/* Bottom Row Nodes */}
            <div className="relative z-10 flex items-center justify-between gap-4 mt-28 sm:mt-32">
              <button
                type="button"
                onClick={() => setActiveNodeId('ast-microvm')}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer backdrop-blur-md w-64 sm:w-80 group hover:-translate-y-1.5 ${
                  activeNodeId === 'ast-microvm'
                    ? 'bg-emerald-900/90 border-emerald-400 shadow-xl shadow-emerald-500/30 scale-105 ring-1 ring-emerald-400/50'
                    : 'bg-slate-900/85 hover:bg-slate-900 hover:border-emerald-400/80 hover:shadow-xl hover:shadow-emerald-500/20 border-slate-700/80'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600/30 border border-emerald-400/40 text-emerald-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold group-hover:text-emerald-300">NODE 03</span>
                </div>
                <div className="text-sm font-bold text-white group-hover:text-emerald-200 transition-colors">
                  AST MicroVM Sandbox
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5 group-hover:text-slate-300">
                  Air-Gapped // 100% Pass
                </div>
              </button>

              <button
                type="button"
                onClick={() => setActiveNodeId('vector-rag')}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer backdrop-blur-md w-64 sm:w-80 group hover:-translate-y-1.5 ${
                  activeNodeId === 'vector-rag'
                    ? 'bg-sky-900/90 border-sky-400 shadow-xl shadow-sky-500/30 scale-105 ring-1 ring-sky-400/50'
                    : 'bg-slate-900/85 hover:bg-slate-900 hover:border-sky-400/80 hover:shadow-xl hover:shadow-sky-500/20 border-slate-700/80'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-600/30 border border-sky-400/40 text-sky-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Database className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-sky-400 font-bold group-hover:text-sky-300">NODE 04</span>
                </div>
                <div className="text-sm font-bold text-white group-hover:text-sky-200 transition-colors">
                  Hybrid Vector RAG
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5 group-hover:text-slate-300">
                  Sub-30ms Semantic Cache
                </div>
              </button>
            </div>
          </div>

          {/* Drawer */}
          <div className="px-6 py-4 bg-slate-900/95 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                INSPECTING {activeNode.title}:
              </span>
              <span className="text-white font-semibold">{activeNode.metric}</span>
              <span className="text-slate-500">|</span>
              <span className="text-emerald-400 font-mono text-[11px]">{activeNode.status}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleTriggerProbe}
                disabled={isProbing}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 active:scale-95 text-white font-bold text-xs shadow-md shadow-cyan-600/30 cursor-pointer disabled:opacity-60 transition-all"
              >
                <Play className={`w-3.5 h-3.5 ${isProbing ? 'animate-spin' : ''}`} />
                <span>{isProbing ? 'Simulating High-Load Probe...' : 'Trigger Swarm Probe'}</span>
              </button>
              <button
                type="button"
                onClick={onOpenSandbox}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 cursor-pointer transition-all"
              >
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>Open Full Cockpit</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FULL-WIDTH AUTHORITY METRICS */}
      <div className="relative z-10 mt-10 w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {[
          { label: 'PROD DEPLOYMENTS', value: '45+', sub: 'Zero System Failures' },
          { label: 'INFERENCE SPEED', value: `${liveThroughput} tok/s`, sub: 'Guaranteed P99 SLA' },
          { label: 'GLOBAL LATENCY', value: `${liveLatency}ms`, sub: 'Sub-50ms Global Mesh' },
          { label: 'SECURITY STANDARD', value: 'SOC 2 Type II', sub: 'Air-Gapped Enclaves' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="group p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/10 hover:border-blue-400/80 cursor-pointer"
          >
            <div className="text-[11px] font-bold font-mono text-slate-400 uppercase tracking-wider group-hover:text-blue-600 transition-colors">
              {item.label}
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 tracking-tight group-hover:text-blue-700 transition-colors">
              {item.value}
            </div>
            <div className="text-xs text-blue-700 font-medium group-hover:text-blue-800 mt-0.5">
              {item.sub}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};