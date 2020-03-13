import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const api = axios.create({
  baseURL: process.env.BASE_URL || "https://api-money-tracker.herokuapp.com/"
});

export default api;
