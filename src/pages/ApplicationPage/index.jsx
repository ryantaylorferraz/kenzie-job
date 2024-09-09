import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonSolid } from "../../components/Button/ButtonSolid";
import { ListMyVagas } from "../../components/List/ListMyVagas";
import styles from "./style.module.scss"
import { ListMyApplications } from "../../components/List/ListMyApplications";

export const ApplicationPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className={styles.divBox}>
          <p>Minhas vagas</p>
          <p>Minhas candidaturas</p>
        </div>
        <section>
            <h1>Minhas candidaturas</h1>
          <div>
            <ul>
              <ListMyApplications />
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
