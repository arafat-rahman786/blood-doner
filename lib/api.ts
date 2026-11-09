import axios from "axios";

const api = axios.create({
  baseURL: "https://blood-doner-8occ.onrender.com",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export default api