# competiciones (unpublished)

Internal WOD builder + athlete results app. **Not currently reachable from the site.**

It used to live at `src/pages/competiciones/` with a route at `/competiciones`, but that
route threw on every load, for two reasons that both still apply:

1. `App.tsx` uses react-router `<Routes>`, but the `<BrowserRouter>` that wraps it lives in
   `main.tsx` — a Vite entry point Astro never executes. Rendering `<App client:load />`
   directly from an `.astro` page throws
   `useRoutes() may be used only in the context of a <Router> component`.
2. `lib/supabase.ts` throws at import time because `VITE_SUPABASE_URL` and
   `VITE_SUPABASE_ANON_KEY` are not set.

Moved here on 2026-08-26 so the broken public URL disappears without discarding the work.
The Supabase schema is still in `supabase/migrations/`, and the deps
(`@supabase/supabase-js`, `react-router-dom`, `@dnd-kit/*`) are still in `package.json`.

## To bring it back

- Wrap the app in `<BrowserRouter basename="/competiciones">` inside the component Astro
  renders, or drop react-router and switch to Astro routes.
- Add the two `VITE_SUPABASE_*` variables to `.env` and to the Vercel project settings.
- Put it behind authentication before publishing — it reads and writes athlete results.
