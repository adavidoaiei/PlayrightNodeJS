# PlayrightNodeJS

Acest proiect folosește Playwright pentru a automatiza căutări pe site-uri precum OLX și litoralulromanesc.ro.

## Instalare

1. Instalează dependențele:
   ```bash
   npm install playwright
   ```

## Utilizare

Scriptul poate automatiza căutări pe diferite site-uri:

### 1. Căutare hoteluri pe litoralulromanesc.ro
```bash
node playright.js
```
Va fi generat fișierul `hoteluri_search.png` cu rezultatele căutării.

### 2. Căutare laptop-uri pe olx.ro
Scriptul caută laptop-uri pe OLX și salvează rezultatele ca screenshot:
```bash
node playright.js
```
Va fi generat fișierul `olx_laptopuri.png` cu rezultatele căutării.

### 3. Căutare pe Google
Scriptul poate fi adaptat pentru a căuta pe Google și a salva rezultatele ca screenshot.

## Fișiere
- `playright.js` - Scriptul Playwright pentru automatizare
- `.gitignore` - Ignoră folderul `node_modules`

## Cerințe
- Node.js
- Acces la internet

## Autor
adavidoaiei
