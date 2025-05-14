/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'grid-dots': 'radial-gradient(#0070f3_1px, transparent 1px)',
        'blueprint': 'linear-gradient(to bottom right, #e0f2ff, #f8fbff)',
      },
      animation: {
        'pulse-slow': 'pulse 6s ease-in-out infinite',
      },
      maskImage: {
        'radial-fade': 'radial-gradient(circle, white, transparent 80%)',
      },
    },
  },
  plugins: [],
};
