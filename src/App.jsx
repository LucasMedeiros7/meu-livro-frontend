import React from "react";
import { Banner } from "./components/banner/Banner";
import { CardProduto } from "./components/cardProduto/CardProduto";
import { Footer } from "./components/footer/footer"
import "./global.css";

export function App() {
  return (
    <div>
      <Banner />
      <CardProduto />
      <Footer />
    </div>
  );
}
