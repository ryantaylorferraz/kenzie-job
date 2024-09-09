import React from 'react'
import { FaMinus } from "react-icons/fa";
import styles from "./style.module.scss"

export const ListMyApplications = () => {
  return (
    <li className={styles.liContainer}>
      <div className={styles.divBox}>
        <h3 className='title2'>José da Silva - Desenvolvedor Full Stack Jr</h3>
        <FaMinus size={32} color="#8490FF" />
      </div>
      <div className={styles.divDetails}>
        <p className='paragraph' >Detalhes da candidatura:</p>
        <p>E-mail: <span className="paragraphBold">josedasilva@email.com</span></p>
      </div>
    </li>
  )
}
