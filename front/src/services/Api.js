import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const api = axios.create({
  // baseURL: "https://api-money-tracker.herokuapp.com/"
  baseURL: "http://localhost:3000/"
});

export default api;
