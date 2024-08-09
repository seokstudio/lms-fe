'use client'

import { Button } from '@nextui-org/button'

import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { ButtonComponent } from '@/app/shared/components/button'
import { CustomInputComponent } from '@/app/shared/components/custom-input'
import { IconGoogle } from '@/app/shared/icons'
import { minLength2Pattern, required } from '@/app/shared/validations'
import * as m from '@/libs/localization/paraglide/messages.js'
import { languageTag } from '@/libs/localization/paraglide/runtime'

import styles from './entry-form.module.scss'

// interface
interface IEntryFormProps {}

// component
export const EntryFormComponent: FC<Readonly<IEntryFormProps>> = () => {
  const { handleSubmit, control } = useForm()

  const submitEntry = () => {
    console.log('submit entry')
  }

  // return
  return (
    <div className={styles.entry_form}>
      <div className={styles.entry_form__top}>
        <h1 className={styles.entry_form__title}>{m.entry()}</h1>

        <p>{m.entry_message()}</p>
      </div>

      <form className={styles.entry_form__form} onSubmit={handleSubmit(submitEntry)}>
        <div className={styles.entry_form__box}>
          <Controller
            control={control}
            name={'email'}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <CustomInputComponent
                value={value}
                onChange={onChange}
                variant={'bordered'}
                label={m.email()}
                labelPlacement={'outside'}
                placeholder={m.entry_email()}
                isInvalid={Boolean(error)}
                errorMessage={error?.message}
              />
            )}
            rules={{
              required: required(languageTag()),
              pattern: minLength2Pattern(languageTag()),
            }}
          />

          <Controller
            control={control}
            name={'password'}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <CustomInputComponent
                value={value}
                onChange={onChange}
                type={'password'}
                variant={'bordered'}
                label={m.password()}
                labelPlacement={'outside'}
                placeholder={m.entry_password()}
                isInvalid={Boolean(error)}
                errorMessage={error?.message}
              />
            )}
            rules={{
              required: required(languageTag()),
              pattern: minLength2Pattern(languageTag()),
            }}
          />
        </div>

        <div className={styles.entry_form__box}>
          <ButtonComponent fullWidth color={'primary'}>
            {m.entry()}
          </ButtonComponent>

          <ButtonComponent fullWidth variant={'bordered'}>
            <IconGoogle />

            {m.entry_with_google()}
          </ButtonComponent>
        </div>
      </form>

      <div></div>
    </div>
  )
}
export default EntryFormComponent
