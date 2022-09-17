import { useState } from 'react'
import S from './header.module.css'
import branco from '../../assets/logo_livraria_branco.png'
import preto from '../../assets/logo_livraria_preto.png'

export const Change = () => {
    const [over, setOver] = useState(false);
    return (
        <div
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
        >
            <a href="/">
                <img className={S.logo} src={over ? branco : preto} />
            </a>
        </div>
    )
}
