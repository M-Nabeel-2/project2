import axios from "axios";

export const axiosinstance = axios.create({
  baseURL: "https://api.escuelajs.co/",
});

// request
axiosinstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
});
if (token) {
  config.header.Authorization = `Bearer ${token}`;
}
