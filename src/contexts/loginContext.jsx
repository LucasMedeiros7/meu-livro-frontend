import { createContext, useState } from "react";

export const loginContext = createContext({});

export function LoginProvider({ children }) {
  const [logado, setLogado] = useState(false);

  function useLocalStorage() {
    const usuario = JSON.parse(localStorage.getItem("@meuLivroLogin"));

    if (!usuario) {
      return false;
    } else {
      setLogado(true);
      return usuario;
    }
  }

  function loginLocalStorage(usuario) {
    localStorage.setItem("@meuLivroLogin", JSON.stringify(usuario));
    setLogado(true);
  }

  function logoutLocalStorage() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <loginContext.Provider
      value={{
        logado,
        useLocalStorage,
        loginLocalStorage,
        logoutLocalStorage,
      }}
    >
      {children}
    </loginContext.Provider>
  );
}
