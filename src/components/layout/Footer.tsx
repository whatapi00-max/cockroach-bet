import { wa } from '../../utils/whatsapp';

export default function Footer() {
  const trustBadges = ['18+', 'GamCare', 'Responsible Gaming', 'SSL', 'RNG Certified'];

  return (
    <footer className="bg-bg-secondary border-t border-border-glow mt-20">
      <div className="max-w-[1920px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/images/logo.png" alt="CockroachBet" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-sm text-text-muted mb-4">
              <span className="text-brand font-bold">cockroach.bet</span> — The cockroach never dies. Neither does your luck.
            </p>
            <div className="flex gap-3">
              {['📱', '💬', '📧', '🌐'].map((icon) => (
                <button
                  key={icon}
                  onClick={() => wa('Hi! I want to connect with cockroach.bet on social media')}
                  className="p-2 bg-bg-tertiary rounded-lg text-text-muted hover:text-neon-green hover:bg-bg-card transition-all"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-text-primary mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {['Home', 'Casino', 'Sports', 'Live Casino', 'Promotions', 'cockroach.bet App'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => wa(`Hi! I want to explore ${link} on cockroach.bet`)}
                    className="text-sm text-text-muted hover:text-neon-green transition-colors text-left w-full"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-primary mb-4">SUPPORT</h4>
            <ul className="space-y-2">
              {['Help Center', 'FAQ', 'Responsible Gambling', 'Contact Us', 'Terms & Conditions', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => wa(`Hi! I need help with ${link} on cockroach.bet`)}
                    className="text-sm text-text-muted hover:text-neon-green transition-colors text-left w-full"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-primary mb-4">PAYMENT METHODS</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {['UPI', 'PhonePe', 'Paytm', 'GPay', 'USDT', 'BTC', 'ETH', 'Visa', 'Mastercard'].map((method) => (
                <span key={method} className="px-3 py-1 bg-bg-tertiary rounded text-xs text-text-muted">
                  {method}
                </span>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <span>✅</span>
                <span>Instant Withdrawals</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <span>✅</span>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <span>✅</span>
                <span>100% Secure</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-text-primary mb-4">TRUST & SAFETY</h4>
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="px-4 py-2 bg-bg-tertiary rounded-lg text-xs font-medium text-neon-green border border-neon-green/30"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>

          <div className="text-xs text-text-muted leading-relaxed">
            <p className="mb-2">
              cockroach.bet is operated under license. This website contains gambling content. 
              Must be 18+ to play. Please gamble responsibly.
            </p>
            <p>
              Gambling can be addictive. Play responsibly and only bet what you can afford to lose.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 pt-6 border-t border-border-glow">
            <img src="/images/logo.png" alt="CockroachBet" className="h-10 w-auto object-contain opacity-60" />
            <div className="text-center text-xs text-text-muted">© 2025 <span className="text-brand font-bold">cockroach.bet</span> — All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
