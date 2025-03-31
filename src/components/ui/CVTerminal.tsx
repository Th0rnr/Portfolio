"use client";

import React, { useState, useEffect, useRef } from 'react';

interface CVData {
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  experience: {
    title: string;
    company: string;
    period: string;
    description?: string;
  }[];
  skills: string[];
}

const cvData: CVData = {
  education: [
    {
      degree: "Front End Developer Utbildning",
      institution: "[Utbildningsinstitution]",
      year: "20XX - 20XX"
    },
    {
      degree: "Gymnasieutbildning",
      institution: "[Gymnasieskola], [Program]",
      year: "20XX - 20XX"
    }
  ],
  experience: [
    {
      title: "[Jobbposition]",
      company: "[Företag]",
      period: "Månad 20XX - Månad 20XX",
      description: "Arbetsbeskrivning och ansvar. Teknologier och verktyg som användes."
    },
    {
      title: "[Tidigare Jobbposition]",
      company: "[Tidigare Företag]",
      period: "Månad 20XX - Månad 20XX",
      description: "Beskrivning av arbetsuppgifter och relevanta erfarenheter."
    }
  ],
  skills: [
    "JavaScript/TypeScript",
    "React.js",
    "Next.js",
    "HTML5/CSS3",
    "Tailwind CSS",
    "Responsive Design",
    "Git/GitHub",
    "Node.js"
  ]
};

