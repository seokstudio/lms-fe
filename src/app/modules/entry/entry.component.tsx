import { Button } from '@nextui-org/button'

import { FC } from 'react'

import styles from './entry.module.scss'

// interface
interface IEntryProps {}

// component
export const EntryComponent: FC<Readonly<IEntryProps>> = () => {
  // return
  return (
    <div>
      <Button size={'lg'} color={'primary'}>
        entry
      </Button>
      <Button size={'md'} color={'default'}>
        entry
      </Button>
      <Button size={'md'} color={'danger'}>
        entry
      </Button>
      <Button color={'warning'}>entry</Button>
      <Button color={'success'}>entry</Button>

      <Button variant={'bordered'} color={'primary'}>
        entry
      </Button>
      <Button variant={'bordered'} color={'default'}>
        entry
      </Button>
      <Button variant={'bordered'} color={'danger'}>
        entry
      </Button>
      <Button variant={'bordered'} color={'warning'}>
        entry
      </Button>
      <Button variant={'bordered'} color={'success'}>
        entry
      </Button>
    </div>
  )
}
export default EntryComponent
