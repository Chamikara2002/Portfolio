import React from 'react';
import { Briefcase, Award, Code2, Cpu, User, Layers, CheckCircle2 } from 'lucide-react';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';
import { GiWorld } from "react-icons/gi";

export default function About() {
  const stats = [
    { title: '3+ Years', label: 'Engineering Experience', icon: Briefcase, color: 'text-[#64FFDA]', glow: 'rgba(100, 255, 218, 0.3)' },
    { title: '9+ Real-World', label: 'Projects Engineered', icon: GiWorld, color: 'text-[#FFD700]', glow: 'rgba(255, 215, 0, 0.3)' },
    { title: '4+ Companies', label: 'Platforms & Agency Clients', icon: Layers, color: 'text-[#38BDF8]', glow: 'rgba(56, 189, 248, 0.3)' },
    { title: 'UI/UX & SE', label: 'Dual Specialization', icon: Award, color: 'text-[#64FFDA]', glow: 'rgba(100, 255, 218, 0.3)' },
  ];

  const highlights = [
    'Founder & Lead Software Engineer at Zentrix Software Solutions',
    'Completed UI/UX Internship at Syncrones (Pvt) Ltd',
    'Pearson BTEC HND in Computing (Software Engineering) - Distinction',
    'Currently pursuing BEng (Hons) in Software Engineering at London Metropolitan University (UK)',
    'Proficient in React, Vite, Java, Python, C#, PHP, Figma & Database Systems',
    'Full SDLC mastery: wireframing, architecture, deployment & automated CI/CD',
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 scroll-mt-24 lg:scroll-mt-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading with ScrollReveal */}
        <ScrollReveal direction="up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded-full text-[#64FFDA] text-xs font-mono shadow-neon-teal animate-pulse-glow">
              <User className="w-4 h-4 text-[#64FFDA] animate-bounce" />
              <span className="uppercase tracking-widest font-bold">BACKGROUND & PROFILE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-headline font-extrabold text-white tracking-tight">
              About <span className="text-gradient-teal">Me</span>
            </h2>
            <div className="h-1.5 w-32 bg-gradient-architectural mx-auto rounded-full shadow-neon-teal" />
          </div>
        </ScrollReveal>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Main Description */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="right" delay={150}>
              <h3 className="text-2xl font-headline font-bold text-white leading-snug">
                Devoted Software Engineering Specialist with a passion for modern web technologies & clean architectural design.
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                I’m <strong className="text-white font-semibold">W.M.C.V.B. Arambepola (Chamikara)</strong>, based in Sri Lanka. As the Founder and Lead Software Engineer at <span className="text-[#64FFDA] font-bold">Zentrix Software Solutions</span>, I transform intricate concepts into scalable, production-ready web and cloud applications.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3">
                With hands-on industry experience as a UI/UX Designer & Frontend Developer Intern at <span className="text-[#FFD700] font-semibold">Syncrones (Pvt) Ltd</span> and advanced academic training from London Metropolitan University & ESOFT Metro Campus, I combine creative visual fidelity in Figma with robust backend logic in Java, React, Node.js, and MongoDB.
              </p>
            </ScrollReveal>

            {/* Checklist */}
            <ScrollReveal direction="up" delay={250}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#64FFDA] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>

          {/* 3D Stat Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <ScrollReveal key={idx} direction="up" delay={150 + idx * 100}>
                  <TiltCard glowColor={stat.glow} maxTilt={15} className="p-6 text-center bg-[#112240] border-[#64FFDA]/30">
                    <div className="p-3 bg-[#0A192F] border border-[#233554] rounded-2xl w-fit mx-auto mb-3 shadow-md">
                      <IconComp className={`w-6 h-6 ${stat.color}`} aria-label={stat.label} title={stat.label} role="img" />
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-headline font-extrabold text-white tracking-tight">
                      {stat.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium mt-1">
                      {stat.label}
                    </p>
                  </TiltCard>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
