import { ItemCarrinho } from "../../components/itemCarinho/ItemCarrinho";

import styles from "./Carrinho.module.css";
export function Carrinho() {
  const livro = [
    {
      id_livro: 20,
      titulo: "Harry Potter e o Enigma do Príncipe",
      descricao:
        'Harry Potter e o enigma do príncipe dá continuidade à saga do jovem bruxo Harry Potter a partir do ponto em que o livro anterior parou o momento em que fica provado que o poder de Voldemort e dos Comensais da Morte, seus seguidores, cresce mais a cada dia, em meio à batalha entre o bem e o mal. A onda de terror provocada pelo Lorde das Trevas estaria afetando, até mesmo, o mundo dos trouxas (nãobruxos), e sendo agravada pela ação dos dementadores, criaturas mágicas aterrorizantes que "sugam" a esperança e a felicidade das pessoas. Harry, que acabou de completar 16 anos, parte rumo ao sexto ano na Escola de Magia e Bruxaria de Hogwarts, animado e ao mesmo tempo apreensivo com a perspectiva de ter aulas particulares com o professor Dumbledore, o diretor da escola e o bruxo mais respeitado em toda comunidade mágica. Harry, longe de ser aquele menino magricela que vivia no quarto debaixo da escada na casa dos tios trouxas, é um dos principais nomes entre aqueles que lutam contra Voldemort, e se vê cada vez mais isolado à medida que os rumores de que ele é O Eleito o único capaz de derrotar o Lorde das Trevas, se espalham pelo mundo dos bruxos. Dois atentados contra a vida de estudantes, a certeza de Harry quanto ao envolvimento de Draco Malfoy com os Comensais da Morte e o comportamento de Snape, suspeito como sempre, adicionam ainda mais tensão ao já inquietante período. Apesar de tudo isso, Harry e os amigos são adolescentes típicos dividem tarefas escolares e dormitórios bagunçados, correm das aulas para os treinos de quadribol, e namoram.',
      categoria: "Literatura fantástica, Ficção de aventura",
      url_img:
        "https://images-na.ssl-images-amazon.com/images/I/81yFIh1yoZL.jpg",
      preco: "34,90",
      total_paginas: 432,
      ano_publicacao: "2017",
      autor: "J.K. Rowling",
    },
  ];
  return (
    <div className={styles.carrinhoContainer}>
      <h1>Carrinho</h1>

      {livro.map((item, index) => {
        return (
          <ItemCarrinho
            key={index}
            src={item.url_img}
            titulo={item.titulo}
            preco={item.preco}
          />
        );
      })}

      <strong>Total:</strong>
      <span>R$ 33,90</span>
      <div>
        <button>Continuar comprando</button>
        <button>Concluir compra</button>
      </div>
    </div>
  );
}
