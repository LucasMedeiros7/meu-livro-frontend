import { useState } from "react";

import styles from "./Cadastro.module.css";

export function Cadastro() {
  const [dadosUsuario, setDadosUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
    cpf: "",
    cep: "",
    endereco: { localidade: "", uf: "", logradouro: "" },
  });

  async function buscaCep(event) {
    try {
      const res = await fetch(
        `https://viacep.com.br/ws/${event.target.value}/json/`
      );

      const { localidade, uf, logradouro } = await res.json();

      setDadosUsuario({
        ...dadosUsuario,
        endereco: {
          localidade,
          uf,
          logradouro,
        },
      });
    } catch (erro) {
      console.log(erro);
    }
  }

  function verificaInputsNumericos(event) {
    const replaced = event.target.value.replace(/[^\d\s.-]/gi, "");

    if (event.target.id === "cpf") {
      setDadosUsuario({ ...dadosUsuario, cpf: replaced });
    } else {
      setDadosUsuario({ ...dadosUsuario, cep: replaced });
    }
  }

  return (
    <div className={styles.container}>
      <h1>Cadastro</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(dadosUsuario);
        }}
      >
        <input
          placeholder="Nome"
          type="text"
          id="nome"
          required
          value={dadosUsuario.nome}
          onChange={(e) =>
            setDadosUsuario({ ...dadosUsuario, nome: e.target.value })
          }
        />
        <div className={styles.endereco}>
          <input
            placeholder="CPF"
            type="text"
            id="cpf"
            required
            value={dadosUsuario.cpf}
            onChange={verificaInputsNumericos}
          />

          <input
            placeholder="CEP"
            type="text"
            id="cep"
            onBlur={buscaCep}
            required
            value={dadosUsuario.cep}
            onChange={verificaInputsNumericos}
          />

          <input
            placeholder="Rua"
            type="text"
            id="rua"
            required
            readOnly
            value={dadosUsuario.endereco.logradouro}
          />

          <input
            placeholder="Cidade"
            type="text"
            id="cidade"
            required
            readOnly
            value={dadosUsuario.endereco.localidade}
          />

          <input
            placeholder="UF"
            type="text"
            id="uf"
            required
            readOnly
            value={dadosUsuario.endereco.uf}
          />
        </div>

        <div className={styles.emailESenha}>
          <input
            placeholder="E-mail"
            type="email"
            id="email"
            required
            value={dadosUsuario.email}
            onChange={(e) =>
              setDadosUsuario({ ...dadosUsuario, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Senha"
            id="senha"
            required
            value={dadosUsuario.senha}
            onChange={(e) =>
              setDadosUsuario({ ...dadosUsuario, senha: e.target.value })
            }
          />
        </div>

        <button type="submit">Finalizar cadastro</button>
      </form>
    </div>
  );
}
