import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { loginContext } from "../../contexts/loginContext";

import { Logo } from "./logoHeader.jsx";

import S from "./Header.module.css";
import usuario_icon from "../../assets/usuario_icon.png";

import { ShoppingCart } from "phosphor-react";
import { carrinhoContext } from "../../contexts/carrinhoContext";
import api from "../../services/api";
import { Pesquisa } from "../../pages/pesquisa/Pesquisa";

export function Header(props) {
  const [digitado, setDigitado] = useState("");
  const { logado, useLocalStorage, logoutLocalStorage } =
    useContext(loginContext);
  const { carrinho } = useContext(carrinhoContext);
  const navigate = useNavigate();

  async function handleClick(event) {
    event.preventDefault();

    api
      .get("/livros")
      .then((response) => {
        const resultadoPesquisa = response.data.filter((livro) =>
          livro.titulo.toLowerCase().includes(digitado.toLowerCase())
        );
        navigate("/pesquisa", { state: resultadoPesquisa });
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        // pode ser a chamada de uma tela 404
      });
    props.setPesquisado(digitado);
    setDigitado("");
  }

  const entrarOuSair = () => {
    const usuarioLogado = useLocalStorage();

    if (!logado) {
      return (
        <Link to="login" style={{ textDecoration: "underline" }}>
          entre ou cadastre-se
        </Link>
      );
    } else {
      return (
        <p style={{ display: "flex", flexDirection: "column" }}>
          Olá, {usuarioLogado.nome.split(" ")[0]}
          <strong
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={logoutLocalStorage}
          >
            Sair
          </strong>
        </p>
      );
    }
  };

  return (
    <header className={S.box_header}>
      <div className={S.box_logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <form onSubmit={handleClick} className={S.box_input}>
        <input
          type="text"
          value={digitado}
          onChange={(e) => setDigitado(e.target.value)}
        />

        <button className={S.lupinha_botao} type="submit" />
      </form>

      <div className={S.box_icons}>
        <div style={{ display: "flex" }}>
          <img
            className={S.usuario_icon}
            src={usuario_icon}
            alt="icone do usuario"
          />
          <p className={S.texto_usuario}>{entrarOuSair()}</p>
        </div>

        <Link to="/carrinho">
          <div className={S.quantidadeCarrinho}>
            <ShoppingCart className={S.carrinho_icon} />
            {carrinho.length ? <span>{carrinho.length}</span> : ""}
          </div>
        </Link>
      </div>
    </header>
  );
}
