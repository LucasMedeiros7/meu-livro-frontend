import { useContext } from "react";
import { Link } from "react-router-dom";

import { loginContext } from "../../contexts/loginContext";

import { Logo } from "./logoHeader.jsx";

import S from "./header.module.css";
import usuario_icon from "../../assets/usuario_icon.png";
import { ShoppingCart } from "phosphor-react";
import { carrinhoContext } from "../../contexts/carrinhoContext";

export function Header() {
  const { logado, useLocalStorage, logoutLocalStorage } =
    useContext(loginContext);
  const { carrinho } = useContext(carrinhoContext);

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

      <div className={S.box_input}>
        <input type="text" />
        <button className={S.lupinha_botao} type="submit" />
      </div>

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
          {/* <img
            className={S.carrinho_icon}
            src={carrinho_icon}
            alt="icone do carrinho"
          /> */}

          <div className={S.quantidadeCarrinho}>
            <ShoppingCart className={S.carrinho_icon} />
            {carrinho.length ? <span>{carrinho.length}</span> : ""}
          </div>
        </Link>
      </div>
    </header>
  );
}
