import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ArrowUpRight, Menu, X, Layers, PhoneCall } from 'lucide-react';
import { EasySolutionsLogo } from './EasySolutionsLogo';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenSandbox: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  onOpenSandbox,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
      isActive
        ? 'text-blue-700 bg-blue-50 font-bold'
        : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50/70'
    }`;

  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left cursor-pointer transition-colors ${
      isActive
        ? 'bg-blue-50 text-blue-700 font-bold'
        : 'hover:bg-slate-100 text-slate-700 font-semibold'
    }`;

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 lg:px-12 ${
        isScrolled ? 'pt-2.5 pb-2' : 'pt-4 sm:pt-5 pb-3'
      }`}
    >
      <div className="w-full">
        <nav
          id="navbar-container"
          className="relative flex items-center justify-between px-6 sm:px-8 py-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md shadow-slate-900/5 w-full"
        >
          <Link
            id="nav-brand-link"
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 text-left focus:outline-none"
            aria-label="Easy Solutions 4 U Home"
          >
            <EasySolutionsLogo size="md" variant="horizontal" />
            <span className="hidden lg:inline-block pl-3 border-l border-slate-200 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Enterprise Solutions Architecture
            </span>
          </Link>

          <div
            id="nav-desktop-links"
            className="hidden md:flex items-center gap-1.5"
          >
            <NavLink to="/" className={navLinkClasses} end>
              Overview
            </NavLink>
            <NavLink to="/capabilities" className={navLinkClasses}>
              Capabilities
            </NavLink>
            <NavLink to="/architecture" className={navLinkClasses}>
              Architecture
            </NavLink>
            <NavLink to="/case-studies" className={navLinkClasses}>
              Case Studies
            </NavLink>
            <NavLink to="/estimator" className={navLinkClasses}>
              Scope Estimator
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses}>
              Contact
            </NavLink>
            <button
              id="nav-link-sandbox"
              type="button"
              onClick={onOpenSandbox}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-blue-700 bg-blue-50/80 hover:bg-blue-100 hover:text-blue-800 transition-all duration-200 border border-blue-200/80 hover:border-blue-300 shadow-2xs cursor-pointer text-xs font-bold"
            >
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Sandbox</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="nav-cta-consultation"
              type="button"
              onClick={onOpenConsultation}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-250 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/35 hover:-translate-y-0.5 cursor-pointer group"
            >
              <PhoneCall className="w-3.5 h-3.5 text-blue-200 group-hover:scale-110 transition-transform" />
              <span>Book Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              id="nav-mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div
            id="nav-mobile-menu-panel"
            className="md:hidden mt-2 p-4 rounded-2xl border border-slate-200 bg-white/98 backdrop-blur-xl shadow-xl space-y-2 text-sm"
          >
            <NavLink to="/" onClick={closeMenu} className={mobileNavLinkClasses} end>
              <span>Overview</span>
            </NavLink>
            <NavLink to="/capabilities" onClick={closeMenu} className={mobileNavLinkClasses}>
              <span>Capabilities</span>
            </NavLink>
            <NavLink to="/architecture" onClick={closeMenu} className={mobileNavLinkClasses}>
              <span>Architecture</span>
            </NavLink>
            <NavLink to="/case-studies" onClick={closeMenu} className={mobileNavLinkClasses}>
              <span>Case Studies</span>
            </NavLink>
            <NavLink to="/estimator" onClick={closeMenu} className={mobileNavLinkClasses}>
              <span>Scope Estimator</span>
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu} className={mobileNavLinkClasses}>
              <span>Contact</span>
            </NavLink>
            <button
              type="button"
              onClick={() => {
                closeMenu();
                onOpenSandbox();
              }}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-blue-50 text-blue-700 font-bold text-left cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Interactive Sandbox</span>
              </div>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};