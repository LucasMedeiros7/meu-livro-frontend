import styles from "./DetalhesProduto.module.css";

import avaliacaoCliente from "../../assets/avaliação-do-cliente.png";

const livro = {
  id_livro: 53,
  titulo: "Star Wars: Manual do império",
  descricao:
    "O Império existe há dezenove anos, mas está prestes a reinar por mais um milênio. A mudança da República para o Império representa uma transferência de poder jamais vista na história da galáxia. Mas a República não podia mais continuar, e seu povo estava desesperado. Quando os políticos reunidos da República se recusaram a escolher entre o sucesso e a ruína, Sua Majestade Imperial, Imperador Palpatine, escolheu por eles.\r\n  O Império alcançou a glória na unificação, celebrando um governante, um código de leis, um idioma comum e uma educação em progresso social. E o Império não tolera os que tentam quebrar essa unidade. “Violência se combate com violência. É o único idioma que rebeldes e traidores entendem.\r\n  Manual do Império: Guia do Comandante é dividido em cinco partes - As Forças Armadas Imperiais, A Marinha Imperial, O Exército Imperial (inclui as Guarnições do Império), A Tropa de Stormtroopers e A Doutrina Imperial - e traz diretrizes táticas e procedimentos registrados por oficiais do alto escalão de cada setor das forças armadas do Império, além de relatos de missões e documentos confidenciais para todos os comandantes recém-promovidos, pois “não há chamado maior do que vestir o uniforme das forças armadas Imperiais”.\r\n  Esta cópia do Manual do Império: Guia do Comandante data de pouco antes da destruição da primeira Estrela da Morte, na Batalha de Yavin, e contém comentários e notas nas margens do General Carlist Rieekan, do Comando da Aliança; do desertor do Império, General Crix Madine; do Comandante Wedge Antilles, do Esquadrão Vampiro; da Comandante-Chefe Mon Mothma; e até de Han Solo e da Princesa Leia Organa.",
  categoria: "Ficção cientifica",
  url_img: "https://images-na.ssl-images-amazon.com/images/I/91rC3Bb2BkL.jpg",
  preco: "34,90",
  total_paginas: 160,
  ano_publicacao: "2015",
  autor: "Daniel Wallace",
};
export function DetalhesProduto() {
  return (
    <div className={styles.detalhesContainer}>
      <img width="308" height="459" src={livro.url_img} alt="" />

      <div className={styles.detalhesProduto}>
        <h1>{livro.titulo}</h1>
        <div className={styles.precoProduto}>
          <p>R$ {livro.preco}</p>
          <p>Entrega GRÁTIS no seu primeiro pedido</p>
          <button>Comprar</button>
        </div>
        <div className={styles.avaliacaoProduto}>
          <span>Avaliações de clientes</span>
          <img src={avaliacaoCliente} alt="" />
        </div>
        <div className={styles.descricaoProduto}>
          <p>{livro.descricao}</p>
        </div>
      </div>
    </div>
  );
}
