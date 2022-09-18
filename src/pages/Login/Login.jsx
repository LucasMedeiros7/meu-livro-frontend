import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import { loginContext } from "../../contexts/loginContext";
import { loginUsuario } from "../../services/usuarioApi.js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const [dadosUsuario, setDadosUsuario] = useState({ email: "", senha: "" });
  const navigate = useNavigate();
  const { loginLocalStorage } = useContext(loginContext);

  async function evento(event) {
    event.preventDefault();
    const resposta = await loginUsuario(dadosUsuario);

    if (resposta.message === "Usuário autorizado") {
      toast.success("Login efetuado com sucesso", {
        position: toast.POSITION.TOP_CENTER,
      });

      setDadosUsuario({ email: "", senha: "" });
      loginLocalStorage(resposta.usuario);
      setTimeout(() => navigate("/"), 2000);
    } else {
      toast.error("Email e/ou senha inválidos", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  return (
    <main className={styles.main}>
      <h2>Faça seu login</h2>
      <p className={styles.paragrafo}>
        Ficamos felizes em ter você por aqui. Entre para prosseguir e tenha
        acesso a diversos livros e obtenha uma experiência de compra incrível!
      </p>

      <form onSubmit={evento} className={styles.formulario}>
        <input
          onChange={(e) =>
            setDadosUsuario({ ...dadosUsuario, email: e.target.value })
          }
          className={styles.campo}
          value={dadosUsuario.email}
          type="email"
          required
          placeholder="Digite seu email"
        />
        <input
          onChange={(e) =>
            setDadosUsuario({ ...dadosUsuario, senha: e.target.value })
          }
          className={styles.campo}
          value={dadosUsuario.senha}
          type="password"
          required
          placeholder="Digite sua senha"
        />

        <button className={styles.enviar} type="submit">
          Entrar
        </button>
      </form>

      <ToastContainer />

      <p>Ou, se você ainda não é cliente:</p>
      <Link to="/cadastro">
        <button className={styles.cadastro}>Cadastre-se</button>
      </Link>
    </main>
  );
};
