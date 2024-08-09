import { FC } from 'react'

import { EntryFormComponent } from '@/app/shared/components/entry-form'

import styles from './entry.module.scss'

// interface
interface IEntryProps {}

// component
export const EntryComponent: FC<Readonly<IEntryProps>> = () => {
  // return
  return (
    <div>
      <EntryFormComponent />
    </div>
  )
}
export default EntryComponent
