import React from 'react'
import { useUserContext } from '../../providers/UserContext'
import { Footer } from '../../components/Footer'
import { HeaderLogin } from '../../components/HeaderLogin'
import styles from "./style.module.scss";
import { Link } from 'react-router-dom';


export const LandingPage = () => {

    const {user} = useUserContext()
    const firstLetra = user?.substring(0, 2)
  return (
    <>
    <HeaderLogin text={firstLetra?.toUpperCase()} button={"Sair"}  />
    <main>
        <section className={styles.sectionContainer}>
          <h1 className='title4'>{user}</h1>
          <div className={styles.divContainer}>
            <p>Seja bem vindo (a), selecione uma das opções abaixo:</p>
            <div className={styles.divBox}>
              <Link to="/landingpage/jobs" ><p className="paragraphBold2">Minhas vagas</p></Link>
              <Link to="/landingpage/applications" ><p className="paragraphBold2">Minhas candidaturas</p></Link>
            </div>
          </div>
        </section>
    </main>
    <Footer />  

    </>
  )
}
