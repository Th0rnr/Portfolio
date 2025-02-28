"use client";

import React, { useState } from 'react';
import { MenuIcon } from '../icons/SocialIcons';
import ThemeToggle from '../ThemeToggle';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-black/[.05] dark:border-white/[.05]">
      <nav className="container-section flex justify-between items-center py-4">
        <div className="text-xl font-semibold tracking-tight">
          <span className="text-foreground">PORTFOLIO</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#om-mig" className="hover:text-black/70 dark:hover:text-white/70 transition-colors">Om mig</a>
          <a href="#projekt" className="hover:text-black/70 dark:hover:text-white/70 transition-colors">Projekt</a>
          <a href="#kompetenser" className="hover:text-black/70 dark:hover:text-white/70 transition-colors">Kompetenser</a>
          <a href="#kontakt" className="hover:text-black/70 dark:hover:text-white/70 transition-colors">Kontakt</a>
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          {/* Mobile menu button */}
          <button 
            className="p-2" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background dark:bg-black border-t border-black/10 dark:border-white/10 py-4 shadow-lg">
          <div className="container-section flex flex-col space-y-4">
            <a 
              href="#om-mig" 
              className="py-2 px-4 hover:bg-black/5 dark:hover:bg-white/5 rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Om mig
            </a>
            <a 
              href="#projekt" 
              className="py-2 px-4 hover:bg-black/5 dark:hover:bg-white/5 rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projekt
            </a>
            <a 
              href="#kompetenser" 
              className="py-2 px-4 hover:bg-black/5 dark:hover:bg-white/5 rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kompetenser
            </a>
            <a 
              href="#kontakt" 
              className="py-2 px-4 hover:bg-black/5 dark:hover:bg-white/5 rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </a>
          </div>
        </div>
      )}
    </header>
  );
}