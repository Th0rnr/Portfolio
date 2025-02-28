"use client";

import React from 'react';

import { GitHubIcon, LinkedInIcon, EmailIcon } from '../icons/SocialIcons';
import ContactForm from '../forms/ContactForm';

export default function ContactSection() {
  return (
    <section id="kontakt" className="py-24">
      <div className="container-section">
        <h2 className="section-title">Kontakta mig</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="mb-8 text-lg">
              Är du intresserad av att samarbeta eller har du några frågor? 
              Tveka inte att kontakta mig! Jag svarar vanligtvis inom 24 timmar.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-black/70 dark:text-white/70">
                  <EmailIcon />
                </div>
                <div>
                  <h3 className="font-medium">E-post</h3>
                  <a href="mailto:Andreas.thorner@gmail.com" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                    Andreas.thorner@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 text-black/70 dark:text-white/70">
                  <LinkedInIcon />
                </div>
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/andreas-thorn%C3%A9r-51a7a1288/" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                    linkedin.com/in/andreas-thornér
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 text-black/70 dark:text-white/70">
                  <GitHubIcon />
                </div>
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <a href="https://github.com/Th0rnr" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                    github.com/Th0rnr
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
}