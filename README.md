# PlayrightNodeJS
# PlayrightNodeJS

Acest proiect folosește Playwright pentru a automatiza căutarea hotelurilor pe site-ul [litoralulromanesc.ro](https://litoralulromanesc.ro).

## Instalare

1. Instalează dependențele:
   ```bash
   npm install playwright
   ```

## Utilizare

Rulează scriptul pentru a căuta hoteluri și a salva un screenshot cu rezultatele:

```bash
node playright.js
```

Va fi generat fișierul `hoteluri_search.png` cu rezultatele căutării.

## Fișiere

- `playright.js` - Scriptul Playwright pentru căutarea hotelurilor
- `litoralulromanesc.png` / `hoteluri_search.png` - Screenshot-uri generate
- `.gitignore` - Ignoră folderul `node_modules`

## Cerințe

- Node.js
- Acces la internet

## Autor

adavidoaiei
