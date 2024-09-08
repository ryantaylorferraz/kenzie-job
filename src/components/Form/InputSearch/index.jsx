import React from 'react'
import { forwardRef } from 'react'
import styles from "./style.module.scss"

export const InputSearch = forwardRef(({...rest}, ref) => {
  return (
    <input className={styles.inputBox} ref={ref} {...rest}  />
  )
})
