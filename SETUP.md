# 🚀 Quick Setup Guide

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

This will install all required packages:
- React & React DOM
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- React Router DOM
- React CountUp
- React Hot Toast
- And more...

### 2. Configure WhatsApp Number
**IMPORTANT**: Before running the site, update your WhatsApp number!

Open `src/utils/whatsapp.ts` and change:
```typescript
export const WA_NUMBER = "919876543210"; // Replace with YOUR WhatsApp number
```

Format: Country code + number (no spaces, no +)
- India: 919876543210
- USA: 14155552671
- UK: 447700900123

### 3. Start Development Server
```bash
npm run dev
```

The site will open at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```

Output will be in the `dist/` folder, ready to deploy!

## 🎨 Customization

### Change Colors
Edit `tailwind.config.ts` to modify the color scheme:
```typescript
colors: {
  'neon-green': '#00ff88',  // Change to your brand color
  'neon-red': '#ff003c',
  // ... etc
}
```

### Add/Remove Games
Edit `src/data/games.ts` to modify the game library.

### Update Bonuses
Edit `src/data/bonuses.ts` to change promotional offers.

### Modify Sports Matches
Edit `src/data/sports.ts` to update betting odds and matches.

## 📱 Testing

### Desktop
- Open in Chrome/Firefox/Edge at `localhost:5173`
- Test all sections scroll smoothly
- Verify all WhatsApp links work

### Mobile
- Open on your phone using your local IP
- Example: `http://192.168.1.100:5173`
- Test responsive design
- Verify touch interactions

### Tablet
- Test sidebar visibility breakpoints
- Verify game grid layouts

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Build Errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Tailwind Not Working
Ensure `postcss.config.js` and `tailwind.config.ts` exist and are properly configured.

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project on Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Drag `dist/` folder to Netlify
3. Done!

### Manual Hosting
1. Run `npm run build`
2. Upload `dist/` contents to your web server
3. Configure server for SPA routing

## ⚠️ Important Notes

1. **WhatsApp Number**: Must be updated before deployment
2. **Legal Compliance**: Ensure gambling is legal in your jurisdiction
3. **Age Verification**: Implement proper 18+ verification
4. **Payment Integration**: WhatsApp links are placeholders - integrate real payment gateway
5. **Game Integration**: Current games are visual only - integrate real game providers
6. **Licensing**: Obtain proper gambling licenses before going live

## 📞 Support

For issues or questions:
- Check the main README.md
- Review component documentation
- Test in different browsers
- Verify all dependencies installed

## ✅ Pre-Launch Checklist

- [ ] WhatsApp number updated
- [ ] All links tested
- [ ] Responsive design verified
- [ ] Performance optimized
- [ ] SEO meta tags added
- [ ] Analytics integrated
- [ ] Legal disclaimers added
- [ ] Age verification implemented
- [ ] Payment system integrated
- [ ] Customer support ready
- [ ] Licenses obtained
- [ ] Terms & conditions published
- [ ] Privacy policy added
- [ ] Responsible gambling tools added

---

**Ready to launch? Run `npm run build` and deploy! 🚀**
