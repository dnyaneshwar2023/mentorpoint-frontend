import apiClient from "./client";

const signIn = (payload) => {
  return apiClient.post("/users/signin", payload);
};

const signUp = (payload) => {
  return apiClient.post("/users/signup", payload);
};

export default { signIn, signUp };
