# ✨ Sparklus Lamps - Luxury Lighting Website

A premium, single-page React website for luxury lighting products with an elegant black theme, smooth animations, and full responsiveness.

## 🚀 Quick Start

```bash
# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📚 Documentation

This project includes **7 comprehensive guides**:

1. **[START_HERE.md](START_HERE.md)** ⭐ - **READ THIS FIRST!**
2. **[QUICK_START.md](QUICK_START.md)** - Get running in 3 steps
3. **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Detailed configuration
4. **[PROJECT_README.md](PROJECT_README.md)** - Full documentation
5. **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Features overview
6. **[CHECKLIST.md](CHECKLIST.md)** - Development tracker
7. **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** - Problem solving

## ✨ Features

- 🎨 **Black Luxury Theme** - Professional gold & black design
- ⚡ **Smooth Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Works on all devices
- 📧 **EmailJS Integration** - Working contact forms
- 🎠 **Product Carousels** - Image galleries with React Slick
- 📄 **Policy Pages** - Privacy, Terms, Cookie policies
- 🔗 **Social Media Integration** - Connected social links

## 📂 Project Structure

```
src/
├── components/          # All UI components (10 sections)
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── PastWorks/
│   ├── Statistics/
│   ├── CustomizationForm/
│   ├── Products/
│   ├── FAQs/
│   ├── BulkInquiry/
│   └── Footer/
├── pages/              # Policy pages
├── constants/          # All content (EDIT HERE!)
├── assets/            # Images
└── styles/            # Global CSS
```

## 🎯 Quick Customization

**All content is in one file:** `src/constants/index.js`

Edit this file to change:

- Company information
- Products
- FAQs
- Contact details
- And more!

## 📧 EmailJS Setup Required

The contact form needs EmailJS configuration:

1. Create account at [EmailJS.com](https://www.emailjs.com/)
2. Set up email service
3. Create template
4. Update IDs in `src/constants/index.js`

See [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed steps.

## 🛠️ Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **Framer Motion** - Animations
- **React Slick** - Carousels
- **EmailJS** - Email service
- **React Icons** - Icons

## 📱 Responsive Breakpoints

- Desktop: >1024px
- Tablet: 768-1024px
- Mobile: <768px

## 🚀 Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📝 Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
```

## 🎨 Customization

### Change Colors

Edit `src/styles/index.css`:

```css
:root {
  --accent-gold: #d4af37; /* Your color */
}
```

### Add Products

Edit `src/constants/index.js`:

```javascript
export const products = [
  {
    id: 1,
    name: "Product Name",
    // ... more properties
  },
];
```

## 📸 Adding Images

1. Place images in `src/assets/images/`
2. Update paths in `src/constants/index.js`
3. Optimize for web (<200KB each)

## ✅ What's Included

- ✅ 10 Complete Sections
- ✅ 3 Policy Pages
- ✅ Smooth Animations
- ✅ Email Integration
- ✅ Image Carousels
- ✅ Mobile Responsive
- ✅ SEO Friendly
- ✅ Professional Design

## 🎯 Getting Help

1. Check [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
2. Review [SETUP_GUIDE.md](SETUP_GUIDE.md)
3. Use [CHECKLIST.md](CHECKLIST.md) to track progress

## 📄 License

© 2025 Sparklus Lamps. All rights reserved.

## 🌟 Ready to Start?

**Read [START_HERE.md](START_HERE.md) for your next steps!**

```bash
npm run dev
```

---

**Built with ❤️ using React + Vite**
