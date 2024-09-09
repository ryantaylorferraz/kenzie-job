import React from "react";

import { SectionBanner } from "../../components/Section/SectionBanner";
import { SectionAbout } from "../../components/Section/SectionAbout";
import { SectionOportunity } from "../../components/Section/SectionOportunity";
import { Header } from "../../components/Header";
import { useJobContext } from "../../providers/JobContext";
import { Footer } from "../../components/Footer";
import { ModalRegister } from "../../components/Modal/ModalRegister";


export const HomePage = () => {
  const {showModal} = useJobContext()
  return (
    <>
      <Header text={"acesso empresa"} button={"Confira nossas vagas"} />
      <main>
        <SectionBanner />
        <SectionAbout />
        <SectionOportunity />
        {showModal ? <ModalRegister /> : null }

      </main>
      <Footer />
    </>
  );
};
