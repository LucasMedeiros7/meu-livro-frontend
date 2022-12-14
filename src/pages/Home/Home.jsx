import { Banner } from "../../components/banner/Banner.jsx";
import { CardProduto } from "../../components/cardProduto/CardProduto.jsx";
import { Editoras } from "../../components/Section/Editora/Editoras.jsx";
import { Novidades } from "../../components/Section/Novidades/Novidades.jsx";
import { Vantagens } from "../../components/Section/Vantagens/Vantagens.jsx";
import { Categoria } from "../../components/categorias/Categorias.jsx";
import { Loading } from "../../components/Loading/Loading.jsx";

export const Home = (props) => {
  const { book, setBook } = props;

  if (!book.length) {
    return (
      <div>
        <Loading />
        <CardProduto book={book} setBook={setBook} />
      </div>
    );
  }

  return (
    <div>
      <Banner />
      <Vantagens />
      <CardProduto book={book} setBook={setBook} />
      <Categoria />
      <Editoras />
      <Novidades />
    </div>
  );
};
