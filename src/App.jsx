import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./global.css";

import { Home } from "./pages/Home/Home.jsx";
import { Cadastro } from "./pages/cadastro/Cadastro";
import { Login } from "./pages/Login/Login";
import { Header } from "./components/Header";
import { Footer } from "./components/footer/footer";
import { LoginProvider } from "./contexts/loginContext";

export function App() {
  const [book, setBook] = useState([]);

  return (
    <div>
      <Router>
        <LoginProvider>
          <Header setBook={setBook} />
          <Routes>
            <Route path="/" element={<Home setBook={setBook} book={book} />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </LoginProvider>
      </Router>
    </div>
  );
}
