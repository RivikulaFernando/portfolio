import React from 'react';

const ScrollIndicator: React.FC = () => {
  const scrollToNextSection = () => {
    // Get the viewport height
    const viewportHeight = window.innerHeight;
    
    // Scroll down one viewport height
    window.scrollBy({
      top: viewportHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-20"
      onClick={scrollToNextSection}
    >
      <div className="flex flex-col items-center">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default ScrollIndicator;