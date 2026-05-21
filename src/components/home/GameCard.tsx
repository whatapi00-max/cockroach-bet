import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Game } from '../../types';
import { wa } from '../../utils/whatsapp';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div
      className="gameCard group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[0_0_40px_rgba(0,255,136,0.15)] border border-border-glow/50 hover:border-neon-green/30 bg-bg-card flex flex-col"
    >
      {/* Game Image */}
      <div className="relative bg-black flex-shrink-0 overflow-hidden" style={{height: '220px'}}>
        {!imageError ? (
          <img
            src={game.imageSrc}
            alt={`${game.name} - ${game.provider} - RTP ${game.rtp}%`}
            loading="lazy"
            className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: game.gradientFallback }}
          >
            <div className="text-center">
              <div className="text-5xl mb-2">{game.emoji}</div>
              <div className="text-base font-bold tracking-wider px-4" style={{ color: game.neonColor }}>
                {game.name.toUpperCase()}
              </div>
            </div>
          </div>
        )}

        {/* Badge */}
        {game.badge && (
          <div className={`absolute top-2 left-2 px-2 py-1 rounded-md text-[10px] font-bold tracking-wider shadow-lg border ${
            game.badge === 'LIVE' ? 'bg-neon-red/90 border-neon-red text-white' : 'bg-neon-green/90 border-neon-green text-bg-primary'
          }`}>
            {game.badge}
          </div>
        )}

        {/* Favorite Icon */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
            wa(`Hi! I want to add ${game.name} to my favorites on cockroach.bet`);
          }}
          className="absolute top-2 right-2 p-1.5 bg-black/80 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 border border-text-muted/30"
        >
          <Heart size={14} className={`${isFavorite ? 'fill-neon-red text-neon-red' : 'text-white'} transition-colors`} />
        </button>
      </div>

      {/* Info below image — always visible, fixed height */}
      <div className="px-3 pt-2 pb-3 bg-bg-card flex flex-col gap-1 h-[72px]">
        <h3 className="font-bold text-sm text-white truncate leading-tight">{game.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-neon-green font-medium truncate max-w-[60%]">{game.provider}</span>
          <span className="text-[10px] text-text-muted whitespace-nowrap">RTP {game.rtp}%</span>
        </div>
        <button
          onClick={() => wa(game.waMessage)}
          className="w-full py-1.5 rounded-lg font-bold text-[10px] tracking-wider uppercase bg-gradient-to-r from-neon-green to-emerald-400 text-bg-primary transition-all duration-300 opacity-0 group-hover:opacity-100 mt-auto"
        >
          PLAY NOW
        </button>
      </div>
    </div>
  );
}
