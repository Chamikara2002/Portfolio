import React, { useState } from 'react';
import { Download, X, FileText, ExternalLink, Eye, FileSpreadsheet, MapPin, MessageCircle, Mail, Phone, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CvModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('pdf'); // 'pdf' or 'details'

  if (!isOpen) return null;

  const driveFolderUrl = "https://drive.google.com/drive/folders/1mc8tD9O3gSA7DZMqBaA2Su_d51krIWqf?usp=drive_link";
  const directPdfUrl = "/W_M_C_V_B_Arambepola_CV.pdf";

  const handleDownloadPdf = async () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });

    try {
      const response = await fetch(directPdfUrl);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'W_M_C_V_B_Arambepola_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      // Direct download fallback
      const link = document.createElement('a');
      link.href = directPdfUrl;
      link.download = 'W_M_C_V_B_Arambepola_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#0A192F]/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-[#112240] border border-[#64FFDA]/30 rounded-2xl shadow-neon-teal p-4 sm:p-6 text-slate-200 overflow-hidden">
        
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#233554] pb-4 mb-4 gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#0A192F] border border-[#64FFDA]/40 rounded-xl text-[#64FFDA]">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-2xl font-headline font-bold text-white tracking-wide">
                  W.M.C.V.B. Arambepola CV
                </h2>
                <span className="px-2.5 py-0.5 text-[10px] font-extrabold font-mono bg-[#FFD700]/20 border border-[#FFD700]/40 text-[#FFD700] rounded-md">
                  PDF FORMAT
                </span>
              </div>
              <p className="text-xs text-[#64FFDA] font-mono mt-0.5">
                Official Curriculum Vitae Document (.pdf)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <a
              href={driveFolderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#0A192F] hover:bg-[#1d3557] border border-[#233554] text-[#64FFDA] hover:text-white text-xs font-semibold rounded-xl transition-all shadow-md active:scale-95"
              title="Open Google Drive Folder"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#64FFDA]" />
              <span>Google Drive</span>
            </a>

            <button
              onClick={handleDownloadPdf}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#64FFDA] via-[#38BDF8] to-[#FFD700] animate-gradient-slow text-[#0A192F] text-xs sm:text-sm font-extrabold rounded-xl shadow-[0_8px_20px_-4px_rgba(100,255,218,0.45)] transition-all active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4 animate-bounce" />
              <span>Download Direct .PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-[#233554] rounded-xl transition-colors ml-1"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center justify-between bg-[#0A192F]/80 p-1.5 rounded-xl border border-[#233554] mb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('pdf')}
              className={`flex items-center gap-2 px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'pdf'
                  ? 'bg-gradient-to-r from-[#64FFDA] via-[#38BDF8] to-[#FFD700] animate-gradient-slow text-[#0A192F] font-extrabold shadow-[0_8px_20px_-4px_rgba(100,255,218,0.4)] scale-105'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-[#1d3557]'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>PDF Document View</span>
            </button>

            <button
              onClick={() => setActiveTab('details')}
              className={`flex items-center gap-2 px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'details'
                  ? 'bg-gradient-to-r from-[#64FFDA] via-[#38BDF8] to-[#FFD700] animate-gradient-slow text-[#0A192F] font-extrabold shadow-[0_8px_20px_-4px_rgba(100,255,218,0.4)] scale-105'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-[#1d3557]'
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>CV Summary Details</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-400 pr-2">
            <Sparkles className="w-3.5 h-3.5 text-[#64FFDA]" />
            <span>PDF File Size: 273 KB</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto min-h-[450px] max-h-[65vh] pr-1">
          {activeTab === 'pdf' ? (
            <div className="w-full h-full min-h-[500px] rounded-xl overflow-hidden border border-[#233554] bg-[#0A192F] relative">
              <iframe
                src={`${directPdfUrl}#toolbar=1`}
                className="w-full h-full min-h-[500px] border-0"
                title="W.M.C.V.B. Arambepola PDF Resume"
              />
            </div>
          ) : (
            /* Printable CV Content Container */
            <div className="space-y-6 text-sm text-slate-300 leading-relaxed font-sans bg-[#0A192F]/60 p-6 rounded-xl border border-[#233554]">
              
              {/* Header Info */}
              <div className="border-b border-[#233554] pb-4">
                <h1 className="text-2xl sm:text-3xl font-headline font-extrabold text-white tracking-tight">
                  W.M.C.V.B. ARAMBEPOLA
                </h1>
                <p className="text-[#64FFDA] font-medium mt-1">
                  Founder & Lead Software Engineer | UI/UX & Full-Stack Specialist
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#64FFDA]" />
                    <span>Galigamuwa Town, Kegalle District, Sri Lanka</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp: +94 76 199 1008</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#64FFDA]" />
                    <span>vilochanabandara25@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#64FFDA]" />
                    <span>Phone: +94 70 408 6226</span>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h3 className="text-base font-headline font-bold text-[#64FFDA] uppercase tracking-wider mb-2 border-b border-[#64FFDA]/20 pb-1">
                  Summary
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Devoted software engineering specialist with a solid background in full-stack development and UI/UX design. Finished UI/UX Designer internship at Syncrones (Pvt) Ltd. and Pearson BTEC HND in Computing (Software Engineering) at ESOFT Metro Campus (London Metropolitan University collaboration). Skilled in Figma, React, Java, Python, C#, and MongoDB. Currently pursuing a BEng (Hons) in Software Engineering.
                </p>
              </div>

              {/* Work Experience */}
              <div>
                <h3 className="text-base font-headline font-bold text-[#64FFDA] uppercase tracking-wider mb-3 border-b border-[#64FFDA]/20 pb-1">
                  Work Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold text-white text-sm">Founder & Lead Software Engineer</h4>
                      <span className="text-xs text-[#64FFDA] font-mono">Nov 2025 – Present</span>
                    </div>
                    <p className="text-xs text-[#FFD700] font-semibold mb-1">Zentrix Software Solutions • Part-Time / Contract</p>
                    <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                      <li>Founded and managed boutique software agency delivering custom web & cloud applications.</li>
                      <li>Led end-to-end SDLC from Figma UI/UX wireframing to frontend/backend and CI/CD pipelines.</li>
                      <li>Engineered Zentrix Official Web Platform with 3D animated hero & glassmorphism.</li>
                      <li>Engineered Voyara Adventures Tourism platform (React, Java, MongoDB, real-time pricing).</li>
                      <li>Engineered Deno Cabs Tours platform (React, Java, MongoDB, location-based booking).</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold text-white text-sm">UI/UX Designer & Frontend Developer Intern</h4>
                      <span className="text-xs text-[#64FFDA] font-mono">July 2025 – Jan 2026</span>
                    </div>
                    <p className="text-xs text-[#FFD700] font-semibold mb-1">Syncrones (Pvt) Ltd</p>
                    <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                      <li>UI/UX Design & Research: Executed user research & created interactive Figma wireframes.</li>
                      <li>Frontend Development: Built practical single-page web applications using React & Vite.</li>
                      <li>Quality Assurance: Upheld high professional standards and user experience testing.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key Projects */}
              <div>
                <h3 className="text-base font-headline font-bold text-[#64FFDA] uppercase tracking-wider mb-2 border-b border-[#64FFDA]/20 pb-1">
                  Key Projects
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 bg-[#0A192F]/80 rounded-lg border border-[#233554]">
                    <span className="font-bold text-white">Centralized Sales & Distribution (ISDN)</span>
                    <p className="text-slate-400 mt-0.5">WAMP stack (PHP, SQL) with automated invoicing & RBAC.</p>
                  </div>
                  <div className="p-2.5 bg-[#0A192F]/80 rounded-lg border border-[#233554]">
                    <span className="font-bold text-white">Green Life Store Management System</span>
                    <p className="text-slate-400 mt-0.5">C# & .NET multi-layered desktop app with SQL Server.</p>
                  </div>
                  <div className="p-2.5 bg-[#0A192F]/80 rounded-lg border border-[#233554]">
                    <span className="font-bold text-white">Employee Payroll System</span>
                    <p className="text-slate-400 mt-0.5">Visual Studio .NET system with salary & EPF/ETF calculations.</p>
                  </div>
                  <div className="p-2.5 bg-[#0A192F]/80 rounded-lg border border-[#233554]">
                    <span className="font-bold text-white">Bus Reservation System</span>
                    <p className="text-slate-400 mt-0.5">Java app utilizing queue & linked list data structures.</p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-base font-headline font-bold text-[#64FFDA] uppercase tracking-wider mb-2 border-b border-[#64FFDA]/20 pb-1">
                  Education
                </h3>
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-white">BEng (Hons) in Software Engineering (Reading)</span>
                    <p className="text-slate-400">London Metropolitan University (UK) via ESOFT Metro Campus • Sep 2025 - Present</p>
                  </div>
                  <div>
                    <span className="font-bold text-white">Pearson BTEC HND in Computing (Software Engineering)</span>
                    <p className="text-slate-400">Pearson UK via ESOFT Metro Campus • Sep 2023 - March 2025</p>
                  </div>
                </div>
              </div>

              {/* References */}
              <div>
                <h3 className="text-base font-headline font-bold text-[#64FFDA] uppercase tracking-wider mb-2 border-b border-[#64FFDA]/20 pb-1">
                  References
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div>
                    <p className="font-bold text-white">Nuwangi De Alwis</p>
                    <p className="text-slate-400">Lecturer IT, ESOFT Metro Campus Kandy</p>
                    <p className="text-[#64FFDA] font-mono">0770065287 • nuwangi.alwis@esoft.lk</p>
                  </div>
                  <div>
                    <p className="font-bold text-white">W.C.R. Kaushalya</p>
                    <p className="text-slate-400">Lecturer of English, British Way English Academy</p>
                    <p className="text-[#64FFDA] font-mono">0714624642 • roshani97kaushi@gmail.com</p>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-[#233554]">
          <a
            href={driveFolderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-slate-400 hover:text-[#64FFDA] transition-colors font-mono"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>View CV Folder in Google Drive</span>
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadPdf}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#64FFDA] hover:bg-[#52e0c4] text-[#0A192F] font-extrabold rounded-xl shadow-neon-teal transition-transform active:scale-95 text-xs sm:text-sm cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Direct .PDF CV
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

