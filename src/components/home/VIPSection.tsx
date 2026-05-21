import { wa, WA_MESSAGES } from '../../utils/whatsapp';

const vipTiers = [
  {
    id: 1,
    name: 'BRONZE',
    icon: '🥉',
    range: '₹0 – ₹40,000',
    color: 'from-amber-700 to-amber-900',
    benefits: ['10% Weekly Cashback', 'Standard Support', 'Weekly Bonus']
  },
  {
    id: 2,
    name: 'SILVER',
    icon: '🥈',
    range: '₹40,000 – ₹1,60,000',
    color: 'from-gray-400 to-gray-600',
    benefits: ['15% Weekly Cashback', 'Priority Support', 'Reload Bonus Boost', 'Free Spins Weekly']
  },
  {
    id: 3,
    name: 'GOLD',
    icon: '🥇',
    range: '₹1,60,000 – ₹8,20,000',
    color: 'from-yellow-400 to-yellow-600',
    benefits: ['20% Weekly Cashback', 'Dedicated Manager', 'Custom Bonuses', 'Tournament Access', 'Faster Withdrawals']
  },
  {
    id: 4,
    name: 'DIAMOND',
    icon: '💎',
    range: '₹8,20,000 – ₹41,00,000',
    color: 'from-cyan-400 to-blue-600',
    benefits: ['25% Weekly Cashback', 'Personal VIP Manager', 'No Withdrawal Limits', 'Exclusive Games Access', 'Birthday Bonus']
  },
  {
    id: 5,
    name: 'ROYAL',
    icon: '👑',
    range: '₹41,00,000+',
    color: 'from-purple-500 to-pink-600',
    benefits: ['30% Weekly Cashback', '24/7 VIP Concierge', 'Instant Withdrawals', 'Unlimited Bonuses', 'Real-World Gifts', 'Private Events Access']
  }
];

export default function VIPSection() {
  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-3 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-purple bg-clip-text text-transparent animate-gradient-x">👑 VIP PROGRAM</h2>
        <p className="text-lg text-text-muted">
          Climb the VIP ladder and unlock exclusive rewards
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
        {vipTiers.map((tier) => (
          <div
            key={tier.id}
            className="bg-gradient-to-br from-bg-card to-bg-tertiary border border-border-glow rounded-xl p-4 sm:p-6 hover:scale-105 hover:shadow-xl hover:shadow-[0_0_50px_rgba(191,0,255,0.4)] transition-all glow-pulse-subtle"
          >
            <div className={`text-4xl sm:text-6xl mb-3 sm:mb-4 text-center float-animation`}>{tier.icon}</div>
            <h3 className="text-lg sm:text-xl font-black text-text-primary text-center mb-2">{tier.name}</h3>
            <div className="text-xs sm:text-sm text-neon-purple text-center mb-3 sm:mb-4 font-bold">{tier.range}</div>
            <ul className="space-y-2">
              {tier.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-text-muted">
                  <span className="text-neon-purple mt-0.5 font-bold">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => wa(WA_MESSAGES.vip)}
          className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-pink text-text-primary font-black text-lg rounded-lg hover:scale-105 hover:shadow-[0_0_50px_rgba(191,0,255,0.6)] transition-all animate-gradient-x"
        >
          JOIN VIP NOW →
        </button>
      </div>
    </div>
  );
}
