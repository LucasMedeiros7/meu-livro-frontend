import React, { useEffect, useState } from "react";
import api from '../../services/api';
import './CardProduto.css'

export function CardProduto() {
  const [book, setBook] = useState();

  useEffect(() => {
    api
      .get("/livros")
      .then((response) => setBook(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <section className="mainCardProduto" >
        <h2>Livros</h2>
      {/* <div className="container">
      </div> */}

      <div className="container">
        {book?.map((item, index) => (
        <div className="containerInterno" key={index}>
          <div className="cardProduto">
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
        </div>
      ))}
      </div>

    </section>
  );
}