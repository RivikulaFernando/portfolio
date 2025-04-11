import React, { useEffect, useRef, useState } from 'react';
import { useParticleContext } from './context';

interface SectionObserverProps {
  sectionId: string;
  shouldInvert: boolean;
}

const SectionObserver: React.FC<SectionObserverProps> = ({ sectionId, shouldInvert }) => {
  const { setInvertParticles } = useParticleContext();
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;
    
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      
      if (entry.isIntersecting && shouldInvert) {
        // Start transition
        setIsTransitioning(true);
        
        // Apply transition with a small delay to make it smoother
        setTimeout(() => {
          setInvertParticles(true);
        }, 50);
      } else if (!entry.isIntersecting && shouldInvert) {
        // Start exit transition
        setIsTransitioning(true);
        
        // Apply transition with a small delay
        setTimeout(() => {
          setInvertParticles(false);
        }, 50);
      }
      
      // Reset transitioning state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1100); // Slightly longer than transition duration
    }, {
      threshold: 0.3,
      rootMargin: '-50px 0px', // Trigger a bit earlier for smoother experience
    });
    
    observer.observe(targetSection);
    
    return () => {
      observer.disconnect();
    };
  }, [sectionId, shouldInvert, setInvertParticles]);
  
  return null;
};

export default SectionObserver;