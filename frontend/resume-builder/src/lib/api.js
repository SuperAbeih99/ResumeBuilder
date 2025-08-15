import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") || "";

export const api = axios.create({
  baseURL,
  // withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

export const authApi = {
  register: (payload) => api.post("/api/auth/register", payload),
  login: (payload) => api.post("/api/auth/login", payload),
  me: () => api.get("/api/auth/profile"),
};
