import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Cpu, 
  Database, 
  Code2, 
  Wrench, 
  CheckCircle2, 
  Play, 
  Pause,
  RotateCcw, 
  ArrowRight, 
  Clock, 
  Workflow, 
  Activity, 
  Sliders, 
  ShieldCheck 
} from 'lucide-react';
import { WORKFLOW_TASKS } from '../data/workflowPresets';
import { WorkflowTask } from '../types';

interface AgentVisualizerProps {
  onOpenSandboxModal: (task: WorkflowTask) => void;
}

export const AgentVisualizer: React.FC<AgentVisualizerProps> = ({ onOpenSandboxModal }) => {
  const [activeTaskIndex, setActiveTaskIndex] = useState(0);
  const [activeStage, setActiveStage] = useState<'idle' | 'input' | 'router' | 'workers' | 'output'>('workers');
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedNodeId, setSelectedNodeId] = useState<string>('router');
  const [cycleTick, setCycleTick] = useState(0);

  const currentTask = WORKFLOW_TASKS[activeTaskIndex];

  useEffect(() => {
    if (!isPlaying) return;
    const stages: ('input' | 'router' | 'workers' | 'output')[] = ['input', 'router', 'workers', 'output'];
    let currentStageIndex = 0;
    const interval = setInterval(() => {
      currentStageIndex = (currentStageIndex + 1) % stages.length;
      setActiveStage(stages[currentStageIndex]);
      if (currentStageIndex === 0) {
        setCycleTick((prev) => prev + 1);
      }
    }, 2400);
    return () => clearInterval(interval);
  }, [isPlaying, activeTaskIndex]);

  const handleTaskChange = (index: number) => {
    setActiveTaskIndex(index);
    setActiveStage('input');
    setCycleTick((prev) => prev + 1);
  };

  const handleReset = () => {
    setActiveStage('input');
    setCycleTick((prev) => prev + 1);
  };

  return (
    <div
      id="agent-visualizer-container"
      className="relative w-full rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5 group overflow-hidden"
    >
      <div className="relative w-full h-full p-6 sm:p-10 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-blue-50/70 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-sky-50/70 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Control Bar */}
        <div
          id="visualizer-header-controls"
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200 relative z-10 w-full"
        >
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-900 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="font-bold tracking-tight">Interactive Workflow Pipeline</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white">LIVE</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-600">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>Execution Time: <strong className="text-slate-900">{currentTask.totalLatency}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Accuracy: <strong className="text-emerald-900">{currentTask.confidenceScore}</strong></span>
              </div>
            </div>
          </div>

          {/* Workflow Tabs and Controls */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 overflow-x-auto max-w-full">
              {WORKFLOW_TASKS.map((task, idx) => (
                <button
                  key={task.id}
                  id={`task-selector-${task.id}`}
                  type="button"
                  onClick={() => handleTaskChange(idx)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    activeTaskIndex === idx
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <Workflow className="w-3.5 h-3.5" />
                  <span>{task.label}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                id="visualizer-play-toggle"
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className={`p-2.5 rounded-xl border transition-all ${
                  isPlaying 
                    ? 'bg-blue-50 border-blue-200 text-blue-700 shadow-xs' 
                    : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700'
                }`}
                title={isPlaying ? 'Pause Simulation' : 'Run Simulation'}
                aria-label={isPlaying ? 'Pause Simulation' : 'Run Simulation'}
              >
                {isPlaying ? <Pause className="w-4 h-4 text-blue-700" /> : <Play className="w-4 h-4 text-slate-700" />}
              </button>
              <button
                id="visualizer-reset-button"
                type="button"
                onClick={handleReset}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 transition-colors"
                title="Re-run Pipeline"
                aria-label="Re-run Pipeline"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Nodes Grid - Spans Full Width */}
        <div id="visualizer-canvas-grid" className="relative py-8 lg:py-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10 w-full">
            
            {/* Node 1: User Task Input */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              <div
                id="node-user-task-input"
                onClick={() => setSelectedNodeId('input')}
                className={`relative cursor-pointer p-5 rounded-2xl border transition-all duration-300 bg-white hover:-translate-y-1 ${
                  selectedNodeId === 'input'
                    ? 'border-sky-500 shadow-xl shadow-sky-500/15 scale-[1.02] ring-2 ring-sky-200'
                    : 'border-slate-200 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-500/10'
                } ${activeStage === 'input' ? 'ring-2 ring-sky-400' : ''}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center shadow-xs">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-slate-900 tracking-tight">
                      Task Ingestion
                    </span>
                  </div>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 font-bold">
                    Input
                  </span>
                </div>
                <p className="text-xs text-slate-700 line-clamp-3 bg-slate-50 p-3 rounded-xl border border-slate-200 leading-relaxed">
                  {currentTask.inputPrompt}
                </p>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="text-sky-700 font-medium flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 text-sky-600" /> Real-time stream
                  </span>
                  <span className="font-semibold text-slate-700">Validated</span>
                </div>
              </div>
            </div>

            {/* Node 2: Router Agent */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              <div
                id="node-router-agent"
                onClick={() => setSelectedNodeId('router')}
                className={`relative cursor-pointer p-5 rounded-2xl border transition-all duration-300 bg-white hover:-translate-y-1 ${
                  selectedNodeId === 'router'
                    ? 'border-blue-600 shadow-xl shadow-blue-600/15 scale-[1.02] ring-2 ring-blue-200'
                    : 'border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10'
                } ${activeStage === 'router' ? 'ring-2 ring-blue-500' : ''}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-slate-900 tracking-tight">
                      Decision Router
                    </span>
                  </div>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-bold">
                    Fast Path
                  </span>
                </div>
                <div className="text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="text-[10px] text-blue-800 mb-1 flex items-center gap-1 font-bold">
                    <Sliders className="w-3.5 h-3.5 text-blue-600" />
                    System Routing Logic:
                  </div>
                  <p className="line-clamp-3 text-[11px] text-slate-600 leading-relaxed">
                    {currentTask.routerDecision}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 text-blue-700 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    Multi-worker parallel
                  </span>
                  <span className="text-slate-600 font-medium">Auto-balanced</span>
                </div>
              </div>
            </div>

            {/* Node 3: Split to 3 Workers */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              <div
                id="node-worker-rag"
                onClick={() => setSelectedNodeId('worker-rag')}
                className={`p-3.5 rounded-2xl border transition-all duration-250 cursor-pointer bg-white hover:-translate-y-0.5 ${
                  selectedNodeId === 'worker-rag'
                    ? 'border-sky-500 bg-sky-50/60 shadow-md ring-2 ring-sky-200'
                    : 'border-slate-200 hover:border-sky-300 hover:bg-sky-50/25 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-sky-100 text-sky-700">
                      <Database className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-900">Knowledge Retrieval</span>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 text-sky-800 font-semibold">RAG</span>
                </div>
                <p className="text-[11px] text-slate-600 line-clamp-1">
                  Vector index query &bull; Enterprise policy lookup
                </p>
              </div>

              <div
                id="node-worker-code"
                onClick={() => setSelectedNodeId('worker-code')}
                className={`p-3.5 rounded-2xl border transition-all duration-250 cursor-pointer bg-white hover:-translate-y-0.5 ${
                  selectedNodeId === 'worker-code'
                    ? 'border-indigo-500 bg-indigo-50/60 shadow-md ring-2 ring-indigo-200'
                    : 'border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/25 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-indigo-100 text-indigo-700">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-900">Business Logic Engine</span>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800 font-semibold">Core Compute</span>
                </div>
                <p className="text-[11px] text-slate-600 line-clamp-1">
                  Sandboxed calculation &bull; Formula execution
                </p>
              </div>

              <div
                id="node-worker-tool"
                onClick={() => setSelectedNodeId('worker-tool')}
                className={`p-3.5 rounded-2xl border transition-all duration-250 cursor-pointer bg-white hover:-translate-y-0.5 ${
                  selectedNodeId === 'worker-tool'
                    ? 'border-emerald-500 bg-emerald-50/60 shadow-md ring-2 ring-emerald-200'
                    : 'border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/25 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-900">Enterprise Integrations</span>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">API / ERP</span>
                </div>
                <p className="text-[11px] text-slate-600 line-clamp-1">
                  Secure connectors &bull; Zero data leak guarantee
                </p>
              </div>
            </div>

            {/* Node 4: Verified Output */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              <div
                id="node-consolidated-output"
                onClick={() => setSelectedNodeId('output')}
                className={`relative cursor-pointer p-5 rounded-2xl border transition-all duration-300 bg-white hover:-translate-y-1 ${
                  selectedNodeId === 'output'
                    ? 'border-emerald-600 shadow-xl shadow-emerald-600/15 scale-[1.02] ring-2 ring-emerald-200'
                    : 'border-slate-200 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10'
                } ${activeStage === 'output' ? 'ring-2 ring-emerald-500' : ''}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-slate-900 tracking-tight">
                      Validated Synthesis
                    </span>
                  </div>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold">
                    DELIVERED
                  </span>
                </div>
                <p className="text-xs text-slate-700 line-clamp-3 bg-slate-50 p-3 rounded-xl border border-slate-200 leading-relaxed">
                  {currentTask.finalOutput}
                </p>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified safe
                  </span>
                  <span className="text-slate-700 font-bold">{currentTask.totalLatency}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Telemetry Inspector Drawer */}
        <div
          id="visualizer-inspector-drawer"
          className="mt-4 pt-4 border-t border-slate-200 bg-slate-50 rounded-2xl p-4 sm:p-5 text-xs text-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-3 border border-slate-200 w-full"
        >
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span className="px-3 py-1.5 rounded-lg bg-blue-100 text-blue-900 font-bold uppercase text-[11px] shrink-0">
              Inspector: {selectedNodeId.toUpperCase()}
            </span>
            <span className="text-slate-400 hidden sm:inline">&bull;</span>
            <span className="text-slate-700 truncate text-[13px] font-medium">
              {selectedNodeId === 'input' && `Input Stream: "${currentTask.inputPrompt}"`}
              {selectedNodeId === 'router' && `Router Logic: ${currentTask.routerDecision}`}
              {selectedNodeId === 'worker-rag' && `Knowledge Retrieval: ${currentTask.workerOutputs.rag}`}
              {selectedNodeId === 'worker-code' && `Compute Engine: ${currentTask.workerOutputs.code}`}
              {selectedNodeId === 'worker-tool' && `Integration Call: ${currentTask.workerOutputs.tool}`}
              {selectedNodeId === 'output' && `Output Delivered: ${currentTask.finalOutput}`}
            </span>
          </div>
          <button
            id="visualizer-open-sandbox-btn"
            type="button"
            onClick={() => onOpenSandboxModal(currentTask)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all shadow-sm whitespace-nowrap self-end md:self-auto group active:scale-95 cursor-pointer"
          >
            <span>Launch Live Sandbox</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};