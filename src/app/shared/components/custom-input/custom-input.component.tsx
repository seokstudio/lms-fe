import { Input } from '@nextui-org/input'
import { extendVariants } from '@nextui-org/react'

import styles from './custom-input.module.scss'

// component
export const CustomInputComponent = extendVariants(Input, {
  variants: {
    variant: {
      withInnerLabel: {
        inputWrapper: `${styles.custom_input__input_wrapper} ${styles.with_inner_label}`,
        input: `${styles.custom_input} ${styles.with_inner_label}`,
        innerWrapper: `${styles.custom_input__inner_wrapper} `,
        label: `${styles.custom_input__label} ${styles.with_inner_label}`,
      },

      default: {
        base: `${styles.custom_input__base} ${styles.default}`,
        inputWrapper: `${styles.custom_input__input_wrapper} ${styles.default}`,
        innerWrapper: `${styles.custom_input__inner_wrapper} ${styles.default}`,
        input: `${styles.custom_input} ${styles.default}`,
      },

      withLabel: {
        innerWrapper: `${styles.custom_input__inner_wrapper} `,
        inputWrapper: `${styles.custom_input__input_wrapper} ${styles.with_label}`,
        input: `${styles.custom_input} ${styles.with_label}`,
        label: `${styles.custom_input__label} ${styles.with_label}`,
      },
    },
  },
})
export default CustomInputComponent
