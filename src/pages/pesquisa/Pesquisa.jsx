import { useRef, useContext, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import styles from "../../components/cardProduto/CardProduto.module.css";
import { carrinhoContext } from "../../contexts/carrinhoContext";
import "./pesquisa.css";

export function Pesquisa(props) {
  const { adicionaNoCarrinho } = useContext(carrinhoContext);
  const { state } = useLocation();
  const navigate = useNavigate();

  function MostrarMensagem() {
    if (state.length > 0 || props.pesquisado.length > 0) {
      return <h2>Resultados de : "{props.pesquisado}"</h2>;
    }
    return <></>;
  }

  const carousel = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });

    if (!state) {
      navigate("/", { replaced: true });
    }
  }, []);

  if (!state) return null;

  return (
    <div className="wrapperPesquisa">
      <MostrarMensagem className="mostrarMensagem" />

      <div className="cards">
        {state.length > 0 ? (
          <>
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
          </>
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
