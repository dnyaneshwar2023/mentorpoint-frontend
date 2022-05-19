import apiClient from "./client";

const paytoVPA = (payload) => {
  return apiClient.post("/payouts", payload);
};

export { paytoVPA };
