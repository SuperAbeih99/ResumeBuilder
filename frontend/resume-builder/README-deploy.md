## Deploy to Vercel (Frontend)

1. Commit/push code to GitHub.
2. Go to Vercel → New Project → Import this frontend folder.
3. Framework Preset: Vite.
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Environment Variables:
   - `VITE_API_BASE_URL` = `https://resume-builder-backend.vercel.app`
7. Deploy.

## Verify

- Navigate directly to a client route (e.g. `/dashboard`) to confirm SPA fallback works.
- Open DevTools → Network → perform login/signup → confirm requests go to `${VITE_API_BASE_URL}/api/...` and succeed.
