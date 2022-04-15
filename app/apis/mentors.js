import apiClient from "./client";

const getMentors = () => {
  return apiClient.post("/users/get");
};

export default { getMentors };
