import React, { useState } from 'react'
import styles from "./style.module.scss";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { ButtonOutline } from '../../Button/ButtonOutline';
import { useJobContext } from '../../../providers/JobContext';


export const ListVagas = () => {
    const [expandedJobId, setExpandedJobId] = useState(false);

    const { filterJob, showModal, setShowModal, registerShowModal } = useJobContext()

    
    const handleTextJob = (jobId) => {
      setExpandedJobId((prevId) => (prevId === jobId ? null : jobId))
    }

  return (
    <>
    {filterJob?.length > 0 ? (
    <ul className={styles.ulBox}>
          {filterJob?.slice(0,4).map((job) => (
            <li key={job.id} className={styles.liBox}>
              <div className={styles.divContainer}>
                <div className={styles.divFirst}>
                  <span onClick={() => handleTextJob(job.id)}>
                    {expandedJobId === job.id ? (
                      <FaMinus size={32} color="#8490FF" />
                    ) : (
                      <IoMdAdd size={32} color="#8490FF" />
                    )}
                  </span>
                  <h4 className="title2">{job.position}</h4>
                </div>
                <div className={styles.divSecond}>
                  <ButtonOutline onClick={() => registerShowModal(job)} >Candidate-se</ButtonOutline>
                </div>
                {expandedJobId === job.id ? (
                  <p className={styles.divShowText}>
                    {job.description}
                  </p>
                ) : null}
              </div>
            </li>

          ))}

          </ul>

    ) : (
      <div className={styles.divNotFind}>
        <h4 className='title2'>Desculpe :(!</h4>
        <p>Nenhum resultado encontrado</p>
      </div>
    )}
        
    </>
  )
}
