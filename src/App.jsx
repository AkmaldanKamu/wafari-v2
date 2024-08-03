import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Index";
import Navbars from "./Components/Navbar";
import Detail from "./Pages/Detail";
import Profil from "./Pages/Profil";
import Footer from "./Components/Footer";
import "./App.css"

function App() {
  return (
    <div className="bg-slate-400">
      <Router>
        <Navbars />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
