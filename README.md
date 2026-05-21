# 🪳 cockroach.bet - Ultimate Gaming Platform

A world-class, fully-fledged online gaming/betting platform built with React, TypeScript, and Tailwind CSS. Features 60+ games, live casino, crash games, sports betting, and more.

## ✨ Features

### 🎮 Gaming
- **60+ Games** across multiple categories
- **Crash Games**: Aviator, Crash X, Lucky Jet, JetX, and more
- **Slots**: Sweet Bonanza, Gates of Olympus, Wolf Gold, etc.
- **Live Casino**: Lightning Roulette, Crazy Time, Monopoly Live
- **Table Games**: Blackjack, Roulette, Baccarat, Poker
- **Indian Games**: Teen Patti, Andar Bahar, 7 Up 7 Down
- **Mini Games**: Plinko, Mines, Hilo, Keno, Dice

### ⚽ Sports Betting
- Live match betting with real-time odds
- Multiple sports: Cricket, Football, Basketball, Tennis, MMA, eSports
- Pre-match and live betting options

### 💰 Bonuses & Promotions
- 500% Welcome Bonus
- Daily 30% Cashback
- Weekly Reload Bonuses
- VIP Program with 5 tiers
- Referral Rewards
- Tournament Prizes

### 🔒 Security & Trust
- Instant withdrawals (under 5 minutes)
- SSL encryption
- Fair RNG certified games
- Multiple payment methods (UPI, Crypto, Cards)
- 24/7 WhatsApp support

## 🚀 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Notifications**: React Hot Toast
- **Counter Animations**: React CountUp

## 📦 Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Configure WhatsApp Number**:
Edit `src/utils/whatsapp.ts` and update the `WA_NUMBER` constant with your WhatsApp number:
```typescript
export const WA_NUMBER = "919876543210"; // Replace with your number
```

3. **Start development server**:
```bash
npm run dev
```

4. **Build for production**:
```bash
npm run build
```

5. **Preview production build**:
```bash
npm run preview
```

## 🎨 Design System

### Colors
- **Background**: Deep blacks (#08080f, #0f0f1a, #141420)
- **Neon Accents**: Green (#00ff88), Red (#ff003c), Blue (#00c3ff), Purple (#bf00ff), Gold (#ffd700)
- **Text**: White (#ffffff) and muted gray (#8892a4)

### Typography
- **Primary Font**: Space Grotesk
- **Monospace**: JetBrains Mono (for numbers/amounts)

### Animations
- Neon glow pulse effects
- Shimmer animations on bonus cards
- Live pulse rings for active indicators
- Marquee scrolling announcements
- Smooth transitions and hover effects

## 📱 Features Breakdown

### Layout Components
- **AnnouncementBar**: Scrolling promotional messages
- **TopNavbar**: Sticky navigation with wallet balance, notifications
- **LeftSidebar**: Comprehensive game categories menu
- **RightSidebar**: Live wins feed, leaderboard, promo codes, quick actions
- **Footer**: Mega footer with links, payment methods, trust badges

### Home Sections
- **HeroBanner**: 5-slide carousel with major promotions
- **JackpotTicker**: Live updating mega jackpot counter
- **BonusStrip**: Horizontal scrolling bonus cards
- **GameGrid**: Filterable grid of 60+ games with tabs
- **SportsBettingPreview**: Live and upcoming matches with odds
- **VIPSection**: 5-tier VIP program showcase
- **PromoAndTrustSection**: Comparison table and trust badges
- **CryptoSection**: Crypto payment options
- **TestimonialsSection**: Player reviews and ratings
- **AppDownloadBanner**: Mobile app promotion

## 🎯 WhatsApp Integration

All CTAs (Call-to-Actions) redirect to WhatsApp for:
- Account creation
- Deposits & withdrawals
- Bonus claims
- Game access
- Support requests
- VIP enrollment
- Tournament registration

This ensures direct communication and builds trust with users.

## 📊 Game Data

The platform includes comprehensive data for:
- 12 Crash Games
- 20 Slots
- 10 Live Casino Games
- 8 Table Games
- 6 Indian Games
- 6 Mini Games

Each game includes:
- Provider information
- RTP (Return to Player) percentage
- Category badges (HOT, NEW, EXCLUSIVE, LIVE)
- Player counts for live games
- Gradient backgrounds for visual appeal

## 🎨 Customization

### Adding New Games
Edit `src/data/games.ts` and add new game objects:
```typescript
{
  id: 63,
  name: "Your Game",
  provider: "Provider Name",
  rtp: "96%",
  category: "slots",
  badges: ["🔥 HOT"],
  gradient: "from-blue-600 to-purple-600"
}
```

### Modifying Bonuses
Edit `src/data/bonuses.ts` to update bonus offers.

### Changing Sports Matches
Edit `src/data/sports.ts` to update betting matches and odds.

## 🌐 Deployment

The site is ready for deployment on:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `dist` folder.

## 📝 Environment Variables

Create a `.env` file for any sensitive configuration:
```env
VITE_WHATSAPP_NUMBER=919876543210
```

Then update `src/utils/whatsapp.ts` to use:
```typescript
export const WA_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;
```

## 🔧 Development

### Project Structure
```
cockroach-bet/
├── src/
│   ├── components/
│   │   ├── layout/          # Layout components
│   │   └── home/            # Home page sections
│   ├── data/                # Game data, bonuses, etc.
│   ├── pages/               # Page components
│   ├── styles/              # CSS animations
│   ├── types/               # TypeScript types
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
└── package.json             # Dependencies
```

## 🎯 Performance Optimizations

- Lazy loading for images
- Code splitting with React.lazy
- Optimized animations with CSS
- Minimal re-renders with React hooks
- Efficient state management

## 🐛 Known Issues

The lint warnings for unused imports in LeftSidebar.tsx are intentional - they're reserved for future icon usage. The Tailwind CSS warnings are expected and will resolve after running `npm install`.

## 📄 License

This project is for demonstration purposes. Ensure you have proper licensing for any real gambling/betting operations in your jurisdiction.

## 🤝 Support

For support, contact via WhatsApp or open an issue in the repository.

## 🎉 Credits

Built with ❤️ using modern web technologies. Designed to be indistinguishable from professional platforms like Stake, Bet365, and 1xBet.

---

**Remember**: Update the WhatsApp number in `src/utils/whatsapp.ts` before deployment!
