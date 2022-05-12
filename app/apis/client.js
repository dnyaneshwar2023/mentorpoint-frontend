import { create } from "apisauce";

// const apiClient = create({
//   baseURL: "https://mentorpoint.herokuapp.com/api",
// });

const apiClient = create({
  baseURL: "http://10.40.6.1:5000/api",
});

export default apiClient;
