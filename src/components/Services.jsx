import React from 'react';
import { Globe, Layout, ShieldCheck, Cloud, Sparkles, ArrowUpRight } from 'lucide-react';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';

export default function Services() {
  const services = [
    {
      title: 'UI/UX Design & Prototyping',
      icon: Layout,
      color: 'text-[#FFD700]',
      description: 'Creating intuitive user experience flows, wireframes, and interactive high-fidelity prototypes using Figma with glassmorphism UI principles.',
      deliverables: ['User Research & Wireframing', 'Figma Interactive Prototypes', 'Design Systems', 'Micro-Animations']
    },
    {
      title: 'Database Design',
      icon: Layout,
      color: 'text-[#FFD700]',
      description: 'Creating intuitive user experience flows, wireframes, and interactive high-fidelity prototypes using Figma with glassmorphism UI principles.',
      deliverables: ['User Research & Wireframing', 'Figma Interactive Prototypes', 'Design Systems', 'Micro-Animations']
    },
    {
      title: 'Backend Development',
      icon: Globe,
      color: 'text-[#64FFDA]',
      description: 'Building high-performance, responsive single-page applications and client platforms using React, Vite, Node.js, Java, and MongoDB.',
      deliverables: ['Custom Web Portals', '3D Animated Hero Sections', 'RESTful API Integration', 'Responsive Design']
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'text-[#64FFDA]',
      description: 'Building high-performance, responsive single-page applications and client platforms using React, Vite, Node.js, Java, and MongoDB.',
      deliverables: ['Custom Web Portals', '3D Animated Hero Sections', 'RESTful API Integration', 'Responsive Design']
    },
    {
      title: 'Full-Stack Web Development',
      icon: Globe,
      color: 'text-[#64FFDA]',
      description: 'Building high-performance, responsive single-page applications and client platforms using React, Vite, Node.js, Java, and MongoDB.',
      deliverables: ['Custom Web Portals', '3D Animated Hero Sections', 'RESTful API Integration', 'Responsive Design']
    },
    {
      title: 'Enterprise Software Solutions',
      icon: ShieldCheck,
      color: 'text-[#38BDF8]',
      description: 'Developing multi-layered desktop & web platforms (C#, .NET, PHP, SQL) with automated invoicing, inventory tracking, and role-based access.',
      deliverables: ['Sales & Distribution (ISDN)', 'Store & Inventory Systems', 'Payroll & HR Tools', 'RBAC & Security']
    },
    {
      title: 'Cloud & CI/CD Deployment',
      icon: Cloud,
      color: 'text-[#64FFDA]',
      description: 'Implementing automated CI/CD deployment pipelines from Git/VS Code to production servers, ensuring smooth live site updates.',
      deliverables: ['Git & GitHub Workflows', 'Automated Build Pipelines', 'Database Management', 'Production Monitoring']
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 scroll-mt-24 lg:scroll-mt-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading with ScrollReveal */}
        <ScrollReveal direction="up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded-full text-[#64FFDA] text-xs font-mono shadow-neon-teal animate-pulse-glow">
              <Sparkles className="w-4 h-4 text-[#64FFDA] animate-bounce" />
              <span className="uppercase tracking-widest font-bold">AGENCY & SPECIALTIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-headline font-extrabold text-white tracking-tight">
              Services <span className="text-gradient-teal">& Solutions</span>
            </h2>
            <div className="h-1.5 w-32 bg-gradient-architectural mx-auto rounded-full shadow-neon-teal" />
          </div>
        </ScrollReveal>

        {/* 3D Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 120}>
                <TiltCard maxTilt={14} className="p-8 flex flex-col justify-between h-full group bg-[#112240] border-[#64FFDA]/30">
                  <div className="space-y-4">

                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-[#0A192F] border border-[#233554] rounded-2xl shadow-md">
                        <IconComp className={`w-7 h-7 ${srv.color}`} />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-[#64FFDA] transition-colors" />
                    </div>

                    <h3 className="text-xl font-headline font-extrabold text-white group-hover:text-[#64FFDA] transition-colors">
                      {srv.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      {srv.description}
                    </p>

                    <div className="pt-3 border-t border-[#233554]/80">
                      <span className="text-xs font-mono text-[#64FFDA] uppercase tracking-wider block mb-2">Key Deliverables:</span>
                      <ul className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                        {srv.deliverables.map((d, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-[#64FFDA] rounded-full" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
