import React, { useState, lazy, Suspense } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy loaded below-the-fold sections & components
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Services = lazy(() => import('./components/Services'));
const References = lazy(() => import('./components/References'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const AudioPlayer = lazy(() => import('./components/AudioPlayer'));
const CvModal = lazy(() => import('./components/CvModal'));

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  // Background ambient fantasy audio track (The Lights of the Village - Geoff Harvey)
  const songUrl = "/the-lights-of-the-village.mp3";

  return (
    <div className="relative min-h-screen bg-[#070b14] text-slate-100 overflow-x-hidden font-sans">
      
      {/* 3D Particle Constellation Background */}
      <ParticleCanvas />

      {/* Glassmorphic Navbar */}
      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-12">
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Services />
          <References />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        {/* Footer */}
        <Footer />

        {/* Audio Music Player */}
        <AudioPlayer audioUrl={songUrl} />

        {/* Download CV Modal */}
        {cvModalOpen && <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />}
      </Suspense>

    </div>
  );
}

