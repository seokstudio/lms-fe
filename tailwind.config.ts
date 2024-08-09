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
              50: '#FEF1F0',
              100: '#FDDFDE',
              200: '#FDC5C3',
              300: '#FA9591',
              400: '#F5605D',
              500: '#EB3434',
              600: '#D11E21',
            },
            content1: {
              50: '#F9FAFB',
              100: '#F2F4F7',
              200: '#EAECF0',
              300: '#D0D5DD',
              400: '#98A2B3',
              500: '#667085',
              600: '#475467',
              700: '#344054',
              800: '#1D2939',
              900: '#101828',
            },
          },
        },
        light: {
          colors: {
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
              50: '#FEF1F0',
              100: '#FDDFDE',
              200: '#FDC5C3',
              300: '#FA9591',
              400: '#F5605D',
              500: '#EB3434',
              600: '#D11E21',
            },
            content1: {
              50: '#F9FAFB',
              100: '#F2F4F7',
              200: '#EAECF0',
              300: '#D0D5DD',
              400: '#98A2B3',
              500: '#667085',
              600: '#475467',
              700: '#344054',
              800: '#1D2939',
              900: '#101828',
            },
          },
        },
      },
      layout: {
        radius: { small: '50px', medium: '50px', large: '50px' },
        borderWidth: { small: '1px', medium: '1px', large: '2px' },
      },
    }),
  ],
}
export default config
