import React from 'react';

interface ScrollToSectionProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
}

const ScrollToSection: React.FC<ScrollToSectionProps> = ({ 
  targetId, 
  children,
  className = 'cursor-pointer'
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

export default ScrollToSection;