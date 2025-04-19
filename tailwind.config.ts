import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // or 'media' if you prefer OS-level dark mode
  theme: {
    extend: {
      colors: {
        primary: '#00D0B4',       // Cyber Teal
        secondary: '#6C63FF',     // Modern Electric Indigo
        background: '#0F0F1A',     // Midnight Navy
        surface: '#1A1A2E',       // Night Steel
        textLight: '#E6E6F2',     // Cloud White
        textMuted: '#9FA8BA',     // Slate Gray
        highlight: '#FFE87A',     // Soft Gold
        danger: '#FF5E5B',        // Alert Coral
      },
      fontFamily: {
        title: ['var(--font-title)'],
        body: ['var(--font-body)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    // Add any Tailwind plugins here (e.g., @tailwindcss/forms, @tailwindcss/typography)
    require('@tailwindcss/typography'), // Add typography plugin
  ],
}
export default config