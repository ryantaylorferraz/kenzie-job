import React from 'react'
import styles from "./style.module.scss"

export const ButtonOutline = ({ onClick, children }) => {
  return (
      <button type="button" onClick={onClick} className={styles.btnBox}>
          {children}
      </button>
  );
};