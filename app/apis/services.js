import apiClient from "./client";

const addService = (mentor_id, sessionDetails) => {
  return apiClient.post("/services", { mentor_id, sessionDetails });
};
