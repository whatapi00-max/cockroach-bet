import { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, Users, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { wa, WA_MESSAGES } from '../../utils/whatsapp';
import { liveWins } from '../../data/liveWins';

export default function RightSidebar() {
  const [currentWinIndex, setCurrentWinIndex] = useState(0);
  const [promoCode, setPromoCode] = useState('');
  const [chatExpanded, setChatExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWinIndex((prev) => (prev + 1) % liveWins.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const visibleWins = [
    liveWins[currentWinIndex],
    liveWins[(currentWinIndex + 1) % liveWins.length],
    liveWins[(currentWinIndex + 2) % liveWins.length],
    liveWins[(currentWinIndex + 3) % liveWins.length],
    liveWins[(currentWinIndex + 4) % liveWins.length],
  ];

  const leaderboard = [
    { rank: 1, name: 'Rahul M.', amount: '₹10,25,000', emoji: '🥇' },
    { rank: 2, name: 'Priya K.', amount: '₹7,54,000', emoji: '🥈' },
    { rank: 3, name: 'Arjun W.', amount: '₹6,39,000', emoji: '🥉' },
    { rank: 4, name: 'Sneha P.', amount: '₹4,42,000', emoji: '4.' },
    { rank: 5, name: 'Dev R.', amount: '₹4,01,000', emoji: '5.' },
  ];

  return (
    <aside className="hidden xl:block w-72 bg-bg-tertiary border-l border-border-glow overflow-y-auto" style={{ height: 'calc(100vh - 120px)' }}>
      <div className="p-4 space-y-6">
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-text-primary">QUICK ACTIONS</h3>
          <button
            onClick={() => wa(WA_MESSAGES.deposit)}
            className="w-full px-4 py-3 bg-neon-green text-bg-primary font-bold rounded-lg hover:bg-neon-green/90 transition-all neon-pulse flex items-center justify-center gap-2"
          >
            <DollarSign size={18} />
            DEPOSIT
          </button>
          <button
            onClick={() => wa(WA_MESSAGES.withdraw)}
            className="w-full px-4 py-3 bg-transparent border-2 border-neon-gold text-neon-gold font-bold rounded-lg hover:bg-neon-gold/10 transition-all flex items-center justify-center gap-2"
          >
            <TrendingUp size={18} />
            WITHDRAW
          </button>
          <div className="text-xs text-text-muted text-center">Minimum: ₹100 deposit / ₹200 withdraw</div>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {['UPI', 'PhonePe', 'Paytm', 'GPay', 'USDT', 'BTC', 'ETH'].map((method) => (
              <span key={method} className="px-2 py-1 bg-bg-card rounded text-xs text-text-muted">
                {method}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
            🏆 Recent Big Wins
          </h3>
          <div className="space-y-2 bg-bg-card rounded-lg p-3">
            {visibleWins.map((win, idx) => (
              <div
                key={`${win.id}-${idx}`}
                className={`slide-in-right p-2 rounded ${win.highlight ? 'bg-neon-gold/10 border border-neon-gold/30' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{win.avatar}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-text-primary truncate">{win.name}</div>
                    <div className="text-xs text-text-muted truncate">{win.game}</div>
                  </div>
                  <div className={`text-sm font-bold font-mono ${win.highlight ? 'text-neon-gold' : 'text-neon-green'}`}>
                    {win.amount}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
            <Users size={16} className="text-neon-green" />
            ONLINE NOW
          </h3>
          <div className="bg-bg-card rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-bold text-neon-green font-mono">5,821</span>
              <span className="text-xs text-text-muted">players online</span>
            </div>
            <div className="w-full bg-bg-tertiary rounded-full h-2">
              <div className="bg-gradient-to-r from-neon-green to-neon-blue h-2 rounded-full" style={{ width: '72%' }}></div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-text-primary">TODAY'S LEADERBOARD</h3>
          <div className="bg-bg-card rounded-lg p-3 space-y-2">
            {leaderboard.map((player) => (
              <div key={player.rank} className="flex items-center gap-2">
                <span className="text-sm w-6">{player.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium text-text-primary truncate">{player.name}</div>
                </div>
                <div className="text-sm font-bold font-mono text-neon-green">{player.amount}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-text-primary">PROMO CODE</h3>
          <div className="bg-bg-card rounded-lg p-3 space-y-2">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter promo code"
              className="w-full px-3 py-2 bg-bg-tertiary border border-border-glow rounded text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-neon-green"
            />
            <button
              onClick={() => wa(WA_MESSAGES.promoCode(promoCode))}
              className="w-full px-3 py-2 bg-neon-green/10 border border-neon-green/30 text-neon-green font-medium rounded text-sm hover:bg-neon-green/20 transition-all"
            >
              APPLY
            </button>
            <div className="text-xs text-text-muted text-center">
              Use code: <span className="text-neon-green font-bold">COCKROACH500</span> for extra 50%
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => { setChatExpanded(!chatExpanded); wa('Hi! I want to use the live chat on cockroach.bet'); }}
            className="w-full flex items-center justify-between text-sm font-bold text-text-primary"
          >
            <span className="flex items-center gap-2">
              <MessageCircle size={16} className="text-neon-blue" />
              LIVE CHAT
            </span>
            {chatExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {chatExpanded && (
            <div className="bg-bg-card rounded-lg p-3 space-y-2">
              <div className="space-y-2 max-h-40 overflow-y-auto">
                <div className="text-xs">
                  <span className="font-bold text-neon-green">Rahul:</span>
                  <span className="text-text-muted ml-1">Just won big on Aviator! 🚀</span>
                </div>
                <div className="text-xs">
                  <span className="font-bold text-neon-blue">Priya:</span>
                  <span className="text-text-muted ml-1">Withdrawal was instant! 💰</span>
                </div>
                <div className="text-xs">
                  <span className="font-bold text-neon-purple">Dev:</span>
                  <span className="text-text-muted ml-1">Best site ever! 🔥</span>
                </div>
              </div>
              <input
                type="text"
                placeholder="Type a message..."
                onClick={() => wa(WA_MESSAGES.support)}
                className="w-full px-3 py-2 bg-bg-tertiary border border-border-glow rounded text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-neon-green cursor-pointer"
                readOnly
              />
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
