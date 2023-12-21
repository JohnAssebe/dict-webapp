import axios from "axios";
export const api = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en/",
});
api.interceptors.response.use((response) => response.data[0]);
