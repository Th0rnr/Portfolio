import React from 'react';

export default function AboutSection() {
  return (
    <section id="om-mig" className="py-24 bg-black/[.02] dark:bg-white/[.02]">
      <div className="container-section">
        <h2 className="section-title">Om mig</h2>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="space-y-6">
            <p>
              Jag är en passionerad webbutvecklare med erfarenhet av att bygga moderna, 
              responsiva och användarvänliga webbapplikationer. Mitt mål är att skapa 
              digitala upplevelser som är både funktionella och estetiskt tilltalande.
            </p>
            <p>
              Med en bakgrund inom det militära och ett öga för detaljer, 
              strävar jag efter att leverera högkvalitativa lösningar som möter både 
              användarnas behov och affärsmål.
            </p>
            <p>
              När jag inte kodar gillar jag att träna, vilket hjälper mig 
              att hålla kreativiteten flödande och ger mig nya perspektiv.
            </p>

            <div className="pt-6 flex flex-col gap-4 items-center">
              <a href="#kontakt" className="btn-primary">
                Låt oss arbeta tillsammans
              </a>
              <a 
                href="/cv.pdf" 
                download 
                className="flex items-center gap-2 px-4 py-2 rounded-md border border-black dark:border-white transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Ladda ner CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}