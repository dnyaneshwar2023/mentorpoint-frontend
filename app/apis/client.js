import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://10.30.0.232:5000/api",
});

export default apiClient;
