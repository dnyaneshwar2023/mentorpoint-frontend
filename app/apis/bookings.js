import apiClient from "./client";

const addBooking = (session_id, user_id) => {
  return apiClient.post("/bookings", { session_id, user_id });
};

export default addBooking;
