import { Navbar } from '../../ui';
import { Routes, Route, Navigate } from "react-router-dom";
import { MarvelPage, DCPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
    <Route path="marvel" element={<MarvelPage />} />
    <Route path="dc" element={<DCPage />} />

   
    <Route path="/" element={<Navigate to="/marvel" />} />
      
    </Routes>
    </>
  )
}


