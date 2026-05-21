import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { wa, WA_MESSAGES } from '../../utils/whatsapp';

const slides = [
  {
    id: 1,
    bg: 'from-purple-900/50 to-purple-700/50',
    badge: 'LIMITED OFFER',
    headline: 'NEW PLAYER? GET 500% BONUS',
    subtitle: 'Deposit ₹100 → Play with ₹600 instantly',
    cta: 'CLAIM 500% NOW',
    action: () => wa(WA_MESSAGES.bonus),
    emoji: '💰'
  },
  {
    id: 2,
    bg: 'from-red-900/50 to-orange-700/50',
    badge: 'LIVE NOW',
    headline: 'AVIATOR IS LIVE — FLY HIGH, CASH OUT FAST',
    subtitle: 'Players winning up to 1000x multiplier',
    live: '🔴 LIVE: 3,247 players flying right now',
    cta: 'PLAY AVIATOR',
    action: () => wa(WA_MESSAGES.playGame('Aviator')),
    emoji: '✈️'
  },
  {
    id: 3,
    bg: 'from-green-900/50 to-emerald-700/50',
    badge: 'DAILY CASHBACK',
    headline: 'LOSE TODAY? GET 30% BACK TOMORROW',
    subtitle: 'No wagering requirements. Pure cash.',
    cta: 'CLAIM CASHBACK',
    action: () => wa(WA_MESSAGES.bonus),
    emoji: '💸'
  },
  {
    id: 4,
    bg: 'from-yellow-900/50 to-amber-700/50',
    badge: 'TOURNAMENT',
    headline: 'WEEKLY TOURNAMENT — ₹8,20,000 PRIZE POOL',
    subtitle: 'Top 100 players share the prize. You could be next.',
    cta: 'JOIN TOURNAMENT',
    action: () => wa(WA_MESSAGES.tournament('Weekly Grand Prix')),
    emoji: '🏆'
  },
  {
    id: 5,
    bg: 'from-purple-950/50 to-black/50',
    badge: 'VIP EXCLUSIVE',
    headline: 'VIP ROYALE — PLAY MORE, EARN MORE',
    subtitle: 'Personal manager. Instant withdrawals. Exclusive bonuses.',
    cta: 'JOIN VIP',
    action: () => wa(WA_MESSAGES.vip),
    emoji: '👑'
  }
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);

  const slide = slides[currentSlide];

  return (
    <div className="relative rounded-2xl overflow-hidden min-h-[400px] sm:min-h-[450px] md:min-h-[550px] border border-border-glow shadow-2xl shadow-[0_0_50px_rgba(0,255,136,0.2)]">
      {/* Animated background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.bg} transition-all duration-700`}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-8xl opacity-20 float-animation">{slide.emoji}</div>
      <div className="absolute bottom-10 left-10 text-6xl opacity-10 float-animation" style={{ animationDelay: '1s' }}>{slide.emoji}</div>
      
      <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-20 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          {slide.badge && (
            <div className="inline-block px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-neon-green/30 to-emerald-400/30 border-2 border-neon-green rounded-full text-neon-green text-xs sm:text-sm font-black tracking-wider mb-6 animate-gradient-x glow-pulse-subtle">
              {slide.badge}
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-text-primary mb-4 sm:mb-5 leading-tight drop-shadow-2xl">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              {slide.headline}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-muted mb-8 sm:mb-10 font-medium drop-shadow-lg">
            {slide.subtitle}
          </p>
          {slide.live && (
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-black/80 backdrop-blur-sm border-2 border-neon-red/60 rounded-full text-sm font-bold text-text-primary mb-8 shadow-[0_0_30px_rgba(255,0,60,0.4)]">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-neon-red"></span>
              </span>
              {slide.live}
            </div>
          )}
          <button
            onClick={slide.action}
            className="inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-neon-green to-emerald-400 text-bg-primary font-black text-base sm:text-lg lg:text-xl rounded-xl hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,136,0.6)] transition-all animate-gradient-x glow-pulse-subtle"
          >
            {slide.cta}
            <ChevronRight size={24} className="hidden sm:block" />
            <ChevronRight size={20} className="sm:hidden" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => { goToSlide(index); wa('Hi! I want to see more slides on cockroach.bet'); }}
            className={`h-2.5 rounded-full transition-all ${
              index === currentSlide ? 'w-10 bg-neon-green shadow-[0_0_15px_rgba(0,255,136,0.6)]' : 'w-2.5 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
