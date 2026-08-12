import React, { useEffect, useRef, useState } from 'react';

/**
 * Reusable Scroll Reveal Wrapper Component
 * Triggers entrance animation when scrolling down or scrolling up into view.
 */
export default function ScrollReveal({
  children,
  className = '',
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'scale'
  delay = 0,
  duration = 600
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Re-trigger animation whenever entering viewport (scrolling up or down)
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // Reset so it re-animates when scrolled back into view
          }
        });
      },
      {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    switch (direction) {
      case 'up':
        return 'translate3d(0, 45px, 0) scale(0.96)';
      case 'down':
        return 'translate3d(0, -45px, 0) scale(0.96)';
      case 'left':
        return 'translate3d(45px, 0, 0) scale(0.96)';
      case 'right':
        return 'translate3d(-45px, 0, 0) scale(0.96)';
      case 'scale':
        return 'translate3d(0, 0, 0) scale(0.85)';
      default:
        return 'translate3d(0, 45px, 0) scale(0.96)';
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}
