import apiClient from "./client";

const getSessions = () => {
  return apiClient.post("/sessions/get");
};

export default { getSessions };
