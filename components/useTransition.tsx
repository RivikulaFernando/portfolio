import { useState, useEffect } from 'react';

// Custom hook for smooth transitions
export function useSmoothTransition(value: boolean, duration = 1000): boolean {
  const [transitioning, setTransitioning] = useState(value);
  
  useEffect(() => {
    // Start transition
    const timeout = setTimeout(() => {
      setTransitioning(value);
    }, 50); // Small delay to ensure CSS transitions have time to apply
    
    return () => clearTimeout(timeout);
  }, [value]);
  
  return transitioning;
}