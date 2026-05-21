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
      className="gameCard group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[0_0_40px_rgba(0,255,136,0.15)] border border-border-glow/50 hover:border-neon-green/30"
    >
      {/* Game Image or Gradient Fallback */}
      <div className="aspect-[3/4] relative bg-bg-card">
        {!imageError ? (
          <img
            src={game.imageSrc}
            alt={`${game.name} - ${game.provider} - RTP ${game.rtp}%`}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
            style={{ background: game.gradientFallback }}
          >
            <div className="text-center">
              <div className="text-5xl mb-2">{game.emoji}</div>
              <div
                className="text-base font-bold tracking-wider px-4"
                style={{ 
                  color: game.neonColor
                }}
              >
                {game.name.toUpperCase()}
              </div>
            </div>
          </div>
        )}

        {/* Premium overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Badge */}
        {game.badge && (
          <div
            className={`absolute top-3 left-3 px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wider bg-black/90 backdrop-blur-md text-white shadow-lg border ${
              game.badge === 'LIVE' ? 'bg-neon-red/90 border-neon-red' : 'bg-neon-green/90 border-neon-green'
            }`}
          >
            {game.badge}
          </div>
        )}

        {/* Favorite Icon (visible on hover) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
            wa(`Hi! I want to add ${game.name} to my favorites on cockroach.bet`);
          }}
          className="absolute top-3 right-3 p-2 bg-black/90 backdrop-blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/95 hover:scale-110 shadow-lg border border-text-muted/30"
        >
          <Heart
            size={16}
            className={`${isFavorite ? 'fill-neon-red text-neon-red' : 'text-white'} transition-colors`}
          />
        </button>

        {/* Bottom Info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/98 via-black/95 to-transparent px-4 pb-4 pt-16 group-hover:pt-14 transition-all duration-500">
          {/* Game Name */}
          <h3 className="font-bold text-base text-white mb-1.5 truncate drop-shadow-lg">{game.name}</h3>
          
          {/* Provider */}
          <div className="text-xs text-neon-green/80 mb-3 font-medium">{game.provider}</div>

          {/* RTP Badge */}
          <div className="flex items-center justify-between mb-3">
            <div className="px-3 py-1 bg-neon-green/20 rounded-md text-[10px] font-bold text-neon-green border border-neon-green/40 shadow-sm">
              RTP {game.rtp}%
            </div>
            <div className="text-[10px] text-text-muted/80 font-medium">
              👥 {game.players.toLocaleString('en-IN')}
            </div>
          </div>

          {/* Play Button (visible on hover) */}
          <button
            onClick={() => wa(game.waMessage)}
            className="w-full py-3 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 bg-gradient-to-r from-neon-green to-emerald-400 text-bg-primary hover:shadow-lg hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
          >
            PLAY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
