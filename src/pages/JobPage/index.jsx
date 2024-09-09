import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonSolid } from "../../components/Button/ButtonSolid";
import { ListMyVagas } from "../../components/List/ListMyVagas";
import styles from "./style.module.scss"
import { useUserContext } from "../../providers/UserContext";
import { HeaderLogin } from "../../components/HeaderLogin";

export const JobPage = () => {
  const {user} = useUserContext()
  const firstLetra = user?.substring(0, 2)
  return (
    <>
    <HeaderLogin text={firstLetra?.toUpperCase()} button={"Sair"}  />
    <main>
        <div className={styles.divBox}>
          <p>Minhas vagas</p>
          <p>Minhas candidaturas</p>
        </div>
        <section>
          <div>
            <h1>Minhas vagas</h1>
            <ButtonSolid>Criar vaga</ButtonSolid>
          </div>

          <div>
            <ul>
              <ListMyVagas />
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
