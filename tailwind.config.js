/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazirmatn', 'system-ui', 'sans-serif'],
      },
      colors: {
        espresso: '#1a120b',
        coffee: '#2b1d12',
        cream: '#f5efe6',
        gold: '#d4a574',
        'gold-bright': '#e8c08a',
        rose: '#c97b63',
      },
    },
  },
  plugins: [],
}
