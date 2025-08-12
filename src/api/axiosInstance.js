import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});


API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  req.headers["Content-Type"] = "application/json";

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});


API.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/signin";
    }
    return Promise.reject(err);
  }
);

export default API;
