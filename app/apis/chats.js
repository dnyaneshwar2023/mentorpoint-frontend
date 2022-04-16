import apiClient from "./client";

const addChat = (sessionId) => {
  return apiClient.get("/chats", { sessionId });
};

const getChats = (sessionId) => {
  return apiClient.post("/chats", { sessionId });
};

export default { addChat, getChats };
