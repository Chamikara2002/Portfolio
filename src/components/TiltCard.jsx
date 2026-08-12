import React, { useState, useRef } from 'react';

/**
 * Reusable 3D Tilt Card Wrapper Component
 * Provides smooth 3D perspective rotation, dynamic light flare, and depth elevation on hover.
 */
export default function TiltCard({ 
  children, 
  className = '', 
  maxTilt = 12, 
  scale = 1.02,
  glowColor = 'rgba(100, 255, 218, 0.2)'
}) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
  });
  const [lightPosition, setLightPosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate cursor position relative to card center (-1 to 1)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    // Rotate values (tilt inverse Y for X rotation)
    const rotateX = (-yPct * maxTilt).toFixed(2);
    const rotateY = (xPct * maxTilt).toFixed(2);
    
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 0.1s cubic-bezier(0.1, 0.5, 0.1, 1)'
    });
    
    setLightPosition({
      x: ((mouseX / width) * 100).toFixed(1),
      y: ((mouseY / height) * 100).toFixed(1),
      opacity: 0.8
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
    });
    setLightPosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
      className={`glass-card-3d relative rounded-2xl overflow-hidden transition-all duration-300 group ${className}`}
    >
      {/* 3D Dynamic Flare Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: lightPosition.opacity,
          background: `radial-gradient(circle at ${lightPosition.x}% ${lightPosition.y}%, ${glowColor} 0%, transparent 70%)`
        }}
      />
      
      {/* Subtle border glow on hover with #64FFDA Teal and #FFD700 Gold */}
      <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#64FFDA]/30 via-[#38BDF8]/20 to-[#FFD700]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
      
      {/* Card Content with 3D Depth */}
      <div className="relative z-10 transform-gpu transition-transform duration-300">
        {children}
      </div>
    </div>
  );
}
