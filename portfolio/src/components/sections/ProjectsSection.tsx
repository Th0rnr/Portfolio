"use client";

import React from 'react';
import { GitHubIcon } from '../icons/SocialIcons';
import ProjectCard from '../ui/ProjectCard';

export default function ProjectsSection() {
  // Gradient bakgrunder för olika projekt
  const gradients = {
    blue: "from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800",
    purple: "from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800",
    green: "from-green-100 to-green-200 dark:from-green-900 dark:to-green-800",
  };

  return (
    <section id="projekt" className="py-24 bg-black/[.02] dark:bg-white/[.02]">
      <div className="container-section">
        <h2 className="section-title">Mina projekt</h2>
        
        {/* Responsive projekt-grid med slide-in animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="transform transition-all duration-500 hover:scale-105">
            <ProjectCard 
              title="Projekt 1"
              description="En modern webbapplikation som låter användare hantera och organisera sina uppgifter. Byggd med React och Node.js."
              tags={["React", "Node.js", "MongoDB"]}
              imageElement={
                <div className={`bg-gradient-to-r ${gradients.blue} h-full w-full`} />
              }
            />
          </div>

          <div className="transform transition-all duration-500 hover:scale-105">
            <ProjectCard 
              title="Projekt 2"
              description="En e-handelsplattform som hjälper användare att hitta och köpa produkter. Utvecklad med Next.js och Tailwind CSS."
              tags={["Next.js", "Tailwind CSS", "REST API"]}
              imageElement={
                <div className={`bg-gradient-to-r ${gradients.purple} h-full w-full`} />
              }
            />
          </div>

          <div className="transform transition-all duration-500 hover:scale-105">
            <ProjectCard 
              title="Projekt 3"
              description="En analytics-dashboard som visualiserar data för företagsbeslut. Byggd med modern webbteknologi för optimal prestanda."
              tags={["TypeScript", "GraphQL", "Prisma"]}
              imageElement={
                <div className={`bg-gradient-to-r ${gradients.green} h-full w-full`} />
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