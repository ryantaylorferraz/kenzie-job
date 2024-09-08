import React from 'react'
import styles from "./style.module.scss";
import { Input } from '../../Form/Input';
import { ButtonSolid } from '../../Button/ButtonSolid';
import { useJobContext } from '../../../providers/JobContext';
import { useForm } from 'react-hook-form';
import { useUserContext } from '../../../providers/UserContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from './registerSchema';


export const SectionRegister = () => {
  const { userRegister } = useUserContext()
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(registerSchema)
  })

  const submit = (formData) => {
    delete formData.confirmPassword
    userRegister(formData)
  }

  return (
    <section className={styles.sectionContainer}>
        <div className={styles.divContainer}>
                <h1 className='title1'>Cadastre-se</h1>
                <form onSubmit={handleSubmit(submit)} className={styles.formLogin}>
                    <Input type="text" placeholder="Nome da empresa" {...register("name")} error={errors.name} />
                    <Input type="text" placeholder="E-mail" {...register("email")} error={errors.email} />
                    <Input type="password" placeholder="Senha" {...register("password")} error={errors.password} />
                    <Input type="password" placeholder="Confimar Senha" {...register("confirmPassword")} error={errors.confirmPassword} />
                    <ButtonSolid type="submit">Cadastrar-se</ButtonSolid>
                </form>
        </div>
    </section>
  )
}
