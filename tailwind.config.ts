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
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        dark: {
          colors: {
            divider: '#ECEDEE',
            background: '#BFD3FA',
            foreground: '#101828',
            primary: {
              DEFAULT: 'rgba(86, 127, 250, 1)',
              foreground: 'rgba(251, 251, 251, 1)',
              50: '#D9E4FC',
              100: '#BFD3FA',
              200: '#8CAFF6',
              300: '#598CF2',
              400: '#2669EE',
              500: '#004EEB',
              600: '#0040BF',
              700: '#0039A9',
              800: '#0053A2',
            },
            success: {
              50: '#ECFDF3',
              100: '#D1FADF',
              200: '#A6F4C5',
              300: '#6CE9A6',
              400: '#32D583',
              500: '#12B76A',
              600: '#039855',
            },
            warning: {
              50: '#FFF9E8',
              100: '#FDEDC1',
              200: '#FCD881',
              300: '#FCBE48',
              400: '#FAA329',
              500: '#F3811B',
              600: '#D45914',
            },
            danger: {
              300: '#E07C78',
              500: '#D03630',
            },
            content1: {
              100: '#4E5560',
              300: '#9EA4AD',
            },
          },
        },
        light: {
          colors: {
            divider: '#ECEDEE',
            background: '#ffffff',
            foreground: '#101828',
            primary: {
              DEFAULT: '#004EEB',
              foreground: 'rgba(251, 251, 251, 1)',
              50: '#D9E4FC',
              100: '#BFD3FA',
              200: '#8CAFF6',
              300: '#598CF2',
              400: '#2669EE',
              500: '#004EEB',
              600: '#0040BF',
              700: '#0039A9',
              800: '#0053A2',
            },
            success: {
              50: '#ECFDF3',
              100: '#D1FADF',
              200: '#A6F4C5',
              300: '#6CE9A6',
              400: '#32D583',
              500: '#12B76A',
              600: '#039855',
            },
            warning: {
              50: '#FFF9E8',
              100: '#FDEDC1',
              200: '#FCD881',
              300: '#FCBE48',
              400: '#FAA329',
              500: '#F3811B',
              600: '#D45914',
            },
            danger: {
              300: '#E07C78',
              500: '#D03630',
            },
            content1: {
              DEFAULT: '#181B20',
              100: '#4E5560',
              300: '#9EA4AD',
            },
          },
        },
      },
      layout: {
        radius: {
          small: '50px',
          medium: '50px',
          large: '50px',
        },
        borderWidth: {
          small: '1px',
          medium: '1px',
          large: '2px',
        },
      },
    }),
  ],
}
export default config
