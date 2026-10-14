# Oplevering: van aanbetaling tot live

Doel: **zo snel mogelijk live**, want een snelle oplevering is je beste referentie.

## Dag 0: aanbetaling binnen
- [ ] Aanbetaling ontvangen en gecontroleerd
- [ ] Pipeline-status → `Aanbetaald`
- [ ] Bevestigingsmail met de lijst van wat je nodig hebt:
  - logo (liefst SVG/PNG)
  - 10–20 projectfoto's (voor/na is ideaal)
  - diensten + werkgebied
  - 3–5 reviews, of toestemming om Google-reviews te gebruiken
  - KvK, adres, telefoon, mail, openingstijden
  - domeinnaam + inlog van de huidige hosting/registrar (of: wie beheert dit?)

## Dag 1–3: bouwen
- [ ] Demo omzetten naar de volledige site (de demo is de basis, niet opnieuw beginnen)
- [ ] Echte foto's comprimeren (< 300 KB per foto)
- [ ] Teksten: per dienst één duidelijke pagina of sectie
- [ ] Offerteformulier werkt en komt aan in de mailbox van de klant
- [ ] Bel-/WhatsApp-knop op mobiel
- [ ] SEO basis: `<title>`, meta description, H1 met dienst + plaats, alt-teksten
- [ ] Juridisch: privacyverklaring, cookiemelding (alleen nodig als je tracking/analytics gebruikt)
- [ ] `noindex` van de demo **verwijderen**

## Dag 3–4: review met de klant
- [ ] Preview-link sturen (Vercel)
- [ ] Correctieronde 1 verwerken
- [ ] Correctieronde 2 verwerken
- [ ] Factuur restbedrag (50%) versturen

## Dag 5: live
- [ ] Restbetaling ontvangen
- [ ] Domein koppelen (DNS naar Vercel), HTTPS actief
- [ ] Testen op mobiel + desktop, alle links, formulier
- [ ] Google Search Console + sitemap aanmelden
- [ ] Google Bedrijfsprofiel: websitelink bijwerken
- [ ] Pipeline-status → `Opgeleverd`

## Na oplevering (vergeet dit niet)
- [ ] **Review vragen** (Google) en toestemming om de site als referentie te gebruiken
- [ ] Onderhoudsabonnement aanbieden
- [ ] **Referral vragen:** "Kent u nog een collega-vakman die dit ook kan gebruiken?"
- [ ] Toevoegen aan je eigen portfolio (niet noemen in acquisitiemails)

## Lanceer-checklist (20 punten)

Huisstijlregel voor alles wat we maken: **geen emoji's**, zakelijk en professioneel. Iconen alleen als nette SVG.

### Al in elke demo
- [ ] Duidelijke call-to-action (bel- en aanvraagknop, vaste belbalk op mobiel)
- [ ] Mobiele versie getest
- [ ] Meta title en meta description
- [ ] Social-share-tags (og:title, og:description, og:image)
- [ ] Favicon
- [ ] Alt-teksten bij foto's
- [ ] `noindex`, want de demo mag niet in Google komen

### Bij de echte oplevering
- [ ] **Privacyverklaring:** verplicht (AVG) zodra het formulier persoonsgegevens verzamelt
- [ ] **Cookiemelding:** alleen nodig bij tracking- of marketingcookies. Gebruik cookieloze analytics (bijv. Vercel Analytics of Plausible), dan is een banner niet nodig
- [ ] **Algemene voorwaarden:** alleen als de klant ze heeft. Link ernaar, schrijf ze niet zelf
- [ ] **FAQ:** 5–8 echte vragen van hun klanten (kosten, doorlooptijd, vergunning, garantie)
- [ ] `noindex` **verwijderen**
- [ ] `robots.txt` en `sitemap.xml`
- [ ] Canonical URL per pagina
- [ ] Eigen 404-pagina met een link naar home en het telefoonnummer
- [ ] Analytics (cookieloos)
- [ ] Formulier testen: komt de aanvraag aan in de mailbox van de klant?
- [ ] Alle links testen (tel:, mailto:, menu, knoppen)
- [ ] Toegankelijkheid: contrast, toetsenbordnavigatie, labels bij formuliervelden
- [ ] Snelheid: foto's comprimeren (WebP, < 300 KB), lazy loading, testen met PageSpeed Insights (doel: 90+ op mobiel)
