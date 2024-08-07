import { Middleware, Navigation, PrefixStrategy } from '@inlang/paraglide-next'

import type { AvailableLanguageTag } from '@/core/localization/paraglide/runtime'

export const strategy = PrefixStrategy<AvailableLanguageTag>({ prefixDefault: 'never' })

export const middleware = Middleware({ strategy })
export const { Link, useRouter, usePathname, redirect, permanentRedirect } = Navigation({
  strategy,
})
