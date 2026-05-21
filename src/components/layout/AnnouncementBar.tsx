import { useState } from 'react';
import { X } from 'lucide-react';
import { wa } from '../../utils/whatsapp';

const announcements = [
  "🪳 Cockroach Never Quits. Neither Do We. — cockroach.bet",
  "💰 3% BONUS on Every Deposit on cockroach.bet — Automatically Added!",
  "🏆 Rahul from Mumbai just WON ₹82,000 on cockroach.bet!",
  "🎉 Priya from Delhi is WINNING on cockroach.bet right now!",
  "⚡ Active Bonus on cockroach.bet: 500% Welcome Bonus — Claim Now!",
  "🔥 Dev from Chennai withdrew ₹45,000 from cockroach.bet in 3 mins!",
  "🎁 Active Bonus: 3% on EVERY Deposit on cockroach.bet — No Limit!",
  "💎 Arjun is WINNING big on Aviator at cockroach.bet — Join Now!",
  "🏆 cockroach.bet Tournament LIVE — ₹10,00,000 Prize Pool!",
  "🪳 Play on cockroach.bet — The platform that NEVER quits!",
  "💸 Sneha from Hyderabad just hit x1000 on cockroach.bet Crash!",
  "✅ Active Bonus on cockroach.bet: Daily Cashback 30% — Claim Today!"
];

const highlightBrand = (text: string) => {
  const parts = text.split('cockroach.bet');
  return parts.map((part, i) => (
    i < parts.length - 1
      ? <>{part}<span key={i} className="text-brand font-black">cockroach.bet</span></>
      : part
  ));
};

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-gradient-to-r from-neon-green/10 via-neon-blue/10 to-neon-purple/10 border-b border-border-glow overflow-hidden">
      <div className="marquee whitespace-nowrap py-1 px-4 text-sm font-medium text-text-primary">
        {announcements.map((text, i) => (
          <span key={i} className="inline-flex items-center mx-8 gap-3">
            <img src="/images/logo.png" alt="" className="h-6 w-auto object-contain inline opacity-70" />
            {highlightBrand(text)}
          </span>
        ))}
        {announcements.map((text, i) => (
          <span key={`dup-${i}`} className="inline-flex items-center mx-8 gap-3">
            <img src="/images/logo.png" alt="" className="h-6 w-auto object-contain inline opacity-70" />
            {highlightBrand(text)}
          </span>
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
