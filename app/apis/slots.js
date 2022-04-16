import apiClient from "./client";

const addSlot = (date, mentor_id) => {
  return apiClient.post("/slots", { date, mentor_id });
};

const getSlots = (date, mentor_id) => {
  return apiClient.get("/slots", { date, mentor_id });
};

export default { getSlots, addSlot };
