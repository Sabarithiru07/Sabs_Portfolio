# Sabari Thirunavukkarasu: Portfolio (static Next.js, no backend)

Pure static site. No Django, no database, no server: `npm run build` writes plain HTML/CSS/JS to `out/`.

## Flow
1. `/` autoplays the welcome video (`public/Intro.mp4`): with sound if the browser allows it, otherwise muted with a pulsing "Tap for sound" button.
2. When the video ends (or on **Skip intro**) a firework-style blast (charge-up, shockwaves, light rays, particle burst, flash) opens
3. `/portfolio/`: your portfolio, with an iris-open arrival animation.

## Run / build
    npm install
    npm run dev          # http://localhost:3000
    npm run build        # static site in ./out
    npm test && npm run typecheck

## Where to edit things
| What | File |
|---|---|
| Name, bio, skills, timeline, socials | `src/lib/content.ts` |
| Projects and case studies (was the database) | `src/lib/fallback.ts`, cover images in `public/projects/` |
| Services | `src/lib/services.ts` |
| Welcome video / poster | `public/Intro.mp4`, `public/intro-poster.jpg` |
| Intro behaviour + blast | `src/components/WelcomeIntro.tsx` |
| Intro / blast / arrival CSS | bottom of `src/app/globals.css` |
| Where the intro leads | `src/lib/intro.ts` |

Replace the poster after changing the video:
`ffmpeg -ss 0.4 -i public/Intro.mp4 -vframes 1 -vf scale=478:-1 -q:v 4 public/intro-poster.jpg`

## Contact form (replaces the Django `/api/contact/`)
The form posts to a hosted form service. Create a free form at Formspree, Web3Forms or Getform, then set
`NEXT_PUBLIC_CONTACT_ENDPOINT` to its URL (see `.env.example`) before building. If it is not set, the form opens the
visitor's email app with the message pre-filled, so it never silently fails.

## Deploy
Set `NEXT_PUBLIC_SITE_URL` (and optionally `NEXT_PUBLIC_CONTACT_ENDPOINT`), run `npm run build`, upload `out/`.
Works on Vercel, Netlify, Cloudflare Pages, GitHub Pages (user/org site or custom domain), Render Static Site (publish dir `out`).
Pages are exported as `folder/index.html` (`trailingSlash: true`), so no rewrite rules are needed.

## Removed with Django
Blog (it only held a sample post and was not linked anywhere), the API client, and the `backend/` folder.
