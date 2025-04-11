import React, { useEffect, useRef } from 'react';
import { useParticleContext } from './context';

interface SectionObserverProps {
  sectionId: string;
  shouldInvert: boolean;
}

const SectionObserver: React.FC<SectionObserverProps> = ({ sectionId, shouldInvert }) => {
  const { setInvertParticles } = useParticleContext();
  // We're using observerRef below, so no need for the ESLint disable
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;
    
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setInvertParticles(entry.isIntersecting && shouldInvert);
    }, {
      threshold: 0.3,
    });
    
    // Store the observer in the ref so we can clean it up later
    observerRef.current = observer;
    observer.observe(targetSection);
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sectionId, shouldInvert, setInvertParticles]);
  
  return null;
};

export default SectionObserver;