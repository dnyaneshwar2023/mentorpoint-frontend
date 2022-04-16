import apiClient from "./client";

const getOpportunities = () => {
  return apiClient.get("/opportunities");
};

export default { getOpportunities };
