import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import { Navbar } from "../ui";

import { LoginPage } from "../auth/LoginPage";
import { DCPage } from "../heroes/pages/DCPage";
import { MarvelPage } from "../heroes/pages/MarvelPage";

export const AppRotuer = () => {
  return (
    <>
    <Navbar />

    <Routes>
    <Route path="marvel" element={<MarvelPage />} />
    <Route path="dc" element={<DCPage />} />

    <Route path="login" element={<LoginPage />} />
    <Route path="/" element={<Navigate to="/marvel" />} />
      
    </Routes>
    </>
  )
}
