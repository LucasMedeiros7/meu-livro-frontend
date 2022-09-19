import { useContext } from "react";
import { Link } from "react-router-dom";

import { ItemCarrinho } from "../../components/itemCarinho/ItemCarrinho";
import { carrinhoContext } from "../../contexts/carrinhoContext";

import styles from "./Carrinho.module.css";

export function Carrinho() {
  const { carrinho, totalDoCarrinho } = useContext(carrinhoContext);

  if (!carrinho.length) {
    return (
      <div className={styles.carrinhoContainer}>
        <h1>Meu carrinho</h1>

        <h2
          style={{ textAlign: "center", fontWeight: "500", marginTop: "52px" }}
        >
          Seu carrinho está vazio :(
        </h2>

        <div className={styles.botoes}>
          <Link
            to="/"
            className={styles.btnContinuar}
            style={{ margin: "0 auto" }}
          >
            Voltar para página inicial
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.carrinhoContainer}>
      <h1>Meu carrinho</h1>

      {carrinho.map((produto, index) => {
        return <ItemCarrinho key={index} produto={produto} />;
      })}

      <p className={styles.total}>Total: {totalDoCarrinho()}</p>

      <div className={styles.botoes}>
        <button className={styles.btnContinuar}>Continuar comprando</button>
        <button className={styles.btnComprar}>Concluir compra</button>
      </div>
    </div>
  );
}
