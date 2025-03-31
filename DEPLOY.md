# Deployment Guide för Netlify

Följ dessa steg för att deploya din Next.js portfolio på Netlify:

## 1. Förbereda ditt repo

Säkerställ att du har följande filer i din repository:
- `netlify.toml` (för byggkonfiguration)
- `public/_redirects` (för korrekt routing)
- Uppdaterad `.gitignore`

Dessa filer är redan tillagda i ditt projekt.

## 2. Skapa ett Netlify-konto

1. Gå till [Netlify](https://www.netlify.com/) och skapa ett konto om du inte redan har ett.
2. Logga in på ditt konto.

## 3. Koppla ditt GitHub-repository

1. Klicka på "New site from Git" på din Netlify dashboard.
2. Välj GitHub som källkodshanteringssystem.
3. Auktorisera Netlify att få tillgång till dina GitHub-repositories.
4. Välj ditt portfolio-repository.

## 4. Konfigurera build-inställningar

Dessa inställningar bör redan vara konfigurerade i din `netlify.toml`-fil, men dubbelkolla att de stämmer på Netlify:

- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Node.js version:** 20.11 (eller den version du använder)

## 5. Deploya

1. Klicka på "Deploy site" för att starta din första deployment.
2. Netlify kommer att bygga och deploya din sida.

## 6. Anpassa domännamn

Efter att din sida har deployats:

1. Gå till "Domain settings" i din sajts dashboard.
2. Du kan välja att använda den genererade Netlify-subdomänen eller lägga till en egen domän.

## 7. Efter deployment

Om du behöver uppdatera din sajt:

1. Gör ändringar i din kod lokalt.
2. Commita och pusha dina ändringar till GitHub.
3. Netlify kommer automatiskt att bygga och deploya din uppdaterade sajt.

## Felsökning

Om du har problem med din deployment:

1. Kolla build-loggarna på Netlify för felmeddelanden.
2. Säkerställ att din app fungerar lokalt genom att köra `npm run build` och sedan `npm start`.
3. Kolla att alla environment-variabler som din app behöver är konfigurerade i Netlify.

## Kontakt

Om du har ytterligare frågor, kontakta mig via:
- Discord: th0rner
- Email: Andreas.thorner@gmail.com