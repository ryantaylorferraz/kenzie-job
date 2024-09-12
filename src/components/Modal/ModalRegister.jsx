import { useForm } from "react-hook-form";
import { ButtonSolid } from "../Button/ButtonSolid";
import { Input } from "../Form/Input";
import styles from "./style.module.scss";
import { generatedId } from "../../count/count";
import { useJobContext } from "../../providers/JobContext";

export const ModalRegister = ({movieImg}) => {
  const {jobModal, registerVaga, showModal, setShowModal, jobIdUser} = useJobContext()
  const {register, handleSubmit} = useForm()
  
  console.log(jobModal)

  const submit = (formData) => {
    const newApplication = {
      jobId: jobModal.id,
      userId: jobModal.userId,
      ...formData
    }
    setShowModal(!showModal)
    console.log(newApplication);
    
    registerVaga(newApplication)
  }
  
  return (
    <div className={styles.modalOverlay} role='dialog'>
        <div className={styles.modalBox}>
            <span onClick={() => setShowModal(!showModal)}>X</span>
            <h1 className="paragraphBoldModal">Candidatar-se</h1>
            <p className="paragraph">Você está se canditando para <span>{jobModal.position}</span> em
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
