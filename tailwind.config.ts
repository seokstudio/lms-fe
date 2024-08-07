import { nextui } from '@nextui-org/theme'

import type { Config } from 'tailwindcss'

// config
const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        dark: {
          colors: {
            background: 'rgba(8, 8, 18, 1)',
            foreground: 'rgba(251, 251, 251, 1)',
            focus: { DEFAULT: '#1C214A', foreground: '#1C214A' },
            primary: {
              DEFAULT: 'rgba(86, 127, 250, 1)',
              foreground: 'rgba(251, 251, 251, 1)',
              100: '#567FFA',
              200: '#92ADFF',
              300: '#B6C8FF',
              400: '#CBD7FA',
              500: '#E1E9FE',
              600: '#ECF2FF',
            },
            secondary: {
              DEFAULT: 'rgba(28, 33, 74, 1)',
              foreground: 'rgba(251, 251, 251, 1)',
              100: '#080812',
              200: '#11142C',
              300: '#171B3C',
              400: '#1C214A',
              500: '#242A5F',
              600: '#2D3579',
            },
            success: {
              DEFAULT: '#057A55',
              foreground: 'rgba(251, 251, 251, 1)',
            },
            warning: {
              600: '#E3A008',
            },
            content1: {
              100: '#ffffff',
              200: '#F3F4F6',
              300: '#D1D5DB',
              400: '#9CA3AF',
              500: '#6B7280',
            },
            divider: '#1c214a',
          },
        },
        light: {
          colors: {
            background: 'rgba(251, 251, 251, 1)',
            foreground: 'rgba(8, 8, 18, 1)',
            focus: { DEFAULT: '#1C214A', foreground: '#1C214A' },
            primary: {
              DEFAULT: 'rgba(86, 127, 250, 1)',
              foreground: 'rgba(251, 251, 251, 1)',
              200: '#92ADFF',
              300: '#B6C8FF',
              400: '#CBD7FA',
              500: '#E1E9FE',
              600: '#ECF2FF',
            },
            secondary: {
              DEFAULT: 'rgba(28, 33, 74, 1)',
              foreground: 'rgba(251, 251, 251, 1)',
              200: '#11142C',
              300: '#171B3C',
              400: '#1C214A',
              500: '#242A5F',
              600: '#2D3579',
            },
            success: {
              DEFAULT: '#057A55',
              foreground: 'rgba(251, 251, 251, 1)',
            },
            warning: {
              600: '#E3A008',
            },
            content1: {
              100: '#ffffff',
              200: '#F3F4F6',
              300: '#D1D5DB',
              400: '#9CA3AF',
              500: '#6B7280',
            },
            divider: '#1c214a',
          },
        },
      },
      layout: {
        radius: { small: '8px', medium: '10px', large: '12px' },
        borderWidth: { small: '1px', medium: '1px', large: '2px' },
      },
    }),
  ],
}
export default config
