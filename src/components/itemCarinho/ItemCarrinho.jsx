import { useContext } from "react";
import { carrinhoContext } from "../../contexts/carrinhoContext";

import styles from "./ItemCarrinho.module.css";

export function ItemCarrinho({ produto }) {
  const { item: livro } = produto;

  const { incrementaCarrinho, decrementaCarrinho, removeDoCarrinho } =
    useContext(carrinhoContext);

  const decrementaDesabilitado = produto.quantidade === 1;

  return (
    <div className={styles.itemCarrinho}>
      <img src={src} alt="Capa do livro" />

      <div className={styles.tituloEAutor}>
        <strong>{livro.titulo}</strong>
        <p>{livro.autor}</p>
      </div>

      <input type="viewBox" value={quantidade} />
      <button
        disabled={decrementaDesabilitado}
        onClick={() => decrementaCarrinho(id)}
        className={styles.quantidadeCarrinho}
      >
        -
      </button>
      <button
        onClick={() => incrementaCarrinho(id)}
        className={styles.quantidadeCarrinho}
      >
        +
      </button>

      <div className={styles.precoEBotao}>
        <p className={styles.preco}>R$ {livro.preco}</p>
        <button
          className={styles.btnDelete}
          onClick={() => removeDoCarrinho(id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="200"
              y1="56"
              x2="56"
              y2="200"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
            <line
              x1="200"
              y1="200"
              x2="56"
              y2="56"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
          </svg>
        </button>
      </div>
    </div>
  );
}
