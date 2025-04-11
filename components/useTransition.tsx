import { useState, useEffect } from 'react';

// Custom hook for smooth transitions
export function useSmoothTransition(value: boolean): boolean {
  const [transitioning, setTransitioning] = useState(value);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTransitioning(value);
    }, 50);
    
    return () => clearTimeout(timeout);
  }, [value]);
  
  return transitioning;
}