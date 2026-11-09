# Webticket

Local XAMPP ticketing website for Talanta Sports City.

## Run locally

1. Place this folder in `C:\xampp\htdocs\webticket`.
2. Start Apache in XAMPP.
3. Open `http://localhost/webticket/`.

The project includes the event page, stadium photo gallery, OpenStreetMap location map, seat map zoom controls, local login flow, theme switching, and ticket account page.

## Deploy to Vercel

Import this repository into Vercel and leave the project root set to the repository root. The root `index.html` forwards visitors to the `talantasports/` site folder, while `vercel.json` keeps the nested pages and trailing-slash links working online.
