import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        Blue: '#2093fe',
        Tertiary: '#EEF1F4',
        White: '#FFFFFF',
      },
      fontFamily: {
        suit: ['SUIT', 'sans-serif'],
      },
      fontSize: {
        14: '14px',
        18: '18px',
        24: '24px',
        32: '32px',
        48: '48px',
      },
      lineHeight: {
        120: '120%',
        130: '130%',
        140: '140%',
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
      },
    },
  },
  plugins: [],
};

export default config;
