import React from "react";
import { HeaderLogin } from "../../../components/HeaderLogin";
import { Footer } from "../../../components/Footer";
import { useUserContext } from "../../../providers/UserContext";
import { Input } from "../../../components/Form/Input";
import { ButtonSolid } from "../../../components/Button/ButtonSolid";
import { IoIosAddCircleOutline } from "react-icons/io";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useJobContext } from "../../../providers/JobContext";
import { useForm } from "react-hook-form";




export const JobCreatePage = () => {
  const {register, handleSubmit, reset} = useForm()
  const { user } = useUserContext();
  const { createVaga } = useJobContext();
  
  const userId = localStorage.getItem("@USERID:")


  const submit = (formData) => {
    const newVaga = {userId, ...formData }
    
    createVaga(newVaga)
    reset()
  }


  const firstLetra = user?.substring(0, 2);
  return (
    <>
      <HeaderLogin text={firstLetra?.toUpperCase()} button={"Sair"} />
      <main>
        <section className={styles.sectionContainer}>
          <Link to="/landingpage/jobs" className={styles.linkBox}>
          <span><FaArrowLeft /></span>
          <p className="paragraphBold2">voltar</p>
          </Link>
          <div className={styles.divContainer}>
            <h1 className="title4">Criar Vaga</h1>
            <form onSubmit={handleSubmit(submit)} className={styles.formContainer}>
              <Input type="text" placeholder="Cargo" {...register("position")} />
              <Input type="text" placeholder="Salário (opcional)" {...register("sallary")} />
              <textarea rows="5" cols="30" placeholder="Descrição" {...register("description")} />
              <ButtonSolid>
                <span className={styles.spanAdd}>
                  <IoIosAddCircleOutline />
                </span>
                Criar vaga
              </ButtonSolid>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
