import { Routes, Route } from "react-router-dom";
import { HeroesRoutes } from "../heroes/";
import { LoginPage } from "../auth/"

export const AppRotuer = () => {
  return (
    <>  

    <Routes>
    <Route path="login" element={<LoginPage />} />    
    
        <Route path="/*" element={<HeroesRoutes />} />

    </Routes>
    </>
  )
}
