import { Link } from "react-router-dom";
import styles from "./login.module.css";

export const Login = () => {
    return (
        <main className={styles.main}>
            <h2>Faça seu login</h2>
            <p className={styles.paragrafo}>Ficamos felizes em ter você por aqui. Entre para prosseguir e tenha acesso a diversos livros e obtenha uma experiência de compra incrível!</p>

            <form className={styles.formulario}>
                <input className={styles.campo} type="text" placeholder="Digite seu email cadastrado" />
                <input className={styles.campo} type="text" placeholder="Digite sua senha cadastrada" />
                <button className={styles.enviar} type="submit">Entrar</button>
            </form>

            <p>Ou, se você ainda não é cliente:</p>
            <Link to="/cadastro"><button className={styles.cadastro}>Cadastre-se</button></Link>
        </main>
    )
}