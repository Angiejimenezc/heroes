import { Routes, Route } from "react-router-dom";
import { HeroesRoutes } from "../heroes/";
import { LoginPage } from "../auth/"
import { PriveteRoute } from "./PriveteRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRotuer = () => {
  return (
    <>  

    <Routes>
    
    <Route path="login/*" element={
      <PublicRoute>
      <Routes>
        <Route path="/*" element={<LoginPage />} />  
      </Routes>
      </PublicRoute>
    } />
   

      <Route path="/*" element={
      <PriveteRoute>
        <HeroesRoutes />
      </PriveteRoute>
      } />
    </Routes>
    </>
  )
}
