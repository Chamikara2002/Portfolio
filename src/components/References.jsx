import React from 'react';
import { UserCheck, Phone, Mail, GraduationCap, Building2 } from 'lucide-react';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';

export default function References() {
  const references = [
    {
      name: 'Nuwangi De Alwis',
      title: 'Coordinator Cum Lecturer',
      institution: 'ANC Kandy',
      phone: '0770065287',
      email: 'nuwangi.alwis@ancedu.lk',
      gradient: 'rgba(100, 255, 218, 0.2)'
    },
    {
      name: 'W.C.R. Kaushalya',
      title: 'Lecturer of English',
      institution: 'British Way English Academy Kandy',
      phone: '0714624642',
      email: 'roshani97kaushi@gmail.com',
      gradient: 'rgba(255, 215, 0, 0.2)'
    }
  ];

  return (
    <section id="references" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading with ScrollReveal */}
        <ScrollReveal direction="up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full text-[#FFD700] text-xs font-mono shadow-neon-gold animate-pulse-glow">
              <UserCheck className="w-4 h-4 text-[#FFD700] animate-bounce" />
              <span className="uppercase tracking-widest font-bold">ENDORSEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-headline font-extrabold text-white tracking-tight">
              Academic <span className="text-gradient-gold">References</span>
            </h2>
            <div className="h-1.5 w-32 bg-gradient-architectural mx-auto rounded-full shadow-neon-gold" />
          </div>
        </ScrollReveal>

        {/* 3D Reference Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {references.map((ref, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 150}>
              <TiltCard maxTilt={14} glowColor={ref.gradient} className="p-8 bg-[#112240] border-[#64FFDA]/30">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 bg-[#0A192F] border border-[#233554] rounded-2xl text-[#64FFDA] shadow-md">
                    <UserCheck className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-headline font-extrabold text-white tracking-tight">
                      {ref.name}
                    </h3>
                    <p className="text-sm text-[#64FFDA] font-semibold">
                      {ref.title}
                    </p>
                    <p className="text-xs text-slate-400 flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-slate-500" />
                      {ref.institution}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#233554]/80 space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between p-2.5 bg-[#0A192F]/80 rounded-xl border border-[#233554]">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#64FFDA]" /> Phone:
                    </span>
                    <a href={`tel:${ref.phone}`} className="text-white hover:text-[#64FFDA] transition-colors font-bold">
                      {ref.phone}
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-2.5 bg-[#0A192F]/80 rounded-xl border border-[#233554]">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#FFD700]" /> Email:
                    </span>
                    <a href={`mailto:${ref.email}`} className="text-white hover:text-[#64FFDA] transition-colors font-bold truncate max-w-[200px]">
                      {ref.email}
                    </a>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
