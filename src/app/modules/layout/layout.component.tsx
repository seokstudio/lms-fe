'use client'
import { FC, ReactNode } from 'react'

import styles from './layout.module.scss'

// interface
interface ILayoutComponentProps {
  children: ReactNode
}

// component
const LayoutComponent: FC<Readonly<ILayoutComponentProps>> = ({ children }) => {
  // return
  return <>{children}</>
}

export default LayoutComponent
