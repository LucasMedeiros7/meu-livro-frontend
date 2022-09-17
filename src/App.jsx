import React from "react";
import { Banner } from "./components/banner/Banner";
import { CardProduto } from "./components/cardProduto/CardProduto";
import { Editoras } from "./components/Section/Editora/Editoras";
import { Novidades } from "./components/Section/Novidades/Novidades";
import { Vantagens } from "./components/Section/Vantagens/Vantagens";

import "./global.css";

export function App() {
  return (
    <div>
      <Banner />
      <Vantagens />
      <CardProduto />
      <Editoras />
      <Novidades />
    </div>
  );
}
