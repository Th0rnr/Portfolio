import React from 'react';

export default function AboutSection() {
  return (
    <section id="om-mig" className="py-24 bg-black/[.02] dark:bg-white/[.02]">
      <div className="container-section">
        <h2 className="section-title">Om mig</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p>
              Jag är en passionerad webbutvecklare med erfarenhet av att bygga moderna, 
              responsiva och användarvänliga webbapplikationer. Mitt mål är att skapa 
              digitala upplevelser som är både funktionella och estetiskt tilltalande.
            </p>
            <p>
              Med en bakgrund inom [din bakgrund] och ett öga för detaljer, 
              strävar jag efter att leverera högkvalitativa lösningar som möter både 
              användarnas behov och affärsmål.
            </p>
            <p>
              När jag inte kodar gillar jag att [dina intressen], vilket hjälper mig 
              att hålla kreativiteten flödande och ger mig nya perspektiv.
            </p>

            <div className="pt-4">
              <a href="#kontakt" className="btn-primary">
                Låt oss arbeta tillsammans
              </a>
            </div>
          </div>
          <div className="space-y-4 bg-white/50 dark:bg-black/50 p-6 rounded-lg shadow-sm">
            <div>
              <h3 className="text-lg font-semibold mb-3">Utbildning</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Examen i [ämne]</p>
                  <p className="text-sm opacity-70">[Universitet/Skola], [årtal]</p>
                </div>
                <div>
                  <p className="font-medium">[Annan utbildning eller kurs]</p>
                  <p className="text-sm opacity-70">[Institution], [årtal]</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-3">Erfarenhet</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">[Jobbtitel]</p>
                  <p className="text-sm opacity-70">[Företag], [period]</p>
                </div>
                <div>
                  <p className="font-medium">[Tidigare jobbtitel]</p>
                  <p className="text-sm opacity-70">[Företag], [period]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}