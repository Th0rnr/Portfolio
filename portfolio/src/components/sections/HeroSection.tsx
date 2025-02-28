import React from 'react';
import Image from 'next/image';
import { GitHubIcon, LinkedInIcon, EmailIcon } from '../icons/SocialIcons';

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
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative h-72 md:h-80 w-72 md:w-80 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-full overflow-hidden">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 flex justify-center items-center text-gray-400 dark:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-24 h-24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              {/* You can uncomment and use this when you have a profile image */}
              {/* <Image src="/profile.jpg" alt="Min profilbild" fill className="object-cover" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}