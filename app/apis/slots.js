import apiClient from "./client";

const addSlot = (payload) => {
  return apiClient.post("/slots", payload);
};

const getSlots = (date, mentor_id) => {
  return apiClient.get("/slots", { date, mentor_id });
};

const deleteMentorSlot = (payload) => {
  return apiClient.delete("/slots/mentorslots", { ...payload });
};

export default { getSlots, addSlot, deleteMentorSlot };
