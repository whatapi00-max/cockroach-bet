import { useState } from 'react';
import { games } from '../../data/games';
import GameCard from './GameCard';
import { wa } from '../../utils/whatsapp';

export default function GameGrid() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'ALL', icon: '🎮' },
    { id: 'popular', label: 'POPULAR', icon: '🔥' },
    { id: 'new', label: 'NEW', icon: '✨' },
    { id: 'crash', label: 'CRASH', icon: '💥' },
    { id: 'slots', label: 'SLOTS', icon: '🎰' },
    { id: 'live', label: 'LIVE', icon: '🔴' },
    { id: 'table', label: 'TABLE', icon: '🃏' },
    { id: 'indian', label: 'INDIAN', icon: '🇮🇳' },
    { id: 'mini', label: 'MINI', icon: '🎯' },
  ];

  const filteredGames = games.filter(game => {
    if (activeTab === 'all') return true;
    if (activeTab === 'popular') return game.badge === 'HOT';
    if (activeTab === 'new') return game.badge === 'NEW';
    return game.category === activeTab;
  });

  return (
    <div className="py-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neon-green mb-6">🎮 ALL GAMES ON <span className="text-brand">COCKROACH.BET</span></h2>
      
      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id); wa(`Hi! I want to play ${tab.label} games on cockroach.bet`); }}
            className={`flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-black text-sm whitespace-nowrap transition-all border-2 shadow-md ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-neon-green to-emerald-400 text-bg-primary scale-105 border-neon-green shadow-[0_0_20px_rgba(0,255,136,0.4)] glow-pulse-subtle'
                : 'bg-gradient-to-r from-bg-card to-bg-tertiary text-text-muted hover:text-text-primary hover:bg-bg-tertiary border-transparent hover:border-text-muted/50 hover:shadow-lg'
            }`}
          >
            <span className="text-lg float-up">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Game Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      {filteredGames.length === 0 && (
        <div className="text-center py-12 text-text-muted">
          No games found in this category
        </div>
      )}
    </div>
  );
}
