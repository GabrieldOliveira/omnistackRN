import axios from "axios";

const api = axios.create({
  baseURL: "https://omnistackproject.herokuapp.com"
});

export default api;
