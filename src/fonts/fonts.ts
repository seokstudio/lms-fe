import { Open_Sans } from 'next/font/google'

// main font
export const mainFont = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  preload: true,
})
