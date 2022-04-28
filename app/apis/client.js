import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.11.204:5000/api",
});

export default apiClient;
