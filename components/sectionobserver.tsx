import React, { useEffect, useRef } from 'react';
import { useParticleContext } from './context';

interface SectionObserverProps {
  sectionId: string;
  shouldInvert: boolean;
}

const SectionObserver: React.FC<SectionObserverProps> = ({ sectionId, shouldInvert }) => {
  const { setInvertParticles } = useParticleContext();
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