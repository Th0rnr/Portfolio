"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';

interface IntroProps {
  onComplete: () => void;
}

// När du använder Math.random() eller liknande icke-deterministiska operationer i renderingen
// kommer React att få problem med hydration (server vs client rendering)
// För att undvika detta, använder vi deterministiska värden baserade på index

// En enskild roterande bokstav
const RotatingLetter = ({ 
  targetLetter, 
  onComplete,
  index
}: { 
  targetLetter: string;
  onComplete: () => void;
  index: number;
}) => {
  const [currentLetter, setCurrentLetter] = useState("A");
  const [isComplete, setIsComplete] = useState(false);
  const [offset, setOffset] = useState(0);
  const iterations = useRef(0);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  // Endast körs på klientsidan efter första renderingen
  useEffect(() => {
    // Sätt ett fast offset baserat på index för att undvika hydration-fel
    setOffset((index + 1) * 0.8);
    
    if (isComplete) return;
    
    const interval = setInterval(() => {
      iterations.current += 1;
      
      // Snabbare rotation i början, långsammare mot slutet
      // Använd index för att göra probabiliteten mer deterministisk
      if (iterations.current > 5 && (iterations.current > 12 || (iterations.current > 8 && index % 3 === 0))) {
        setCurrentLetter(targetLetter);
        setIsComplete(true);
        clearInterval(interval);
        onComplete();
        return;
      }
      
      // Välj en mer deterministisk bokstav baserad på iteration och index
      const pseudoRandomIndex = (iterations.current * 7 + index * 13) % letters.length;
      setCurrentLetter(letters[pseudoRandomIndex]);
    }, 70 + index * 5); // Lite olika timing för varje bokstav
    
    return () => clearInterval(interval);
  }, [targetLetter, onComplete, isComplete, index]);
  
  // Använd inte Math.random() i renderingen, använd det förädrande offset-värdet
  return (
    <span 
      className={`inline-block transition-all ${isComplete ? 'text-white' : 'text-blue-400'}`}
      style={{
        transform: isComplete ? 'translateY(0)' : `translateY(${offset * 3}px)`,
        opacity: isComplete ? 1 : 0.7
      }}
    >
      {currentLetter}
    </span>
  );
};

export default function Intro({ onComplete }: IntroProps) {
  const [allLettersComplete, setAllLettersComplete] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  
  const fullText = "PORTFOLIO";
  const completedLetters = useRef(0);
  
  // Räknar färdiga bokstäver
  const handleLetterComplete = useCallback(() => {
    completedLetters.current += 1;
    if (completedLetters.current >= fullText.length) {
      setAllLettersComplete(true);
      setTimeout(() => {
        setShowPrompt(true);
      }, 500);
    }
  }, [fullText.length]);
  
  // Hantera tangenttryckningar
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter' && showPrompt) {
      setIsFadingOut(true);
      setTimeout(() => {
        onComplete();
      }, 1200);
    }
  }, [showPrompt, onComplete]);

  // Hantera klick
  const handleClick = useCallback(() => {
    if (showPrompt) {
      setIsFadingOut(true);
      setTimeout(() => {
        onComplete();
      }, 1200);
    }
  }, [showPrompt, onComplete]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div 
      className={`fixed inset-0 bg-[#050505] flex flex-col items-center justify-center z-50 transition-all duration-1000 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
      onClick={handleClick}
    >
      <div className="relative">
        {/* Glowing effect behind text */}
        <div className="absolute inset-0 blur-3xl bg-blue-500/20 rounded-full" 
             style={{ transform: 'scale(0.8) translateY(-5px)' }}></div>
             
        {/* Main title */}
        <h1 className="relative text-5xl md:text-8xl font-bold tracking-wider mb-12 px-6 py-3">
          {fullText.split('').map((letter, index) => (
            <RotatingLetter 
              key={index}
              index={index} 
              targetLetter={letter} 
              onComplete={handleLetterComplete}
            />
          ))}
        </h1>
      </div>
      
      {/* Prompt */}
      {showPrompt && (
        <div className="mt-12 text-center transform transition-all duration-500 opacity-100 translate-y-0">
          <p className="text-white/80 text-xl">
            Tryck <span className="px-3 py-1 mx-1 bg-white/10 rounded-md font-mono">ENTER</span> för att fortsätta
          </p>
        </div>
      )}
      
      {/* Designer line at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
    </div>
  );
}