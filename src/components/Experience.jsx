import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, ExternalLink, CheckCircle } from 'lucide-react';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
  const experiences = [
    {
      role: 'Founder & Lead Software Engineer',
      company: 'Zentrix Software Solutions',
      type: 'Part-Time / Contract',
      period: 'Nov 2025 – Present',
      location: 'Sri Lanka',
      badgeColor: 'bg-[#64FFDA]/10 text-[#64FFDA] border-[#64FFDA]/30',
      description: 'Founded and managed a boutique software solutions agency delivering custom full-stack web and cloud applications for regional clients.',
      bullets: [
        'Led end-to-end SDLC across client projects from UI/UX wireframing in Figma to frontend/backend engineering and automated CI/CD pipelines.',
        'Developed Zentrix Software Solutions Official Web Platform featuring 3D animated hero elements and glassmorphic UI.',
        'Engineered Voyara Adventures Tourism platform utilizing React, Java, MongoDB, real-time pricing, dynamic vehicle selection, and automated route customization.',
        'Engineered Deno Cabs Tours platform with dynamic fleet selection, automated fare calculation, and location-based booking logic.',
        'Designed and built responsive, scalable web products using React, Node.js, Java, and MongoDB.'
      ]
    },
    {
      role: 'UI/UX Designer & Frontend Developer Intern',
      company: 'Syncrones (Pvt) Ltd',
      type: 'Internship',
      period: 'July 2025 – January 2026',
      location: 'Sri Lanka',
      badgeColor: 'bg-[#FFD700]/10 text-[#FFD700] border-[#FFD700]/30',
      description: 'Acquired practical expertise in front-end development and user experience processes for client software products.',
      bullets: [
        'UI/UX Design & Research: Conducted user research and produced wireframes for multiple software applications.',
        'Prototyping: Created high-fidelity designs and interactive prototypes using Figma.',
        'Front-end Development: Built responsive web interfaces using React and Vite.',
        'Quality Assurance: Upheld high professional standards ensuring smooth and enjoyable user experiences.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with ScrollReveal */}
        <ScrollReveal direction="up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full text-[#FFD700] text-xs font-mono shadow-neon-gold animate-pulse-glow">
              <Briefcase className="w-4 h-4 text-[#FFD700] animate-bounce" />
              <span className="uppercase tracking-widest font-bold">CAREER ROADMAP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-headline font-extrabold text-white tracking-tight">
              Work <span className="text-gradient-gold">Experience</span>
            </h2>
            <div className="h-1.5 w-32 bg-gradient-architectural mx-auto rounded-full shadow-neon-gold" />
          </div>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#64FFDA] via-[#FFD700] to-transparent shadow-neon-teal pointer-events-none" />

          <div className="space-y-12 pl-10 sm:pl-20">
            {experiences.map((exp, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 150}>
                <div className="relative group">
                  
                  {/* Timeline Pulsing Node */}
                  <div className="absolute -left-10 sm:-left-20 top-6 flex items-center justify-center">
                    <span className="relative flex h-5 w-5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64FFDA] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-[#64FFDA] border-2 border-[#0A192F] shadow-neon-teal"></span>
                    </span>
                  </div>

                  {/* 3D Experience Card */}
                  <TiltCard maxTilt={10} className="p-6 sm:p-8 bg-[#112240] border-[#64FFDA]/30">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#233554] pb-4 mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-headline font-extrabold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mt-1.5">
                          <span className={`px-3 py-1 rounded-md text-xs font-bold border ${exp.badgeColor}`}>
                            {exp.company}
                          </span>
                          <span className="text-xs text-slate-400 font-medium">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-start sm:items-end text-xs text-slate-400 font-mono space-y-1">
                        <span className="flex items-center gap-1 text-[#64FFDA] font-semibold bg-[#0A192F] px-3 py-1 rounded-lg border border-[#233554]">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 mb-4 leading-relaxed font-light">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-[#64FFDA] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </TiltCard>

                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
