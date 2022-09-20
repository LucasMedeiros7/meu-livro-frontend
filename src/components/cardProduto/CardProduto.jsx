import React, { useEffect, useState, useRef, useContext } from "react";
import { carrinhoContext } from "../../contexts/carrinhoContext";
import { Link } from "react-router-dom";
import setas from "../../assets/seta_icon.png";

import api from "../../services/api";
import styles from "./CardProduto.module.css";

export function CardProduto() {
  const [book, setBook] = useState([]);
  const carousel = useRef(null);
  const { adicionaNoCarrinho } = useContext(carrinhoContext);

  useEffect(() => {
    api
      .get("/livros")
      .then((response) => setBook(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!book || !book.length) return null;

  return (
    <section className={styles.mainProdutos}>
      <div className={styles.buttons}>
        <button onClick={handleLeftClick}>
          <img id="primeiro" src={setas} alt="Scroll Left" />
        </button>
      </div>

      <div className={styles.conteinerProdutos}>
        <h2>Conheça nosso catálogo de livros</h2>

        <div className={styles.carrossel} ref={carousel}>
          {book?.map((item, index) => {
            return (
              <div className={styles.items} key={index}>
                <Link to={`/detalhes/${item.id_livro}`}>
                  <div className={styles.imgProduto}>
                    <img src={item?.url_img} target="_blank" />
                  </div>

                  <div className={styles.infoProduto}>
                    <strong>
                      <p className={styles.titulo}>{item?.titulo}</p>
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
      </div>

      <div className={styles.buttons2}>
        <button onClick={handleRightClick}>
          <img src={setas} alt="Scroll Right" />
        </button>
      </div>
    </section>
  );
}
