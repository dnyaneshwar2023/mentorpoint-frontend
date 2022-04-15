import apiClient from "./client";

const addService = (mentor_id, sessionDetails) => {
  return apiClient.post("/services", { mentor_id, sessionDetails });
};

const getServices = (mentor_id) => {
  return apiClient.get("/services", { mentor_id });
};

export default { addService, getServices };
