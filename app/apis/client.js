import { create } from "apisauce";

// const apiClient = create({
//   baseURL: "https://mentorpoint.herokuapp.com/api",
// });

const apiClient = create({
  baseURL: "http://192.168.180.204:5000/api",
});

export default apiClient;
