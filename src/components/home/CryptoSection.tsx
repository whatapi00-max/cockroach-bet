import { wa } from '../../utils/whatsapp';

const cryptos = [
  { id: 1, symbol: '₿', name: 'Bitcoin (BTC)', desc: 'Fastest deposits' },
  { id: 2, symbol: 'Ξ', name: 'Ethereum (ETH)', desc: 'Low fees' },
  { id: 3, symbol: '💵', name: 'USDT (TRC20)', desc: 'Stable, reliable' },
  { id: 4, symbol: '🔵', name: 'USDC', desc: 'USD Coin' },
  { id: 5, symbol: '💜', name: 'Litecoin (LTC)', desc: 'Lightning fast' },
  { id: 6, symbol: '🔴', name: 'Tron (TRX)', desc: 'Zero fees' }
];

export default function CryptoSection() {
  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-3">
          DEPOSIT WITH CRYPTO — GET EXTRA 25% BONUS
        </h2>
        <p className="text-text-muted">
          Crypto deposits are anonymous, instant, and fee-free
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cryptos.map((crypto) => (
          <div
            key={crypto.id}
            className="bg-bg-card border border-border-glow rounded-xl p-6 hover:border-neon-green transition-all"
          >
            <div className="text-5xl mb-3">{crypto.symbol}</div>
            <h3 className="text-lg font-bold text-text-primary mb-1">{crypto.name}</h3>
            <p className="text-sm text-text-muted mb-4">{crypto.desc}</p>
            <button
              onClick={() => wa(`Hi! I want to DEPOSIT WITH ${crypto.name} on cockroach.bet`)}
              className="w-full px-4 py-2 bg-neon-green/10 border border-neon-green/30 text-neon-green font-bold rounded-lg hover:bg-neon-green/20 transition-all"
            >
              DEPOSIT WITH {crypto.name.split(' ')[0]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
