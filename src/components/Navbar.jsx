import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Code2, Sun, Moon, Volume2, Sparkles } from 'lucide-react';
import { VscDeveloperTools } from "react-icons/vsc";

export default function Navbar({ onOpenCvModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Section highlight
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'services', 'references', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'References', href: '#references', id: 'references' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
        ? 'bg-[#0A192F]/90 backdrop-blur-xl border-b border-[#64FFDA]/20 py-3 shadow-2xl shadow-black/60'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo with Syne font */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="p-2 bg-[#112240] border border-[#64FFDA]/30 rounded-xl group-hover:border-[#64FFDA] transition-all duration-300 shadow-neon-teal">
              <VscDeveloperTools className="w-5 h-5 text-[#64FFDA] group-hover:text-[#FFD700] group-hover:rotate-12 transition-all duration-300" />
            </div>
            <span className="text-xl font-headline font-extrabold tracking-wider">
              <span className="text-[#64FFDA]"></span>
              <span className="text-white">CHAMIKARA</span>
              <span className="text-[#FFD700]"></span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#112240]/80 border border-[#233554] p-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${isActive
                    ? 'bg-gradient-to-r from-[#64FFDA] via-[#38BDF8] to-[#FFD700] animate-gradient-slow text-[#0A192F] font-extrabold shadow-[0_8px_20px_-4px_rgba(100,255,218,0.45)] scale-105'
                    : 'text-slate-300 hover:text-[#64FFDA] hover:bg-[#233554]/60'
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCvModal}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#64FFDA] via-[#38BDF8] to-[#FFD700] animate-gradient-slow text-[#0A192F] text-xs font-extrabold rounded-xl shadow-[0_8px_25px_-5px_rgba(100,255,218,0.5)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4 animate-bounce" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenCvModal}
              className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-[#64FFDA] via-[#38BDF8] to-[#FFD700] animate-gradient-slow text-[#0A192F] text-xs font-extrabold rounded-lg shadow-md shadow-[#64FFDA]/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-[#112240] border border-[#233554] rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A192F]/95 border-b border-[#64FFDA]/20 backdrop-blur-2xl px-6 py-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeSection === link.id
                ? 'bg-gradient-to-r from-[#64FFDA] via-[#38BDF8] to-[#FFD700] animate-gradient-slow text-[#0A192F] font-extrabold shadow-md shadow-[#64FFDA]/30'
                : 'text-slate-300 hover:bg-[#112240]'
                }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#233554]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#64FFDA] via-[#38BDF8] to-[#FFD700] animate-gradient-slow text-[#0A192F] font-extrabold text-sm rounded-xl shadow-[0_8px_25px_-5px_rgba(100,255,218,0.5)]"
            >
              <Download className="w-4 h-4" />
              Download Direct CV PDF
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
