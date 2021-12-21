import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LoginPadge from "./padges/LoginPadge/LoginPadge";
import RegisterPadge from "./padges/RegisterPadge/RegisterPadge";
import React from "react";
import MainPadge from "./padges/MainPadge/MainPadge";
import Contact from "./padges/Contact/Contact";
import HowAre from './padges/HowAre/HowAre';


function App() {
  return (
    <>
      <BrowserRouter>
        <MainPadge/>
        <Routes>
          <Route path="/login" element={<LoginPadge />} />
          <Route path='/register' element={<RegisterPadge/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/howare' element={<HowAre/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
