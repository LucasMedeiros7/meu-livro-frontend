import React from "react";
import { Header } from "./components/Header";
import { Banner } from "./components/banner/Banner";
import { CardProduto } from "./components/cardProduto/CardProduto";
import { Footer } from "./components/footer/footer";

import "./global.css";
import { Carrinho } from "./pages/carrinho/Carrinho";

export function App() {
  return (
    <div>
      <Header />
      <Carrinho />
      <Footer />
    </div>
  );
}
