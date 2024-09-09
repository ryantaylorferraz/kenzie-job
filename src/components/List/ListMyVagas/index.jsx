import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import styles from "./style.module.scss"
import { useJobContext } from "../../../providers/JobContext";
import { Link } from "react-router-dom";

export const ListMyVagas = ({job}) => {
  const { setJobId, deleteVaga} = useJobContext()

  return (
    <li className={styles.liContainer}>
      <div className={styles.divContainer}>
        <h3 className="title2">{job.position}</h3>
        <div className={styles.divBox}>
          <Link to="/landingpage/jobs/updatejob" onClick={() => setJobId(job)} >
           <span>
            <MdOutlineEdit />
          </span>
          </Link>
          <span onClick={() => deleteVaga(job.id)}>
            <FaRegTrashCan />
          </span>
        </div>
      </div>
    </li>
  );
};
