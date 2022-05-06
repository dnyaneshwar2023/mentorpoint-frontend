import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://mentorpoint.herokuapp.com/api",
});

export default apiClient;
