import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa";
import styles from "./style.module.scss"
import { IoMdAdd } from 'react-icons/io';
import { useJobContext } from '../../../providers/JobContext';

export const ListMyApplications = ({candidate}) => {
  const [expandedJobId, setExpandedJobId] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const {jobByCompany} = useJobContext()

  const filterJob = jobByCompany.find(job => job.id === candidate.jobId)
  
  return (
    <li className={styles.liContainer}>
      <div className={styles.divBox}>
        <h3 className='title2'>{candidate.name} - {candidate.job.position}</h3>
        <span onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? (
            <FaMinus size={32} color="#8490FF" />

          ): <IoMdAdd size={32} color="#8490FF" />}
        </span>
      </div>
      {showDetails ? (
        <>
      <div className={styles.divDetails}>
        <p className='paragraph' >Detalhes da candidatura:</p>
        <p>E-mail: <span className="paragraphBold">{candidate.email}</span></p>
      </div>
        </>
      ) : null}
    </li>
  )
}
