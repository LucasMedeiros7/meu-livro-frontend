import { useContext } from "react";
import { carrinhoContext } from "../../contexts/carrinhoContext";
import { X } from "phosphor-react";

import styles from "./ItemCarrinho.module.css";
import { useNavigate } from "react-router-dom";

export function ItemCarrinho({ produto }) {
  const { item: livro } = produto;

  const { incrementaCarrinho, decrementaCarrinho, removeDoCarrinho } =
    useContext(carrinhoContext);
  const navigate = useNavigate();

  const decrementaDesabilitado = produto.quantidade === 1;

  const irParaDetalhes = (id) => {
    navigate(`/detalhes/${id}`, { replace: true });
  };

  return (
    <div className={styles.itemCarrinho}>
      <img
        onClick={() => irParaDetalhes(livro.id_livro)}
        src={livro.url_img}
        alt="Capa do livro"
      />

      <div className={styles.tituloEAutor}>
        <strong onClick={() => irParaDetalhes(livro.id_livro)}>
          {livro.titulo}
        </strong>
        <p>{livro.autor}</p>

        <div className={styles.quantidadeCarrinho}>
          <button
            disabled={decrementaDesabilitado}
            onClick={() => decrementaCarrinho(livro.id_livro)}
            className={styles.btnQuantidadeCarrinho}
          >
            -
          </button>
          <input
            readOnly
            type="viewBox"
            value={produto.quantidade}
            className={styles.contadorQuantidade}
          />
          <button
            onClick={() => incrementaCarrinho(livro.id_livro)}
            className={styles.btnQuantidadeCarrinho}
          >
            +
          </button>
        </div>
      </div>

      <div className={styles.precoEBotao}>
        <p className={styles.preco}>R$ {livro.preco}</p>
        <button
          className={styles.btnDelete}
          onClick={() => removeDoCarrinho(livro.id_livro)}
        >
          <X size={28} />
        </button>
      </div>
    </div>
  );
}
