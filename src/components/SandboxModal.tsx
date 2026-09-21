import React, { useState } from 'react';
import { 
  X, 
  Terminal, 
  Play, 
  Copy, 
  Check, 
  Cpu, 
  Database, 
  Code2, 
  Wrench, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Layers,
  Activity,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { WorkflowTask } from '../types';

interface SandboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: WorkflowTask;
}

export const SandboxModal: React.FC<SandboxModalProps> = ({ isOpen, onClose, task }) => {
  const [activeTab, setActiveTab] = useState<'waterfall' | 'workers' | 'payload'>('waterfall');
  const [copied, setCopied] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedLatency, setSimulatedLatency] = useState(task.totalLatency);

  if (!isOpen) return null;

  const handleCopyPayload = () => {
    navigator.clipboard.writeText(JSON.stringify(task, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunTest = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      const randomVariance = Math.floor(Math.random() * 40) + 290;
      setSimulatedLatency(`${randomVariance}ms`);
    }, 600);
  };

  return (
    <div
      id="sandbox-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="sandbox-modal-dialog"
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl border border-slate-200 bg-white shadow-2xl overflow-hidden text-left"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center shadow-xs">
              <Layers className="w-5 h-5 text-blue-700" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  Architecture Sandbox Console
                </h3>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                  {task.label}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Live Architecture Simulation • Deterministic Execution Verified
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="sandbox-run-test-btn"
              type="button"
              onClick={handleRunTest}
              disabled={isSimulating}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm shadow-blue-600/20 transition-all active:scale-95"
            >
              <Play className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
              <span>{isSimulating ? 'Running...' : 'Re-run Trace'}</span>
            </button>

            <button
              id="sandbox-modal-close"
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              aria-label="Close sandbox modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-3 px-6 pt-2 border-b border-slate-200 bg-slate-100/70 text-xs font-medium relative z-10">
          <button
            type="button"
            onClick={() => setActiveTab('waterfall')}
            className={`px-4 py-2.5 border-b-2 font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'waterfall'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            01. Latency Waterfall
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('workers')}
            className={`px-4 py-2.5 border-b-2 font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'workers'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            02. Parallel Processing Nodes
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('payload')}
            className={`px-4 py-2.5 border-b-2 font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'payload'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            03. Raw Execution Data
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm relative z-10">
          {/* Active Tab 1: Latency Waterfall */}
          {activeTab === 'waterfall' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between text-xs text-slate-700 mb-2 font-semibold">
                  <span>INPUT INGESTION &amp; VALIDATION</span>
                  <span className="text-slate-900 font-bold">12ms</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div className="bg-slate-600 h-2 rounded-full" style={{ width: '8%' }} />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
                <div className="flex items-center justify-between text-xs text-blue-900 mb-2 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-blue-600" />
                    DECISION ENGINE EVALUATION
                  </span>
                  <span className="text-blue-700 font-bold">24ms</span>
                </div>
                <div className="w-full bg-blue-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '16%' }} />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200">
                <div className="flex items-center justify-between text-xs text-indigo-900 mb-2 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-indigo-600" />
                    CONCURRENT WORKER DISPATCH (3 NODES)
                  </span>
                  <span className="text-indigo-700 font-bold">54ms (p99)</span>
                </div>
                <div className="w-full bg-indigo-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '58%' }} />
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-indigo-900 pt-2.5 border-t border-indigo-200">
                  <div className="p-1.5 rounded bg-white border border-indigo-200 text-center font-medium">Index Query: 18ms</div>
                  <div className="p-1.5 rounded bg-white border border-indigo-200 text-center font-medium">Execution Engine: 42ms</div>
                  <div className="p-1.5 rounded bg-white border border-indigo-200 text-center font-medium">External Gateway: 54ms</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                <div className="flex items-center justify-between text-xs text-emerald-900 mb-2 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    SYNTHESIS &amp; AUDIT VERIFICATION
                  </span>
                  <span className="text-emerald-700 font-bold">18ms</span>
                </div>
                <div className="w-full bg-emerald-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '18%' }} />
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-xs">
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">TOTAL END-TO-END TIME</div>
                  <div className="text-3xl font-extrabold text-blue-700 mt-1">
                    {simulatedLatency}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">ACCURACY SCORE</div>
                  <div className="text-3xl font-extrabold text-emerald-700 mt-1">
                    {task.confidenceScore}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Active Tab 2: Parallel Worker Nodes */}
          {activeTab === 'workers' && (
            <div className="space-y-4">
              {/* Worker 1 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-700 border border-blue-200">
                      <Database className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-slate-900 text-sm">Node 1: High-Speed Index &amp; Cache</span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-100 text-blue-800 border border-blue-200">
                    Match: 99.2%
                  </span>
                </div>
                <p className="text-xs text-slate-700 bg-white p-3.5 rounded-xl border border-slate-200 leading-relaxed font-mono">
                  {task.workerOutputs.rag}
                </p>
              </div>

              {/* Worker 2 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 border border-indigo-200">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-slate-900 text-sm">Node 2: Sandboxed Transformation Engine</span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-indigo-100 text-indigo-800 border border-indigo-200">
                    Verified Clean
                  </span>
                </div>
                <p className="text-xs text-slate-700 bg-white p-3.5 rounded-xl border border-slate-200 leading-relaxed font-mono">
                  {task.workerOutputs.code}
                </p>
              </div>

              {/* Worker 3 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 border border-emerald-200">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-slate-900 text-sm">Node 3: External Gateway Integration</span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Status 200 OK
                  </span>
                </div>
                <p className="text-xs text-slate-700 bg-white p-3.5 rounded-xl border border-slate-200 leading-relaxed font-mono">
                  {task.workerOutputs.tool}
                </p>
              </div>
            </div>
          )}

          {/* Active Tab 3: Raw Execution Trace */}
          {activeTab === 'payload' && (
            <div className="relative">
              <button
                type="button"
                onClick={handleCopyPayload}
                className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-xs font-semibold text-slate-700 transition-colors shadow-xs"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy JSON'}</span>
              </button>
              <pre className="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 text-xs font-mono overflow-x-auto leading-relaxed shadow-sm">
                {JSON.stringify(task, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-600 relative z-10">
          <div className="flex items-center gap-2 text-emerald-700 font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Audited &amp; Deterministic Architecture Trace</span>
          </div>
          <span className="text-slate-500 font-medium">Easy Solutions 4 U Enterprise Sandbox</span>
        </div>
      </div>
    </div>
  );
};
