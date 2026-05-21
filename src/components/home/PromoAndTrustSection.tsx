export default function PromoAndTrustSection() {
  const whyChooseUs = [
    { icon: '⚡', title: 'Instant Withdrawal', desc: 'Under 5 minutes, always' },
    { icon: '🔒', title: '100% Secure', desc: 'SSL + 2FA + Cold wallet storage' },
    { icon: '🎮', title: '60+ Games', desc: 'Updated weekly with new releases' },
    { icon: '🤝', title: '24/7 Support', desc: 'Real human agents on WhatsApp' }
  ];

  const comparison = [
    { feature: 'Instant Withdrawal', others: '3-7 days', us: 'Under 5 mins' },
    { feature: 'Frozen Accounts', others: 'Very common', us: 'Never' },
    { feature: 'Hidden Fees', others: 'Yes', us: 'Zero fees' },
    { feature: 'Rigged Games', others: 'Possible', us: 'Certified RNG' },
    { feature: 'Customer Support', others: 'Bot/Email', us: 'Live WhatsApp' },
    { feature: 'Bonus Conditions', others: '50x wager', us: '5x only' },
    { feature: 'Min Withdrawal', others: '$100+', us: '$10 / ₹100' }
  ];

  const trustBadges = [
    '✅ Licensed & Regulated',
    '🔐 SSL Secured',
    '🎲 Fair RNG Certified',
    '💳 PCI Compliant',
    '🏆 Best Casino 2024',
    '⭐ 4.9/5 Trustpilot'
  ];

  return (
    <div className="py-8 space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-text-primary mb-2 text-center">WHY CHOOSE <span className="text-brand">COCKROACH.BET</span>?</h2>
        <p className="text-center text-text-muted mb-6"><span className="text-brand font-bold">cockroach.bet</span> — The platform that never quits on you</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, idx) => (
            <div key={idx} className="bg-bg-card border border-border-glow rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-text-primary mb-4 text-center">
          TIRED OF FAKE BOOKIES? TRY <span className="text-brand">COCKROACH.BET</span>
        </h2>
        <p className="text-center text-text-muted mb-6">See how <span className="text-brand font-bold">cockroach.bet</span> compares to the rest</p>
        
        <div className="bg-bg-card border border-border-glow rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-glow">
                <th className="text-left p-4 text-text-primary font-bold">Feature</th>
                <th className="text-center p-4 text-text-muted font-bold">❌ Others</th>
                <th className="text-center p-4 text-brand font-bold">✅ cockroach.bet</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, idx) => (
                <tr key={idx} className="border-b border-border-glow/50 last:border-0">
                  <td className="p-4 text-text-primary font-medium">{row.feature}</td>
                  <td className="p-4 text-center text-neon-red">{row.others}</td>
                  <td className="p-4 text-center text-neon-green font-bold">{row.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-text-primary mb-6 text-center"><span className="text-brand">COCKROACH.BET</span> TRUST & CERTIFICATIONS</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="px-6 py-3 bg-bg-card border border-neon-green/30 rounded-lg text-neon-green font-bold"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
