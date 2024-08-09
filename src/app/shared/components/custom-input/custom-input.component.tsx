'use client'

import { Input } from '@nextui-org/input'
import { extendVariants } from '@nextui-org/react'

import styles from './custom-input.module.scss'

// component
export const CustomInputComponent = extendVariants(Input, {
  variants: {
    variant: {
      bordered: {
        base: `${styles.custom_input__base}`,
        inputWrapper: `${styles.custom_input__input_wrapper}`,
        input: `${styles.custom_input}`,
        innerWrapper: `${styles.custom_input__inner_wrapper} `,
        label: `${styles.custom_input__label}`,
        helperWrapper: `${styles.custom_input__helper_wrapper}`,
      },
    },
  },
})
export default CustomInputComponent
