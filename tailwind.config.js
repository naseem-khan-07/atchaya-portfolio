/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          500: '#0284c7',
          700: '#1a4971',
          800: '#0a2540',
          900: '#081c33',
        },
        olive: {
          50: '#f4f7f4',
          100: '#e5ece5',
          200: '#c8d8c8',
          500: '#708238',
          700: '#4a5d4e',
          800: '#3f4e38',
          900: '#2b3627',
        },
        sand: {
          50: '#fbf9f5',
          100: '#f5f2eb',
          200: '#efece6',
          300: '#e5dfd5',
          400: '#d5cbbe',
          800: '#544d43',
        },
        charcoal: {
          700: '#334155',
          800: '#1c2024',
          900: '#0f172a',
          950: '#080d1a',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Manrope"', '"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
