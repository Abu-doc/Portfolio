module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
  colors: {
    background: '#0f0f0f',
    accent: '#8b5cf6',
  },
  fontFamily: {
    orbitron: ['Orbitron', 'sans-serif'],
    anton: ['Anton', 'sans-serif'],
    russo: ['"Russo One"', 'sans-serif'],
    staatliches: ['Staatliches', 'sans-serif'],
    unbounded: ['Unbounded', 'sans-serif'],
  },
  keyframes: {
    fadeUp: {
      '0%': { opacity: '0', transform: 'translateY(20px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    fadeInSlow: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    flicker: {
      '0%': { opacity: '1', textShadow: '0 0 10px #8b5cf6' },
      '50%': { opacity: '0.8', textShadow: '0 0 20px #a855f7' },
      '100%': { opacity: '1', textShadow: '0 0 30px #9333ea' },
    },
  },
  animation: {
    fadeUp: 'fadeUp 1s ease-out forwards',
    fadeInSlow: 'fadeInSlow 2s ease-in forwards',
    flicker: 'flicker 3s infinite alternate',
  },
},
  },
  plugins: [],
}
