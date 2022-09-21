import styles from "./vantagens.module.css";

import carrinho from "../../../assets/carrinho.png";
import preco from "../../../assets/preco.png";
import caminhao from "../../../assets/caminhao.png";
import dinheiro from "../../../assets/dinheiro.png";
import cliente from "../../../assets/cliente.png";

export const Vantagens = () => {
  return (
    <section className={styles.sectionVantagens}>
      <h3 className={styles.titulo}>Conheça a Meu Livro</h3>
      <div className={styles.container}>
        <div className={styles.icons}>
          <p>Compra fácil</p>
          <span className={styles.span}>
            <img
              className={styles.img}
              src={carrinho}
              alt="carrinho de compras"
            />
          </span>
        </div>

        <div className={styles.icons}>
          <p>Pagamento seguro</p>
          <span className={styles.span}>
            <img
              className={styles.img}
              src={preco}
              alt="mão com um cifrão em cima"
            />
          </span>
        </div>

        <div className={styles.icons}>
          <p>Entrega rápida</p>
          <span className={styles.span}>
            <img src={caminhao} alt="caminhão" width="25%" />
          </span>
        </div>

        <div className={styles.icons}>
          <p>Reembolso garantido</p>
          <span className={styles.span}>
            <img
              className={styles.img}
              src={dinheiro}
              alt="símbolo do cifrão"
            />
          </span>
        </div>

        <div className={styles.icons}>
          <p>Arrependimento zero!</p>
          <span className={styles.span}>
            <img className={styles.img} src={cliente} alt="rosto feliz" />
          </span>
        </div>
      </div>
    </section>
  );
};
