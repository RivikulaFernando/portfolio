import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';

interface ParticleContextType {
  invertParticles: boolean;
  setInvertParticles: (invert: boolean) => void;
  isTransitioning: boolean;
}

const ParticleContext = createContext<ParticleContextType>({
  invertParticles: false,
  setInvertParticles: () => {},
  isTransitioning: false,
});

export const ParticleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [invertParticlesState, setInvertParticlesState] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Make sure this function body is completed (it had {...} in your code)
  const setInvertParticles = useCallback((invert: boolean) => {
    setIsTransitioning(true);
    setInvertParticlesState(invert);
    
    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1100); // Slightly longer than transition duration
  }, []);

  return (
    <ParticleContext.Provider value={{ 
      invertParticles: invertParticlesState, 
      setInvertParticles, 
      isTransitioning 
    }}>
      {children}
    </ParticleContext.Provider>
  );
};

export const useParticleContext = () => useContext(ParticleContext);