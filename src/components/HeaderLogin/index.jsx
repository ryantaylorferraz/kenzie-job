import React from 'react'
import imgLogo from "../../assets/imgLogo.png"
import styles from "./style.module.scss"
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import { ButtonOutline } from '../Button/ButtonOutline';
import { useUserContext } from '../../providers/UserContext';


export const HeaderLogin = ({text, text2, button}) => {
  const {userLogout} = useUserContext()
  return (
    <header className={styles.headerContainer}>
        <div className={styles.divContainer}>
          <Link to="/" ><img className={styles.imgLogo} src={imgLogo} alt="logo Job" /></Link>
          <div className={styles.divBox}>
              <Link to="/loginpage" ><p className='paragraphBold'>{text}</p></Link> 
              <Link to="/loginpage" ><p className='paragraphBold2'>{text2}</p></Link> 
              <div className={styles.divBtn}>
                <Link onClick={() => userLogout()} ><ButtonOutline>{button}</ButtonOutline></Link>
              </div>
              <span className={styles.spanLupa}><IoIosSearch size={28} color="#8490FF" /></span>
          </div>
        </div>
    </header>
  )
}
