import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        ow: '0px',
        sm: '0px',
        md: '744px',
        lg: '1280px',
        xl: '1280px',
        '2xl': '1280px',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '3rem',
        lg: '5rem',
        xl: '5rem',
        '2xl': '5rem',
      },
      screens: {
        ow: '744px',
        sm: '744px',
        md: '1280px',
        lg: '1280px',
        xl: '1280px',
        '2xl': '1280px',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
};
export default config;
