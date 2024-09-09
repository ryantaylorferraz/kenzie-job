import React from "react";
import { Header } from "../../components/Header";
import { SectionLogin } from "../../components/Section/SectionLogin";
import styles from "./style.module.scss";
import { Footer } from "../../components/Footer";


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
