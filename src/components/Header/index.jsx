import S from "./header.module.css"
import carrinho_icon from '../../assets/carrinho_icon.png'
import usuario_icon from '../../assets/usuario_icon.png'
import { Logo } from "./logoHeader.jsx"

export function Header() {
    return (
        <header className={S.box_header}>
            <div className={S.box_logo}>
                <Logo />
            </div>

            <div className={S.box_input}>
                <input type="text" />
                <button className={S.lupinha_botao} type="submit" />
            </div>

            <div className={S.box_icons}>
                <img className={S.usuario_icon} src={usuario_icon} alt="icone do usuario" />
                <p className={S.texto_usuario}> entre ou cadastre-se </p>
                <img className={S.carrinho_icon} src={carrinho_icon} alt="icone do carrinho" />
            </div>
        </header>
    )

}