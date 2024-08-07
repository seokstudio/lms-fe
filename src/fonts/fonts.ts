import { Hind, Inter } from 'next/font/google'

// main font
export const mainFont = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

// timer font
export const timerFont = Hind({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})
