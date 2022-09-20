import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import avaliacaoCliente from "../../assets/avaliação-do-cliente.png";
import styles from "./DetalhesProduto.module.css";
import api from "../../services/api";
import { carrinhoContext } from "../../contexts/carrinhoContext";

export function DetalhesProduto() {
  const [leiaMais, setLeiaMais] = useState(true);
  const [livro, setLivro] = useState(null);

  const { id } = useParams();
  const { adicionaNoCarrinho } = useContext(carrinhoContext);
  const navigate = useNavigate();

  function vaiProCarrinho() {
    adicionaNoCarrinho(livro);
    navigate("/carrinho");
  }

  useEffect(() => {
    api
      .get(`/livros/${id}`)
      .then((response) => setLivro(response.data[0]))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  if (!livro) return;

  function alteraComportamentoDaDescricao() {
    if (livro?.descricao.length < 610) {
      return <p>{livro?.descricao}</p>;
    } else {
      return (
        <p className={styles.descricaoProduto}>
          {leiaMais ? livro?.descricao.slice(0, 610) + "..." : livro?.descricao}

          <span onClick={() => setLeiaMais(!leiaMais)}>
            {leiaMais ? "Leia mais" : "Leia menos"}
          </span>
        </p>
      );
    }
  }

  return (
    <div className={styles.detalhesContainer}>
      <img width="308" height="459" src={livro.url_img} alt="" />

      <div className={styles.detalhesProduto}>
        <h1>{livro?.titulo}</h1>
        <div className={styles.precoProduto}>
          <p>R$ {livro?.preco}</p>
          <p>Entrega GRÁTIS no seu primeiro pedido</p>
          <button onClick={vaiProCarrinho}>Comprar</button>
        </div>
        <div className={styles.avaliacaoProduto}>
          <span>Avaliações de clientes</span>
          <img src={avaliacaoCliente} alt="" />
        </div>

        {alteraComportamentoDaDescricao()}
      </div>
    </div>
  );
}
