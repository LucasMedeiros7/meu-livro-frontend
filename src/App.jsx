import React from "react";
import { Header } from "./components/Header/Header";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home.jsx"
import { Cadastro } from "./pages/cadastro/Cadastro"
import { Footer } from "./components/footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./global.css";

export function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}
