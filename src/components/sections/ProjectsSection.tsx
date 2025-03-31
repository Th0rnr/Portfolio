"use client";

import React from 'react';
import { GitHubIcon } from '../icons/SocialIcons';
import ProjectCard from '../ui/ProjectCard';
import Image from 'next/image';

export default function ProjectsSection() {
  // Oanvända gradients, behålls för framtida implementationer
  // const gradients = {
  //   blue: "from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800",
  //   purple: "from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800",
  //   green: "from-green-100 to-green-200 dark:from-green-900 dark:to-green-800",
  // };

  return (
    <section id="projekt" className="py-24 bg-black/[.02] dark:bg-white/[.02]">
      <div className="container-section">
        <h2 className="section-title">Mina projekt</h2>
        
        {/* Responsive projekt-grid med slide-in animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="transform transition-all duration-500 hover:scale-105 h-full">
            <ProjectCard 
              title="Tetris Clone"
              description="En modern implementation av det klassiska Tetris-spelet, byggd med Next.js, TypeScript, Tailwind CSS och Supabase för poängsystem och användarhantering."
              tags={["Next.js", "TypeScript", "Tailwind", "Supabase"]}
              demoLink={"https://tetris-clone.netlify.app/"}
              githubLink={"https://github.com/Th0rnr/Tetris-Clone"}
              imageElement={
                <div className="relative h-full w-full">
                  <Image 
                    src="/images/projects/Tetris.png" 
                    alt="Tetris Clone preview" 
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              }
            />
          </div>

          <div className="transform transition-all duration-500 hover:scale-105 h-full">
            <ProjectCard 
              title="TMDB Movie Explorer"
              description="En webbapplikation för att utforska och söka bland filmer och TV-serier, byggd med React, responsive design och The Movie Database API."
              tags={["React", "API Integration", "Responsive Design"]}
              demoLink={"https://tmdb-exclusive.netlify.app/"}
              githubLink={"https://github.com/Th0rnr/TMDB"}
              imageElement={
                <div className="relative h-full w-full">
                  <Image 
                    src="/images/projects/TMDB.png" 
                    alt="TMDB Movie Explorer preview" 
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              }
            />
          </div>

          <div className="transform transition-all duration-500 hover:scale-105 h-full">
            <ProjectCard 
              title="Forcepedia"
              description="En interaktiv Star Wars-encyklopedi som låter användare utforska karaktärer, farkoster och planeter från Star Wars-universumet, byggd med JavaScript och SWAPI."
              tags={["JavaScript", "SWAPI", "Responsive Design"]}
              demoLink={"https://forcepedia.netlify.app/"}
              githubLink={"https://github.com/Th0rnr/forcepedia"}
              imageElement={
                <div className="relative h-full w-full">
                  <Image 
                    src="/images/projects/forcepedia.png" 
                    alt="Forcepedia preview" 
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              }
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/Th0rnr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <GitHubIcon className="w-4 h-4" />
            Fler projekt på GitHub
          </a>
        </div>
      </div>
    </section>
  );
}