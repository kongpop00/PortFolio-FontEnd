import { useState } from "react";
import Header from "./assets/componen/Header";
import Nav from "./assets/componen/Nav";
import PortFolio from "./assets/componen/PortFolio";
import Skills from "./assets/componen/Skills";
import { Route, Routes } from "react-router";

function App() {
 const [isOpenNav , setIsOpenNav]=useState(false)

  return (
    <>
      <Nav isOpenNav={isOpenNav}/>
    <Routes>
      <Route path="/" element={ <Header setIsOpenNav={setIsOpenNav}/>}/>
      <Route path="/skill" element={<Skills  />}/>
      <Route path="/project" element={   <PortFolio  />}/>
      
    
      </Routes>
    </>
  );
}

export default App;
