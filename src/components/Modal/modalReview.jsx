import { useForm } from "react-hook-form";
import { useJobContext } from "../../providers/JobContext";
import { ButtonSolid } from "../Button/ButtonSolid";
import { Input } from "../Form/Input";
import styles from "./style.module.scss";
import { generatedId } from "../../count/count";

export const ModalRegister = ({movieImg}) => {
  const {jobModal, registerVaga, showModal, setShowModal} = useJobContext()
  const {register, handleSubmit} = useForm()

  const submit = (formData) => {
    const newApplication = {
      jobId: jobModal.id,
      userId: generatedId(),
      ...formData
    }
    console.log(newApplication);
    setShowModal(!showModal)
    
    registerVaga(newApplication)
  }

  
  return (
    <div className={styles.modalOverlay} role='dialog'>
        <div className={styles.modalBox}>
            <span onClick={() => setShowModal(!showModal)}>X</span>
            <h1 className="paragraphBoldModal">Candidatar-se</h1>
            <p className="paragraph">Você está se canditando para {jobModal.position} em
            <span> Kenzie Academy Brasil</span></p>
            <form className={styles.formModal} onSubmit={handleSubmit(submit)} >
                <Input type="text" placeholder="Nome" required {...register("name")} />
                <Input type="email" placeholder="Email" required {...register("email")} />
                <Input type="text" placeholder="Linkedin" required {...register("linkedin")} />
                <ButtonSolid>Candidatar-se</ButtonSolid>
            </form>
        </div>
    </div>
  )
}
