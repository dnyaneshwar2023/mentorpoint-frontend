import apiClient from "./client";

const getMentors = (mentor_id) => {
  return apiClient.get("/users", { body: { mentor_id } });
};

export default { getMentors };
