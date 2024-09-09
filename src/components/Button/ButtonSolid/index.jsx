import React from 'react'
import styles from "./style.module.scss"

export const ButtonSolid = ({onClick, type, children}) => {
  return (
    <button onClick={() => onClick} className={styles.btnBox} type={type} >{children}</button>
  )
}
