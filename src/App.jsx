import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./global.css";

import { Home } from "./pages/Home/Home.jsx";
import { Cadastro } from "./pages/cadastro/Cadastro";
import { Login } from "./pages/Login/Login";
import { Header } from "./components/Header";
import { Footer } from "./components/footer/footer";
import { LoginProvider } from "./contexts/loginContext";

export function App() {
  return (
    <div>
      <Router>
        <LoginProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </LoginProvider>
      </Router>
    </div>
  );
}
