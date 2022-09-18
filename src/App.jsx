import React from "react";
import { Header } from "./components/Header";
import { Banner } from "./components/banner/Banner";
import { CardProduto } from "./components/cardProduto/CardProduto";
import { Editoras } from "./components/Section/Editora/Editoras";
import { Novidades } from "./components/Section/Novidades/Novidades";
import { Vantagens } from "./components/Section/Vantagens/Vantagens";
import { Footer } from "./components/footer/footer";

import "./global.css";
import { Cadastro } from "./pages/cadastro/Cadastro";

export function App() {
  return (
    <div>
      <Banner />
      <Vantagens />
      <CardProduto />
      <Editoras />
      <Novidades />
      <Header />
      <Cadastro />
      <Footer />
    </div>
  );
}
