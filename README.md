# TN Tourism

Full-stack Tamil Nadu tourism & travel management app.

- **Frontend:** React 18 + Vite + Leaflet maps (SPA)
- **Backend:** Node.js + Express + MongoDB (Mongoose)
- **Admin portal:** Static dashboard served by the backend at `/admin`

---

## Prerequisites

- **Node.js** 18+ (https://nodejs.org)
- **npm** (ships with Node.js)
- **MongoDB** — either a local instance or a MongoDB Atlas cluster

---

## 1. Install dependencies

```bash
npm install
```

This installs both frontend (`src/`) and backend (`backend/`) dependencies from the single `package.json`.

---

## 2. Configure environment

### Backend

Copy the template and fill in your MongoDB URI:

```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env`:

```env
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.xxxxx.mongodb.net/tn_tourism
PORT=5000
JWT_SECRET=change-this-to-a-strong-secret
```

> If `MONGODB_URI` is missing, the server falls back to `mongodb://127.0.0.1:27017/tn_tourism` (local MongoDB).

### Frontend (local dev only)

```bash
cp .env.example .env
```

Edit `.env`:

```env
VITE_API_URL=http://localhost:5000
```

---

## 3. Run the backend

```bash
npm run server
```

Or with auto-restart on file changes:

```bash
npm run server:dev
```

The backend starts on **http://localhost:5000**.

> On first run it seeds default travel services and sample trip data into MongoDB.

---

## 4. Run the frontend

```bash
npm run dev
```

The Vite dev server starts on **http://localhost:3000** and auto-opens the app.

---

## 5. Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview locally:

```bash
npm run preview
```

---

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start Vite dev server (port 3000) |
| `npm run build` | Build the React app into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run server` | Start the Express backend (port 5000) |
| `npm run server:dev` | Start the backend with nodemon |

---

## Deploy

### Frontend → Vercel

1. Create a new Vercel project from this repo (or use the existing one).
2. Settings → Environment Variables → add:
   - `VITE_API_URL` = your public backend URL (e.g. `https://tn-tourism-backend.onrender.com`)
3. Build Command: `npm run build` · Output Directory: `dist`

### Backend → Render

1. Create a **Web Service** (not static site) from this repo.
2. Build Command: `npm install` (or `npm ci`)
3. Start Command: `node backend/server.cjs`
4. Environment Variables → add:
   - `MONGODB_URI` = your MongoDB Atlas URI
   - `PORT` = `5000`
   - `JWT_SECRET` = a strong secret

### MongoDB Atlas

Whitelist the backend's IP (`0.0.0.0/0` for all) in Network Access.

---

## Admin portal

The admin dashboard lives in `admin-portal/` and is served by the backend at **`/admin`** (e.g. `http://localhost:5000/admin`). Log in with the Super Admin credentials configured in `backend/server.cjs`.

---

## Notes

- `backend/.env` is git-ignored — it contains live credentials and must never be committed.
- Only commit `backend/.env.example` and `.env.example` as templates.
- The frontend reads its backend URL from `import.meta.env.VITE_API_URL` (baked into the bundle at build time).