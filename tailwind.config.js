/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/authentication/**/*.{html,ts,tsx}',
    './src/components/**/*.{html,ts,tsx}',
    './src/pages/**/*.{html,ts,tsx}',
    './src/**/*.{html,ts,tsx}',
    './src/index.html',
  ],
  theme: {
    screens: {
      'sm': { 'min': '250px', 'max': '576px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': { 'min': '768px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '976px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': { 'min': '1280px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { 'min': '1440px' },

    },
    // Add or modify the fontWeights property
    fontWeights: {
      'normal': 400,
      'bold': 700,
    },
    colors: {
      'white': '#fff',
      'blue': '#17396D',
      'teal': '#1e7a89',
      'purple': '#2a5aa4',
      'red': '#DC3545',
      'orange': '#F37B37',
      'green': '#198754',
      'green-500': '#176D6D',
      'sky-blue': '#0DCAF0',
      'gray-dark': '#212529',
      'gray': '#6C757D',
      'gray-light': '#F8F9FA',
      'blue-100': '#E1EFFE',
      'blue-800': '#2E55B5',
      'gray-100': '#e1e1e1',
      'gray-800': '#34354B',

    },
    border: {
      'red': '#DC3545 !important',
    },
    boxShadow: {
      'blue': '-1px 1px 15px 4px rgba(23,57,109);',
      'gray': '-1px 1px 15px 4px #F3F4F6;'
    },
    fontFamily: {
      serif: ['Merriweather', 'serif'],
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    divideWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      colors: {
        'border-red': '#DC3545',
      },
      keyframes: {
        animateShadow: {
          '0%': { 'box-shadow': '0 0 5px rgba(23,57,109)' },
          '100%': { 'box-shadow': '0 0 20px rgba(23,57,109)' },
        }
      },
      zIndex: {
        '1': '1',
        '2': '2',
      },
      animation: {
        animateShadow: 'animateShadow 4s ease-out infinite alternate'
      }
    },
  },
  corePlugins: {
    preflight: false,
  }
}