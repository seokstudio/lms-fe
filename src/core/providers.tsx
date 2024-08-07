import { generateAlternateLinks, LanguageProvider } from '@inlang/paraglide-next'
import { FC } from 'react'
import { strategy } from '@/libs/localization/i18n'
import { Metadata, ResolvingMetadata, type Viewport } from 'next'
import { languageTag } from '@/libs/localization/paraglide/runtime'

// metadata
export const generateMetadata = (_params: never, parent: ResolvingMetadata): Metadata => {
  // return
  return {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
    // title: {
    //   default: m.metadata_title(),
    //   template: `%s | ${m.metadata_title()}`,
    // },
    // description: m.metadata_description(),
    // applicationName: m.metadata_title(),
    // openGraph: {
    //   title: {
    //     default: m.metadata_title(),
    //     template: `%s | ${m.metadata_title()}`,
    //   },
    //   description: m.metadata_description(),
    //   siteName: m.metadata_title(),
    //   images: '/logo.png',
    //   type: 'website',
    // },
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

// interface
interface IProviderProps {

}

// component
const RootLayout: FC<Readonly<IProviderProps>> =  ({ children }) => {


  // return
  return (
    <LanguageProvid>
      <html lang={languageTag()} suppressHydrationWarning>
      <body className={mainFont.className}>
      <NextuiProvider locale={languageTag()}>
        <LayoutComponent restrictions={restrictions} layout={layout}>
          {children}
        </LayoutComponent>
      </NextuiProvider>
      </body>
      </html>
    </LanguageProvid>
  )
}

export default RootLayout