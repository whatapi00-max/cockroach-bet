import { useState } from 'react';
import { X } from 'lucide-react';
import { wa } from '../../utils/whatsapp';

const announcements = [
  "🪳 Cockroach Never Quits. Neither Do We.",
  "💰 3% BONUS on Every Deposit — Automatically Added!",
  "⚡ New Game ADDED: Cockroach Crash LIVE NOW",
  "🏆 Tournament starts in 2 hours — Prize pool: ₹10,00,000",
  "💎 VIP members get 30% extra cashback TODAY only",
  "🎁 3% Deposit Bonus — Every Single Time, No Limit!"
];

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-gradient-to-r from-neon-green/10 via-neon-blue/10 to-neon-purple/10 border-b border-border-glow overflow-hidden">
      <div className="marquee whitespace-nowrap py-2 px-4 text-sm font-medium text-text-primary">
        {announcements.map((text, i) => (
          <span key={i} className="inline-block mx-8">{text}</span>
        ))}
        {announcements.map((text, i) => (
          <span key={`dup-${i}`} className="inline-block mx-8">{text}</span>
        ))}
      </div>
      <button
        onClick={() => { setVisible(false); wa('Hi! I want to know more about the announcements on cockroach.bet'); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
}
