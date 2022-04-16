import apiClient from "./client";

const getMentors = (mentor_id) => {
  return apiClient.get("/users", { mentor_id });
};

export default { getMentors };
