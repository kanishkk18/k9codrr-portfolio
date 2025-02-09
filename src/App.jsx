import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Projectpage from "./pages/project";
import About from "@/components/Grid";
import Footer from "./components/Footer";


const App = () => {


  return ( 
  <BrowserRouter>
    <div>
   
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projectpage" element={<Projectpage/>} />
      <Route path="#about" element={<About/>} />
      <Route path="#contact" element={<Footer/>} />
      </Routes>
     
    </div>
    </BrowserRouter>
  )
}

export default App;