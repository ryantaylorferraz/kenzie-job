import React from "react";
import { Footer } from "../../components/Footer";
import styles from "./style.module.scss";
import { ListMyApplications } from "../../components/List/ListMyApplications";
import { useUserContext } from "../../providers/UserContext";
import { HeaderLogin } from "../../components/HeaderLogin";
import { Link } from "react-router-dom";

export const ApplicationPage = () => {
  const { user } = useUserContext();
  const firstLetra = user?.substring(0, 2);

  return (
    <>
      <HeaderLogin text={firstLetra?.toUpperCase()} button={"Sair"} />
      <main>
        <section className={styles.sectionContainer}>
        <div className={styles.divBox}>
        <Link to="/landingpage/jobs" ><p className="paragraphBold2">Minhas vagas</p></Link>
        <Link to="/landingpage/applications" ><p className="paragraphBold2">Minhas candidaturas</p></Link>
        </div>
          <h1 className="title4">Minhas candidaturas</h1>
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
