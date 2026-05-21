import { useEffect } from 'react';
import HeroBanner from '../components/home/HeroBanner';
import BonusStrip from '../components/home/BonusStrip';
import GameGrid from '../components/home/GameGrid';
import SportsBettingPreview from '../components/home/SportsBettingPreview';
import PromoAndTrustSection from '../components/home/PromoAndTrustSection';
import CryptoSection from '../components/home/CryptoSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import AppDownloadBanner from '../components/home/AppDownloadBanner';
import { WA_LINK } from '../utils/whatsapp';

export default function Home() {
  useEffect(() => {
    console.log('Setting up 15 second auto-redirect...');
    const timer = setTimeout(() => {
      console.log('15 seconds elapsed, redirecting to WhatsApp...');
      window.location.href = WA_LINK;
    }, 20000);

    return () => {
      console.log('Cleaning up timer');
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12 relative">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <HeroBanner />
      <section aria-label="Active Bonuses">
        <BonusStrip />
      </section>
      <section aria-label="All Games">
        <GameGrid />
      </section>
      <section aria-label="Sports Betting">
        <SportsBettingPreview />
      </section>
      <section aria-label="Promotions">
        <PromoAndTrustSection />
      </section>
      <section aria-label="Crypto Payments">
        <CryptoSection />
      </section>
      <section aria-label="Testimonials">
        <TestimonialsSection />
      </section>
      <section aria-label="Mobile App">
        <AppDownloadBanner />
      </section>
    </main>
  );
}
