import apiClient from "./client";

const addService = (payload) => {
  return apiClient.post("/services", payload);
};

const getServices = (mentor_id) => {
  return apiClient.get("/services", { mentor_id });
};

const getServiceById = (service_id) => {
  return apiClient.get("/services", { _id: service_id });
};

const deleteService = (payload) => {
  return apiClient.delete("/services", { ...payload });
};

export default { addService, getServices, getServiceById, deleteService };
