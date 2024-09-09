import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { JobSearchPage } from "../pages/JobSearchPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { LandingPage } from "../pages/LandingPage";
import { ProtectedRouter } from "../components/ProtectedRouter/index.";
import { JobPage } from "../pages/JobPage";
import { ApplicationPage } from "../pages/ApplicationPage";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/jobsearch" element={<JobSearchPage />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/registerpage" element={<RegisterPage />} />

      <Route path="/landingpage" element={<ProtectedRouter />}>
        <Route index element={<LandingPage />} />
        <Route path="jobs" element={<JobPage />} />
        <Route path="applications" element={<ApplicationPage />} />
        
      </Route>
    </Routes>
  );
};
