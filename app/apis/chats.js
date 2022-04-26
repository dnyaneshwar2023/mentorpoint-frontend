import apiClient from "./client";

const addChat = (sessionId) => {
  return apiClient.post("/chats", { _id: sessionId });
};

const getChats = (sessionId) => {
  return apiClient.get("/chats", { _id: sessionId });
};

export default { addChat, getChats };
