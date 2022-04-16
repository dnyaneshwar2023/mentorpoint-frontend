import apiClient from "./client";
const getMentors = (mentor_id) => {
  return apiClient.get("/users", { _id: mentor_id });
};

const updateMentor = (data) => {
  return apiClient.put("/users", data);
};

export default { getMentors, updateMentor };
