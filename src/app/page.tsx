"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';

// Dynamiskt importera Intro-komponenten för att undvika hydration-fel
const Intro = dynamic(() => import('../components/overlay/Intro'), { ssr: false });

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Förhindra scroll när introduktionen visas
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showIntro]);

  const handleIntroComplete = () => {
    setShowIntro(false);
    // Liten fördröjning innan innehållet visas, för animationens skull
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <>
      {showIntro && <Intro onComplete={handleIntroComplete} />}
      
      <div className={`min-h-screen transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
