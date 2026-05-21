import { ArrowRight } from 'lucide-react';
import { matches } from '../../data/sports';
import { wa, WA_MESSAGES } from '../../utils/whatsapp';

export default function SportsBettingPreview() {
  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-text-primary bg-gradient-to-r from-neon-blue via-cyan-400 to-neon-blue bg-clip-text text-transparent animate-gradient-x">⚽ SPORTS BETTING</h2>
        <button
          onClick={() => wa('Hi! I want to BET ON SPORTS on cockroach.bet')}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-cyan-400 text-bg-primary font-bold rounded-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(0,100,255,0.5)] transition-all animate-gradient-x"
        >
          <span>BET NOW ON ALL SPORTS</span>
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {matches.map((match) => (
          <div
            key={match.id}
            className="bg-gradient-to-br from-bg-card to-bg-tertiary border border-border-glow rounded-xl p-4 hover:shadow-xl hover:shadow-[0_0_30px_rgba(0,100,255,0.3)] transition-all glow-pulse-subtle"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-neon-red animate-pulse">🔴 LIVE</span>
              <span className="text-xs text-text-muted">{match.time}</span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-text-primary">{match.team1}</span>
              <span className="text-xs text-text-muted">vs</span>
              <span className="text-sm font-bold text-text-primary">{match.team2}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => wa(WA_MESSAGES.betMatch(match.team1, match.odds.home))}
                className="flex-1 px-3 py-2 bg-bg-tertiary hover:bg-neon-green/10 border border-border-glow hover:border-neon-green rounded-lg transition-all hover:scale-105"
              >
                <div className="text-xs text-text-muted">{match.team1}</div>
                <div className="text-sm font-bold text-neon-green">{match.odds.home}</div>
              </button>
              <button
                onClick={() => wa(WA_MESSAGES.betMatch('Draw', match.odds.draw))}
                className="flex-1 px-3 py-2 bg-bg-tertiary hover:bg-neon-green/10 border border-border-glow hover:border-neon-green rounded-lg transition-all hover:scale-105"
              >
                <div className="text-xs text-text-muted">Draw</div>
                <div className="text-sm font-bold text-neon-green">{match.odds.draw}</div>
              </button>
              <button
                onClick={() => wa(WA_MESSAGES.betMatch(match.team2, match.odds.away))}
                className="flex-1 px-3 py-2 bg-bg-tertiary hover:bg-neon-green/10 border border-border-glow hover:border-neon-green rounded-lg transition-all hover:scale-105"
              >
                <div className="text-xs text-text-muted">{match.team2}</div>
                <div className="text-sm font-bold text-neon-green">{match.odds.away}</div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
