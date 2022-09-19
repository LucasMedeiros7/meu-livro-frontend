import { useContext } from "react";
import { carrinhoContext } from "../../contexts/carrinhoContext";
import { X } from "phosphor-react";

import styles from "./ItemCarrinho.module.css";

export function ItemCarrinho({ produto }) {
  const { item: livro } = produto;

  const { incrementaCarrinho, decrementaCarrinho, removeDoCarrinho } =
    useContext(carrinhoContext);

  const decrementaDesabilitado = produto.quantidade === 1;

  return (
    <div className={styles.itemCarrinho}>
      <img src={livro.url_img} alt="Capa do livro" />

      <div className={styles.tituloEAutor}>
        <strong>{livro.titulo}</strong>
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
