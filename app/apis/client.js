import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.43.242:6000/api",
});

export default apiClient;
