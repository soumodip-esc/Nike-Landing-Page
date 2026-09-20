# Nike Landing Page 👟

A modern, responsive Nike-inspired footwear landing page built with **React**, **Vite**, and **Tailwind CSS**. The project focuses on clean UI design, reusable components, responsive layouts, and interactive product selection.

## ✨ Features

- Responsive navigation bar for desktop and mobile screens
- Mobile hamburger menu with toggle functionality
- Hero section featuring Nike shoe collections
- Interactive shoe thumbnail selection in the hero section
- Popular products section
- Super-quality shoes section
- Services section with reusable service cards
- Special offers section with call-to-action buttons
- Customer reviews section
- Newsletter subscription section
- Footer with navigation links and social media icons
- Custom Tailwind CSS colors, fonts, spacing, and utility classes

## 🛠️ Technologies Used

- **React.js** - Building reusable user interface components
- **Vite** - Frontend development and build tool
- **Tailwind CSS** - Styling and responsive design
- **JavaScript (ES6+)** - Application logic
- **Google Fonts** - Montserrat and Palanquin typography

## 📁 Project Structure

```text
project-root/
├── public/
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Nav.jsx
│   │   ├── ReviewCard.jsx
│   │   ├── ServiceCard.jsx
│   │   └── ShoeCard.jsx
│   │   └── index.js
│   ├── constants/
│   │   └── index.js
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── PopularProducts.jsx
│   │   ├── SuperQuality.jsx
│   │   ├── Services.jsx
│   │   ├── SpecialOffer.jsx
│   │   ├── CustomerReview.jsx
│   │   ├── Subscribe.jsx
│   │   └── Footer.jsx
│   │   └── index.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Open the project directory

```bash
cd <project-folder>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

## 📦 Available Scripts

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | Starts the development server |
| `npm run build`   | Creates a production build    |
| `npm run preview` | Previews the production build |
| `npm run lint`    | Checks the code using ESLint  |

## 🎨 Styling

The project uses Tailwind CSS with customized:

- **Fonts:** Montserrat and Palanquin
- **Colors:** Coral red, primary blue, slate gray, and pale blue
- **Responsive breakpoints:** Including a custom `wide` breakpoint
- **Reusable utility classes:** Such as `padding`, `padding-x`, `padding-y`, and `max-container`
- **Background images:** Hero and product thumbnail backgrounds
- **Custom shadow:** Used for service cards

## 🧩 Component Overview

### Reusable Components

- **Button:** Reusable button with optional icons, colors, borders, and full-width styling
- **Nav:** Responsive navigation with a mobile menu
- **ShoeCard:** Displays shoe thumbnails and changes the main hero image when selected
- **ServiceCard:** Displays a service icon, title, and description
- **ReviewCard:** Displays customer information, feedback, and rating

### Page Sections

The main application combines the navigation bar and the following sections:

1. Hero
2. Popular Products
3. Super Quality
4. Services
5. Special Offer
6. Customer Reviews
7. Newsletter Subscription
8. Footer

## 📱 Responsive Design

The layout is designed to work across:

- Mobile devices
- Tablets
- Laptops
- Large desktop screens

Tailwind CSS responsive classes are used to adjust typography, spacing, grids, navigation, and section layouts.

## 🔮 Future Improvements

- Add functional shopping cart support
- Add product detail pages
- Connect products to a backend or API
- Add form validation for newsletter subscriptions
- Add smooth animations and page transitions
- Add product filtering and search
- Improve accessibility and keyboard navigation

## 👨‍💻 Author

**Soumodip Mondal**

## 📄 License

This project is intended for learning and portfolio purposes. Nike branding, logos, and related assets belong to their respective owners.
