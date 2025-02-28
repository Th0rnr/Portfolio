import React from 'react';
import { GitHubIcon, LinkedInIcon, EmailIcon } from '../icons/SocialIcons';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-black/[.05] dark:border-white/[.05] bg-black/[.02] dark:bg-white/[.02]">
      <div className="container-section">
        {/* Grid-layout som nyttjar hela bredden med exakt lika breda kolumner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Kolumn 1: Logo och copyright */}
          <div className="text-center md:text-left md:px-4 py-4">
            <div className="text-xl font-semibold tracking-tight mb-4">
              <span className="text-foreground">PORTFOLIO</span>
            </div>
            
            <p className="text-sm text-black/60 dark:text-white/60">
              © {new Date().getFullYear()} Andreas Thornér.<br />
              Alla rättigheter förbehållna.
            </p>
          </div>
          
          {/* Kolumn 2: Kontaktinformation och adress - Centrerad */}
          <div className="text-center md:flex flex-col items-center md:px-4 py-4 md:border-x border-black/[.05] dark:border-white/[.05]">
            <h3 className="text-lg font-medium mb-3">Kontaktuppgifter</h3>
            <address className="not-italic text-sm text-black/60 dark:text-white/60 space-y-1">
              <p>Andreas Thornér</p>
              <p>Mastgränd 7A</p>
              <p>211 77 Malmö</p>
              <p>Sverige</p>
              <p className="mt-2">
                <a href="mailto:Andreas.thorner@gmail.com" className="hover:text-black dark:hover:text-white transition-colors">
                  Andreas.thorner@gmail.com
                </a>
              </p>
            </address>
          </div>
          
          {/* Kolumn 3: Sociala ikoner - Centrerad */}
          <div className="text-center md:flex flex-col items-center md:px-4 py-4">
            <h3 className="text-lg font-medium mb-5">Följ mig</h3>
            <div className="flex flex-col gap-5 items-center">
              <a href="https://github.com/Th0rnr" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors flex items-center gap-3">
                <GitHubIcon className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/andreas-thorn%C3%A9r-51a7a1288/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors flex items-center gap-3">
                <LinkedInIcon className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a href="mailto:Andreas.thorner@gmail.com" aria-label="Email" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors flex items-center gap-3">
                <EmailIcon className="w-5 h-5" />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}