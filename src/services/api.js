import axios from "axios";

const api = axios.create({
  baseURL: "https://meu-livro-api.onrender.com/",
});

export default api;
