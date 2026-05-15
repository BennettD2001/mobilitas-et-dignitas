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
        'marian-blue': '#1a3a52',
        'gold': '#d4af37',
        'forest-green': '#2d5016',
        'olive': '#6b8e23',
        'cream': '#faf8f6',
        'light-gray': '#f0ede8',
        'warm-gray': '#5a5a5a',
      },
      fontFamily: {
        serif: ['var(--font-lora)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#5a5a5a',
            a: {
              color: '#1a3a52',
              '&:hover': {
                color: '#d4af37',
              },
            },
            strong: {
              color: '#1a3a52',
            },
            h1: {
              color: '#1a3a52',
              fontFamily: 'var(--font-lora)',
            },
            h2: {
              color: '#1a3a52',
              fontFamily: 'var(--font-lora)',
            },
            h3: {
              color: '#1a3a52',
              fontFamily: 'var(--font-lora)',
            },
          },
        },
        dark: {
          css: {
            color: '#e2e8f0',
            a: {
              color: '#d4af37',
              '&:hover': {
                color: '#e5c158',
              },
            },
            strong: {
              color: '#d4af37',
            },
            h1: {
              color: '#d4af37',
            },
            h2: {
              color: '#d4af37',
            },
            h3: {
              color: '#d4af37',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};

export default config;
