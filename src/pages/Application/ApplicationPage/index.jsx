import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { Footer } from "../../../components/Footer";
import { ListMyApplications } from "../../../components/List/ListMyApplications";
import { useUserContext } from "../../../providers/UserContext";
import { HeaderLogin } from "../../../components/HeaderLogin";
import { FaArrowLeft } from "react-icons/fa";

export const ApplicationPage = () => {
  const { user } = useUserContext();
  const firstLetra = user?.substring(0, 2);

  return (
    <>
      <HeaderLogin text={firstLetra?.toUpperCase()} button={"Sair"} />
      <main>
        <section className={styles.sectionContainer}>
          <Link to="/landingpage" className={styles.linkBox}>
            <span>
              <FaArrowLeft />
            </span>
            <p className="paragraphBold2">voltar</p>
          </Link>
          <div className={styles.divBox}>
            <Link to="/landingpage/jobs">
              <p className="paragraphBold2">Minhas vagas</p>
            </Link>
            <Link to="/landingpage/applications">
              <p className="paragraphBold2">Minhas candidaturas</p>
            </Link>
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
