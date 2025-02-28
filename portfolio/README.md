# Portfolio Webbsida

En modern portfolio-webbsida byggd med Next.js och Tailwind CSS.

## Funktioner

- Responsiv design för alla skärmstorlekar
- Mörkt och ljust tema
- Sektioner för:
  - Om mig
  - Kompetenser
  - Projekt
  - Kontakt
- Kontaktformulär (kräver konfiguration för att skicka mail)
- Modern, minimalistisk design
- Väl strukturerad kodorganisation

## Teknologier

- Next.js 15
- React 19
- Tailwind CSS
- TypeScript
- EmailJS (för kontaktformulär)

## Installation

1. Klona repot
2. Installera beroenden:
   ```bash
   npm install
   ```
3. Starta utvecklingsservern:
   ```bash
   npm run dev
   ```

## Struktur

Projektet är organiserat enligt följande struktur:

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── forms/
│   │   └── ContactForm.tsx
│   ├── icons/
│   │   └── SocialIcons.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── sections/
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── SkillsSection.tsx
│   └── ui/
│       ├── ProjectCard.tsx
│       └── SkillCard.tsx
```

## Konfigurering av kontaktformulär

För att aktivera kontaktformuläret behöver du:

1. Skapa ett konto på [EmailJS](https://www.emailjs.com/)
2. Skapa en Email Service och en Email Template
3. Uppdatera följande konstanter i `src/components/forms/ContactForm.tsx`:
   ```typescript
   const SERVICE_ID = 'YOUR_SERVICE_ID'; // Din EmailJS service ID
   const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Din EmailJS template ID
   const USER_ID = 'YOUR_USER_ID'; // Din EmailJS user ID
   ```

## Anpassning

- Uppdatera innehållet i respektive sektionskomponent för att personligt anpassa din portfolio
- Lägg till dina egna projekt i `ProjectsSection.tsx`
- Lägg till dina kompetenser i `SkillsSection.tsx`
- Uppdatera din kontaktinformation i `ContactSection.tsx`

## Licens

MIT