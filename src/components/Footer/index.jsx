import React from 'react'
import imgLogo from "../../assets/imgLogo.png"
import styles from "./style.module.scss"

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
        <div className={styles.divBox}>
            <img src={imgLogo} alt="img Logo" />
            <p className={`paragraph ${styles.footerText}`}>Todos os direitos reservados - Kenzie Academy Brasil</p>
        </div>
    </footer>
  )
}
