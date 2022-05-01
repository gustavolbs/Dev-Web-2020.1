import axios from "axios";

const api = axios.create({
  baseURL: "https://api-money-tracker.herokuapp.com/",
  // baseURL: "http://localhost:3000/"
});

export const fetcher = (url: string) => api.get(url).then((res) => res.data);

export default api;
