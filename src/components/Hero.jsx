import React, { useState, useEffect } from 'react';
import { Download, Sparkles, ArrowRight, Github, Linkedin, Twitter, Youtube, Facebook, MapPin, Mail, Code, ShieldCheck } from 'lucide-react';
import TiltCard from './TiltCard';
import { FaReact } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";

export default function Hero({ onOpenCvModal }) {
  const profileImgUrl = "/profile.webp";

  // Typing effect roles requested by user
  const roles = [
    "Full-Stack Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Database Designer",
    "3D Web Application Developer",
    ".NET Framework"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === fullText) {
      typingSpeed = 1800; // Pause at full word
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 300;
    }

    const timer = setTimeout(() => {
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/chamikara-arambepola-9aa4122a4', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'GitHub', href: 'https://github.com/Chamikara2002', icon: Github, color: 'hover:text-cyan-400' },
    { name: 'Twitter/X', href: 'https://x.com/ChamikaraViloch', icon: Twitter, color: 'hover:text-sky-400' },
    { name: 'YouTube', href: 'https://www.youtube.com/@CHAMI_G', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'Facebook', href: 'https://www.facebook.com/chamikara.vilochana.2025', icon: Facebook, color: 'hover:text-blue-500' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-x-hidden">

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#64FFDA]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Text Content Area */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded-full text-[#64FFDA] text-xs font-mono font-semibold backdrop-blur-md shadow-neon-teal">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64FFDA] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#64FFDA]"></span>
              </span>
              <span>Founder & Lead SE @ Zentrix Software Solutions</span>
            </div>

            {/* Main Greeting Heading with Syne font */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-headline font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <br />
              <span className="text-gradient-teal">W.M.C.V.B.</span>{' '}
              <span className="text-gradient-gold">Arambepola</span>
            </h1>

            {/* Dynamic Animated Auto-Typing Role */}
            <div className="h-12 flex items-center justify-center lg:justify-start">
              <span className="text-lg sm:text-2xl lg:text-2xl xl:text-3xl font-extrabold text-white tracking-wide font-headline">
                I am a{' '}
                <span className="text-gradient-gold border-b-2 border-[#FFD700] pb-0.5">
                  {currentText}
                </span>
                <span className="animate-pulse text-[#64FFDA] font-normal">|</span>
              </span>
            </div>

            {/* Subtitle / Role Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mx-auto lg:mx-0">
              Creating high-performance 3D web applications, SaaS platforms, .NET enterprise frameworks, and client-focused software solutions.
            </p>

            {/* Highlights Grid */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-mono text-slate-300 pt-2">
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#112240] border border-[#64FFDA]/30 rounded-lg">
                <MapPin className="w-3.5 h-3.5 text-[#64FFDA]" /> Sri Lanka
              </span>
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#112240] border border-[#FFD700]/30 rounded-lg">
                <FaUserGraduate className="w-3.5 h-3.5 text-[#FFD700]" /> BEng (Hons) SE
              </span>
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#112240] border border-[#64FFDA]/30 rounded-lg">
                <FaReact className="w-3.5 h-3.5 text-[#64FFDA]" /> React + Vite & Java
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#64FFDA] via-[#38BDF8] to-[#FFD700] animate-gradient-slow text-[#0A192F] font-extrabold rounded-2xl shadow-[0_10px_25px_-5px_rgba(100,255,218,0.5)] hover:shadow-[0_15px_30px_-5px_rgba(100,255,218,0.7)] transition-all transform hover:scale-105 active:scale-95 text-sm"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="flex items-center gap-2 px-7 py-3.5 bg-[#112240] hover:bg-[#1d3557] border border-[#64FFDA]/40 text-[#64FFDA] hover:text-white font-extrabold rounded-2xl transition-all shadow-lg shadow-[#64FFDA]/10 transform hover:scale-105 active:scale-95 text-sm cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#FFD700] animate-bounce" />
                <span>Download CV (.PDF)</span>
              </button>
            </div>

            {/* Social Links Icons Bar */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-[#112240] border border-[#233554] hover:border-[#64FFDA] rounded-xl text-slate-300 hover:text-[#64FFDA] transition-all transform hover:-translate-y-1 shadow-md"
                      title={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Profile Image with 3D Card Tilt Effect */}
          <div className="lg:col-span-5 flex justify-center">
            <TiltCard maxTilt={15} scale={1.03} className="w-full max-w-md p-6 bg-[#112240] border-[#64FFDA]/30">
              <div className="relative group">

                {/* Glowing neon ring outline */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#64FFDA] via-[#38BDF8] to-[#FFD700] rounded-3xl blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />

                {/* Profile Image Container */}
                <div className="relative rounded-2xl overflow-hidden bg-[#0A192F] border border-[#233554] aspect-square flex items-center justify-center">
                  <img
                    src={profileImgUrl}
                    alt="W.M.C.V.B. Arambepola - Founder & Lead Software Engineer"
                    fetchpriority="high"
                    decoding="async"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/profile.jpg";
                    }}
                  />

                  {/* Glass Card Floating Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#0A192F]/90 border border-[#64FFDA]/40 backdrop-blur-xl rounded-xl text-center shadow-xl">
                    <h2 className="text-sm font-headline font-bold text-white tracking-wide">Chamikara Arambepola</h2>
                    <p className="text-[11px] text-[#64FFDA] font-mono mt-0.5">Undergraduate Software Engineer Student</p>
                  </div>
                </div>

              </div>
            </TiltCard>
          </div>

        </div>
      </div>

      {/* Quick Floating Action Dock */}
      <div className="hidden xl:flex fixed right-6 top-1/3 z-30 flex-col items-center gap-4 bg-[#112240]/90 border border-[#64FFDA]/30 backdrop-blur-xl p-3 rounded-full shadow-2xl">
        <a
          href="https://www.linkedin.com/in/chamikara-arambepola-9aa4122a4"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-[#1d3557] hover:bg-[#64FFDA]/20 border border-[#233554] rounded-full text-slate-300 hover:text-[#64FFDA] transition-all transform hover:scale-110"
          title="LinkedIn Profile"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/Chamikara2002"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-[#1d3557] hover:bg-[#64FFDA]/20 border border-[#233554] rounded-full text-slate-300 hover:text-[#64FFDA] transition-all transform hover:scale-110"
          title="GitHub Repositories"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.youtube.com/@CHAMI_G"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-[#1d3557] hover:bg-[#64FFDA]/20 border border-[#233554] rounded-full text-slate-300 hover:text-[#FFD700] transition-all transform hover:scale-110"
          title="YouTube Channel"
        >
          <Youtube className="w-5 h-5" />
        </a>
        <button
          onClick={onOpenCvModal}
          className="p-3 bg-[#64FFDA] text-[#0A192F] rounded-full shadow-neon-teal transition-all transform hover:scale-110 cursor-pointer"
          title="Download CV"
        >
          <Download className="w-5 h-5 animate-bounce text-[#0A192F]" />
        </button>
      </div>

    </section>
  );
}
