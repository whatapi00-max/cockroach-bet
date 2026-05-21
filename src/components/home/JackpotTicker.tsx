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
    <div className="bg-gradient-to-r from-neon-red/20 via-neon-orange/20 to-neon-gold/20 border-y border-border-glow py-3">
      <div className="max-w-[1920px] mx-auto px-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💣</span>
              <span className="text-sm font-bold text-text-muted">MEGA JACKPOT</span>
            </div>
            <div className="text-3xl md:text-4xl font-bold font-mono text-neon-gold flicker">
              ₹<CountUp end={megaJackpot} decimals={0} duration={0.1} preserveValue separator="," />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-text-muted">🎰 DAILY DROP JACKPOT:</span>
              <span className="text-xl font-bold font-mono text-neon-orange">
                ₹<CountUp end={dailyDrop} decimals={0} duration={0.1} preserveValue separator="," />
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 flex-wrap border-t border-border-glow/40 pt-2">
            <span className="text-sm font-black text-text-primary tracking-wide">
              🪳 Cockroach Never Quits. Neither Do We.
            </span>
            <span className="w-px h-4 bg-border-glow hidden sm:block"></span>
            <span className="text-sm font-black text-neon-gold animate-pulse">
              💰 3% BONUS on Every Deposit — Automatically Added!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
