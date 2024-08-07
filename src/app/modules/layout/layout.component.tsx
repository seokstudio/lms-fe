'use client'

import { FC, ReactNode } from 'react'

import { ILayout } from '@/app/api'
import {
  FooterComponent,
  HeaderComponent,
  NavBarLaptopComponent,
  NavBarMobileComponent,
} from '@/app/modules/layout/elements'
import { useGlobalStore } from '@/app/shared/stores'

import styles from './layout.module.scss'

// interface
interface ILayoutComponentProps {
  children: ReactNode
  restrictions: ReactNode
  layout?: ILayout
}

// component
const LayoutComponent: FC<Readonly<ILayoutComponentProps>> = ({
  children,
  restrictions,
  layout,
}) => {
  const isRestrictionsApplied = useGlobalStore((state) => state.isRestrictionsApplied)

  // return
  return (
    <>
      {isRestrictionsApplied ? (
        restrictions
      ) : (
        <div className={styles.layout}>
          <HeaderComponent headerLinks={layout?.menu} />

          <div className={styles.layout__main}>
            <div className={styles.layout__nav_bar_laptop}>
              <NavBarLaptopComponent
                categories={layout?.categories}
                providers={layout?.providers}
              />
            </div>

            <div className={styles.layout__nav_bar_mobile}>
              <NavBarMobileComponent
                navLinks={layout?.mobileMenu}
                featured={layout?.featuredCategories}
              />
            </div>

            <div className={styles.layout__inner}>
              {children}

              <div className={styles.layout__footer_laptop}>
                <FooterComponent />
              </div>
            </div>
          </div>

          <div className={styles.layout__footer_mobile}>
            <FooterComponent />
          </div>
        </div>
      )}
    </>
  )
}

export default LayoutComponent
