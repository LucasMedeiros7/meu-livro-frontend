import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./global.css";

import { Home } from "./pages/Home/Home.jsx";
import { Cadastro } from "./pages/cadastro/Cadastro";
import { Login } from "./pages/Login/Login";
import { Header } from "./components/Header/index";
import { Footer } from "./components/Footer/footer";
import { LoginProvider } from "./contexts/loginContext";
import { Carrinho } from "./pages/carrinho/Carrinho";
import { CarrinhoProvider } from "./contexts/carrinhoContext";

import { ToastContainer } from "react-toastify";
import { DetalhesProduto } from "./pages/detalhesProduto/DetalhesProduto";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <LoginProvider>
          <CarrinhoProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/carrinho" element={<Carrinho />} />
              <Route path="/detalhes/:id" element={<DetalhesProduto />} />
            </Routes>
            <Footer />
            <ToastContainer />
          </CarrinhoProvider>
        </LoginProvider>
      </BrowserRouter>
    </div>
  );
}
