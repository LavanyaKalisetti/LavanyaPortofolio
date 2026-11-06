# devfolio

A personal portfolio site built with React, Vite and Framer Motion.

## Run it

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build in /dist
npm run preview  # preview the production build
```

## Add your content

Everything you'll want to change lives in **`resources/`**:

- `resources/portfolio.js` holds all the text (every section is generated from it)
- `resources/profile.png` is the profile photo
- `resources/resume.pdf` is the file behind the Resume button

To replace the photo or resume, overwrite the file with the same name.

- An empty list hides its section.
- An empty list hides its section.
- Skill icons use names from [devicon.dev](https://devicon.dev).

## Structure

```
resources/              ← your content, photo and resume
src/
  components/           ← one file per section
  hooks/useTypewriter.js
  styles/global.css     ← colors, fonts, effects (tokens at the top)
```
