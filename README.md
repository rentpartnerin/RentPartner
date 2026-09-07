# RentPartner — Full React Marketplace Structure

## Run
npm install
npm run dev

## Build
npm run build

## Structure

```text
rentpartner-react/
├── public/
│   └── images/
│       └── .gitkeep
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── booking/
│   │   │   └── BookingForm.jsx
│   │   ├── common/
│   │   │   ├── Field.jsx
│   │   │   ├── Icon.jsx
│   │   │   ├── Notice.jsx
│   │   │   ├── Page.jsx
│   │   │   └── SectionHead.jsx
│   │   ├── forms/
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── Logo.jsx
│   │   ├── partners/
│   │   │   └── PartnerCard.jsx
│   │   └── services/
│   │       └── ServiceCard.jsx
│   ├── config/
│   │   └── app.js
│   ├── data/
│   │   ├── partners.js
│   │   └── services.js
│   ├── hooks/
│   │   └── useBooking.js
│   ├── pages/
│   │   ├── account/
│   │   │   └── Login.jsx
│   │   ├── legal/
│   │   │   └── Legal.jsx
│   │   ├── partners/
│   │   │   ├── PartnerProfile.jsx
│   │   │   └── Partners.jsx
│   │   ├── services/
│   │   │   ├── ServiceDetail.jsx
│   │   │   └── Services.jsx
│   │   ├── About.jsx
│   │   ├── BecomePartner.jsx
│   │   ├── Booking.jsx
│   │   ├── BookingSuccess.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   └── Safety.jsx
│   ├── utils/
│   │   └── booking.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Included pages
Home, Services, Service Detail, Partners, Partner Profile, Booking Request, Booking Success, Become a Partner, Login, About, Safety, Privacy, Terms and 404.

## Working frontend features
- React Router navigation
- Responsive mobile menu
- Service filtering/navigation
- Partner search and city filter
- Booking form validation
- Booking data saved to sessionStorage
- WhatsApp message preparation
- Telegram button
- Partner application interaction
- Login demo interaction

## Production integrations still required
`src/config/app.js` contains placeholders for WhatsApp, Telegram and support details.

This is a complete frontend structure, not a production backend. Real authentication, database storage, partner verification, availability management, payments, messaging, notifications, admin controls and server-side booking submission still need backend/provider integration.
