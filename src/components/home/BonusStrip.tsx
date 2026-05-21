import { wa, WA_MESSAGES } from '../../utils/whatsapp';
import { bonuses } from '../../data/bonuses';

export default function BonusStrip() {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-text-primary mb-6 bg-gradient-to-r from-neon-green via-emerald-400 to-neon-green bg-clip-text text-transparent animate-gradient-x">🎁 ACTIVE BONUSES</h2>
      <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 px-1 scrollbar-hide snap-x snap-mandatory -mx-1">
        {bonuses.map((bonus) => (
          <div
            key={bonus.id}
            className="flex-shrink-0 w-56 sm:w-64 md:w-72 bg-gradient-to-br from-bg-card to-bg-tertiary border border-border-glow rounded-xl p-4 sm:p-5 shimmer hover:border-neon-green/50 hover:shadow-xl hover:shadow-[0_0_40px_rgba(0,255,136,0.3)] transition-all snap-center glow-pulse-subtle"
          >
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 float-animation">{bonus.icon}</div>
            <h3 className="font-black text-base sm:text-lg text-text-primary mb-1">{bonus.title}</h3>
            <div className="text-xs sm:text-sm text-neon-green font-black mb-2">{bonus.subtitle}</div>
            <div className="text-xs text-text-muted">{bonus.description}</div>
            <button
              onClick={() => wa(WA_MESSAGES.bonus)}
              className="w-full px-4 py-2 bg-gradient-to-r from-neon-green to-emerald-400 text-bg-primary font-black rounded-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all animate-gradient-x"
            >
              CLAIM
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
