/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { SandboxModal } from './components/SandboxModal';
import { HomePage } from './pages/HomePage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { ArchitecturePage } from './pages/ArchitecturePage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { EstimatorPage } from './pages/EstimatorPage';
import { ContactPage } from './pages/ContactPage';
import { WORKFLOW_TASKS } from './data/workflowPresets';
import { WorkflowTask } from './types';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [sandboxOpen, setSandboxOpen] = useState(false);
  const [activeSandboxTask, setActiveSandboxTask] = useState<WorkflowTask>(WORKFLOW_TASKS[0]);
  const navigate = useNavigate();

  const handleOpenSandbox = () => {
    setActiveSandboxTask(WORKFLOW_TASKS[0]);
    setSandboxOpen(true);
  };

  return (
    <div className="relative min-h-screen w-full bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden font-sans flex flex-col justify-between">
      {/* Light Architectural Grid and Ambient Glows */}
      <div className="fixed inset-0 bg-grid-tech opacity-60 pointer-events-none z-0" />
      <div className="fixed top-0 left-1/4 w-[750px] h-[450px] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-1/3 right-10 w-[650px] h-[400px] bg-sky-100/50 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Persistent Multi-Page Navigation Bar */}
      <Navbar
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenSandbox={handleOpenSandbox}
      />

      {/* Routed Content Canvas */}
      <main className="relative z-10 w-full flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenConsultation={() => setConsultationOpen(true)}
                onOpenSandbox={handleOpenSandbox}
              />
            }
          />
          <Route
            path="/capabilities"
            element={<CapabilitiesPage onOpenConsultation={() => setConsultationOpen(true)} />}
          />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route
            path="/case-studies"
            element={<CaseStudiesPage onOpenConsultation={() => setConsultationOpen(true)} />}
          />
          <Route
            path="/estimator"
            element={<EstimatorPage onOpenConsultation={() => setConsultationOpen(true)} />}
          />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Global Studio Footer */}
      <Footer
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenSandbox={handleOpenSandbox}
      />

      {/* Shared Interactive Modals */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
      <SandboxModal
        isOpen={sandboxOpen}
        onClose={() => setSandboxOpen(false)}
        task={activeSandboxTask}
      />
    </div>
  );
}