import { Smartphone, Apple } from 'lucide-react';
import { wa, WA_MESSAGES } from '../../utils/whatsapp';

export default function AppDownloadBanner() {
  return (
    <div className="py-8">
      <div className="bg-gradient-to-r from-bg-card to-bg-tertiary border border-border-glow rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-64 h-[500px] bg-gradient-to-br from-bg-primary to-bg-secondary rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl"></div>
                <div className="p-6 pt-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🪳</span>
                    <span className="text-sm font-bold text-brand">cockroach.bet</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg"></div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg"></div>
                      <div className="h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg"></div>
                      <div className="h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-24 bg-gradient-to-br from-yellow-600 to-amber-600 rounded-lg"></div>
                      <div className="h-24 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              <span className="text-brand">COCKROACH.BET</span> APP — PLAY ANYWHERE
            </h2>
            <p className="text-text-muted mb-6">
              Download the <span className="text-brand font-bold">cockroach.bet</span> mobile app for the ultimate gaming experience on the go
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-neon-green text-xl">✅</span>
                <span className="text-text-primary">Instant notifications for wins</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neon-green text-xl">✅</span>
                <span className="text-text-primary">One-tap deposit & withdraw</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neon-green text-xl">✅</span>
                <span className="text-text-primary">Exclusive app-only bonuses</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neon-green text-xl">✅</span>
                <span className="text-text-primary">Face ID / fingerprint login</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => wa(WA_MESSAGES.appDownload)}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-neon-green text-bg-primary font-bold rounded-lg hover:bg-neon-green/90 transition-all"
              >
                <Smartphone size={24} />
                <span>Download <span className="text-brand">cockroach.bet</span> for Android</span>
              </button>
              <button
                onClick={() => wa(WA_MESSAGES.appDownload)}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white text-bg-primary font-bold rounded-lg hover:bg-white/90 transition-all"
              >
                <Apple size={24} />
                <span>Download <span className="text-brand">cockroach.bet</span> for iOS</span>
              </button>
              <p className="text-xs text-text-muted text-center">
                <span className="text-brand font-bold">cockroach.bet</span> APK — No App Store needed. 100% safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