export default function CVTerminal() {
  const [command, setCommand] = useState<string>('');
  const [output, setOutput] = useState<React.ReactNode[]>([
    <div key="welcome" className="mb-2">
      <p className="text-yellow-400 dark:text-yellow-300">Välkommen till min interaktiva CV-terminal!</p>
      <p>Skriv <span className="text-white font-bold">run</span> och tryck på Enter för att visa mitt CV.</p>
      <p>Eller skriv <span className="text-white font-bold">help</span> för att se alla tillgängliga kommandon.</p>
    </div>
  ]);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!command.trim()) return;
    
    // Visa det inmatade kommandot
    setOutput(prev => [
      ...prev,
      <div key={`cmd-${Date.now()}`} className="text-blue-400 dark:text-blue-300">
        <span className="text-pink-500">➜</span> {command}
      </div>
    ]);
    
    // Inaktivera prompten under kommandokörningen
    setIsTyping(true);
    
    // Simulera en kort laddningstid
    setTimeout(() => {
      processCommand(command.toLowerCase().trim());
      setCommand('');
      setIsTyping(false);
      // Fokusera på inputfältet igen
      if (inputRef.current) inputRef.current.focus();
    }, 300);
  };
  
  const processCommand = (cmd: string) => {
    switch (cmd) {
      case 'run':
        runCV();
        break;
      case 'clear':
        resetTerminal();
        break;
      case 'help':
        showHelp();
        break;
      default:
        setOutput(prev => [
          ...prev,
          <div key={`error-${Date.now()}`} className="text-red-500 mt-1 mb-2">
            Kommando hittades inte: {cmd}
            <p>Skriv <span className="text-white font-semibold">help</span> för att se tillgängliga kommandon.</p>
          </div>
        ]);
    }
  };

  const runCV = () => {
    if (isRunning) return;
    
    // Simulera laddningstillstånd
    setIsRunning(true);
    
    // Simulera en kort laddningstid
    setTimeout(() => {
      displayFullCV();
      setIsRunning(false);
    }, 800);
  };
  
  const showHelp = () => {
    setOutput(prev => [
      ...prev,
      <div key={`help-${Date.now()}`} className="mt-2 mb-4">
        <p className="text-yellow-400 dark:text-yellow-300 font-bold mb-1">Tillgängliga kommandon:</p>
        <ul className="space-y-1 ml-2">
          <li><span className="text-white font-bold">run</span> - Kör CV-skriptet och visar mitt CV</li>
          <li><span className="text-white font-bold">clear</span> - Rensar terminalfönstret</li>
          <li><span className="text-white font-bold">help</span> - Visar denna hjälptext</li>
        </ul>
      </div>
    ]);
  };

  // Rensa terminalen och återställ till startläge
  const resetTerminal = () => {
    setOutput([
      <div key="welcome-again" className="mb-2">
        <p className="text-yellow-400 dark:text-yellow-300">Terminal rensad!</p>
        <p>Skriv <span className="text-white font-bold">run</span> och tryck på Enter för att visa mitt CV.</p>
        <p>Eller skriv <span className="text-white font-bold">help</span> för att se alla tillgängliga kommandon.</p>
      </div>
    ]);
    
    // Fokusera på input igen efter reset
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 0);
  };

  const displayFullCV = () => {
    setOutput(prev => [
      ...prev,
      <div key={`cv-${Date.now()}`} className="mt-2 mb-4">
        <div className="mb-4">
          <p className="text-yellow-400 dark:text-yellow-300 font-bold text-lg border-b border-yellow-400 dark:border-yellow-300 pb-1 mb-2">CURRICULUM VITAE</p>
          <p className="text-lg font-bold">Andreas Thornér</p>
          <p className="opacity-80">Front-End Utvecklare</p>
          <p className="text-xs mt-1">andreas.thorner@gmail.com</p>
        </div>
        
        {displayEducationContent()}
        {displayExperienceContent()}
        {displaySkillsContent()}
      </div>
    ]);
  };

  const displayEducationContent = () => {
    return (
      <div className="mb-3">
        <p className="text-yellow-400 dark:text-yellow-300 font-bold border-b border-yellow-400/50 dark:border-yellow-300/50 pb-1 mb-2">UTBILDNING</p>
        <div className="space-y-2 ml-2">
          {cvData.education.map((edu, index) => (
            <div key={index}>
              <p className="font-medium">{edu.degree}</p>
              <p className="text-sm opacity-80">{edu.institution}, {edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const displayExperienceContent = () => {
    return (
      <div className="mb-3">
        <p className="text-yellow-400 dark:text-yellow-300 font-bold border-b border-yellow-400/50 dark:border-yellow-300/50 pb-1 mb-2">ERFARENHET</p>
        <div className="space-y-3 ml-2">
          {cvData.experience.map((exp, index) => (
            <div key={index}>
              <p className="font-medium">{exp.title}</p>
              <p className="text-sm opacity-80">{exp.company}, {exp.period}</p>
              {exp.description && <p className="text-xs mt-1">{exp.description}</p>}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const displaySkillsContent = () => {
    return (
      <div>
        <p className="text-yellow-400 dark:text-yellow-300 font-bold border-b border-yellow-400/50 dark:border-yellow-300/50 pb-1 mb-2">FÄRDIGHETER</p>
        <div className="flex flex-wrap gap-2 ml-2">
          {cvData.skills.map((skill, index) => (
            <span 
              key={index} 
              className="bg-green-900/30 dark:bg-green-800/30 text-green-400 dark:text-green-300 px-2 py-1 rounded text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  };

  // Scrolla automatiskt ner när output uppdateras eller när vi kör något
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output, isRunning, isTyping]);
  
  // Fokusera på inputfältet när någon av state-variablerna ändras
  useEffect(() => {
    if (!isRunning && !isTyping && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isRunning, isTyping, output]);

  // Fokusera på input när komponenten laddas
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center mb-2 px-1 py-1 bg-gray-900 rounded-t-md">
        <div className="flex space-x-1.5 ml-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <p className="text-xs text-gray-400 mx-auto">andreas@portfolio ~ CV</p>
      </div>
      
      <div className="flex flex-col h-full">
        <div 
          ref={terminalRef}
          className="flex-grow overflow-auto p-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
          style={{ maxHeight: "350px", minHeight: "250px" }}
        >
          {output.map((item, index) => (
            <React.Fragment key={index}>{item}</React.Fragment>
          ))}
          
          {isRunning && (
            <div className="flex items-center mt-1">
              <span className="text-pink-500 mr-2">➜</span>
              <span className="inline-block w-2 h-4 bg-green-400 animate-pulse"></span>
            </div>
          )}
        </div>
        
        {/* Commando-raden alltid i botten med sticky */}
        <div className="border-t border-gray-700 p-2 sticky bottom-0">
          {!isRunning && (
            <form onSubmit={handleCommandSubmit} className="flex items-center">
              <span className="text-pink-500 mr-2">➜</span>
              <input
                ref={inputRef}
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                className="bg-transparent focus:outline-none flex-grow font-mono text-green-400"
                placeholder="Skriv ett kommando..."
                autoFocus
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}