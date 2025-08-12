import API from "../../api/axiosInstance";

export const registerUser = async (userData) => {
  const response = await API.post("auth/register", userData);
  console.log(response);

  return response.data;
};

export const loginUser = async (userData) => {
  const response = await API.post("auth/login", userData);
  return response.data;
};

export const loginWithGoogle = async (token) => {
  const response = await API.post(
    "http://localhost:8080/api/auth/oauth/google",
    {
      token,
    }
  );
  return response.data;
};

export const getMe = async () => {
  const token = localStorage.getItem("token");
  const response = await API.get("auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
