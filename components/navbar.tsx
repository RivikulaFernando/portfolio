import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    // If on homepage, scroll to section
    if (router.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    } else {
      // If on another page, navigate to homepage then scroll
      router.push(`/#${sectionId}`).then(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar flex justify-between items-center w-full py-4 px-6">
      <div className="flex items-center">
        <Link href="/" className="navbar-brand">
          Rivikula
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => scrollToSection(e, link.id)}
            className="navbar-link"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile Navigation Button */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 md:hidden navbar py-3 z-50 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="navbar-link mx-4 py-2"
              onClick={(e) => {
                scrollToSection(e, link.id);
                setIsMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;