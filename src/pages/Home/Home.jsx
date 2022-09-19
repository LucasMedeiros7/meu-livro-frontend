import { Banner } from "../../components/banner/Banner.jsx";
import { CardProduto } from "../../components/cardProduto/CardProduto.jsx";
import { Editoras } from "../../components/Section/Editora/Editoras.jsx";
import { Novidades } from "../../components/Section/Novidades/Novidades.jsx";
import { Vantagens } from "../../components/Section/Vantagens/Vantagens.jsx";

export const Home = () => {
  return (
    <div>
      <Banner />
      <Vantagens />
      <CardProduto />
      <Editoras />
      <Novidades />
    </div>
  );
};
