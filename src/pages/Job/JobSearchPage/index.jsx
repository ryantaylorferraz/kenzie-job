import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { IoIosSearch } from "react-icons/io";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { ListVagas } from "../../../components/List/ListVagas";
import { useJobContext } from "../../../providers/JobContext";
import { InputSearch } from "../../../components/Form/InputSearch";
import { ModalRegister } from "../../../components/Modal/ModalRegister";

export const JobSearchPage = () => {
  const [value, setValue] = useState("");
  const { search, setSearch, vagas, setVagas, showModal } = useJobContext();
  

  const submit = (e) => {
    e.preventDefault();
    setSearch(value);
    setVagas(true);
  };

  useEffect(() => {
    if (value === "") {
      setVagas(false);
    }
  }, [value, setVagas]);

  return (
    <>
      <Header
        className={styles.headerJob}
        text={"acesso empresa"}
        button={"Confira nossas vagas"}
      />
      <main className={styles.mainContainer}>
        <section className={styles.sectionContainer}>
          <div className={styles.divContainer}>
            <h1 className="title1">Busca de vagas</h1>
            <div className={styles.divBox}>
              <h3 className="paragraphBold">Digite o que você está procurando:</h3>
              <div className={styles.divInput}>
                <form className={styles.formBox} onSubmit={submit}>
                  <InputSearch
                    text="text"
                    placeholder="Pesquisa"
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <button type="submit">
                    <IoIosSearch size={40} color="#8490FF" />
                  </button>
                </form>
              </div>
              <div className={styles.divShowResults}>
                {vagas && value ? (
                  <div className={styles.divNotFind}>
                    <p>Resultados de busca para: <span className="title3">{value}</span></p>
                    <ListVagas />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
        {showModal ? <ModalRegister /> : null }
      </main>
      <Footer />
    </>
  );
};
