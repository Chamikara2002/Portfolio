import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle, Sparkles, BookOpen } from 'lucide-react';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';

export default function Education() {
  const educationList = [
    {
      degree: 'BEng (Hons) in Software Engineering (Reading)',
      institution: 'London Metropolitan University (UK) – via ESOFT Metro Campus',
      period: 'September 2025 – Present',
      location: 'Sri Lanka / UK',
      status: 'In Progress',
      badgeColor: 'bg-[#64FFDA]/10 text-[#64FFDA] border-[#64FFDA]/30',
      description: 'Advanced degree specialization focused on Software Architecture, Enterprise Systems, and full SDLC engineering principles.',
      bullets: [
        'Specialization: Advanced Software Engineering & Enterprise Architecture.',
        'Focus Areas: Advanced Programming, Software Development Lifecycle (SDLC), and Enterprise Application Development.',
        'Architectural Patterns: Microservices, RESTful API design, and distributed cloud computing systems.',
        'System Optimization: Performance tuning, scalable database design, and automated deployment pipelines.'
      ]
    },
    {
      degree: 'Pearson BTEC HND in Computing (Software Engineering)',
      institution: 'Pearson UK – via ESOFT Metro Campus',
      period: 'September 2023 – March 2025',
      location: 'Sri Lanka / UK',
      status: 'Completed',
      badgeColor: 'bg-[#FFD700]/10 text-[#FFD700] border-[#FFD700]/30',
      description: 'Higher National Diploma covering fundamental and advanced computer science principles, data structures, and object-oriented programming.',
      bullets: [
        'Specialization: Software Engineering Core Fundamentals.',
        'Key Modules: Data Structures & Algorithms (Queue, Linked List, Optimization), Object-Oriented Programming (Java), and Database Management Systems (MySQL, MSSQL).',
        'Practical Projects: Built custom multi-threaded desktop applications and dynamic web platforms.',
        'Quality Assurance: Applied rigid software testing methodologies, code reviews, and unit test suites.'
      ]
    },
    {
      degree: 'Certificate IN English',
      institution: 'British Way English Academy Kandy',
      period: 'November 2022 – January 2023',
      location: 'Kandy, Sri Lanka',
      status: 'Certified',
      badgeColor: 'bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]/30',
      description: 'Intensive language certification focusing on professional technical writing, client communication, and presentation skills.',
      bullets: [
        'Thesis on "Writing, Listening, Reading, and Speaking".',
        'Developed high-level technical documentation and client-facing communication skills.'
      ]
    }
  ];

  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with ScrollReveal */}
        <ScrollReveal direction="up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded-full text-[#64FFDA] text-xs font-mono shadow-neon-teal animate-pulse-glow">
              <GraduationCap className="w-4 h-4 animate-bounce text-[#64FFDA]" />
              <span className="uppercase tracking-widest font-bold">ACADEMIC JOURNEY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-headline font-extrabold text-white tracking-tight">
              My <span className="text-gradient-teal">Education</span>
            </h2>
            <div className="h-1.5 w-32 bg-gradient-architectural mx-auto rounded-full shadow-neon-teal" />
          </div>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#64FFDA] via-[#FFD700] to-transparent shadow-neon-teal pointer-events-none" />

          <div className="space-y-12 pl-10 sm:pl-20">
            {educationList.map((edu, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 150}>
                <div className="relative group">
                  
                  {/* Timeline Pulsing Node */}
                  <div className="absolute -left-10 sm:-left-20 top-6 flex items-center justify-center">
                    <span className="relative flex h-5 w-5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64FFDA] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-[#64FFDA] border-2 border-[#0A192F] shadow-neon-teal"></span>
                    </span>
                  </div>

                  {/* 3D Education Card */}
                  <TiltCard maxTilt={10} className="p-6 sm:p-8 bg-[#112240] border-[#64FFDA]/30">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#233554] pb-4 mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-headline font-extrabold text-white tracking-tight">
                          {edu.degree}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mt-1.5">
                          <span className={`px-3 py-1 rounded-md text-xs font-bold border ${edu.badgeColor}`}>
                            {edu.institution}
                          </span>
                          <span className="text-xs text-[#64FFDA] font-mono font-semibold">
                            • {edu.status}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-start sm:items-end text-xs text-slate-400 font-mono space-y-1">
                        <span className="flex items-center gap-1 text-[#64FFDA] font-semibold bg-[#0A192F] px-3 py-1 rounded-lg border border-[#233554]">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {edu.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 mb-4 leading-relaxed font-light">
                      {edu.description}
                    </p>

                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {edu.bullets.map((b, bIdx) => (
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
