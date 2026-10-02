# Innovation Discovery — Frontend

React 19 · Vite · TypeScript · Tailwind CSS 4 · TanStack Query · React Router · Axios.

```bash
cp .env.example .env
npm install
npm run dev      # http://localhost:5173 (proxies /api -> http://localhost:3000)
npm run build
npm run lint
```

## Structure

```
src/
  components/     shared UI (layout, placeholders)
  features/auth/  useAuth (GET /auth/me) + ProtectedRoute (role guard)
  lib/            axios instance, React Query client
  pages/          one file per route
  types/          shared domain types mirroring the backend
  router.tsx      route map
```
