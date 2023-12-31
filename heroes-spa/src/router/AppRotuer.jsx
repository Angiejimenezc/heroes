import { Routes, Route } from "react-router-dom";
import { HeroesRoutes } from "../heroes/";
import { LoginPage } from "../auth/"
import { PrivateRoute } from "./PrivateRoute";
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
      <PrivateRoute>
        <HeroesRoutes />
      </PrivateRoute>
      } />
    </Routes>
    </>
  )
}
