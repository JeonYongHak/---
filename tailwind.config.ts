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
        md: '0px',
        lg: '641px',
        xl: '1548px',
        '2xl': '1548px',
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
        md: '1rem',
        lg: '1.5rem',
        xl: '1.5rem',
        '2xl': '1.5rem',
      },
      screens: {
        ow: '100%',
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '1548px',
        '2xl': '1548px',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/typography')],
};
export default config;
