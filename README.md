# mojcaandrej.com

Spletna stran pesnice in pisateljice Mojce Andrej: knjige, nastopi, branja, prevodi, objave, odmevi in galerija.

Next.js 16 (App Router, statično generirane strani), React 19, Tailwind CSS 4, TypeScript. Gostovanje na Vercelu – vsak `push` na `main` se samodejno objavi.

## Zagon

Potreben je Node.js 22 ali novejši (različica v `.nvmrc`).

```bash
npm install
npm run dev          # razvojni strežnik na http://localhost:3000
npm run build        # produkcijska gradnja (pred njo se samodejno zažene npm run images)
npm run lint         # ESLint
npm run typecheck    # TypeScript
npm run format       # Prettier
```

## Urejanje vsebine

Vsa vsebina je v mapi **`src/content/`** – strani se iz teh datotek zgradijo same. Na vrhu vsake datoteke je navodilo s primerom vnosa. Razvrščanje (npr. najnovejše najprej) naredi stran sama, zato nov vnos lahko dodaš kamorkoli v seznam.

| Kaj dodajam                            | Datoteka                                     | Stran              |
| -------------------------------------- | -------------------------------------------- | ------------------ |
| Nastop, predstavo, branje              | `nastopi.ts`                                 | /nastopi           |
| Odmev (članek, radijska oddaja, video) | `odmevi.ts`                                  | /odmevi            |
| Objavo v reviji ali zborniku           | `objave.ts`                                  | /objave            |
| Fotografijo v galerijo                 | `galleries.ts`                               | /galerija          |
| Novo knjigo                            | `books.ts` (+ slug v `types.ts`)             | /knjige, /knjige/… |
| Pesem                                  | `poems.ts`, `children-poems.ts`              | /branja/…          |
| Odlomek proze                          | `prose.ts`                                   | /branja/proza      |
| Prevod pesmi                           | `translations.ts` (+ jezik v `languages.ts`) | /prevodi/…         |
| Življenjepis, uvod na domači strani    | `about.ts`                                   | /                  |
| Kontakt, družbena omrežja              | `site.ts`                                    | noga, metapodatki  |

**Oblikovanje besedila** v podatkih: `*ležeče*`, `**krepko**`, `[besedilo povezave](https://…)`.

**Datumi** so zapisani kot `"2026-08-19"` (dan), `"2026-08"` (mesec) ali `"2026"` (leto); na strani se izpišejo po slovenskem pravopisu (»19. 8. 2026«, »avgust 2026«).

**Povezave med vsebinami:** vnosi s poljem `book: "slug-knjige"` se samodejno prikažejo na strani te knjige v razdelku »Povezano s knjigo«.

### Slike

1. Sliko skopiraj v ustrezno mapo v `public/` (npr. `public/Agica/19.jpg`).
2. Zaženi `npm run images` – prevelike slike pomanjša (največ 2400 px) in zapiše njihove dimenzije v `src/content/image-sizes.json`.
3. Pot do slike (npr. `/Agica/19.jpg`) vpiši v ustrezno datoteko v `src/content/`.

Skripta teče tudi pred vsako gradnjo, zato je manifest dimenzij vedno ažuren.

## Zgradba

```
src/
  app/                  strani (App Router)
    (general)/          strani z glavo in nogo
    sitemap.ts, robots.ts, manifest.ts, opengraph-image.jpg, icon.png
  components/           skupne komponente (glava, noga, Poem, Lightbox, PageHeader …)
  content/              VSEBINA – tu se ureja stran
  lib/                  pomožne funkcije (datumi, slike)
scripts/
  optimize-images.mjs   pomanjšanje slik in manifest dimenzij
```

Barve (papir, slivova, morska) in pisavi (Lora za naslove in pesmi, Inter za besedilo) so določene v `src/app/globals.css`.
