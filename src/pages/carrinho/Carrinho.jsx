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
    {
      id_livro: 23,
      titulo: "O poder do agora: Um guia para a iluminação espiritual",
      descricao:
        "Nós passamos a maior parte de nossas vidas pensando no passado e fazendo planos para o futuro. Ignoramos ou negamos o presente e adiamos nossas conquistas para algum dia distante, quando conseguiremos tudo o que desejamos e seremos, finalmente, felizes. Mas, se queremos realmente mudar nossas vidas, precisamos começar neste momento. Essa é a mensagem simples, mas transformadora de Eckhart Tolle: viver no Agora é o melhor caminho para a felicidade e a iluminação.Para compreender a jornada em direção a O Poder do Agora, a primeira coisa a fazer é deixar para trás nossa mente analítica e nosso falso ego. Desde o primeiro capítulo subiremos rapidamente para uma altitude mais elevada, onde se respira um ar mais leve, o ar espiritual. Embora seja uma travessia desafiadora, Eckhart Tolle nos guia com sua linguagem simples e facilita o entendimento de conceitos complexos ao escrever no formato de perguntas e respostas.Combinando conceitos do cristianismo, do budismo, do hinduísmo, do taoísmo e de outras tradições espirituais, Tolle elaborou um guia de grande eficiência para a descoberta do nosso potencial interior.Esse livro é um manual prático que nos ensina a tomar consciência dos pensamentos e das emoções que nos impedem de vivenciar plenamente a alegria e a paz que estão dentro de nós mesmos.",
      categoria: "autoconhecimento, desenvolvimento pessoal",
      url_img:
        "https://images-na.ssl-images-amazon.com/images/I/71ef0B1lsrL.jpg",
      preco: "31,92",
      total_paginas: 224,
      ano_publicacao: "2004",
      autor: "Eckhart Tolle",
    },
    {
      id_livro: 26,
      titulo: "Uma Pergunta Por Dia",
      descricao:
        "Todos os dias criamos uma imensa quantidade de registros em celulares, redes sociais e aplicativos. No entanto, quase nunca temos o hábito de retornar a eles. Às vezes podem parecer só besteiras, mas quantos desses relatos não mostrariam nosso crescimento e nossas mudanças em todos esses anos? Uma pergunta por dia convida você a registrar suas respostas a uma variedade de questões, das mais simples às mais complicadas, como “Para onde você quer fazer sua próxima viagem?” ou “Escreva a primeira linha da sua autobiografia”. Em cada página há espaço para cinco respostas, uma por ano, ao longo de cinco anos. Com o passar do tempo, quando voltar a um dia já anotado, o dono do diário encontrará seus pensamentos anteriores, num exercício divertido e construtivo de recordar e refletir.Depois das primeiras páginas fica impossível parar, e as possibilidades são infinitas: comece agora mesmo, não importa que dia é hoje; responda sozinho, com o melhor amigo ou com um grupo inteiro de amigos; um casal pode registrar junto suas respostas, cada um em seu livro ou num livro só. Respondendo, relendo, guardando para si ou compartilhando, a brincadeira funciona como uma verdadeira cápsula do tempo – termine um ano, inicie outro e redescubra a cada página um novo eu. Ideal tanto para quem adora diários quanto para aqueles que têm dificuldade em mantê-los, pois inclui propostas de assuntos.erfeito para presentear.",
      categoria: "autoconhecimento, desenvolvimento pessoal",
      url_img:
        "https://images-na.ssl-images-amazon.com/images/I/717O27bAYoL.jpg",
      preco: "47,90",
      total_paginas: 368,
      ano_publicacao: "2015",
      autor: "Potter Style",
    },
  ];
  return (
    <div className={styles.carrinhoContainer}>
      <h1>Meu carrinho</h1>

      {livro.map((livro, index) => {
        return (
          <ItemCarrinho
            key={index}
            src={livro.url_img}
            titulo={livro.titulo}
            autor={livro.autor}
            preco={livro.preco}
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
