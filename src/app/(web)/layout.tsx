import { Metadata, ResolvingMetadata, type Viewport } from 'next'
import { generateAlternateLinks, LanguageProvider } from '@inlang/paraglide-next'

import { FC, ReactNode } from 'react'

import { layoutApi } from '@/app/api'
import { LayoutComponent } from '@/app/modules/layout'
import { SuperTokensInit } from '@/app/shared/components/supertokensInit/supertokensInit'
import { mainFont } from '@/fonts'
import { strategy } from '@/libs/localization/i18n'
import * as m from '@/libs/localization/paraglide/messages.js'
import { languageTag } from '@/libs/localization/paraglide/runtime'
import NextuiProvider from '@/libs/next-ui/nextui.provider'

import '@/styles/globals.scss'

// runtime
export const runtime = 'edge'

// revalidate
export const revalidate = 0

// interface
interface RootLayoutProps {
  children: ReactNode
  restrictions: ReactNode
}

// import { frontendConfig } from '@/app/config/frontend'

// get data for layout
const getLayout = async () => {
  return await layoutApi()
}

// metadata
export const generateMetadata = (_params: never, parent: ResolvingMetadata): Metadata => {
  // return
  return {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
    title: {
      default: m.metadata_title(),
      template: `%s | ${m.metadata_title()}`,
    },
    description: m.metadata_description(),
    applicationName: m.metadata_title(),
    openGraph: {
      title: {
        default: m.metadata_title(),
        template: `%s | ${m.metadata_title()}`,
      },
      description: m.metadata_description(),
      siteName: m.metadata_title(),
      images: '/logo.png',
      type: 'website',
    },
    alternates: {
      languages: generateAlternateLinks({
        origin: `${process.env.NEXT_PUBLIC_APP_URL}` as `http${string}`,
        strategy: strategy,
        resolvingMetadata: parent,
      }),
    },
  }
}
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: false,
  themeColor: 'rgba(16, 18, 41, 1)',
}

// component
const RootLayout: FC<Readonly<RootLayoutProps>> = async ({ children, restrictions }) => {
  const layout = await getLayout()

  // return
  return (
    <LanguageProvider>
      <html lang={languageTag()} suppressHydrationWarning>
        <SuperTokensInit>
          <body className={mainFont.className}>
            <NextuiProvider locale={languageTag()}>
              <LayoutComponent restrictions={restrictions} layout={layout}>
                {children}
              </LayoutComponent>
            </NextuiProvider>
          </body>
        </SuperTokensInit>
      </html>
    </LanguageProvider>
  )
}

export default RootLayout
