import React, { useState } from 'react';
import { 
  Calculator, 
  Cpu, 
  ShieldCheck, 
  Clock, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Bot, 
  Sparkles,
  Server,
  Code2
} from 'lucide-react';

interface ScopeEstimatorProps {
  onOpenConsultation: () => void;
}

export const ScopeEstimatorSection: React.FC<ScopeEstimatorProps> = ({ onOpenConsultation }) => {
  const [projectType, setProjectType] = useState<'agentic' | 'cloud' | 'custom' | 'rag'>('agentic');
  const [scale, setScale] = useState<'pilot' | 'scaleup' | 'enterprise'>('scaleup');
  const [complianceLevel, setComplianceLevel] = useState<'standard' | 'soc2' | 'hipaa'>('soc2');

  const getEstimates = () => {
    let sprintWeeks = '2 - 4 Weeks';
    let archTier = 'Production Multi-Agent Mesh';
    let deliverables = [
      'Model Context Protocol (MCP) tool gateway',
      'MicroVM sandboxed runtime & AST verification',
      'Human-in-the-loop review queue',
      'Continuous evaluation & audit logging'
    ];

    if (projectType === 'cloud') {
      sprintWeeks = scale === 'enterprise' ? '4 - 6 Weeks' : '2 - 3 Weeks';
      archTier = 'Multi-Region High Availability Cloud';
      deliverables = [
        'Terraform IaC multi-region deployment',
        'Kubernetes zero-downtime cluster configuration',
        'Self-healing automated canary rollbacks',
        'Automated disaster recovery drills'
      ];
    } else if (projectType === 'rag') {
      sprintWeeks = scale === 'enterprise' ? '3 - 5 Weeks' : '2 - 3 Weeks';
      archTier = 'Hybrid Vector RAG & Semantic Cache';
      deliverables = [
        'Dense & sparse hybrid vector indices',
        'Sub-40ms semantic cache layer',
        'Cryptographic PII/PHI redaction pipeline',
        'Continuous retrieval recall benchmarks'
      ];
    } else if (projectType === 'custom') {
      sprintWeeks = scale === 'enterprise' ? '6 - 8 Weeks' : '3 - 5 Weeks';
      archTier = 'Full-Stack Enterprise SaaS System';
      deliverables = [
        'Unified REST/GraphQL microservices',
        'Role-Based Access Control (RBAC) & SSO',
        'Automated CI/CD test harness',
        'Executive real-time telemetry dashboard'
      ];
    } else {
      // agentic
      sprintWeeks = scale === 'enterprise' ? '4 - 6 Weeks' : '2 - 4 Weeks';
      archTier = 'Autonomous Multi-Agent Enterprise Mesh';
      deliverables = [
        'Model Context Protocol (MCP) tool gateway',
        'MicroVM sandboxed runtime & AST verification',
        'Deterministic state machine governors',
        'Continuous evaluation & audit logging'
      ];
    }

    return { sprintWeeks, archTier, deliverables };
  };

  const estimate = getEstimates();

  return (
    <section id="scope-estimator" className="relative w-full max-w-7xl mx-auto py-16 border-t border-slate-200">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 relative z-10">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1.5 flex items-center gap-2">
            <Calculator className="w-4 h-4 text-blue-600" />
            INTERACTIVE SCOPE &amp; TIMELINE ESTIMATOR
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Estimate Your <span className="text-blue-700">Project Blueprint</span>
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-2xl">
            Select your architectural goals below to receive an instant, transparent engineering sprint timeline, recommended architecture tier, and core deliverables.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenConsultation}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all font-bold text-xs shadow-md shadow-blue-600/20 self-start md:self-auto group active:scale-95 cursor-pointer"
        >
          <span>Reserve Sprint Capacity</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* Left Inputs (Cols 1-7) */}
        <div className="lg:col-span-7 space-y-6 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow duration-300">
          
          {/* Step 1: Project Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              1. Primary Architectural Objective
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'agentic', title: 'Autonomous AI Agents', desc: 'MCP, tool routing & microVM sandbox', icon: <Bot className="w-4 h-4 text-blue-600" /> },
                { id: 'rag', title: 'Enterprise RAG & Search', desc: 'Hybrid vector mesh & zero-leak guardrails', icon: <Sparkles className="w-4 h-4 text-indigo-600" /> },
                { id: 'cloud', title: 'Cloud Modernization', desc: 'Kubernetes, Terraform & self-healing infra', icon: <Server className="w-4 h-4 text-sky-600" /> },
                { id: 'custom', title: 'Full-Stack Software', desc: 'Custom portals, APIs & system integrations', icon: <Code2 className="w-4 h-4 text-emerald-600" /> },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setProjectType(item.id as any)}
                  className={`group p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
                    projectType === item.id
                      ? 'bg-blue-50/80 border-blue-500 shadow-md shadow-blue-500/15 ring-2 ring-blue-200 scale-[1.01]'
                      : 'bg-white hover:bg-gradient-to-br hover:from-blue-50/40 hover:to-slate-50 border-slate-200 hover:border-blue-300/80 hover:shadow-lg hover:shadow-blue-600/8'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-xs text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                    <span className="p-1.5 rounded-lg bg-white shadow-xs border border-slate-200/80 group-hover:scale-110 group-hover:border-blue-300 transition-transform">
                      {item.icon}
                    </span>
                    <span>{item.title}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 group-hover:text-slate-600">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: System Scale */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              2. Anticipated System Scale &amp; Throughput
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: 'pilot', label: 'Pilot / PoC', sub: 'Internal testing' },
                { id: 'scaleup', label: 'Mid-Scale / Team', sub: 'Production team use' },
                { id: 'enterprise', label: 'Global Enterprise', sub: 'Multi-region 99.99%' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setScale(item.id as any)}
                  className={`p-3 rounded-2xl border text-center transition-all duration-250 cursor-pointer hover:-translate-y-0.5 ${
                    scale === item.id
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/25 scale-[1.02]'
                      : 'bg-white hover:bg-blue-50/50 hover:border-blue-300 hover:shadow-md border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold">{item.label}</div>
                  <div className={`text-[10px] mt-0.5 ${scale === item.id ? 'text-blue-100' : 'text-slate-500'}`}>
                    {item.sub}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Compliance & Security */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              3. Regulatory &amp; Compliance Requirement
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: 'standard', label: 'Standard Secure', sub: 'TLS 1.3 & AES-256' },
                { id: 'soc2', label: 'SOC 2 Type II', sub: 'Full audit trails' },
                { id: 'hipaa', label: 'HIPAA / Air-Gapped', sub: 'Zero-retention enclave' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setComplianceLevel(item.id as any)}
                  className={`p-3 rounded-2xl border text-center transition-all duration-250 cursor-pointer hover:-translate-y-0.5 ${
                    complianceLevel === item.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/25 scale-[1.02]'
                      : 'bg-white hover:bg-slate-100/80 hover:border-slate-400 hover:shadow-md border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold">{item.label}</div>
                  <div className={`text-[10px] mt-0.5 ${complianceLevel === item.id ? 'text-slate-300' : 'text-slate-500'}`}>
                    {item.sub}
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Output Card (Cols 8-12) */}
        <div className="lg:col-span-5 relative group">
          {/* Ambient Glow Accent */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-sky-500/20 to-indigo-600/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white p-6 sm:p-7 rounded-3xl shadow-2xl flex flex-col justify-between border border-slate-800 transition-all duration-350 group-hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                  ESTIMATED SPRINT BLUEPRINT
                </span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500 text-white shadow-xs">
                  GUARANTEED SLA
                </span>
              </div>

              <div className="mb-6">
                <div className="text-xs text-slate-300 mb-1 font-medium">Recommended Architecture Tier:</div>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-blue-200 transition-colors">
                  {estimate.archTier}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Target Delivery
                  </div>
                  <div className="text-lg font-bold text-emerald-400 mt-1 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span>{estimate.sprintWeeks}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Security Posture
                  </div>
                  <div className="text-lg font-bold text-sky-400 mt-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                    <span className="capitalize">{complianceLevel}</span>
                  </div>
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-2 mb-6">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Core Sprinted Deliverables:
                </div>
                {estimate.deliverables.map((deliv) => (
                  <div key={deliv} className="flex items-start gap-2 text-xs text-slate-200 hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <button
            type="button"
            onClick={onOpenConsultation}
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-lg shadow-blue-600/30 active:scale-95 cursor-pointer group"
          >
            <span>Lock In This Architecture Scope</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

    </section>
  );
};
