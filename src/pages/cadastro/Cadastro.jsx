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

      console.log(res);
      setDadosUsuario({
        ...dadosUsuario,
        endereco: {
          localidade,
          uf,
          logradouro,
        },
      });

      document.querySelector("#cep").style.border = " 1px solid #5f5d5d";
    } catch (erro) {
      console.log(erro.message);
      document.querySelector("#cep").style.border = "1px solid red";
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

  function handleSubmit(event) {
    event.preventDefault();

    console.log(dadosUsuario);
  }

  return (
    <div className={styles.container}>
      <h1>Cadastro</h1>

      <form onSubmit={handleSubmit}>
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
        <div className={styles.infoPessoal}>
          <div>
            <input
              className={styles.cpf}
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
          </div>
          <div className={styles.endereco}>
            <input
              placeholder="Rua"
              type="text"
              id="rua"
              required
              readOnly
              value={dadosUsuario.endereco.logradouro}
            />
            <div className={styles.cidade}>
              <input
                placeholder="Cidade"
                type="text"
                sssssssss
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
          </div>
        </div>

        <div>
          <input
            className={styles.email}
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
