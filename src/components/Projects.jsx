import React, { useState } from 'react';
import { Code, ExternalLink, Github, Layers, Sparkles, Filter, Eye, X, CheckCircle } from 'lucide-react';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Zentrix Software Solutions Web Platform',
      category: 'Full-Stack',
      featured: true,
      image: '/zentrix.jpg',
      tech: ['React', 'Vite', 'Spline 3D', 'Tailwind', 'Glassmorphism'],
      shortDesc: 'Futuristic 3D agency platform with Spline elements and glassmorphic UI.',
      fullDesc: 'Using contemporary web technology, a futuristic, high-performing official website for Zentrix Software Solutions was engineered. Spline and glassmorphic design elements are used to combine a 3D-animated hero segment into the highly interactive user interface. Presents an extensive service portfolio and enterprise software solutions.',
      features: ['3D Animated Hero Segment', 'Spline Interactive Canvas', 'Glassmorphism UI System', 'Automated CI/CD Pipeline Deployment'],
      github: 'https://github.com/Chamikara2002',
      demo: 'https://github.com/Chamikara2002'
    },
    {
      id: 2,
      title: 'Voyara Adventures Tourism Platform',
      category: 'Full-Stack',
      featured: true,
      image: '/voyara.jpg',
      tech: ['React', 'Java', 'MongoDB', 'Figma', 'CI/CD'],
      shortDesc: 'Full-stack Sri Lankan tour booking app with real-time pricing and dynamic vehicle selection.',
      fullDesc: 'Engineering a full-stack tourism web application using React, Java, and MongoDB to streamline Sri Lankan tour bookings. Features an ongoing implementation of a multi-step booking architecture, real-time pricing, dynamic vehicle selection, and automated route customization. Code changes pushed via VS Code deploy seamlessly via GitHub automated CI/CD pipelines.',
      features: ['Multi-Step Booking Architecture', 'Real-Time Pricing Engine', 'Dynamic Vehicle & Fleet Selection', 'Automated Route Customization & Flight Tracking'],
      github: 'https://github.com/Chamikara2002',
      demo: 'https://github.com/Chamikara2002'
    },
    {
      id: 3,
      title: 'Deno Cabs Tours Booking Platform',
      category: 'Full-Stack',
      featured: true,
      image: '/deno_cabs.jpg',
      tech: ['React', 'Java', 'MongoDB', 'Figma', 'CSS3'],
      shortDesc: 'Cab booking & tour platform with dynamic fleet selection and automated fare calculation.',
      fullDesc: 'Full-stack cab booking and tour platform using Figma, React, Java, and MongoDB. Designed end-to-end UI/UX prototypes in Figma, leading to an active implementation of dynamic fleet selection, automated fare calculation, and location-based booking logic directly integrated with CI/CD pipelines.',
      features: ['Dynamic Fleet Selection', 'Automated Fare Calculation', 'Location-Based Booking Logic', 'Integrated VS Code to Production Pipeline'],
      github: 'https://github.com/Chamikara2002',
      demo: 'https://github.com/Chamikara2002'
    },
    {
      id: 4,
      title: 'Centralized Sales & Distribution (ISDN)',
      category: 'Enterprise',
      featured: false,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tech: ['PHP', 'SQL', 'WAMP', 'HTML5', 'RBAC'],
      shortDesc: 'Sales distribution system replacing manual logistics with automated invoicing & real-time sync.',
      fullDesc: 'Worked as a three-person team to create a Full Stack Sales Distribution System (WAMP) utilizing PHP and SQL, replacing manual logistics with a centralized digital platform. Designed the automated invoicing and role-based access control (RBAC) systems for real-time inventory synchronization among five regional centers.',
      features: ['Automated Invoicing Engine', 'Role-Based Access Control (RBAC)', 'Real-Time Multi-Center Inventory Sync', 'Sales Data & Analytics Dashboard'],
      github: 'https://github.com/Chamikara2002',
      demo: 'https://github.com/Chamikara2002'
    },
    {
      id: 5,
      title: 'Green Life Store Management System',
      category: 'Desktop',
      featured: false,
      image: 'https://images.unsplash.com/photo-1556742049-0a67daf4005a?auto=format&fit=crop&w=800&q=80',
      tech: ['C#', '.NET', 'SQL Server', 'SQL LIKE Search'],
      shortDesc: 'Multi-layered desktop retail application with inventory tracking & automated alerts.',
      fullDesc: 'Created a multi-layered desktop application with SQL Server and C# to optimize retail processes, such as order management and inventory tracking. Designed a solid database schema and used SQL LIKE queries to achieve optimum search capability with low-stock alerts.',
      features: ['Multi-Layered Architecture', 'SQL Server Database Schema', 'Automated Low-Stock Alerts', 'Role-Based Admin & Customer Portals'],
      github: 'https://github.com/Chamikara2002',
      demo: 'https://github.com/Chamikara2002'
    },
    {
      id: 6,
      title: 'Employee Payroll System (.NET)',
      category: 'Desktop',
      featured: false,
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      tech: ['Visual Studio .NET', 'C#', 'SQL'],
      shortDesc: 'Desktop payroll application calculating Net salary, OT hours, EPF/ETF, & printable paysheets.',
      fullDesc: 'System enables adding, updating, and deleting employee records while calculating Net salary (Input basic salary, OT Hours, hourly rate). Prints official paysheets displaying work days, absent days, work hours, OT amounts, and EPF/ETF contributions.',
      features: ['Net Salary & OT Calculation', 'Printable Employee Paysheets', 'EPF & ETF Deduction Accounting', 'Workplace Attendance Tracking'],
      github: 'https://github.com/Chamikara2002',
      demo: 'https://github.com/Chamikara2002'
    },
    {
      id: 7,
      title: 'Bus Reservation System (Java)',
      category: 'Core Software',
      featured: false,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
      tech: ['Java', 'Queue DS', 'Linked List DS', 'OOP'],
      shortDesc: 'Java bus reservation platform built using Queue & Linked List data structures.',
      fullDesc: 'Java software system enabling customer bus registrations and seat reservations using custom Queue and Linked List data structures for efficient booking management.',
      features: ['Queue Data Structure Seat Allocation', 'Linked List Customer Registry', 'Bus Schedule Management', 'Fast Search & Cancellation Logic'],
      github: 'https://github.com/Chamikara2002',
      demo: 'https://github.com/Chamikara2002'
    },
    {
      id: 8,
      title: 'Photography Web Platform',
      category: 'Web Design',
      featured: false,
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=800&q=80',
      tech: ['Adobe Dreamweaver', 'HTML5', 'CSS3', 'JS'],
      shortDesc: 'Photography portfolio & booking site with automated email dispatch.',
      fullDesc: 'Photography portfolio website where customers inspect photo galleries, review services, view booking calendars, and submit booking requests directly dispatched to email.',
      features: ['Interactive Photography Gallery', 'Booking & Availability Calendar', 'Automated Email Dispatch', 'Custom Portfolio Showcase'],
      github: 'https://github.com/Chamikara2002',
      demo: 'https://github.com/Chamikara2002'
    },
    {
      id: 9,
      title: 'Super Market Sales Analytics',
      category: 'Core Software',
      featured: false,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'Data Analytics', 'Matplotlib'],
      shortDesc: 'Python sales analysis software generating weekly demand diagrams.',
      fullDesc: 'Python application created to input retail data and generate weekly sales diagrams to analyze high-demand products and guide inventory purchasing.',
      features: ['Weekly Sales Diagram Analysis', 'High-Demand Product Identification', 'Data Entry & Import Module', 'Inventory Demand Forecasting'],
      github: 'https://github.com/Chamikara2002',
      demo: 'https://github.com/Chamikara2002'
    }
  ];

  const categories = ['All', 'Featured', 'Full-Stack', 'Desktop', 'Enterprise', 'Core Software'];

  const filteredProjects = filter === 'All'
    ? projects
    : filter === 'Featured'
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with ScrollReveal */}
        <ScrollReveal direction="up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded-full text-[#64FFDA] text-xs font-mono shadow-neon-teal animate-pulse-glow">
              <Layers className="w-4 h-4 text-[#64FFDA] animate-spin-slow" />
              <span className="uppercase tracking-widest font-bold">PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-headline font-extrabold text-white tracking-tight">
              Featured <span className="text-gradient-teal">Projects</span>
            </h2>
            <div className="h-1.5 w-32 bg-gradient-architectural mx-auto rounded-full shadow-neon-teal" />
          </div>
        </ScrollReveal>

        {/* Filter Categories Bar */}
        <ScrollReveal direction="up" delay={150}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-[#64FFDA] via-[#38BDF8] to-[#FFD700] animate-gradient-slow text-[#0A192F] font-extrabold shadow-[0_8px_20px_-4px_rgba(100,255,218,0.45)] scale-105'
                    : 'bg-[#112240] border border-[#233554] text-slate-400 hover:text-white hover:border-[#64FFDA]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* 3D Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, idx) => (
            <ScrollReveal key={proj.id} direction="up" delay={idx * 100}>
              <TiltCard maxTilt={14} className="flex flex-col justify-between h-full group overflow-hidden bg-[#112240] border-[#64FFDA]/30">
                
                {/* Project Visual Image Header */}
                <div className="relative aspect-video overflow-hidden bg-[#0A192F] border-b border-[#233554]">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-[#64FFDA] uppercase tracking-wider bg-[#0A192F]/90 backdrop-blur-md border border-[#64FFDA]/40 px-2.5 py-1 rounded-md shadow-md">
                      {proj.category}
                    </span>
                  </div>

                  {proj.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="flex items-center gap-1 text-[10px] font-bold text-[#FFD700] bg-[#FFD700]/20 backdrop-blur-md border border-[#FFD700]/40 px-2.5 py-1 rounded-full shadow-md">
                        <Sparkles className="w-3 h-3 text-[#FFD700]" /> Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-headline font-extrabold text-white group-hover:text-[#64FFDA] transition-colors leading-snug">
                      {proj.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mt-2 line-clamp-3">
                      {proj.shortDesc}
                    </p>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {proj.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-[#0A192F] border border-[#233554] text-[10px] text-slate-300 font-mono rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons Footer */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-[#233554]/60 mt-2">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-[#64FFDA] hover:text-white transition-colors"
                  >
                    <Eye className="w-4 h-4 text-[#64FFDA]" />
                    <span>View Details</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#0A192F] hover:bg-[#1d3557] border border-[#233554] rounded-lg text-slate-400 hover:text-[#64FFDA] transition-colors"
                      title="View Source Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gradient-to-r from-[#64FFDA] via-[#38BDF8] to-[#FFD700] text-[#0A192F] font-extrabold rounded-lg hover:from-[#52e0c4] hover:to-[#ffea70] transition-colors shadow-[0_4px_15px_-3px_rgba(100,255,218,0.4)]"
                      title="Open Live Preview"
                    >
                      <ExternalLink className="w-4 h-4 text-[#0A192F]" />
                    </a>
                  </div>
                </div>

              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A192F]/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#112240] border border-[#64FFDA]/40 rounded-2xl shadow-neon-teal p-6 sm:p-8 text-slate-200">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-[#233554] rounded-xl transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-6">
              <div className="aspect-video rounded-xl overflow-hidden border border-[#233554]">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#64FFDA] uppercase tracking-wider bg-[#64FFDA]/10 border border-[#64FFDA]/30 px-3 py-1 rounded-md">
                    {selectedProject.category}
                  </span>
                </div>

                <h2 className="text-2xl font-headline font-bold text-white">{selectedProject.title}</h2>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">{selectedProject.fullDesc}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-[#64FFDA] uppercase tracking-wider block mb-2">Key Features & Architecture:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {selectedProject.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 bg-[#0A192F]/80 p-2.5 rounded-lg border border-[#233554]">
                      <CheckCircle className="w-4 h-4 text-[#64FFDA] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[#233554]">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#0A192F] hover:bg-[#1d3557] text-white font-semibold text-xs rounded-xl border border-[#233554] transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#64FFDA] via-[#38BDF8] to-[#FFD700] text-[#0A192F] font-extrabold text-xs rounded-xl shadow-[0_8px_20px_-4px_rgba(100,255,218,0.5)] hover:from-[#52e0c4] hover:to-[#ffea70] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Project Demo</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
