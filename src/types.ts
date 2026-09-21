export interface AgentNode {
  id: string;
  name: string;
  category: 'input' | 'router' | 'worker' | 'output';
  status: 'idle' | 'active' | 'executed' | 'standby';
  latency: string;
  description: string;
  spec: string;
  metrics: {
    label: string;
    value: string;
  };
}

export interface WorkflowTask {
  id: string;
  label: string;
  inputPrompt: string;
  routerDecision: string;
  workerOutputs: {
    rag: string;
    code: string;
    tool: string;
  };
  finalOutput: string;
  totalLatency: string;
  confidenceScore: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  subtext: string;
  badge: string;
  highlightIcon: string;
}

export interface ConsultationRequest {
  fullName: string;
  workEmail: string;
  companyName: string;
  scope: string;
  timeline: string;
  projectOverview: string;
}
