import { WorkflowTask } from '../types';

export const WORKFLOW_TASKS: WorkflowTask[] = [
  {
    id: 'incident-remediation',
    label: 'Incident Auto-Remediation',
    inputPrompt: 'Kubernetes Pod CrashLoopBackOff detected in eu-central-1 order-service. Investigate logs, isolate faulty deployment revision, and draft safe roll-forward patch with rollback safety check.',
    routerDecision: 'High-Severity Operational Incident -> Triaged: Concurrent Vector Log Correlator + AST Code Diff Analyzer + Cloud Run API Dispatcher',
    workerOutputs: {
      rag: 'Top-3 vector similarity logs identified NullPointerException in OrderCheckoutService.java:184 introduced in commit #9f8c2b. Semantic distance: 0.084.',
      code: 'Sandboxed Python runner generated rollback manifest & verified zero-breaking schema migrations against shadow replica db.',
      tool: 'Dispatched dry-run canary via Cloud Native K8s Operator API. Health probes 200 OK across 5/5 canary instances.',
    },
    finalOutput: 'Autonomous patch validated & verified: Canary traffic healthy (p99 18ms). Synthesized PR #1042 + automated incident post-mortem generated with cryptographic trace verification.',
    totalLatency: '382ms',
    confidenceScore: '99.4%',
  },
  {
    id: 'compliance-audit',
    label: 'Multi-Modal Financial Audit',
    inputPrompt: 'Reconcile Q3 multi-currency cross-border settlement telemetry with EU MiFID II compliance directives and flag discrepancy variances above €50,000 threshold.',
    routerDecision: 'Regulatory Compliance Engine -> Fork: Regulatory Embeddings Engine + Deterministic Vector Ledger Check + SWIFT ISO-20022 Gateway API',
    workerOutputs: {
      rag: 'Indexed 4,200 regulatory clauses. Detected strict reporting requirement under RTS 25 clock synchronization mandates.',
      code: 'Execution of deterministic ledger balance algorithm flagged 1 variance of €64,210.15 attributed to delayed FX swap settlement.',
      tool: 'Queried ECB real-time reference rates & authenticated FX liquidity counterparty via cryptographic mutual TLS.',
    },
    finalOutput: 'Full MiFID II audit artifact compiled: 1 variance documented with automated corrective hedging transaction queued for executive sign-off.',
    totalLatency: '418ms',
    confidenceScore: '99.8%',
  },
  {
    id: 'etl-synthesis',
    label: 'Real-Time Vector ETL Pipeline',
    inputPrompt: 'Ingest 50,000 unformatted enterprise support tickets, cluster semantic friction points, write synthetic unit tests, and push structured embeddings to Milvus cluster.',
    routerDecision: 'High-Throughput Vectorization -> Fork: Hybrid Dense/Sparse Embeddings + Python Test Synthesizer + Vector DB Bulk Loader',
    workerOutputs: {
      rag: 'Clustered tickets into 4 dominant root-cause buckets (SSO token expiry, webhook retry failure, rate limits, CORS misconfig).',
      code: 'Synthesized 12 Vitest regression specs testing edge cases in OAuth2 refresh flow; 100% test coverage passed in isolated container.',
      tool: 'Batch upserted 50k 1536-dim embeddings to Milvus v2.4 with HNSW M=16 index. Zero dropped vectors.',
    },
    finalOutput: 'ETL Pipeline successfully completed. 100% vector synchronization confirmed. New knowledge graph nodes deployed to production router.',
    totalLatency: '315ms',
    confidenceScore: '99.1%',
  },
];
