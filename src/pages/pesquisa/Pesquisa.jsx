import { useRef, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "../../components/cardProduto/CardProduto.module.css";
import { carrinhoContext } from "../../contexts/carrinhoContext";
import "./pesquisa.css";

export function Pesquisa(props) {
  const { adicionaNoCarrinho } = useContext(carrinhoContext);
  const { state } = useLocation();

  function MostrarMensagem() {
    if (state.length > 0 || props.pesquisado.length > 0) {
      return <h2>resultados de : "{props.pesquisado}"</h2>;
    }
    return <></>;
  }

  const carousel = useRef(null);

  return (
    <div>
      <MostrarMensagem />

      <div style={{ display: "flex" }}>
        {state.length > 0 ? (
          <div className={styles.carrossel} ref={carousel}>
            {state?.map((item, index) => {
              return (
                <div className={styles.items} key={index}>
                  <Link to={`/detalhes/${item.id_livro}`}>
                    <div className={styles.imgProduto}>
                      <img src={item?.url_img} target="_blank" />
                    </div>

                    <div className={styles.infoProduto}>
                      <strong>
                        <p id="titulo">{item?.titulo}</p>
                      </strong>
                      <p id="preco">R$ {item?.preco}</p>
                    </div>
                  </Link>
                  <div className={styles.btnComprar}>
                    <button onClick={() => adicionaNoCarrinho(item)}>
                      <strong>Adicionar ao carrinho</strong>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mensagemDeNaoEncontrado">
            <h2>Não encontramos o seu livro.</h2>
            <h3>Você encontra mais opções em nossa home!!</h3>
          </div>
        )}
      </div>
    </div>
  );
}
