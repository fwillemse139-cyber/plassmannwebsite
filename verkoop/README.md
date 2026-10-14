# Klantacquisitie – websites verkopen

Intern werkdocument. Deze map wordt **niet** gepubliceerd (zie `/.vercelignore`), zodat prijzen en prospects niet op de Plassmann-site terechtkomen.

## Het proces in 6 stappen

| # | Stap | Wie | Tijd per prospect | Output |
|---|------|-----|-------------------|--------|
| 1 | **Zoeken & scoren**: lokale vakbedrijven met een zwakke website | Claude | ± 5 min | Regel in `pipeline.csv` met score + callhoek |
| 2 | **Demo maken**: alleen een homepage in hun huisstijl, met hun eigen diensten en foto's | Claude + jij | 30–45 min | Live demo-link (Vercel) |
| 3 | **Mail sturen** met de demo-link | jij | 5 min | `templates/mail-demo.md` |
| 4 | **Bellen** 1–2 werkdagen na de mail | jij | 10 min | `templates/belscript.md` |
| 5 | **Close**: akkoord + aanbetaling van 50% | jij | – | `aanbod-en-prijzen.md` |
| 6 | **Opleveren** binnen 5 werkdagen | Claude + jij | 1–2 dagen | `oplevering-checklist.md` |

**Kernidee:** de klant ziet zijn eigen nieuwe website al vóórdat hij iets betaalt. Dan hoeft hij het zich niet meer voor te stellen. Het is al zichtbaar.

## De rekensom: haal je 1 klant per dag met 3–4 prospects?

Eerlijk antwoord: **waarschijnlijk niet**. Met 3–4 prospects per dag moet je 25–33% sluiten. Bij koude acquisitie, ook met een persoonlijke demo, is het realistischer om uit te gaan van:

| Funnelstap | Conversie (schatting) | Bij 4/dag | Bij 12/dag |
|---|---|---|---|
| Demo + mail verstuurd | – | 4 | 12 |
| Telefonisch bereikt | ± 50% | 2 | 6 |
| Echt gesprek / interesse | ± 40% | 0,8 | 2,4 |
| Deal + aanbetaling | ± 35% | **0,3** | **0,8–1** |

Begin met 4 per dag. Houd 2 weken bij hoe elke stap converteert (kolom `status` in de pipeline) en reken daarna je eigen getallen uit. De zwakste stap verbeter je eerst.

**Het knelpunt is de demotijd, niet het bellen.** Wil je 10+ per dag halen, maak de demo dan zo klein mogelijk:

- Alleen de homepage (hero, diensten, 3 projectfoto's, reviews, een duidelijke offerteknop).
- Gebruik hun eigen logo, kleuren, teksten en foto's van hun huidige site of Google-profiel.
- Begin elke keer vanaf hetzelfde basistemplate en vervang alleen de inhoud.
- Prioriteit A (score 8–10) krijgt een demo. Bij score 5–7 is een korte mail met 3 verbeterpunten (een "mini-audit") vaak genoeg.

## Dagritme

| Moment | Taak |
|---|---|
| Ochtend | Claude zoekt 5–10 nieuwe prospects → toevoegen aan `pipeline.csv` |
| Ochtend | Demo's maken voor de 3–4 hoogst scorende |
| Rond 12:00 | Mails versturen (vakmensen lezen hun mail vaak in de lunchpauze of 's avonds) |
| 16:00–17:30 | Bellen met de mails van **gisteren en eergisteren** (vakmensen zijn dan van de bouw af) |
| Einde dag | Pipeline bijwerken: status, volgende actie, datum |

## Statussen in `pipeline.csv`

`Nieuw` → `Demo klaar` → `Gemaild` → `Gebeld – geen gehoor` (max. 3 pogingen) → `Gesprek` → `Offerte` → `Aanbetaald` → `Opgeleverd` / `Afgewezen`

Regel: elke prospect heeft altijd een `volgende_actie` + `datum_volgende_actie`. Zonder volgende actie raakt een prospect kwijt.

## Waar staat wat

- `pipeline.csv`: alle prospects. De eerste 12 komen uit de Notion-pagina *Website Klanten* (Delft, september 2026).
- `templates/mail-demo.md`: mail met de demo-link, plus een opvolgmail.
- `templates/belscript.md`: belscript met antwoorden op bezwaren.
- `aanbod-en-prijzen.md`: pakketten, aanbetaling, voorwaarden.
- `oplevering-checklist.md`: van aanbetaling tot live.

## Belangrijk

- Demo's van prospects **niet** in deze repo zetten. Gebruik een aparte repo, bijvoorbeeld `website-demos`, met één map per bedrijf. Dan staat de Plassmann-site los van de rest.
- Zet op elke demo `<meta name="robots" content="noindex">`, zodat Google de demo niet vindt en verwart met hun echte site.
- Gebruik hun foto's en teksten alleen voor de demo. Na de koop vraag je om origineel materiaal.
- AVG: zakelijk mailen naar een algemeen bedrijfsadres (info@) is gebruikelijk. Bied altijd een afmeldmogelijkheid ("laat het weten, dan hoor je niets meer van ons").
