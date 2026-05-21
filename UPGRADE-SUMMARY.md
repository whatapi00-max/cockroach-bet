# 🪳 cockroach.bet - INR + Premium Cards Upgrade Complete

## ✅ What's Been Upgraded

### 1. **INR Currency System** - COMPLETE
- ✅ Created `src/utils/currency.ts` with `formatINR()` and `formatINRCompact()` functions
- ✅ All amounts converted from USD ($) to Indian Rupees (₹)
- ✅ Indian number formatting (lakhs/crores): ₹10,25,000 instead of ₹1,025,000

### 2. **Premium Game Cards** - COMPLETE
- ✅ New `Game` interface with premium properties:
  - `id`: string (e.g., 'aviator')
  - `maxWinINR`: number (max win in rupees)
  - `imageSrc`: string (path to game image)
  - `gradientFallback`: string (CSS gradient if image fails)
  - `neonColor`: string (card's accent color)
  - `emoji`: string (game emoji for fallback)
  - `waMessage`: string (custom WhatsApp message)
  - `badge`: 'HOT' | 'NEW' | 'LIVE' | 'EXCLUSIVE'
  - `players`: number (current player count)

- ✅ Created `GameCard.tsx` component with:
  - Image-first design (400×260px aspect ratio)
  - Gradient fallback with emoji if image fails
  - Hover effects with neon glow
  - Hidden play buttons (appear only on hover)
  - RTP badge, player count, max win display
  - Favorite heart icon
  - Demo mode option

### 3. **Updated Game Data** - 24 Premium Games
All games now have:
- INR max win amounts
- Image paths (`/images/games/[game-id].jpg`)
- Unique gradient fallbacks
- Custom neon colors
- Emojis for visual fallback
- Custom WhatsApp messages

**Game Categories:**
- 🚀 Crash Games: 6 games (Aviator, Crash X, Lucky Jet, Cockroach Crash, JetX, Balloon)
- 🎰 Slots: 6 games (Sweet Bonanza, Gates of Olympus, Big Bass Bonanza, Wolf Gold, Book of Dead, Money Train 3)
- 🔴 Live Casino: 3 games (Lightning Roulette, Crazy Time, Monopoly Live)
- 🇮🇳 Indian Games: 3 games (Teen Patti, Andar Bahar, Dragon vs Tiger)
- 🃏 Table Games: 2 games (Blackjack, Roulette)
- 🎯 Mini Games: 3 games (Plinko, Mines, Dice)

### 4. **INR Conversions Across Site**

#### Jackpot Ticker
- Mega Jackpot: ₹23,47,83,000 (counting up ₹1-50 every 50ms)
- Daily Drop: ₹39,84,000 (counting up ₹1-20 every 50ms)

#### Live Wins Feed
- All 20 wins converted to INR
- Example: "Rahul M. won ₹10,25,000 on Crazy Time"

#### Bonuses
- Welcome Bonus: ₹4,00,000 (was $5,000)
- Refer a Friend: ₹8,000 per referral (was $100)
- Tournament Entry: ₹4,100 chips (was $50)

#### Leaderboard
- 1st: ₹10,25,000
- 2nd: ₹7,54,000
- 3rd: ₹6,39,000
- 4th: ₹4,42,000
- 5th: ₹4,01,000

#### VIP Tiers
- 🥉 Bronze: ₹0 – ₹40,000
- 🥈 Silver: ₹40,000 – ₹1,60,000
- 🥇 Gold: ₹1,60,000 – ₹8,20,000
- 💎 Diamond: ₹8,20,000 – ₹41,00,000
- 👑 Royal: ₹41,00,000+

#### Deposit/Withdraw
- Minimum deposit: ₹100
- Minimum withdraw: ₹200

#### Hero Banner
- Tournament prize pool: ₹8,20,000

### 5. **Premium Card CSS** - COMPLETE
Added to `src/styles/animations.css`:
- `.gameCard` base styles
- Neon glow hover effect using CSS variables
- `pulseLive` animation for LIVE badges

### 6. **Updated Components**
- ✅ `GameCard.tsx` - New premium card component
- ✅ `GameGrid.tsx` - Uses new GameCard component
- ✅ `JackpotTicker.tsx` - INR amounts
- ✅ `RightSidebar.tsx` - INR leaderboard & minimums
- ✅ `VIPSection.tsx` - INR tier ranges
- ✅ `HeroBanner.tsx` - INR prize pools
- ✅ `liveWins.ts` - All amounts in INR
- ✅ `bonuses.ts` - All amounts in INR

## 📸 Game Images - TODO

You need to add game images to `/public/images/games/`:

```
/public/images/games/
├── aviator.jpg
├── crash-x.jpg
├── lucky-jet.jpg
├── cockroach-crash.jpg
├── jetx.jpg
├── balloon.jpg
├── sweet-bonanza.jpg
├── gates-of-olympus.jpg
├── big-bass-bonanza.jpg
├── wolf-gold.jpg
├── book-of-dead.jpg
├── money-train-3.jpg
├── lightning-roulette.jpg
├── crazy-time.jpg
├── monopoly-live.jpg
├── teen-patti.jpg
├── andar-bahar.jpg
├── dragon-tiger.jpg
├── blackjack.jpg
├── roulette.jpg
├── plinko.jpg
├── mines.jpg
└── dice.jpg
```

**Image Requirements:**
- Size: 400×300px (3:4 aspect ratio)
- Format: JPG or WebP
- Quality: High (casino game thumbnails)
- Style: Dark background, neon accents, game-specific

**If images are missing:**
- Cards will automatically show gradient fallback with emoji
- Still looks premium!

## 🎨 Premium Card Features

### Default State
- Game image fills card
- Provider badge (top-left)
- RTP badge (top-right)
- HOT/NEW/LIVE/EXCLUSIVE badge (if applicable)
- Bottom gradient overlay with:
  - Game name (bold)
  - Provider name (muted)
  - Player count (👥 icon)
  - Max win in INR (₹ with compact format)

### Hover State (300ms smooth transition)
- Card scales to 104% and lifts up
- Neon glow border (using game's neon color)
- Image dims to 65% brightness
- Favorite heart icon appears (top-right)
- Bottom overlay expands
- **PLAY NOW** button appears (neon colored)
- **Demo Mode** button appears (subtle)

### Badge Colors
- 🔥 **HOT**: Red to orange gradient
- ✨ **NEW**: Blue to cyan gradient
- 🔴 **LIVE**: Red with pulsing animation
- 💎 **EXCLUSIVE**: Gold to orange gradient

## 🚀 Next Steps

1. **Install dependencies** (if not done):
   ```bash
   npm install
   ```

2. **Create images folder**:
   ```bash
   mkdir -p public/images/games
   ```

3. **Add game images** (23 images needed)
   - Use AI image generation (DALL-E, Midjourney, Stable Diffusion)
   - Or use gradient fallbacks (already implemented)

4. **Start dev server**:
   ```bash
   npm run dev
   ```

5. **Test the site**:
   - Check all amounts show ₹ (no $)
   - Hover over game cards to see premium effects
   - Verify neon glow colors
   - Test WhatsApp links
   - Check responsive design

## 💡 Key Features

### Premium Design Elements
- ✅ No play button visible by default (cleaner look)
- ✅ Buttons appear only on hover (premium feel)
- ✅ Neon glow effects per game
- ✅ Smooth 300ms transitions
- ✅ Image-first with smart fallbacks
- ✅ Indian number formatting throughout
- ✅ Live updating jackpot in INR
- ✅ Compact INR display (₹8.7 Cr instead of ₹8,70,00,000)

### Mobile Responsive
- 2 columns on mobile
- 3 columns on tablet
- 5 columns on desktop
- 6 columns on XL screens
- Touch-friendly card sizes

## 📝 Notes

- All WhatsApp messages are game-specific
- Currency utility functions handle Indian formatting
- Gradient fallbacks ensure cards always look good
- CSS variables allow per-card neon colors
- Lazy loading on images for performance
- Favorite functionality ready (just UI, no backend)

## 🎯 What Makes This Premium

1. **Image-First Design**: Real game thumbnails, not just gradients
2. **Hidden CTAs**: Buttons appear on hover only (like Stake.com)
3. **Neon Glow Effects**: Each game has its own accent color
4. **Smart Fallbacks**: Gradient + emoji if image fails
5. **INR Throughout**: No mixing of currencies
6. **Indian Formatting**: Lakhs and crores (₹10,25,000)
7. **Smooth Animations**: 300ms transitions everywhere
8. **Live Indicators**: Pulsing red dot for live games
9. **Player Counts**: Real-time feel with player numbers
10. **Max Win Display**: Shows potential in compact INR format

---

**Status**: ✅ READY TO USE

Run `npm install` then `npm run dev` to see the upgraded platform!
