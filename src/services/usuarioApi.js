import api from "./api";

export async function registrarUsuario(dadosUsuario) {
  try {
    const resposta = await api.post("/usuarios/registrar", dadosUsuario, {
      headers: { "Content-Type": "application/json" },
    });

    return resposta.data;
  } catch (erro) {
    return erro.response.data;
  }
}

export async function loginUsuario(dadosUsuario) {
  try {
    const resposta = await api.post("/usuarios/login", dadosUsuario, {
      headers: { "Content-Type": "application/json" },
    });

    return resposta.data;
  } catch (erro) {
    return erro.response.data;
  }
}