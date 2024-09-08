import React from 'react'
import styles from "./style.module.scss";
import imgLogin from "../../../assets/imgLogin.png"
import { Input } from '../../Form/Input';
import { ButtonSolid } from '../../Button/ButtonSolid';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useUserContext } from '../../../providers/UserContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from './loginSchema';

export const SectionLogin = () => {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(loginSchema)
  })
  const {userLogin} = useUserContext()

  const submit = (formData) => {
    userLogin(formData)
  }

  return (
    <section className={styles.sectionContainer}>
        <div className={styles.divContainer}>
            <img className={styles.imgLogin} src={imgLogin} alt="imagem moça" />
            <div className={styles.divBox}>
                <h1 className='title1'>Faça login</h1>
                <form onSubmit={handleSubmit(submit)} className={styles.formLogin}>
                    <Input type="text" placeholder="E-mail" {...register("email")} error={errors.email} />
                    <Input type="password" placeholder="Senha" {...register("password")} error={errors.password} />
                    <ButtonSolid type="submit">Entrar</ButtonSolid>
                </form>
              <p className={`paragraph ${styles.pForm}`}>Não possui cadastro? <Link to="/registerpage" ><span className={styles.spanForm}>Cadastre-se</span></Link></p>
            </div>
        </div>
    </section>
  )
}
