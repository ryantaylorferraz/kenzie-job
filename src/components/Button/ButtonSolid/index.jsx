import React from 'react'
import styles from "./style.module.scss"

export const ButtonSolid = ({type, children}) => {
  return (
    <button className={styles.btnBox} type={type} >{children}</button>
  )
}
