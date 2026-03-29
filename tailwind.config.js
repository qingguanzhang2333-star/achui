/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        dark: '#0A0F1E',
        'dark-light': '#0D1B3E',
        muted: '#5A6B7F',
        'muted-light': '#8A94A6',
        'muted-lighter': '#B0B5C0',
        surface: '#F5F7FA',
        'surface-light': '#F0F4FA',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
