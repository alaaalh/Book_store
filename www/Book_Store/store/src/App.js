import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LoginPadge from "./padges/LoginPadge/LoginPadge";
import RegisterPadge from "./padges/RegisterPadge/RegisterPadge";
import React, { Suspense} from "react";
import DetailsPadge from './padges/detailsPadge/DetailsPadge';
import MainPadge from "./padges/MainPadge/MainPadge";
const HowAre = React.lazy(() => import("./padges/HowAre/HowAre"));
const Contact = React.lazy(() => import("./padges/Contact/Contact"));



function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<MainPadge />} />
            <Route path="/login" exact element={<LoginPadge />} />
            <Route path="/register" exact element={<RegisterPadge />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/whoare" exact element={<HowAre />} />
            <Route path="/books/:id" exact element={<DetailsPadge />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
