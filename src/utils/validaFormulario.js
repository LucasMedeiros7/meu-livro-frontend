const validaEmail = (email) => {
  const regexValidaEmail = /^\S+@\S+\.\S+$/;
  return regexValidaEmail.test(email);
};

const validaCPF = (CPF) => {
  const CPFatualizado = String(CPF).replace(/\D/g, "");

  if (CPFatualizado.length !== 11 && !/[A-Z]/gi.test(CPFatualizado)) {
    return false;
  }
  return CPFatualizado;
};

export function validaDadosDeCadastro({ email, senha, cpf }) {
  if (senha.length < 6) {
    return {
      erro: true,
      mensagem: "A senha deve conter mais de 6 digitos",
    };
  }

  if (!validaEmail(email)) {
    return {
      erro: true,
      mensagem: "Insira um email válido",
    };
  }

  if (!validaCPF(cpf)) {
    return {
      erro: true,
      mensagem: "CPF deve conter 11 números",
    };
  }
  return true;
};
