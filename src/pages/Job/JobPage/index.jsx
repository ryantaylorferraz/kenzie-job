import React from "react";
import styles from "./style.module.scss";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../providers/UserContext";
import { HeaderLogin } from "../../../components/HeaderLogin";
import { Footer } from "../../../components/Footer";
import { ButtonSolid } from "../../../components/Button/ButtonSolid";
import { ListMyVagas } from "../../../components/List/ListMyVagas";
import { FaArrowLeft } from "react-icons/fa";
import { useJobContext } from "../../../providers/JobContext";


export const JobPage = () => {
  const { user } = useUserContext();
  const {jobByCompany} = useJobContext();

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
          <div className={styles.divTitle}>
            <h1 className="title4">Minhas vagas</h1>
            <Link to="/landingpage/jobs/createjob">
              <ButtonSolid>
                <span className={styles.spanAdd}>
                  <IoIosAddCircleOutline />
                </span>
                Criar vaga
              </ButtonSolid>
            </Link>
          </div>

          <div>
            <ul className={styles.ulContainer}>
              {jobByCompany.map(job => (
                <ListMyVagas key={job.id} job={job} />
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
