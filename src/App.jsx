import React from "react";
import { Header } from "./components/Header";
import { Banner } from "./components/banner/Banner";
import { CardProduto } from "./components/cardProduto/CardProduto";
import { Footer } from "./components/footer/footer";

import "./global.css";
import { Cadastro } from "./pages/cadastro/Cadastro";

export function App() {
  return (
    <div>
      <Header />
      <Cadastro />
      <Footer />
    </div>
  );
}
