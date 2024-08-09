'use client'

import { Button } from '@nextui-org/button'
import { extendVariants } from '@nextui-org/react'

import styles from './button.module.scss'

// component
export const ButtonComponent = extendVariants(Button, {
  variants: {
    variant: {
      bordered: `${styles.button}`,
    },
    color: {
      primary: `${styles.button} ${styles.primary_color}`,
    },
  },
})
export default ButtonComponent
