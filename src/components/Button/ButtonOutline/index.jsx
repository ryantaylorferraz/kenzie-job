import React from 'react'
import styles from "./style.module.scss"

export const ButtonOutline = ({onClick, children}) => {
  return (
    <button onClick={() => onClick()} className={styles.btnBox}>{children}</button>
  )
}
