import { NextPage } from 'next'

import { EntryComponent } from '@/app/modules/entry'

export const revalidate = 0

// page
const AuthPage: NextPage = () => {
  // return
  return <EntryComponent />
}

export default AuthPage
