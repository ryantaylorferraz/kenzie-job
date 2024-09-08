import React from 'react'
import imgAbout from "../../../assets/imgAbout.png"
import styles from "./style.module.scss"


export const SectionAbout = () => {
  return (
    <section className={styles.sectionBox}>
        <div className={styles.divBox}>
            <div>
                <h2 className={`title1 ${styles.titleAbout}`}>Sobre a jobs</h2>
                <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, earum dolore dolor dolorum, ipsa explicabo provident saepe ipsam numquam deserunt assumenda sunt! Perspiciatis eaque magnam modi perferendis alias ab velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dignissimos ab suscipit deleniti esse quo porro.</p>
            </div>
            <div>
                <img className={styles.imgAbout} src={imgAbout} alt="img pessoas" />
            </div>
        </div>
    </section>
  )
}
