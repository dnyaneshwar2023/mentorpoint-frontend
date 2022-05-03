import apiClient from "./client";

const getSessions = () => {
  return apiClient.get("/sessions");
};

const bookSession = (payload) => {
  return apiClient.post("/sessions/booking", payload);
};

export default { getSessions, bookSession };
