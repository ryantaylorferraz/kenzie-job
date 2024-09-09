import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonSolid } from "../../components/Button/ButtonSolid";
import { ListMyVagas } from "../../components/List/ListMyVagas";
import styles from "./style.module.scss"
import { useUserContext } from "../../providers/UserContext";
import { HeaderLogin } from "../../components/HeaderLogin";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";


export const JobPage = () => {
  const {user} = useUserContext()
  const firstLetra = user?.substring(0, 2)
  return (
    <>
    <HeaderLogin text={firstLetra?.toUpperCase()} button={"Sair"}  />
    <main>
        <section className={styles.sectionContainer}>
        <div className={styles.divBox}>
        <Link to="/landingpage/jobs" ><p className="paragraphBold2">Minhas vagas</p></Link>
        <Link to="/landingpage/applications" ><p className="paragraphBold2">Minhas candidaturas</p></Link>
        </div>
          <div className={styles.divTitle}>
            <h1 className="title4">Minhas vagas</h1>
            <ButtonSolid> 
              <span className={styles.spanAdd}>
                <IoIosAddCircleOutline />
            </span>
            Criar vaga
            </ButtonSolid>
          </div>

          <div>
            <ul>
              <ListMyVagas />
              {/* <ListMyVagas /> */}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
