import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ItemCarrinho } from "../../components/itemCarinho/ItemCarrinho";
import { carrinhoContext } from "../../contexts/carrinhoContext";
import { loginContext } from "../../contexts/loginContext";
import { toast } from "react-toastify";

import styles from "./Carrinho.module.css";

export function Carrinho() {
  const { carrinho, totalDoCarrinho, checkoutCarrinho } =
    useContext(carrinhoContext);
  const { logado } = useContext(loginContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  function checkout() {
    if (logado) {
      toast.success("Compra efetuada com sucesso", {
        position: toast.POSITION.TOP_CENTER,
      });
      checkoutCarrinho();
      navigate("/");
    } else {
      toast.error("Faça login para prosseguir com a compra", {
        position: toast.POSITION.TOP_CENTER,
      });

      navigate("/login");
    }
  }

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
        <Link className={styles.btnContinuar} to="/">
          Continuar comprando
        </Link>
        <button className={styles.btnComprar} onClick={checkout}>
          Concluir compra
        </button>
      </div>
    </div>
  );
}
