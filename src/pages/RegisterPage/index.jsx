import React from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { SectionRegister } from '../../components/Section/SectionRegister'
import styles from "./style.module.scss";

export const RegisterPage = () => {
  return (
    <>
    <Header text2={"acesso empresa"} button={"Confira nossas vagas"} />
    <main className={styles.mainContainer}>
        <SectionRegister />
    </main>
    <Footer />

    </>
  )
}
