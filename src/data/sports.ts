import { Match } from '../types';

export const matches: Match[] = [
  {
    id: 1,
    league: "IPL",
    leagueIcon: "🏏",
    team1: "Mumbai Indians",
    team2: "Chennai Super Kings",
    time: "LIVE",
    isLive: true,
    odds: { home: "1.85", draw: "3.40", away: "2.10" }
  },
  {
    id: 2,
    league: "EPL",
    leagueIcon: "⚽",
    team1: "Arsenal",
    team2: "Man City",
    time: "Tomorrow 8:00 PM",
    isLive: false,
    odds: { home: "2.20", draw: "3.30", away: "3.10" }
  },
  {
    id: 3,
    league: "NBA",
    leagueIcon: "🏀",
    team1: "Lakers",
    team2: "Warriors",
    time: "Tonight 6:30 AM",
    isLive: false,
    odds: { home: "1.95", draw: "—", away: "1.90" }
  },
  {
    id: 4,
    league: "Tennis",
    leagueIcon: "🎾",
    team1: "Djokovic",
    team2: "Alcaraz",
    time: "LIVE",
    isLive: true,
    odds: { home: "1.75", draw: "—", away: "2.05" }
  },
  {
    id: 5,
    league: "UFC",
    leagueIcon: "🥊",
    team1: "Main Event",
    team2: "Co-Main",
    time: "Saturday",
    isLive: false,
    odds: { home: "1.65", draw: "—", away: "2.25" }
  },
  {
    id: 6,
    league: "La Liga",
    leagueIcon: "⚽",
    team1: "Real Madrid",
    team2: "Barcelona",
    time: "Sunday",
    isLive: false,
    odds: { home: "2.10", draw: "3.20", away: "3.40" }
  }
];
