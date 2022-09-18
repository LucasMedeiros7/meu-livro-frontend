import React from "react";
import { Header } from "./components/Header";
import { Banner } from "./components/banner/Banner";
import { CardProduto } from "./components/cardProduto/CardProduto";
import { Editoras } from "./components/Section/Editora/Editoras";
import { Novidades } from "./components/Section/Novidades/Novidades";
import { Vantagens } from "./components/Section/Vantagens/Vantagens";
import { Footer } from "./components/footer/footer";

import "./global.css";
import { Login } from "./components/Login/Login";

export function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Vantagens />
      <CardProduto />
      <Editoras />
      <Novidades />
      <Login />
      <Footer />
    </div>
  );
}
