# Kinezis.com (kinezis.com)

Repo je samostalan. Deploy ide na GitHub Pages iz grane `main`, CNAME je `kinezis.com`.

## Brand kartica

| | |
|---|---|
| Domena | `kinezis.com` |
| Brend | Kinezis.com |
| Uloga u mreži | Klinički kut: protokoli, stupnjevi fleksije, suradnja s fizioterapeutom. |
| Cijena | od 10 EUR/dan |
| Telefon | NEMA |
| Mail | info@kinezis.com |
| Stranica | 13 |
| Gradskih stranica | 10 |

**Stanje na 15.08.2026:** Nema klikabilan telefon. Najmanji repo u mreži, 13 stranica na 10 gradova znači vrlo tanke stranice.

## Tvrda pravila

1. **Nikad ne spominji druge domene mreže** ni u tekstu, ni u linkovima, ni u mailovima.
   Svaka domena je zaseban brend s vlastitim telefonom i mailom.
2. **Nijedan odlomak se ne dijeli s drugom domenom.** Ista lokacija se piše iz intenta
   ovog brenda, ne copy-paste s druge domene. Prag: Jaccard ispod 15%.
3. **Interno preklapanje gradskih stranica ispod 30%.** Template blizanci sa zamijenjenim
   imenom grada su doorway pattern i Google ih hvata unutar jednog hosta.
4. **Svaka gradska stranica iznad 800 riječi stvarnog teksta.** Ako preklapanje treba
   smanjiti, PROŠIRI tekst, ne skraćuj ga.
5. **Nikad izmišljen review markup.** Bez `aggregateRating` i `Review` u schemi dok ne
   postoje stvarne recenzije. To je već jednom čišćeno s cijele mreže.
6. **Cijena mora biti ista na svim stranicama ovog repoa.** Provjeri prije commita.
7. **Ne mijenjaj title stranice koja rangira** bez GSC podataka o tome za što rangira.
   Meta description je siguran (nije ranking faktor), title nije.

## Prije commita

- [ ] cijena konzistentna kroz cijeli repo
- [ ] meta description 120 do 170 znakova, bez duplikata unutar repoa
- [ ] title 30 do 65 znakova
- [ ] 1 H1 po stranici
- [ ] telefon klikabilan (`href="tel:"`) na svakoj stranici
- [ ] nema `aggregateRating` ni `Review` u JSON-LD

## Što NIJE u ovom repou

Mrežna razina živi u `../Kinetek-hr`: planovi (`docs/plans/`), `scripts/footprint-check.py`
(mjeri cross-domain, treba mu pristup svim repoima) i sadržaj za Squarespace flagship.
Taj monorepo ima **zastarjele submodul pointere**, pa ga ne koristi kao izvor stanja koda.
Izvor istine za kod je ovaj repo.
