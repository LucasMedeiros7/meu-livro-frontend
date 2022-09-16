import React from "react";
import { Banner } from "./components/banner/Banner";
import { CardProduto } from "./components/cardProduto/CardProduto";
import { Vantagens } from "./components/Section/Vantagens";

import "./global.css";

export function App() {
  return (
    <div>
      <Banner />
      <Vantagens/>
      <CardProduto/>
    </div>
  );
}
