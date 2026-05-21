import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#08080f',
        'bg-secondary': '#0f0f1a',
        'bg-tertiary': '#141420',
        'bg-card': '#1a1a2e',
        'brand': '#00e5ff',
        'neon-green': '#00ff88',
        'neon-red': '#ff003c',
        'neon-blue': '#00c3ff',
        'neon-purple': '#bf00ff',
        'neon-gold': '#ffd700',
        'neon-orange': '#ff6b00',
        'text-primary': '#ffffff',
        'text-muted': '#8892a4',
        'border-glow': '#00ff8833',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
