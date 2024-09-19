/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      lg: { max: '1599px' },
      md: { max: '1279px' },
      sm: { max: '767px' },
    },
  },
  plugins: [
    forms({
      strategy: 'class',
    }),
  ],
};
