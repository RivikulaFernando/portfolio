import React, { ReactNode, useEffect } from 'react';
import Navbar from './navbar';
import ParticlesBackground from './particles';
import SectionObserver from './sectionobserver'; // Check this import too


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Enable smooth scrolling
  useEffect(() => {
    // Apply smooth scrolling to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      // Clean up when component unmounts
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden overflow-y-auto">
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Section observers */}
      <SectionObserver sectionId="skills" shouldInvert={true} />
      
      {/* Content */}
      <header className="bg-gray-800 text-white p-4 relative z-10 sticky top-0">
        <Navbar />
      </header>

      <main className="flex-grow p-8">{children}</main>
      
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2025 My Portfolio
      </footer>
    </div>
  );
};

export default Layout;