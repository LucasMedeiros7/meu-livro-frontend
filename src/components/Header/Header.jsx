import { Logo } from "./logoHeader.jsx";
import { Search } from "../search/Search";
import carrinho_icon from "../../assets/carrinho_icon.png";
import usuario_icon from "../../assets/usuario_icon.png";
import { Link } from "react-router-dom";
import S from "./Header.module.css";

export function Header() {
  return (
    <div className={S.box_header}>
      <div className={S.box_logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <Search />

      <div className={S.box_icons}>
        <img
          className={S.usuario_icon}
          src={usuario_icon}
          alt="icone do usuario"
        />
        <p className={S.texto_usuario}>
          <Link to="login">entre ou cadastre-se</Link>
        </p>
        <img
          className={S.carrinho_icon}
          src={carrinho_icon}
          alt="icone do carrinho"
        />
      </div>
    </div>
  );
}
