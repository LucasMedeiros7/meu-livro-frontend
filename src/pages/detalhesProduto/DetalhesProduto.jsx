import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import avaliacaoCliente from "../../assets/avaliação-do-cliente.png";
import styles from "./DetalhesProduto.module.css";
import api from "../../services/api";



export function DetalhesProduto() {
  const [leiaMais, setLeiaMais] = useState(true);

  const [livro, setLivro] = useState(null);
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    api
      .get(`/livros/${id}`)
      .then((response) => setLivro(response.data[0]))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        console.log(livro)
      });

  }, []);

  if (!livro)
    return


  function alteraComportamentoDaDescricao() {
    if (livro?.descricao.length < 644) {
      return <p>{livro?.descricao}</p>;
    } else {
      return (
        <p>
          {leiaMais ? livro?.descricao.slice(0, 644) + "..." : livro?.descricao}

          <span onClick={() => setLeiaMais((estadoAtual) => !estadoAtual)}>
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
          <button>Comprar</button>
        </div>
        <div className={styles.avaliacaoProduto}>
          <span>Avaliações de clientes</span>
          <img src={avaliacaoCliente} alt="" />
        </div>
        <div className={styles.descricaoProduto}>
          {alteraComportamentoDaDescricao()}
        </div>
      </div>
    </div>
  );
}
