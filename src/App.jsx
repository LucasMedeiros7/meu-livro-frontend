import React from "react";
import { Header } from "./components/Header";
import { Banner } from "./components/banner/Banner";
import { CardProduto } from "./components/cardProduto/CardProduto";


import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Banner />
      <CardProduto />
    </div>
  );
}
