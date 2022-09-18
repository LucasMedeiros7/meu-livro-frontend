import S from "./header.module.css"
import carrinho_icon from '../../assets/carrinho_icon.png'
import usuario_icon from '../../assets/usuario_icon.png'
import { Logo } from "./logoHeader.jsx"

import { Link } from "react-router-dom";

export function Header() {
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
                <img className={S.usuario_icon} src={usuario_icon} alt="icone do usuario" />
                <p className={S.texto_usuario}><Link to="login">entre ou cadastre-se</Link></p>
                <img className={S.carrinho_icon} src={carrinho_icon} alt="icone do carrinho" />
            </div>
        </header>
    )

}