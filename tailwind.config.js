module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Az összes szükséges fájltípus hozzáadása
  ],
  darkMode: 'class', // A dark mode az osztályok alapján működik
  theme: {
    extend: {
      primary: '#4F46E5', // Indigo szín
      secondary: '#1F2937', // Sötét szürke
      light: '#F9FAFB', // Világos szürke háttér
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'shrink': 'shrink 0.5s ease-out', // Az összehúzódós animáció
      },
      keyframes: {
        
        fadeIn: {
          '0%': { opacity: '0' },
          '50%':{opacity:'0.5'},
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        shrink: { // Az összehúzódós animáció
          '0%': { transform: 'scale(10)', opacity: '1' },
          '100%': { transform: 'scale(0.1)', opacity: '0' }, // Az elem összehúzódik és eltűnik
        },
      },
    },
  },
  plugins: [],
};
