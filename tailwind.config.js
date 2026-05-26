
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: {
            900: '#130722', // Deepest background
            800: '#1a0b2e', // Main background
            700: '#241043', // Surface
            600: '#2d1b4e', // Lighter surface
          },
          gold: {
            300: '#f9e79f',
            400: '#f4d03f', // Bright accent
            500: '#d4af37', // Main gold
            600: '#c9a961', // Muted gold
            700: '#9e8130', // Dark gold
          },
          cream: '#fdfbf7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      }
    },
  },
  plugins: [],
}
