import React, { useState } from "react";
import styles from "./style.module.scss";


import { ButtonOutline } from "../../Button/ButtonOutline";
import { ListVagas } from "../../List/ListVagas";

export const SectionOportunity = () => {

  return (
    <section className={styles.sectionBox}>
      <div className={styles.divBox}>
        <h2 className={`title1 ${styles.titleOportunity}`}>
          Confira nossas vagas
        </h2>
        <div>
          <ListVagas />
        </div>
      </div>
    </section>
  );
};
