import React from 'react';
import { Cpu, Code2, Database, Layout } from 'lucide-react';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';
import { SiBackendless } from "react-icons/si";
import { SiFrontendmentor } from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend & Mobile',
      icon: SiFrontendmentor,
      color: 'text-[#64FFDA]',
      skills: [
        { name: 'React.js', level: 92 },
        { name: 'Vite', level: 90 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'JavaScript (ES6+)', level: 88 },
        { name: 'Flutter', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
      ]
    },
    {
      title: 'Backend & Languages',
      icon: SiBackendless,
      color: 'text-[#FFD700]',
      skills: [
        { name: 'Java (OOP)', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'C# & .NET', level: 88 },
        { name: 'PHP', level: 82 },
        { name: 'Node.js', level: 85 },
        { name: 'REST APIs', level: 88 },
      ]
    },
    {
      title: 'Databases & Tools',
      icon: Database,
      color: 'text-[#38BDF8]',
      skills: [
        { name: 'MongoDB', level: 86 },
        { name: 'MySQL', level: 90 },
        { name: 'MSSQL (SQL Server)', level: 88 },
        { name: 'Git & GitHub', level: 92 },
        { name: 'Visual Studio & VS Code', level: 95 },
        { name: 'Data Structures', level: 90 },
      ]
    },
    {
      title: 'UI/UX & Testing',
      icon: Cpu,
      color: 'text-[#64FFDA]',
      skills: [
        { name: 'Figma Prototyping', level: 94 },
        { name: 'User Interface Design', level: 92 },
        { name: 'User Experience Research', level: 88 },
        { name: 'Software Quality Assurance', level: 85 },
        { name: '3D Web & Glassmorphism', level: 90 },
        { name: 'Time Management', level: 95 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 scroll-mt-24 lg:scroll-mt-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading with ScrollReveal */}
        <ScrollReveal direction="up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded-full text-[#64FFDA] text-xs font-mono shadow-neon-teal animate-pulse-glow">
              <Cpu className="w-4 h-4 text-[#64FFDA] animate-spin-slow" />
              <span className="uppercase tracking-widest font-bold">TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-headline font-extrabold text-white tracking-tight">
              Skills & <span className="text-gradient-teal">Proficiency</span>
            </h2>
            <div className="h-1.5 w-32 bg-gradient-architectural mx-auto rounded-full shadow-neon-teal" />
          </div>
        </ScrollReveal>

        {/* 3D Skills Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 120}>
                <TiltCard maxTilt={12} className="p-6 sm:p-8 bg-[#112240] border-[#64FFDA]/30">

                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b border-[#233554] pb-4 mb-6">
                    <div className="p-2.5 bg-[#0A192F] border border-[#233554] rounded-xl">
                      <IconComp className={`w-6 h-6 ${cat.color}`} />
                    </div>
                    <h3 className="text-xl font-headline font-bold text-white tracking-wide">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-semibold text-slate-200">{skill.name}</span>
                          <span className="font-mono text-[#64FFDA] font-bold">{skill.level}%</span>
                        </div>

                        <div className="h-2 w-full bg-[#0A192F] rounded-full overflow-hidden border border-[#233554]">
                          <div
                            className="h-full bg-gradient-to-r from-[#64FFDA] to-[#FFD700] rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
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
