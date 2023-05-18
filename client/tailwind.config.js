/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
      },
      boxShadow: {
        card: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)',
        cardhover: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)',
      },
      colors: {
        utOrange: '#FB8B24',
        floWhite: '#FFFCF2',
        blOlive: '#403D39',
        eeBlack: '#252422',
        rose: '#FF0F80',
        Aprimary: '#2B2B2B',
        Asecondary: '#CC881B',
        Aaccent: '#F4A424',
        Abackground: '#FFFFFF',
      },
    },
  },
  plugins: [],
};

