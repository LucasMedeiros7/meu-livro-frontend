import './CardProduto.css'

export function CardProduto() {
  return (

    // coloquei textos genericos apenas para visualização temporária
    
    <div className="mainCardProduto">
      <div className="containerInterno">
        <h2>Livros</h2>

        <div className="cardProduto">
          <div className="imgProduto">
            <img src="" alt="livro de star wars" />
          </div>

          <div className="infoProduto">
            <strong><p>nome livro</p></strong>
            <p>Capa dura</p>
            <strong><p>R$ 34,99</p></strong>
            <p>ou 2x de R$ 17,49</p>
            <p>Frete Grátis em alguns</p>
          </div>

          <div className="btnComprar">
            <button><strong>Comprar</strong></button>
          </div>
        </div>
      </div>
    </div>
  );
}