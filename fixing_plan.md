# ALFA BOX — remediation plan

## Context

A full read of the site (`SAL_102_ALFABOX`, Astro 5.6 + Tailwind on Vercel, live at
alfabox.es) surfaced a set of problems ranging from leaked production credentials to a
contact form that has probably never delivered a single lead. The September tariff update
is already applied to `src/components/Pricing2.astro` and is **not** part of this plan.

Two outcomes matter most: stop the credential exposure, and make the contact form actually
reach Ángel — that form is the site's only conversion path, and the last commit
(`76f5eac "fix to angel no email yet"`) shows it is a known, unresolved failure.

Everything else is cleanup: dead routes leaking Astro boilerplate to Google, invalid
structured data, invented testimonials, and a handful of rendering bugs.

Decisions taken with the owner:
- `/competiciones` → unpublish, keep the code.
- Cookie banner + legal pages → **out of scope for now** (still outstanding, see §7).
- Teens testimonials → invented, remove them.
- Opening hours → the contact page is correct.

---

## Phase 0 — Credentials (blocking, do before anything else)

`.env` is tracked in git and pushed to `github.com/arriazuinigo/SAL_102_ALFABOX`
(commits `290d22f`, `0706804`, `d83b101`). It holds `RESEND_API_KEY` and
`EMAIL_APP_PASSWORD`. The values did **not** reach the committed `dist/`.

**Order matters.** Vercel checks out the repo including `.env`, so that committed file may
be what is currently feeding production. Removing it before the dashboard is populated
would break the build.

1. Rotate both credentials at source: new Resend API key, revoke the Gmail app password.
2. Set every key from `.env` as a Vercel project environment variable
   (`RESEND_API_KEY`, `EMAIL_USER`, `EMAIL_APP_PASSWORD`, `FACEBOOK_LINK`, `TWITTER_LINK`,
   `INSTAGRAM_LINK`, `TIKTOK_LINK`, `YOUTUBE_LINK`) for Production + Preview.
3. Redeploy and confirm the site still renders footer social links.
4. Only then: extend `.gitignore` with `.env`, `dist/`, `.astro/`, and untrack them —
   `git rm -r --cached .env dist .astro`. Vercel builds from source; the committed
   `dist/` (58 files) is unused.
5. Create `.env.example` with the key names and empty values.

**Flagged, needs explicit go-ahead:** the old key stays in git history even after step 4.
Purging it means `git filter-repo` + a force-push that rewrites 3 commits. Rotation in
step 1 makes the leaked value worthless, so this is optional hygiene, not urgent.

## Phase 1 — Contact form (the business bug)

Files: `src/pages/api/contact.ts`, `src/components/ContactWhite.astro`,
`src/components/Contact.astro`, delete `src/pages/api/contact-form.ts`.

1. **Root cause** — `contact.ts:54` sends `from: 'onboarding@resend.dev'`, Resend's
   sandbox sender, which only delivers to the Resend account owner. Verify the
   `alfabox.es` domain in Resend (DNS records on the domain registrar), then change to
   `from: 'ALFA BOX <web@alfabox.es>'`. **Nothing else in this phase matters until this
   is done.**
2. Add `reply_to: email` so replying to the notification reaches the lead.
3. Read the `subject` field — `ContactWhite.astro` collects an "Asunto" dropdown that the
   API never reads, so it is silently discarded. Include it in the body and use it in the
   email subject line.
4. Fix the response-key mismatch: the API returns `{ error: ... }` but both clients read
   `data.message` (`ContactWhite.astro:133`, `Contact.astro:126`), so users only ever see
   the generic fallback. Standardise the API on `{ message }` for both success and error.
5. Escape user input before interpolating into the email HTML (`contact.ts:62-68`) —
   currently raw HTML injection into the inbox.
6. Move the hardcoded recipient list (`contact.ts:55-60`, includes two personal addresses)
   into a `CONTACT_RECIPIENTS` env var.
7. Add a honeypot input (hidden field, reject when filled) — the endpoint is public and
   fans out to four mailboxes with no protection at all.
8. Delete `src/pages/api/contact-form.ts`: it is browser code sitting in the routes
   directory, and it registers its submit handler twice (lines 98 and 106).
9. Remove the dead lowercase `export async function get()` at `contact.ts:102`.

## Phase 2 — Remove dead and broken public surface

