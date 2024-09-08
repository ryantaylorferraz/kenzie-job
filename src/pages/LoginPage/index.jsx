import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SectionLogin } from "../../components/Section/SectionLogin";
import styles from "./style.module.scss";


export const LoginPage = () => {
  return (
    <>
      <Header text2={"acesso empresa"} button={"Confira nossas vagas"} />
      <main className={styles.mainContainer}>
        <SectionLogin />
      </main>
      <Footer />
    </>
  );
};
