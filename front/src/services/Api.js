import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const api = axios.create({
  baseURL: "http://localhost:3000" || "https://api-money-tracker.herokuapp.com/"
});

export default api;
