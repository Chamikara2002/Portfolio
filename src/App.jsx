import React, { useState } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import CvModal from './components/CvModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  // Audio link provided by user
  const songUrl = "https://drive.google.com/file/d/1zE7gvgmmdN6gU_d2FCZss8HRxG5baam9/view?usp=sharing";

  return (
    <div className="relative min-h-screen bg-[#070b14] text-slate-100 overflow-hidden font-sans">
      
      {/* 3D Particle Constellation Background */}
      <ParticleCanvas />

      {/* Glassmorphic Navbar */}
      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-12">
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <References />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Audio Music Player */}
      <AudioPlayer audioUrl={songUrl} />

      {/* Download CV Modal */}
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />

    </div>
  );
}
