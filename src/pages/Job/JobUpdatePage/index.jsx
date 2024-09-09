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


export const JobUpdatePage = () => {
  const { updateVaga, jobId } = useJobContext();

  const {register, handleSubmit, reset} = useForm({
    values: {
      position: jobId.position,
      sallary: jobId.sallary,
      description: jobId.description
    }
  })
  const { user } = useUserContext();

  const submit = (formData) => {
    updateVaga(jobId, formData)
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
            <h1 className="paragraphBoldModal">Editando: {jobId.position}</h1>
            <form onSubmit={handleSubmit(submit)} className={styles.formContainer}>
              <div className={styles.divForm}>
                <div className={styles.divInput}>
                  <Input type="text" placeholder="Cargo" {...register("position")} />
                  <Input type="text" placeholder="Salário (opcional)" {...register("sallary")} />
                </div>
                <textarea rows="5" cols="30" placeholder="Descrição" {...register("description")} />
              </div>
              <div className={styles.divBtn}>
                <ButtonSolid type="submit" >
                  Editar vaga
                </ButtonSolid>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
