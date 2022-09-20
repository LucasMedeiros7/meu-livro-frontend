import React, { useEffect, useState, useRef } from "react";
import setas from '../../assets/seta_icon.png'
import api from '../../services/api';
import './CardProduto.css'

export function CardProduto(props) {
  const { book, setBook } = props
  const carousel = useRef(null);

  useEffect(() => {
    api
      .get("/livros")
      .then((response) => setBook(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        // pode ser a chamada de uma tela 404
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
    <section className="mainProdutos">
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img id="primeiro" src={setas} alt="Scroll Left" />
        </button>
      </div>

      <div className="conteinerProdutos">
        <h2>Livros</h2>

        <div className="carrossel" ref={carousel}>
          {book?.map((item, index) => {
            return (
              <div className="items" key={index}>
                <div className="imgProduto">
                  <img src={item?.url_img} target='_blank' />
                </div>

                <div className="infoProduto">
                  <strong><p id="titulo">{item?.titulo}</p></strong>
                  <p id="preco">R$ {item?.preco}</p>
                </div>

                <div className="btnComprar">
                  <button><strong>Comprar</strong></button>
                </div>
              </div>

            );
          })}
        </div>
      </div>

      <div className="buttons">
        <button onClick={handleRightClick}>
          <img src={setas} alt="Scroll Right" />
        </button>
      </div>
    </section>
  );
}

{/* <div className="items">
            {book?.map((item, index) => (
              // <div className="containerInterno" >
                <div className="cardProduto" key={index}>
                  <div className="imgProduto">
                    <img src={item?.url_img} target='_blank'/>
                  </div>

                  <div className="infoProduto">
                    <strong><p id="titulo">{item?.titulo}</p></strong>
                    <p id="preco">R$ {item?.preco}</p>
                  </div>

                  <div className="btnComprar">
                    <button><strong>Comprar</strong></button>
                  </div>
                </div>
            // </div>
            ))}
          </div> */}