import React from 'react';
import { ChevronUp, Code2, Heart, Github, Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#020C1B] border-t border-[#233554] pt-12 pb-24 sm:pb-28 lg:pb-32 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-[#112240] border border-[#64FFDA]/30 rounded-xl flex items-center justify-center">
              <img src="/newonee_white.png" alt="Chamikara Logo" className="w-6 h-6 object-contain" />
            </div>
            <div>
              <span className="text-base font-headline font-extrabold tracking-wider text-white">
                <span className="text-[#64FFDA]"></span>
                CHAMIKARA
                <span className="text-[#FFD700]"></span>
              </span>
              <p className="text-[11px] text-slate-400 font-mono">
                W.M.C.V.B. Arambepola • Zentrix Software Solutions
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-slate-400">
            <a href="https://www.linkedin.com/in/chamikara-arambepola-9aa4122a4" target="_blank" rel="noopener noreferrer" className="hover:text-[#64FFDA] transition-colors">
              LinkedIn
            </a>
            <span>•</span>
            <a href="https://github.com/Chamikara2002" target="_blank" rel="noopener noreferrer" className="hover:text-[#64FFDA] transition-colors">
              GitHub
            </a>
            <span>•</span>
            <a href="https://x.com/ChamikaraViloch" target="_blank" rel="noopener noreferrer" className="hover:text-[#64FFDA] transition-colors">
              Twitter/X
            </a>
            <span>•</span>
            <a href="https://www.youtube.com/@CHAMI_G" target="_blank" rel="noopener noreferrer" className="hover:text-[#64FFDA] transition-colors">
              YouTube
            </a>
            <span>•</span>
            <a href="https://www.facebook.com/chamikara.vilochana.2025" target="_blank" rel="noopener noreferrer" className="hover:text-[#64FFDA] transition-colors">
              Facebook
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#112240] hover:bg-[#1d3557] border border-[#233554] hover:border-[#64FFDA]/40 rounded-xl text-slate-300 hover:text-[#64FFDA] transition-all shadow-md group cursor-pointer"
          >
            <span>Back to top</span>
            <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

        <div className="mt-8 pt-6 border-t border-[#112240] text-center text-slate-400 text-[11px] font-mono">
          © {new Date().getFullYear()} W.M.C.V.B. Arambepola. Built with React, Vite & Tailwind CSS. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
