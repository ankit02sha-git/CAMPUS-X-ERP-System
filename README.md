# CampusX — Study Hall College Student Portal

Full-stack student portal: Next.js 15 (App Router) · React 19 · TypeScript · Tailwind · Framer Motion · SQLite (libSQL) · Drizzle ORM · Auth.js (credentials, JWT) · Zod.

> Independent student project. College facts come only from https://www.studyhallcollege.org/ (see `src/data/campus.ts`). Demo data is clearly marked.

## Quick start (Windows / macOS / Linux — no Docker, no database server)
```bash
npm install
copy .env.example .env      # Windows CMD  (macOS/Linux: cp .env.example .env)
# edit .env: set AUTH_SECRET (any long random string) and the seed passwords
npm run db:setup            # creates ./dev.db, applies migrations, seeds
npm run dev                 # http://localhost:3000
```
Production: `npm run build && npm start`. The database is a single file (`dev.db`); delete it and re-run `npm run db:setup` to reset.
Seed never creates demo students when `NODE_ENV=production` and requires a 12+ char admin password.

## Accounts (dev)
Set by env: `SEED_ADMIN_EMAIL` / `SEED_ADMIN_PASSWORD`; demo students `aarav.demo@campusx.local`, `diya.demo@campusx.local` (BCA Sem 3) use `SEED_DEMO_STUDENT_PASSWORD`. Nothing is hardcoded.

## Environment variables
| Var | Required | Purpose |
|---|---|---|
| `DATABASE_URL` | yes | `file:./dev.db` (SQLite file) |
| `AUTH_SECRET` | yes | Session signing |
| `SEED_ADMIN_EMAIL`, `SEED_ADMIN_PASSWORD` | for seed | First admin |
| `SEED_DEMO_STUDENT_PASSWORD` | dev seed | Demo students |
| `CLOUDINARY_CLOUD_NAME/API_KEY/API_SECRET` | prod | Object storage. If unset, uploads go to `./.uploads` (dev only, served via authenticated `/api/files/*`) |

## Architecture
- `src/server/db` schema (Drizzle), migrate, seed · `src/server/guards.ts` auth checks (re-read user from DB on every protected operation) · `src/server/upload.ts` storage abstraction (type + size + magic-byte validation) · `src/server/notify.ts`
- `src/actions/*` server actions (all call `requireUser`/`requireAdmin`, validate with Zod) · `src/app/api/*` upload, search, notifications, chat polling
- `src/server/admin/registry.ts` drives generic admin CRUD (timetable, notes, assignments, events, announcements, canteen, courses). Add a table + schema + field list to add a new admin section.
- Middleware only does optimistic redirects; real authorization is server-side.
- Lost & Found chat is a polling thread model (`lost_threads`/`lost_messages`) ready to swap for SSE/WebSocket.

## Adding data
Admin → section → Add. Or send the data in chat and it will be converted to structured records via the same schema. Empty sections show designed empty states, never invented data.
