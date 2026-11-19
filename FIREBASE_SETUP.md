# Firebase setup

Firebase project: `yash-tent-light-decoration`

## Data model

- `users/{uid}`: `name`, `email`, `role`, `createdAt`, `updatedAt`
- `bookings/{bookingId}`: customer and event details, `userId`, `status`, `amount`, timestamps
- `galleryItems/{itemId}`: `type`, `src`, `thumbnail`, `title`, `category`, `date`, timestamps

Customers may only create/read their own bookings. Only an administrator may change booking status or write gallery items. Gallery reads are public.

## First administrator

1. Register the owner's account through the site. Email/Password authentication is already enabled.
2. In Firestore, change that user's `users/{uid}.role` from `customer` to `admin` using a trusted admin environment (the Firebase Console or Admin SDK).

Client code can never assign itself the `admin` role; the Firestore rules intentionally prevent privilege escalation.

## Deploy

```powershell
npx firebase-tools login
npx firebase-tools deploy --only firestore,auth --project yash-tent-light-decoration
```

For Vercel, add every variable from `.env.example` with the values from `.env.local`.
