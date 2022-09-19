import { createContext, useState } from "react";

export const carrinhoContext = createContext({});

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  function adicionaNoCarrinho(livro) {
    const item = carrinho.find(({ item }) => item?.id_livro === livro.id_livro);

    if (item) {
      item.quantidade++;
      setCarrinho([...carrinho]);
    } else {
      const produto = {
        item: livro,
        quantidade: 1,
      };

      setCarrinho([...carrinho, produto]);
    }
  }

  function removeDoCarrinho(id) {
    const carrinhoFiltrado = carrinho.filter(
      ({ item }) => item?.id_livro != id
    );

    setCarrinho([...carrinhoFiltrado]);
  }

  function totalDoCarrinho() {
    const formatoBRL = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const total = carrinho.reduce((acc, produto) => {
      const preco = +produto.item.preco.replace(",", ".").trim();

      return (acc += produto.quantidade * preco);
    }, 0);

    return formatoBRL.format(total);
  }

  function incrementaCarrinho(id) {
    const produto = carrinho.find(({ item }) => item?.id_livro === id);
    produto.quantidade++;
    setCarrinho([...carrinho]);
  }

  function decrementaCarrinho(id) {
    const produto = carrinho.find(({ item }) => item?.id_livro === id);

    produto.quantidade--;
    setCarrinho([...carrinho]);
  }

  return (
    <carrinhoContext.Provider
      value={{
        carrinho,
        adicionaNoCarrinho,
        removeDoCarrinho,
        totalDoCarrinho,
        incrementaCarrinho,
        decrementaCarrinho,
      }}
    >
      {children}
    </carrinhoContext.Provider>
  );
}
