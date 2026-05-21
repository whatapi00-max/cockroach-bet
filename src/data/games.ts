import { Game } from '../types';

export const games: Game[] = [
  // CRASH GAMES
  {
    id: 'aviator',
    name: 'Aviator',
    provider: 'Spribe',
    rtp: 97,
    category: 'crash',
    badge: 'HOT',
    players: 3247,
    maxWinINR: 8700000,
    imageSrc: '/images/games/Aviator.jpg',
    gradientFallback: 'linear-gradient(135deg, #1a0000, #ff003c, #ff6b00)',
    neonColor: '#ff003c',
    emoji: '✈️',
    waMessage: 'Hi! I want to play Aviator on cockroach.bet 🚀'
  },
  {
    id: 'crash-x',
    name: 'Crash X',
    provider: 'Turbo Games',
    rtp: 96,
    category: 'crash',
    badge: 'HOT',
    players: 1823,
    maxWinINR: 5000000,
    imageSrc: '/images/games/Crashx Trubo Game.jpg',
    gradientFallback: 'linear-gradient(135deg, #000a1a, #00c3ff, #0044ff)',
    neonColor: '#00c3ff',
    emoji: '💥',
    waMessage: 'Hi! I want to play Crash X on cockroach.bet 💥'
  },
  {
    id: 'lucky-jet',
    name: 'Lucky Jet',
    provider: 'Gaming Corps',
    rtp: 97,
    category: 'crash',
    badge: 'NEW',
    players: 2104,
    maxWinINR: 6500000,
    imageSrc: '/images/games/Lucky Jet.jpg',
    gradientFallback: 'linear-gradient(135deg, #0a001a, #bf00ff, #7700cc)',
    neonColor: '#bf00ff',
    emoji: '🚀',
    waMessage: 'Hi! I want to play Lucky Jet on cockroach.bet ✈️'
  },
  {
    id: 'cockroach-crash',
    name: 'Cockroach Crash',
    provider: 'cockroach.bet',
    rtp: 98,
    category: 'crash',
    badge: 'EXCLUSIVE',
    players: 892,
    maxWinINR: 10000000,
    imageSrc: '/images/games/Cockroach crash.jpg',
    gradientFallback: 'linear-gradient(135deg, #001a00, #00ff88, #00cc44)',
    neonColor: '#00ff88',
    emoji: '🪳',
    waMessage: 'Hi! I want to play Cockroach Crash EXCLUSIVE on cockroach.bet! 🪳'
  },
  {
    id: 'balloon',
    name: 'Balloon',
    provider: 'SmartSoft',
    rtp: 96,
    category: 'crash',
    players: 987,
    maxWinINR: 3800000,
    imageSrc: '/images/games/Ballon.jpg',
    gradientFallback: 'linear-gradient(135deg, #1a0010, #ff1493, #ff69b4)',
    neonColor: '#ff1493',
    emoji: '🎈',
    waMessage: 'Hi! I want to play Balloon on cockroach.bet'
  },
  {
    id: 'jetx',
    name: 'JetX',
    provider: 'SmartSoft',
    rtp: 96.5,
    category: 'crash',
    players: 1456,
    maxWinINR: 4500000,
    imageSrc: '/images/games/Jetx.jpg',
    gradientFallback: 'linear-gradient(135deg, #1a001a, #ff00ff, #cc00cc)',
    neonColor: '#ff00ff',
    emoji: '🎢',
    waMessage: 'Hi! I want to play JetX on cockroach.bet'
  },

  // SLOTS
  {
    id: 'sweet-bonanza',
    name: 'Sweet Bonanza',
    provider: 'Pragmatic Play',
    rtp: 96.5,
    category: 'slots',
    badge: 'HOT',
    players: 4521,
    maxWinINR: 21000000,
    imageSrc: '/images/games/Sweet Bonanza.jpg',
    gradientFallback: 'linear-gradient(135deg, #1a0020, #ff00aa, #ff6b9d)',
    neonColor: '#ff00aa',
    emoji: '🍭',
    waMessage: 'Hi! I want to play Sweet Bonanza on cockroach.bet 🍭'
  },

  // LIVE CASINO
  {
    id: 'lightning-roulette',
    name: 'Lightning Roulette',
    provider: 'Evolution',
    rtp: 97.3,
    category: 'live',
    badge: 'LIVE',
    players: 1247,
    maxWinINR: 50000000,
    imageSrc: '/images/games/Lightning Roulette.jpg',
    gradientFallback: 'linear-gradient(135deg, #1a0a00, #ffd700, #ff8c00)',
    neonColor: '#ffd700',
    emoji: '⚡',
    waMessage: 'Hi! I want to play Lightning Roulette LIVE on cockroach.bet'
  },

  // INDIAN GAMES

  // TABLE GAMES
  {
    id: 'blackjack',
    name: 'Blackjack Classic',
    provider: 'NetEnt',
    rtp: 99.5,
    category: 'table',
    players: 1234,
    maxWinINR: 8200000,
    imageSrc: '/images/games/Blackjack.jpg',
    gradientFallback: 'linear-gradient(135deg, #001a00, #006400, #228b22)',
    neonColor: '#006400',
    emoji: '🂡',
    waMessage: 'Hi! I want to play Blackjack on cockroach.bet'
  },

  // MINI GAMES
  {
    id: 'plinko',
    name: 'Plinko',
    provider: 'Spribe',
    rtp: 97,
    category: 'mini',
    badge: 'NEW',
    players: 1543,
    maxWinINR: 4100000,
    imageSrc: '/images/games/Plinko.jpg',
    gradientFallback: 'linear-gradient(135deg, #001a1a, #00ced1, #40e0d0)',
    neonColor: '#00ced1',
    emoji: '🎯',
    waMessage: 'Hi! I want to play Plinko on cockroach.bet'
  },
];
