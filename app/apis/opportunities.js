import apiClient from "./client";

const getOpportunities = () => {
  return apiClient.get("/opportunities");
};

const addOpportunity = (payload) => {
  return apiClient.post("/opportunities", payload);
};

export default { getOpportunities, addOpportunity };
