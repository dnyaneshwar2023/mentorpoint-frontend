import apiClient from "./client";
const getMentors = (mentor_id) => {
  return apiClient.get("/users", { _id: mentor_id });
};

const updateMentor = (data) => {
  return apiClient.put("/users", data);
};

const updatePhoto = (payload) => {
  return apiClient.put("/users/profile", payload);
};

const addPhoto = (payload) => {
  return apiClient.post("/users/profile", payload);
};

export default { getMentors, updateMentor, updatePhoto, addPhoto };
