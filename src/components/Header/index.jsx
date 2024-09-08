import React from 'react'
import imgLogo from "../../assets/imgLogo.png"
import styles from "./style.module.scss"
import { IoIosSearch } from "react-icons/io";
import { ButtonSolid } from '../Button/ButtonSolid';
import { Link } from 'react-router-dom';


export const Header = ({text, text2, button}) => {
  return (
    <header className={styles.headerContainer}>
        <div className={styles.divContainer}>
          <Link to="/" ><img className={styles.imgLogo} src={imgLogo} alt="logo Job" /></Link>
          <div className={styles.divBox}>
              {text ? <Link to="/loginpage" ><p className='paragraphBold'>{text}</p></Link> : null }
              {text2 ? <Link to="/loginpage" ><p className='paragraphBold2'>{text2}</p></Link>  : null }
              <div className={styles.divBtn}>
                <Link to="/jobsearch" ><ButtonSolid>{button}</ButtonSolid></Link>
              </div>
              <span className={styles.spanLupa}><IoIosSearch size={28} color="#8490FF" /></span>
          </div>
        </div>
    </header>
  )
}
