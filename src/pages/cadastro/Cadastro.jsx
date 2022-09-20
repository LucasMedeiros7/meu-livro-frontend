import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registrarUsuario } from "../../services/usuarioApi";
import { validaDadosDeCadastro } from "../../utils/validaFormulario";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./Cadastro.module.css";

export function Cadastro() {
  const navigate = useNavigate();
  const [dadosUsuario, setDadosUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
    cpf: "",
    cep: "",
    endereco: { localidade: "", uf: "", logradouro: "" },
  });

  const toastAlertErro = (mensagem) =>
    toast.error(mensagem, {
      position: toast.POSITION.TOP_CENTER,
    });

  const toastAlertSucesso = (mensagem) =>
    toast.success(mensagem, {
      position: toast.POSITION.TOP_CENTER,
    });

  async function buscaCep(event) {
    console.log(event.target.value);
    try {
      const res = await fetch(
        `https://viacep.com.br/ws/${event.target.value}/json/`
      );

      const data = await res.json();
      const { localidade, uf, logradouro } = data;

      if (data.erro) {
        toastAlertErro("CEP informado não foi encontrado");
        return;
      }

      setDadosUsuario({
        ...dadosUsuario,
        endereco: {
          localidade,
          uf,
          logradouro,
        },
      });
    } catch (erro) {
      toastAlertErro("Insira um CEP válido");
    }
  }

  function verificaInputsNumericos(event) {
    const numeros = event.target.value.replace(/[^\d\s.-]/gi, "");

    if (event.target.id === "cpf") {
      setDadosUsuario({ ...dadosUsuario, cpf: numeros });
    }

    if (event.target.id === "cep") {
      setDadosUsuario({ ...dadosUsuario, cep: numeros });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validacao = validaDadosDeCadastro(dadosUsuario);

    if (validacao.erro) {
      toastAlertErro(validacao.mensagem);
      return;
    }

    const resposta = await toast.promise(registrarUsuario(dadosUsuario), {
      position: toast.POSITION.BOTTOM_CENTER,
      pending: "Cadastrando usuário no banco de dados",
      error: "Erro ao acessar o banco de dados",
    });

    if (resposta.message.includes("repetido")) {
      toastAlertErro("Este email já está cadastrado");
    } else {
      toastAlertSucesso("Cadastro efetuado com sucesso");
      navigate("/login");
    }
  }

  return (
    <div className={styles.container}>
      <h2>Cadastro</h2>

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

        <button className={styles.btn} type="submit">
          Finalizar cadastro
        </button>
      </form>
    </div>
  );
}
