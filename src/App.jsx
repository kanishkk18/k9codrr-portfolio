import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Projectpage from "./pages/project";
import About from "@/components/Grid";


const App = () => {


  return ( 
  <BrowserRouter>
    <div>
   
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projectpage" element={<Projectpage/>} />
      <Route path="#about" element={<About/>} />
      <Route path="*" element={<Navigate to='/Home'/>}/>
      </Routes>
     
    </div>
    </BrowserRouter>
  )
}

export default App;