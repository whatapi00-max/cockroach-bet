import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

export default function JackpotTicker() {
  const [megaJackpot, setMegaJackpot] = useState(234783000);
  const [dailyDrop, setDailyDrop] = useState(3984000);

  useEffect(() => {
    const interval = setInterval(() => {
      setMegaJackpot(prev => prev + Math.floor(Math.random() * 50));
      setDailyDrop(prev => prev + Math.floor(Math.random() * 20));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-neon-red/20 via-neon-orange/20 to-neon-gold/20 border-y border-border-glow py-3 relative overflow-hidden">
      {/* Centered logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src="/images/logo.png" alt="" className="h-16 sm:h-20 opacity-10 select-none" />
      </div>
      <div className="max-w-[1920px] mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-center gap-1 text-center">
            <div className="flex items-center gap-2 justify-center whitespace-nowrap overflow-hidden">
              <span className="text-xl">💣</span>
              <span className="text-xs font-bold text-text-muted"><span className="text-brand">COCKROACH.BET</span> MEGA JACKPOT:</span>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-neon-gold flicker">
                ₹<CountUp end={megaJackpot} decimals={0} duration={0.1} preserveValue separator="," />
              </span>
            </div>
            <div className="flex items-center gap-2 justify-center whitespace-nowrap overflow-hidden">
              <span className="text-xs font-bold text-text-muted">🎰 <span className="text-brand">COCKROACH.BET</span> DAILY DROP:</span>
              <span className="text-lg sm:text-xl font-bold font-mono text-neon-orange">
                ₹<CountUp end={dailyDrop} decimals={0} duration={0.1} preserveValue separator="," />
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 border-t border-border-glow/40 pt-2 w-full">
            <span className="text-base sm:text-lg md:text-xl font-black text-text-primary tracking-wide text-center">
              🪳 <span className="text-brand">cockroach.bet</span> — Cockroach Never Quits. Neither Do We.
            </span>
            <span className="text-base sm:text-lg md:text-xl font-black text-neon-gold animate-pulse text-center">
              💰 3% BONUS on Every Deposit on <span className="text-brand">cockroach.bet</span> — Automatically Added!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
