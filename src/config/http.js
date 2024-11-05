import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3333", // Corrigido para localhost
});

export default http;
