# Webticket

Local XAMPP ticketing website for Talanta Sports City.

## Run locally

1. Place this folder in `C:\xampp\htdocs\webticket`.
2. Start Apache in XAMPP.
3. Open `http://localhost/webticket/`.

The project includes the event page, stadium photo gallery, OpenStreetMap location map, seat map zoom controls, local login flow, theme switching, and ticket account page.

## Resale, transfer, and gate prototype

The static prototype now includes the requested ticket lifecycle:

- `/reseller/` — approved reseller inventory, face values, status badges, price-capped resale listings, public/private visibility, expiry, and transfer actions.
- `/reseller/transfers/` — reseller OTP transfer flow, client holder records, signed expiring links, and revocation before scan-in.
- `/resale/fc-bayern-munchen-vs-afc-ajax/` — resale marketplace with the stadium seat-map layout and a ten-minute checkout lock.
- `/t/` and `/t/<transferToken>/` — client OTP ticket view with rotating QR, watermarked print/PDF fallback, and wallet actions.
- `/scan/` — gate validation, manual code entry, valid/invalid/already-used results, offline-manifest simulation, and scan audit events.
- `/admin/resale/` — stored resale/transfer settings, ticket freeze controls, transfer revocation, and audit history.

Because this repository is a static export, the prototype persists state in browser `localStorage`; OTP, M-Pesa/card, SMS, email, wallet, camera, signed-token, Redis/DB-lock, and server-side audit integrations are represented by local demo adapters and should be replaced with server endpoints before production use. To enter the reseller flow locally, open `/login/`, choose “I am an admin-approved reseller”, and complete the six-digit demo login code.

## Deploy to Vercel

Import this repository into Vercel and leave the project root set to the repository root. The root `index.html` forwards visitors to the `talantasports/` site folder, while `vercel.json` keeps the nested pages and trailing-slash links working online.
