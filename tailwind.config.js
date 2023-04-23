/* eslint-disable prettier/prettier */
import TailwindBaseColors from './public/tailwind-configuration/base-colors';
import TailwindBaseFontSizes from './public/tailwind-configuration/base-fontSize';

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      ...TailwindBaseFontSizes(),
      colors: {
        ...TailwindBaseColors()
      }
    }
  },
  plugins: []
};
