import apiClient from "./client";

const getSessions = () => {
  return apiClient.get("/sessions");
};

export default { getSessions };