| Action | Path | Why |
|---|---|---|
| Delete | `src/pages/index2.astro` | Live Astro boilerplate ("Welcome to Astro Blog", `yourdomain.com`). Indexable, zero inbound links. Its `slot="head"` tags render in `<body>` and its JSON-LD emits `${canonicalURL}` literally. |
| Delete | `public/sitemap.xml` | Shadows the working integration output — see Phase 3. |
| Delete | `public/sitemap.xml.js` | Files in `public/` are static assets, not executed; this one serves its own raw source. |
| Delete | `src/components/Welcome.astro` | Untouched Astro starter component. |
| Delete | `src/components/Pricing.astro` | Superseded by `Pricing2.astro`. Also remove its import in `src/pages/tarifas.astro`. |
| Delete | `site.webmanifest` | Empty name fields, and it sits outside `public/` so it is never served. |
| Move | `src/pages/competiciones/` → `src/apps/competiciones/` | Unpublish per decision. |
| Delete | `src/pages/competiciones.astro` | Removes the broken public route. |

`/competiciones` currently throws twice over: `App.tsx` uses react-router `<Routes>` with
no `BrowserRouter` (that lives in `main.tsx`, which Astro never runs), and
`lib/supabase.ts` throws at import because `VITE_SUPABASE_*` are absent. Moving the folder
out of `src/pages/` resolves the public failure without discarding the work. Leave
`supabase/migrations/` and the `@supabase/*`, `react-router-dom`, `@dnd-kit/*` deps in
place for when it is picked back up.

Also drop the unused imports left behind: `Contact` in `ContactPage.astro:3`, `Schedule`
in `crossfit-65.astro:4`, and the unused `coach.image` field in `Coaches.astro`.

## Phase 3 — SEO and `<head>` correctness

File: `src/layouts/Layout.astro` unless noted.

1. **Invalid JSON-LD** (`Layout.astro:160-170`) — the second `SportsClub` block contains
   `//` JavaScript comments, so it is not valid JSON and Google discards it silently.
   Merge its `logo` property into the first block and delete the second block entirely.
2. **Opening hours** in the surviving JSON-LD currently claim Mon–Fri 07:00–21:00 /
   Sat 07:00–14:00 / closed Sunday. Correct per the owner: **Mon–Sun 06:00–22:00**, with
   Sunday Open Box only. The contact page and the schedule table already agree with this;
   only the JSON-LD is wrong.
3. **Trailing-slash conflict** — the sitemap emits `https://alfabox.es/alfabox/` while the
   canonical tag emits `https://alfabox.es/alfabox`. Set `trailingSlash: 'never'` in
   `astro.config.mjs` so both agree, then confirm in the rebuilt `dist/client/sitemap-0.xml`.
4. `public/robots.txt` — point `Sitemap:` at `/sitemap-index.xml` (the integration's real
   entry point) and drop `Crawl-delay: 10`, which Google ignores and Bing honours to your
   detriment.
5. **Duplicate GA4.** The homepage loads `G-PYV11EF4L0` (`index.astro:20-26`, in the body,
   not the head) on top of the site-wide `G-Q7XHLXPE6X` in the Layout, plus GTM
   `GTM-W2BSQZ4N` and Vercel Analytics. Homepage data is split across two properties.
   Recommend deleting the `index.astro` block and keeping the Layout one — **confirm which
   property you actually read before deleting.** Also remove the second
   `<Analytics />` in `competiciones.astro` (moot once Phase 2 deletes that file).
6. **Misleading titles** — `/crossfit-65` and `/crossfit-teens` both start with
   `"Horarios - "` but neither shows a schedule. Retitle to describe the programmes.

## Phase 4 — Rendering and content bugs

