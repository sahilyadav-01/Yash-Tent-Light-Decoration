<div align="center">

# 🎪 Yash Tent & Light Decoration

### *"Making Every Celebration Grand"*

A **modern, responsive, production-ready** React website for a premium event decoration company — offering tent, lighting, wedding, stage, and full event management services.

<br/>

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Zustand](https://img.shields.io/badge/Zustand-5-orange?style=for-the-badge)](https://zustand-demo.pmnd.rs/)
[![EmailJS](https://img.shields.io/badge/EmailJS-4-00C7B7?style=for-the-badge)](https://www.emailjs.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

</div>

---

## 📸 UI Highlights

| Section | Description |
|---|---|
| 🏠 **Hero** | Full-screen bg image, animated headline, Book Now + Gallery CTA buttons |
| 🗂️ **Navbar** | Sticky · Transparent-on-hero · Scrolled blur · Mobile drawer with AnimatePresence |
| 🌙 **Dark Mode** | One-click toggle via Zustand `useThemeStore` — persisted to localStorage |
| 🔍 **Global Search** | Instant site-wide search modal (`GlobalSearch.jsx`) |
| 📷 **Gallery** | Filterable categories · Masonry grid · Image Zoom (react-medium-image-zoom) |
| 💬 **Contact** | React Hook Form + EmailJS · Embedded Google Map · Sticky contact bar |
| 📅 **Booking** | Multi-step form · Success animation · Booking stored in Zustand |
| 🧮 **Calculator** | Event cost estimator with real-time breakdown + PDF export (jsPDF) |
| 📊 **Admin Panel** | Analytics charts (Recharts) · Manage bookings · Role-based access |
| 👤 **Customer Dashboard** | Personal bookings, profile overview, protected route |
| 🌍 **i18n** | English ↔ Hindi toggle — powered by react-i18next |

---

## 🎨 Design System

### Color Palette

| Role | Color | Preview |
|---|---|---|
| **Primary** | `#C8102E` — Royal Red | 🟥 |
| **Secondary** | `#D4AF37` — Gold | 🟨 |
| **Accent** | `#FFFFFF` — White | ⬜ |
| **Background** | `#FAFAFA` — Off White | 🔲 |
| **Text** | `#1F2937` — Dark Slate | ◼️ |

### Typography & Style
- **Font:** Serif for headings (`font-serif`) · System sans-serif for body
- **Style:** Elegant · Luxury · Modern · Indian Traditional Touch
- **Animations:** Fade Up · Zoom · Slide Left/Right · Parallax Hero · Card Lift

---

## 🧩 UI Components

```
src/components/
├── Navbar.jsx            # Sticky + transparent hero navbar, mobile drawer
├── Footer.jsx            # 4-column grid: About, Quick Links, Services, Contact
├── SectionHeading.jsx    # Reusable section title + subtitle block
├── ServiceCard.jsx       # Image + icon + description card with hover lift
├── common/
│   ├── GlobalSearch.jsx  # Full-screen search modal overlay
│   └── StickyContact.jsx # Floating WhatsApp + Back-to-Top buttons
├── auth/
│   └── ProtectedRoute.jsx # Role-based route guard (customer + admin)
└── customer/ & admin/    # Dashboard-specific sub-components
```

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|---|---|---|
| Framework | React | `^19` |
| Build Tool | Vite | `^8` |
| Routing | React Router DOM | `^7` |
| Styling | Tailwind CSS | `^4` |
| Animations | Framer Motion | `^12` |
| Icons | React Icons + Lucide React | `^5` / `^1` |
| Slider | Swiper.js | `^14` |
| Forms | React Hook Form | `^7` |
| Email | @emailjs/browser | `^4` |
| SEO | React Helmet Async | `^3` |
| State | Zustand | `^5` |
| HTTP | Axios | `^1` |
| Charts | Recharts | `^3` |
| PDF | jsPDF + jsPDF-AutoTable | `^4` / `^5` |
| Image Zoom | React Medium Image Zoom | `^5` |
| i18n | i18next + react-i18next | `^26` / `^17` |
| Before/After Slider | React Compare Slider | `^4` |
| Linting | Oxlint | `^1` |

---

## 📁 Folder Structure

```
src/
├── assets/              # Images, fonts, static media
├── components/          # Reusable UI components
│   ├── common/          # GlobalSearch, StickyContact
│   ├── auth/            # ProtectedRoute, AdminRoute
│   ├── customer/        # Customer-facing sub-components
│   └── admin/           # Admin sub-components
├── context/             # React Context providers
├── data/                # Static data files (services, packages, FAQ, testimonials)
├── hooks/               # Custom React hooks
├── i18n/                # i18next config + EN/HI translation files
├── layouts/             # RootLayout (Navbar + Outlet + Footer)
├── pages/               # Page-level components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Gallery.jsx
│   ├── Packages.jsx
│   ├── Testimonials.jsx
│   ├── WhyChooseUs.jsx
│   ├── Contact.jsx
│   ├── FAQ.jsx
│   ├── Booking.jsx
│   ├── Calculator.jsx
│   ├── auth/            # Login, Register, ForgotPassword
│   ├── admin/           # Admin Dashboard
│   ├── customer/        # Customer Dashboard
│   ├── portfolio/       # Portfolio
│   └── services/        # ServiceDetails
├── routes/              # Route definitions
├── services/            # EmailJS + API helpers
├── store/               # Zustand stores (auth, booking, theme)
└── utils/               # Helper utilities
```

---

## 📄 Pages & Routes

| Route | Page | Access |
|---|---|---|
| `/` | 🏠 Home | Public |
| `/about` | 📖 About Us | Public |
| `/why-choose-us` | ✅ Why Choose Us | Public |
| `/services` | 🛎️ All Services | Public |
| `/services/:id` | 🔎 Service Detail | Public |
| `/portfolio` | 🖼️ Portfolio | Public |
| `/gallery` | 📷 Gallery | Public |
| `/packages` | 📦 Packages & Pricing | Public |
| `/testimonials` | ⭐ Testimonials | Public |
| `/faq` | ❓ FAQ | Public |
| `/contact` | 📞 Contact Us | Public |
| `/booking` | 📅 Book an Event | Public |
| `/calculator` | 🧮 Cost Calculator | Public |
| `/login` | 🔑 Login | Public |
| `/register` | 📝 Register | Public |
| `/forgot-password` | 🔒 Forgot Password | Public |
| `/dashboard` | 👤 Customer Dashboard | 🔐 Protected |
| `/admin` | 🛡️ Admin Dashboard | 🔐 Admin Only |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>= 18`
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/yash-tent-light-decoration.git

# Navigate into the project
cd yash-tent-light-decoration

# Install dependencies
npm install
```

### Scripts

| Command | Action |
|---|---|
| `npm run dev` | Start development server → `http://localhost:5173` |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run Oxlint linter |

---

## 📧 EmailJS Configuration

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create a **Service**, **Email Template**, and copy your **Public Key**
3. Add credentials to your `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 🌍 Internationalization (i18n)

The app supports **English** and **Hindi** via `react-i18next`.

- Language toggle in Navbar (`FiGlobe` icon)
- Preference saved to `localStorage` as `yash_lang`
- Translation files located in `src/i18n/`

---

## 📊 Services Offered

| Category | Services |
|---|---|
| 💍 Weddings | Wedding Decoration, Engagement, Reception, Haldi, Mehendi |
| ⛺ Setup | Tent House, Stage Decoration, Flower Decoration |
| 💡 Lighting | Light Decoration, LED Lighting |
| 🎉 Events | Birthday Decoration, Event Management |
| 🎵 Audio/Visual | DJ Setup, Sound System |
| 🍽️ Logistics | Catering Arrangement, Furniture Rental |

---

## 📦 Packages

| Package | Features | Best For |
|---|---|---|
| 🥈 **Silver** | Tent · Lighting · Chairs · Stage | Budget ceremonies |
| 🥇 **Gold** | Premium Decor · LED Lighting · Floral · Catering | Mid-range weddings |
| 💎 **Platinum** | Luxury Setup · Designer Stage · Premium Lighting · Full Event Management | Grand celebrations |

---

## 📝 License

This project is licensed under the terms of the [LICENSE](./LICENSE) file.

---

## 👨‍💻 Developer

<div align="center">

**Author:** Sahil Yadav

Built with ❤️ for **Yash Tent & Light Decoration**

📍 Near S'K One Tech Support, Palawa, Rajasthan 301706
📞 +91 9680709044 · +91 9818222764
📧 info@yashtent.com

</div>
