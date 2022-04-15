import apiClient from "./client";

const addSlot = (date, mentor_id) => {
  return apiClient.post("/slots/add", { date, mentor_id });
};

const getSlots = (date, mentor_id) => {
  return apiClient.post("/slots/get", { date, mentor_id });
};

export default { getSlots, addSlot };
