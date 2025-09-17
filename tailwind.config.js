/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EF4444', // red-500
          foreground: '#FFFFFF', // white
        },
        secondary: {
          DEFAULT: '#6B7280', // gray-500
          foreground: '#FFFFFF', // white
        },
        accent: {
          DEFAULT: '#F3F4F6', // gray-100
          foreground: '#1F2937', // gray-800
        },
        destructive: {
          DEFAULT: '#EF4444', // red-500
          foreground: '#FFFFFF', // white
        },
        input: '#D1D5DB', // gray-300
        background: '#F9FAFB', // gray-50
        foreground: '#1F2937', // gray-800
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}