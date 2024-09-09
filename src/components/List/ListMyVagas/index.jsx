import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import styles from "./style.module.scss"

export const ListMyVagas = () => {
  return (
    <li className={styles.liContainer}>
      <div className={styles.divContainer}>
        <h3 className="title2">Desenvolvedor Full Stack Jr</h3>
        <div className={styles.divBox}>
          <span>
            <MdOutlineEdit />
          </span>
          <span>
            <FaRegTrashCan />
          </span>
        </div>
      </div>
    </li>
  );
};
