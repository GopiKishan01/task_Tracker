import axios from "axios";

const API = axios.create({
  baseURL: "https://task-tracker-3-m04j.onrender.com"
});

export default API;
