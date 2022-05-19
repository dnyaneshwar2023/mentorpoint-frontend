import apiClient from "./client";

const addService = (payload) => {
  return apiClient.post("/services", payload);
};

const getServices = (payload) => {
  return apiClient.get("/services", payload);
};

const getServiceById = (service_id) => {
  return apiClient.get("/services", { _id: service_id });
};

const deleteService = (payload) => {
  return apiClient.delete("/services", { ...payload });
};

const editService = (payload) => {
  return apiClient.put("/services", { ...payload });
};

const getServiceRatings = (service_id) => {
  return apiClient.get(`/services/ratings?service_id=${service_id}`);
};

export default {
  addService,
  getServices,
  getServiceById,
  deleteService,
  editService,
  getServiceRatings,
};
