import React from 'react';
import Image from 'next/image';
import { GitHubIcon, LinkedInIcon, EmailIcon, DiscordIcon } from '../icons/SocialIcons';

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="container-section py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4 inline-block text-xs tracking-wider border border-black/10 dark:border-white/10 px-3 py-1 rounded-full bg-black/[.02] dark:bg-white/[.02]">
              FRONT-END UTVECKLARE 
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
                Andreas Thornér
              </span>
            </h1>
            <p className="text-lg mb-8 max-w-lg opacity-80">
              Jag är en utvecklare med fokus på moderna webbteknologier och användarupplevelse. 
              Välkommen till min portfolio!
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projekt" className="btn-primary">
                Se mina projekt
              </a>
              <a href="#kontakt" className="btn-outline">
                Kontakta mig
              </a>
            </div>
            <div className="mt-12 flex gap-5">
              <a href="https://github.com/Th0rnr" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                <GitHubIcon className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/andreas-thorn%C3%A9r-51a7a1288/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                <LinkedInIcon className="w-6 h-6" />
              </a>
              <a href="mailto:Andreas.thorner@gmail.com" aria-label="Email" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                <EmailIcon className="w-6 h-6" />
              </a>
              <a href="https://discord.com/users/th0rner" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                <DiscordIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative h-72 md:h-80 w-72 md:w-80 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-full overflow-hidden">
              <Image 
                src="/images/Profile/profile.jpeg" 
                alt="Min profilbild" 
                fill 
                className="object-cover" 
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}