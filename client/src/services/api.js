import axios from "axios";

const API = axios.create({
  baseURL: "https://task-tracker-utuf.onrender.com"
});

export default API;