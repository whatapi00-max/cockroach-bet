import { Wallet } from 'lucide-react';
import { wa, WA_MESSAGES } from '../../utils/whatsapp';

export default function TopNavbar() {
  const navLinks = [
    'Home', 'Casino', 'Sports', 'Crash', 'Live', 'Slots', 'Tournaments', 'Promotions'
  ];

  return (
    <nav className="sticky top-0 z-50 bg-bg-secondary/95 backdrop-blur-xl border-b border-border-glow shadow-lg">
      <div className="max-w-[1920px] mx-auto px-3 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center group cursor-pointer">
            <img
              src="/images/logo.png"
              alt="CockroachBet Logo"
              className="h-20 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => wa(`Hi! I want to explore ${link} on cockroach.bet`)}
                className="text-xs font-bold text-text-muted hover:text-neon-green hover:scale-110 transition-all relative group"
              >
                {link}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-green to-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => wa(WA_MESSAGES.deposit)}
              className="px-3 py-1.5 text-xs font-black text-bg-primary bg-gradient-to-r from-neon-green to-emerald-400 rounded-md hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all"
            >
              DEPOSIT
            </button>

            <button
              onClick={() => wa(WA_MESSAGES.withdraw)}
              className="px-3 py-1.5 text-xs font-black text-text-primary border-2 border-neon-gold rounded-md hover:border-neon-gold hover:text-neon-gold hover:shadow-[0_0_15px_rgba(255,215,0,0.2)] transition-all"
            >
              WITHDRAW
            </button>

            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-bg-tertiary to-bg-card border border-border-glow shadow-md hover:shadow-lg transition-all">
              <Wallet size={14} className="text-neon-green" />
              <span className="font-mono text-xs font-black text-text-primary">₹0</span>
            </div>

            <button
              onClick={() => wa(WA_MESSAGES.signup)}
              className="hidden md:block px-3 py-1.5 text-xs font-black text-text-primary border-2 border-neon-green/30 rounded-md hover:border-neon-green hover:text-neon-green hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all"
            >
              LOGIN
            </button>

            <button
              onClick={() => wa(WA_MESSAGES.signup)}
              className="hidden md:block px-4 py-1.5 text-xs font-black text-bg-primary bg-gradient-to-r from-neon-green to-emerald-400 rounded-md hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all"
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
