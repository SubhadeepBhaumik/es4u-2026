import React, { useState } from 'react';
import { ArchitectureSection } from '../components/ArchitectureSection';
import { AgentVisualizer } from '../components/AgentVisualizer';
import { SandboxModal } from '../components/SandboxModal';
import { WORKFLOW_TASKS } from '../data/workflowPresets';
import { WorkflowTask } from '../types';

export const ArchitecturePage: React.FC = () => {
  const [sandboxOpen, setSandboxOpen] = useState(false);
  const [activeTask, setActiveTask] = useState<WorkflowTask>(WORKFLOW_TASKS[0]);

  const handleOpenSandbox = (task: WorkflowTask) => {
    setActiveTask(task);
    setSandboxOpen(true);
  };

  return (
    <div className="w-full pt-28 sm:pt-32 lg:pt-36 pb-20 px-4 sm:px-8 lg:px-14 xl:px-20 space-y-16">
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
          Deterministic Systems
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Architecture Blueprints
        </h1>
        <p className="mt-3 text-slate-600 text-base leading-relaxed">
          Production-grade decoupled topologies, sandboxed worker isolation, and resilient multi-agent orchestration.
        </p>
      </div>

      <div className="w-full">
        <ArchitectureSection />
      </div>

      <div className="w-full pt-8 border-t border-slate-200">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Interactive Agent Execution Pipeline
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Simulate real-world routing, parallel worker execution, and consensus verification in real time.
          </p>
        </div>
        <AgentVisualizer onOpenSandboxModal={handleOpenSandbox} />
      </div>

      <SandboxModal
        isOpen={sandboxOpen}
        onClose={() => setSandboxOpen(false)}
        task={activeTask}
      />
    </div>
  );
};