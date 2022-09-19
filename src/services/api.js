import axios from "axios";

const api = axios.create({
  baseURL: "https://meulivroapi.herokuapp.com/",
});

export default api;