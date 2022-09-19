import { useState } from 'react'
import S from './header.module.css'
import branco from '../../assets/logo_livraria_branco.png'
import preto from '../../assets/logo_livraria_preto.png'

export const Logo = () => {
  const [over, setOver] = useState(false);
  return (
    <div
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
      className={S.logo}
    >
      <a href="/">
        <img className={S.imagem_logo} src={over ? branco : preto} />
      </a>

      <h1 className={S.texto_logo}> Meu livro </h1>
    </div>
  )
}
