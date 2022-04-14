import apiClient from "./client";

const getOpportunities = () => {
  return apiClient.post("/opportunities/get");
};

export default { getOpportunities };
