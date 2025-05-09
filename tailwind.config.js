/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fde4e4',
          200: '#fccdcd',
          300: '#f9a8a8',
          400: '#f47474',
          500: '#eb4343',
          600: '#d51919', // Brand color
          700: '#bd1717',
          800: '#9c1616',
          900: '#811919',
          950: '#470909',
        },
        secondary: {
          50: '#f2f7fd',
          100: '#e3eefb',
          200: '#c2ddf6',
          300: '#8ec4ef',
          400: '#52a5e3',
          500: '#2c88d8',
          600: '#1c6bc0',
          700: '#195490',
          800: '#1a4877',
          900: '#1b3e63',
          950: '#13284a',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e1f2fe',
          200: '#b9e5fd',
          300: '#7cd3fc',
          400: '#37bcf9',
          500: '#13a1ed',
          600: '#0280d0',
          700: '#0166ac',
          800: '#05558d',
          900: '#0a4875',
          950: '#082c4b',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        neutral: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        '2xs': '0.25rem', // 4px
        xs: '0.5rem',     // 8px
        sm: '0.75rem',    // 12px
        md: '1rem',       // 16px
        lg: '1.5rem',     // 24px
        xl: '2rem',       // 32px
        '2xl': '3rem',    // 48px
        '3xl': '4rem',    // 64px
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
  plugins: [],
};