| File | Fix |
|---|---|
| `src/components/Location.astro` | Two stray unopened `</section>` tags (lines 1 and 13). |
| `src/components/ContactPage.astro:94` | TikTok icon has `viewBox="currentColor"` and no `fill` — renders broken. |
| `src/pages/blog/[slug].astro` | `entry.render()` runs **twice** per page (lines 38 and 55); delete the second block and the seven `console.log` calls. |
| `src/pages/blog/[slug].astro:68`, `src/components/BlogCard.astro:11` | `toLocaleDateString('en-US')` prints "Publicado el March 8, 2025" on a Spanish site → `'es-ES'`. |
| `src/content/blog/crossfit-longevity.md:4` | `date: "2025-03-5"` is not ISO — pad to `2025-03-05`. |
| `src/components/Header.astro:45` | Mobile nav says `COSSFIT TEENS`; desktop says `ALFA TEENS`. |
| `src/components/Footer.astro:54` | Hardcoded `© 2024` → derive the year. |
| `src/pages/crossfit-65.astro:13` | `Astro.glob()` is deprecated in Astro 5 → `getEntry('blog', 'crossfit-longevity')`. |
| `src/components/YouTubeVideo.astro` | `<h3>` wraps `<p>` elements (invalid HTML); frontmatter `videoId`/`title`/`thumbnailUrl` are computed then ignored in favour of hardcoded values, so the props `index.astro` passes do nothing. Use the props. |
| `src/components/Coaches.astro:46-54` | Hover overlay sits on an empty div — it can never show. Remove it. |
| `src/pages/crossfit-teens.astro:101-114` | Remove the invented testimonials section. |

## Phase 5 — Styling and config

1. `rgba(46,156,167,255)` is an invalid CSS colour (alpha must be 0–1; browsers clamp it,
   so it works by accident). Replace with `#2E9CA7` in `tailwind.config.mjs:8-9`,
   `public/manifest.json` (`theme_color`) and `Layout.astro:63` (`theme-color`).
2. `--color-primary-light` is used in `Schedule.astro:450` but never defined — that hover
   does nothing. Define it in the Layout `:root` alongside `--color-primary`.
3. **Fixed-header overlap.** The header is 72px tall (`py-3` + `h-12` logo) and fixed, but
   `Schedule.astro:297` gives the section only `2rem` (32px) top padding on mobile — the
   "Horarios" heading sits under the header. Add top padding matching the header height on
   inner pages, or give `body` a top offset on non-hero routes.
4. **Add a colour legend to the schedule table** — nine colour-coded class types with no
   key. Reuse the existing `classColors` map in `Schedule.astro:2-13` to render it, so the
   legend cannot drift from the table.
5. **Resolve the matrícula contradiction** on `/tarifas`: "Matrícula **GRATIS** al
   inscribirte online" sits two blocks above the FAQ answer "No hay matrícula."
   Recommend standardising on "No hay matrícula" — *confirm before changing.*

## §7 — Deliberately out of scope

- **Cookie consent banner and legal pages.** GTM, GA4 and Vercel Analytics all run with no
  consent gate, and there is no privacy policy, cookie policy or aviso legal anywhere.
  This is an AEPD exposure and your own README lists it as pending. Skipped per decision —
  it remains the largest unaddressed risk after Phase 0.
- **Stale blog content.** Four posts, newest March 2025.
- **Git history rewrite** — see the flag at the end of Phase 0.

---

## Verification

`node_modules` is currently absent, so nothing has been built or type-checked yet.

```bash
npm install
npm run build          # must pass; it has not been run this session
npm run preview        # or: vercel dev
```

Then check, in order:

1. **Build output** — `dist/client/sitemap-0.xml` contains no `/index2`, and its URLs match
   the canonical format chosen in Phase 3.3 (no trailing slash).
2. **Structured data** — paste the homepage into Google's Rich Results Test; the
   `SportsClub` block should parse (it currently does not) and show 06:00–22:00 daily.
3. **Contact form, end to end** — submit from `/contacto` on the deployed preview and
   confirm the mail lands in Ángel's inbox with the Asunto value present and Reply-To set
   to the sender. This is the one test that decides whether Phase 1 worked; a local
   success is not sufficient, since the sandbox-sender failure only shows on real delivery.
4. **Error path** — submit with an invalid phone number and confirm the specific Spanish
   validation message appears rather than the generic fallback.
5. **Routes** — `/index2` and `/competiciones` return 404; `/tarifas`, `/horarios`,
   `/contacto`, `/alfabox`, `/crossfit-65`, `/crossfit-teens`, `/blog` and all four posts
   render.
6. **Mobile** — at 375px width, the "Horarios" heading is fully visible below the header.
7. **Secrets** — `git ls-files | grep -E '^\.env$|^dist/|^\.astro/'` returns nothing.

## Change log

`.claude/projects/SAL_102_ALFABOX.md` already carries the 2026-08-26 entry for the pricing
update and the review findings. Append a new dated entry as each phase lands, per the
workspace convention (newest first).
