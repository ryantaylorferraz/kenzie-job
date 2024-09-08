import React from "react";

import { SectionBanner } from "../../components/Section/SectionBanner";
import { SectionAbout } from "../../components/Section/SectionAbout";
import { SectionOportunity } from "../../components/Section/SectionOportunity";
import { Footer } from "../../components/Footer";
import { useJobContext } from "../../providers/JobContext";
import { ModalRegister } from "../../components/Modal/modalReview";
import { Header } from "../../components/Header";

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
