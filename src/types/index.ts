export interface Game {
  id: string;
  name: string;
  provider: string;
  rtp: number;
  category: 'crash' | 'slots' | 'live' | 'table' | 'indian' | 'mini';
  badge?: 'HOT' | 'NEW' | 'LIVE' | 'EXCLUSIVE';
  players: number;
  maxWinINR: number;
  imageSrc: string;
  gradientFallback: string;
  neonColor: string;
  emoji: string;
  waMessage: string;
}

export interface Bonus {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface LiveWin {
  id: number;
  avatar: string;
  name: string;
  amount: string;
  game: string;
  highlight: boolean;
}

export interface Match {
  id: number;
  league: string;
  leagueIcon: string;
  team1: string;
  team2: string;
  time: string;
  isLive: boolean;
  odds: {
    home: string;
    draw: string;
    away: string;
  };
}

export interface Tournament {
  id: number;
  name: string;
  prizePool: string;
  participants: number;
  maxParticipants: number;
  endsIn: number;
  topPrizes: string[];
}

export interface VIPTier {
  id: number;
  name: string;
  icon: string;
  range: string;
  benefits: string[];
  color: string;
}
