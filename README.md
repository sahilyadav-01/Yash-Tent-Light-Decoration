# 🎪 Yash Tent & Light Decoration

> **"Making Every Celebration Grand"**

A modern, responsive, and production-ready website for **Yash Tent & Light Decoration** — a professional event decoration company offering premium tent, lighting, wedding, and event management services.

---

## 🌐 Live Preview

```
npm run dev   →   http://localhost:5173
```

---

## ✨ Features

- 🏠 **Multi-page website** with full routing (Home, About, Services, Gallery, Packages, Testimonials, FAQ, Contact, Booking)
- 💡 **Light / Dark Mode** toggle
- 📱 **Fully Responsive** — mobile-first design
- 🎞️ **Smooth Animations** with Framer Motion (Fade, Zoom, Slide, Parallax)
- 🖼️ **Filterable Gallery** with Lightbox preview and masonry grid
- 💬 **Contact Form** integrated with EmailJS
- 📦 **Packages & Pricing** cards (Silver, Gold, Platinum)
- ⭐ **Testimonials Slider** with auto-sliding
- 🔐 **Auth System** — Login, Register, Forgot Password
- 👤 **Customer Dashboard** (protected route)
- 🛠️ **Admin Dashboard** (admin-only route)
- 📊 **Event Cost Calculator** page
- 🌍 **i18n / Multilingual** support (react-i18next)
- 🗺️ **Google Map** embedded in Contact page
- 💬 **Floating WhatsApp** button
- ⬆️ **Back-to-Top** button
- 📄 **PDF Export** via jsPDF
- 📈 **Analytics Charts** via Recharts
- 🔍 **SEO Ready** — React Helmet Async, meta tags, Open Graph, Twitter Card

---

## 🛠️ Tech Stack

| Category       | Technology                     |
|----------------|-------------------------------|
| Framework      | React 19 + Vite 8              |
| Routing        | React Router DOM v7            |
| Styling        | Tailwind CSS v4                |
| Animations     | Framer Motion                  |
| Icons          | React Icons + Lucide React     |
| Slider/Swiper  | Swiper.js                      |
| Forms          | React Hook Form                |
| Email          | EmailJS (`@emailjs/browser`)   |
| SEO            | React Helmet Async             |
| State Mgmt     | Zustand                        |
| HTTP Client    | Axios                          |
| Charts         | Recharts                       |
| PDF Export     | jsPDF + jsPDF-AutoTable        |
| Image Zoom     | React Medium Image Zoom        |
| i18n           | i18next + react-i18next        |
| Linting        | Oxlint                         |

---

## 📁 Folder Structure

```
src/
├── assets/          # Images, fonts, and static media
├── components/      # Reusable UI components (Navbar, Footer, Cards, etc.)
│   └── auth/        # ProtectedRoute, AdminRoute
├── context/         # React Context providers (Theme, Auth, etc.)
├── data/            # Static data (services, packages, testimonials, FAQ)
├── hooks/           # Custom React hooks
├── i18n/            # Internationalization config and translations
├── layouts/         # RootLayout (wraps all pages)
├── pages/           # Page-level components
│   ├── auth/        # Login, Register, ForgotPassword
│   ├── admin/       # Admin Dashboard
│   ├── customer/    # Customer Dashboard
│   ├── portfolio/   # Portfolio page
│   └── services/    # ServiceDetails page
├── routes/          # Route definitions
├── services/        # API / EmailJS service files
├── store/           # Zustand state stores
└── utils/           # Helper utilities
```

---

## 📄 Pages & Routes

| Route              | Page                  |
|--------------------|-----------------------|
| `/`                | Home                  |
| `/about`           | About Us              |
| `/why-choose-us`   | Why Choose Us         |
| `/services`        | All Services          |
| `/services/:id`    | Service Detail        |
| `/portfolio`       | Portfolio             |
| `/gallery`         | Gallery               |
| `/packages`        | Packages & Pricing    |
| `/testimonials`    | Testimonials          |
| `/faq`             | FAQ                   |
| `/contact`         | Contact Us            |
| `/booking`         | Book an Event         |
| `/calculator`      | Cost Calculator       |
| `/login`           | Login                 |
| `/register`        | Register              |
| `/forgot-password` | Forgot Password       |
| `/dashboard`       | Customer Dashboard 🔐 |
| `/admin`           | Admin Dashboard 🛡️   |

---

## 🎨 Design Theme

| Token       | Value           |
|-------------|-----------------|
| Primary     | `#C8102E` (Royal Red)  |
| Secondary   | `#D4AF37` (Gold)       |
| Accent      | `#FFFFFF` (White)      |
| Background  | `#FAFAFA`              |
| Text        | `#1F2937`              |
| Style       | Elegant · Luxury · Modern · Indian Traditional |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/yash-tent-light-decoration.git

# Navigate to the project folder
cd yash-tent-light-decoration

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 📧 EmailJS Setup

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create a **Service**, **Email Template**, and get your **Public Key**
3. Update the EmailJS credentials in `src/services/emailService.js` (or your `.env` file):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 📊 Services Offered

- 🎊 Wedding Decoration
- ⛺ Tent House
- 💡 Light Decoration
- 🎭 Stage Decoration
- 🌸 Flower Decoration
- 🎂 Birthday Decoration
- 💍 Engagement Decoration
- 🌿 Haldi Decoration
- 🎨 Mehendi Decoration
- 🥂 Reception Decoration
- 🎵 DJ Setup & Sound System
- 🍽️ Catering Arrangement
- 📋 Event Management
- 🪑 Furniture Rental

---

## 📦 Packages

| Package  | Highlights                                               |
|----------|----------------------------------------------------------|
| 🥈 Silver   | Tent, Lighting, Chairs, Stage                         |
| 🥇 Gold     | Premium Decor, LED Lighting, Floral, Catering Setup   |
| 💎 Platinum | Luxury Setup, Designer Stage, Premium Lighting, Full Event Management |

---

## 📝 License

This project is licensed under the terms of the [LICENSE](./LICENSE) file.

---

## 👨‍💻 Developer

**Author:** Sahil Yadav

Built with ❤️ for **Yash Tent & Light Decoration**

> For inquiries, event bookings, or support — visit the [Contact page](http://localhost:5173/contact) or reach out via WhatsApp.
