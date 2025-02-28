import React, { Suspense } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageElement: React.ReactNode;
}

export default function ProjectCard({ 
  title, 
  description, 
  tags, 
  imageElement 
}: ProjectCardProps) {
  return (
    <div className="bg-white/50 dark:bg-black/50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="h-48 w-full relative">
        <Suspense fallback={<div className="h-full w-full bg-gray-200 dark:bg-gray-800 animate-pulse"></div>}>
          {imageElement}
        </Suspense>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-black/70 dark:text-white/70 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, index) => (
            <span key={index} className="inline-block text-xs px-2 py-1 rounded-full bg-black/[.05] dark:bg-white/[.05]">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a href="#" className="text-sm font-medium hover:underline">Demo</a>
          <span className="text-black/20 dark:text-white/20">•</span>
          <a href="https://github.com/Th0rnr" className="text-sm font-medium hover:underline">GitHub</a>
        </div>
      </div>
    </div>
  );
}