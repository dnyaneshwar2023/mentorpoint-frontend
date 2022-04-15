import apiClient from "./client";

const addChat = (sessionId) => {
  return apiClient.post("/chats/add", { sessionId });
};

const getChats = (sessionId) => {
  return apiClient.post("/chats/get", { sessionId });
};

export default { addChat, getChats };
