import { useState, useEffect } from 'react';

// Custom hook for smooth transitions
// If duration param is not used, either remove it or use ESLint disable
export function useSmoothTransition(value: boolean): boolean {
  const [transitioning, setTransitioning] = useState(value);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTransitioning(value);
    }, 50); // Fixed delay of 50ms instead of using a customizable duration
    
    return () => clearTimeout(timeout);
  }, [value]);
  
  return transitioning;
}