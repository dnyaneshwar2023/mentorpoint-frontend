import apiClient from "./client";

const getOpportunities = () => {
  return apiClient.post("/opportunity/get");
};

export default { getOpportunities };
