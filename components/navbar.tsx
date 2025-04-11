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
    <nav className="flex justify-between items-center w-full">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold">
          Rivikula
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => scrollToSection(e, link.id)}
            className="hover:text-blue-400 transition-colors cursor-pointer"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Rest of your navbar component... */}
    </nav>
  );
};

export default Navbar;