import apiClient from "./client";

const addService = (mentor_id, sessionDetails) => {
  return apiClient.post("/services", { mentor_id, sessionDetails });
};

const getServices = (mentor_id) => {
  return apiClient.get("/services", { mentor_id });
};

const getServiceById = (service_id) => {
  return apiClient.get("/services", { _id: service_id });
};

const deleteService = (payload) => {
  console.log(payload);
  return apiClient.delete("/services", { ...payload });
};

export default { addService, getServices, getServiceById, deleteService };
