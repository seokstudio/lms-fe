import { FC, ReactNode } from 'react'

import Providers from '@/core/providers'

import '@/styles/globals.scss'

// revalidate
export const revalidate = 0

// interface
interface RootLayoutProps {
  children: ReactNode
}

// component
const RootLayout: FC<Readonly<RootLayoutProps>> = ({ children }) => {
  // return
  return <Providers>{children}</Providers>
}

export default RootLayout
