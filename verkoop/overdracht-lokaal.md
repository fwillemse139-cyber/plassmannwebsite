# Overdracht: klantacquisitie verder op je eigen computer

## Stap 1: werk binnenhalen
De cloud-sessie kon niet naar GitHub pushen. Al het werk zit in `klantacquisitie.patch`.

```bash
git clone https://github.com/fwillemse139-cyber/plassmannwebsite.git
cd plassmannwebsite
git checkout claude/klantacquisitie-website-verkoop-fq7nj8
git am /pad/naar/klantacquisitie.patch
git push -u origin claude/klantacquisitie-website-verkoop-fq7nj8
```

## Stap 2: Claude Code lokaal starten
Open de map `plassmannwebsite` in de Claude Desktop-app, of typ `claude` in een terminal in die map.
Zet daarna dezelfde connectors aan in claude.ai (Notion, Composio met Vercel, Firecrawl).

## Stap 3: de werkwijze (plak dit als eerste bericht)
> We werken aan klantacquisitie voor Suerte Marketing. Lees `verkoop/README.md`, `verkoop/templates/mail-demo.md` en `verkoop/overdracht-lokaal.md`. Notion-database: Suerte → Website Klantacquisitie → Pipeline. Daarna: volgende klant.

## Vaste regels
- Regio Den Haag, Delft, Rijswijk, Westland en omgeving. Bouw, renovatie, dak en aanverwant.
- Alleen bedrijven met een echt zwakke site. Elk verbeterpunt in de mail eerst zelf controleren.
- Geen emoji's, ook niet in Notion. Iconen als SVG.
- Geen verzonnen reviews: lege plekken voor reviews.
- Nooit oude klanten of referenties noemen.
- Onderwerp: "[Bedrijfsnaam], ik heb uw website alvast vernieuwd".
- Intro: "Mijn naam is Floris Willemse, van Suerte Marketing. Ik maak websites voor ondernemers en bedrijven, met als doel dat ze online net zo sterk overkomen als in hun vak."
- Slot: "Het is volledig vrijblijvend en het voorbeeld kost niets." … "Ik bel u vrijdag even…" … handtekening met +31 6 24 57 55 30 … "Geen interesse? Laat het gerust weten!"

## Demo bouwen en publiceren
- Sjabloon: kopieer de meest recente demo in `demos/` (bijvoorbeeld `demos/maurice-bosman/index.html`) en pas kleuren, teksten en foto's aan.
- Altijd `<meta name="robots" content="noindex, nofollow">` en de gele balk "Voorbeeld van een nieuwe website".
- Foto's van de klant inbouwen als data-URI (veel sites blokkeren hotlinken).
- Publiceren via Vercel: lokaal kan dat met `npx vercel --prod` in een map met alleen `index.html` (projectnaam `<bedrijf>-demo`), of via Composio zoals in de cloud.
- Na publiceren een screenshot bekijken voordat de mail eruit gaat.

## Stand van zaken (14-10-2026)
Gemaild, bellen vrijdag 16-10 tussen 16:00 en 17:30: S-Bouw, Bouwservice Eves, Arie, FLM Klusbedrijf, Daktechniek Zoetermeer, Proto Tegelzetbedrijf, Van der Meijde, Allroundbouw, Van Drunen, JR Timmerfabriek (voor 16:30!), Khenech, Klusbedrijf Pijnacker, Maurice Bosman.
Reserve: Glashandel Berserik, Den Haag (glas-in-lood atelier; op hun site staat een placehold.it-afbeelding bij een review).
