import { FC, ReactNode } from 'react'

import Providers from '@/core/providers'

import 'tailwindcss/tailwind.css'
import '@/styles/globals.scss'

// revalidate
export const revalidate = 0

// interface
interface RootLayoutProps {
  auth: ReactNode
  platform: ReactNode
}

// component
const RootLayout: FC<Readonly<RootLayoutProps>> = ({ platform, auth }) => {
  const isUserAuthed = false
  // return
  return <Providers>{isUserAuthed ? platform : auth}</Providers>
}

export default RootLayout
