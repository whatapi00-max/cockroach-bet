import { useState } from 'react';
import { Volume2, VolumeX, Moon } from 'lucide-react';
import { wa } from '../../utils/whatsapp';

export default function LeftSidebar() {
  const [soundOn, setSoundOn] = useState(true);

  const menuSections = [
    {
      title: 'MAIN MENU',
      items: [
        { icon: '🏠', label: 'Home', href: '#home' },
        { icon: '⭐', label: 'Favorites', href: '#favorites' },
        { icon: '🕐', label: 'Recently Played', href: '#recent' },
      ]
    },
    {
      title: 'CASINO',
      items: [
        { icon: '🎰', label: 'All Casino Games', href: '#casino' },
        { icon: '🔴', label: 'Live Casino', href: '#live-casino' },
        { icon: '🎲', label: 'Table Games', href: '#table' },
        { icon: '🎡', label: 'Game Shows', href: '#shows' },
        { icon: '🃏', label: 'Card Games', href: '#cards' },
        { icon: '🎳', label: 'Slingo', href: '#slingo' },
        { icon: '⚡', label: 'Instant Win', href: '#instant' },
      ]
    },
    {
      title: 'CRASH GAMES',
      items: [
        { icon: '✈️', label: 'Aviator', href: '#aviator' },
        { icon: '🚀', label: 'Crash X', href: '#crashx' },
        { icon: '💥', label: 'Lucky Jet', href: '#luckyjet' },
        { icon: '🎢', label: 'JetX', href: '#jetx' },
        { icon: '🐔', label: 'Chicken Road', href: '#chicken' },
        { icon: '🪄', label: 'Balloon', href: '#balloon' },
      ]
    },
    {
      title: 'SLOTS',
      items: [
        { icon: '🎰', label: 'All Slots', href: '#slots' },
        { icon: '🔥', label: 'Hot Slots', href: '#hot-slots' },
        { icon: '✨', label: 'New Slots', href: '#new-slots' },
        { icon: '🎁', label: 'Bonus Buy Slots', href: '#bonus-buy' },
        { icon: '🎪', label: 'Megaways', href: '#megaways' },
      ]
    },
    {
      title: 'SPORTS',
      items: [
        { icon: '⚽', label: 'Football', href: '#football' },
        { icon: '🏏', label: 'Cricket', href: '#cricket' },
        { icon: '🏀', label: 'Basketball', href: '#basketball' },
        { icon: '🎾', label: 'Tennis', href: '#tennis' },
        { icon: '🏒', label: 'Hockey', href: '#hockey' },
        { icon: '🥊', label: 'MMA/Boxing', href: '#mma' },
        { icon: '🏈', label: 'American Football', href: '#nfl' },
        { icon: '🎮', label: 'eSports', href: '#esports' },
      ]
    },
    {
      title: 'OTHER',
      items: [
        { icon: '🎯', label: 'Mini Games', href: '#mini' },
        { icon: '📊', label: 'Statistics', href: '#stats' },
        { icon: '🏆', label: 'Leaderboard', href: '#leaderboard' },
        { icon: '📱', label: 'Mobile App', href: '#app' },
        { icon: '🎁', label: 'Bonus Store', href: '#bonus-store' },
        { icon: '💬', label: 'Live Support', href: '#support' },
      ]
    }
  ];

  return (
    <aside className="hidden lg:block w-56 bg-bg-tertiary border-r border-border-glow overflow-y-auto transition-all" style={{ height: 'calc(100vh - 120px)' }}>
      <div className="p-4 space-y-6">
        {menuSections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-xs font-bold text-text-muted mb-2 px-2">{section.title}</h3>
            <div className="space-y-1">
              {section.items.map((item, itemIdx) => (
                <button
                  key={itemIdx}
                  onClick={() => wa(`Hi! I want to explore ${item.label} on cockroach.bet`)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-text-muted hover:text-neon-green hover:bg-bg-card transition-all group w-full text-left"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="pt-4 border-t border-border-glow space-y-2">
          <button
            onClick={() => { setSoundOn(!soundOn); wa('Hi! I want to toggle sound on cockroach.bet'); }}
            className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm text-text-muted hover:text-neon-green hover:bg-bg-card transition-all"
          >
            {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
            <span className="font-medium">Sound {soundOn ? 'ON' : 'OFF'}</span>
          </button>
          <button
            onClick={() => wa('Hi! I want to enable OLED mode on cockroach.bet')}
            className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm text-text-muted hover:text-neon-green hover:bg-bg-card transition-all"
          >
            <Moon size={18} />
            <span className="font-medium">OLED Mode</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
