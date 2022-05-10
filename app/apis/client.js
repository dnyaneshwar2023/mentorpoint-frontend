import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://mentorpoint.herokuapp.com/api",
});

// const apiClient = create({
//   baseURL: "http://192.168.1.6:5000/api",
// });

export default apiClient;
