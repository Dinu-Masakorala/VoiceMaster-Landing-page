/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700',
        dark: {
          900: '#1E1E1E',
          800: '#2C2C2C',
          700: '#3C3C3C',
        },
      },
    },
  },
  plugins: [],
} 