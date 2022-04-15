import apiClient from "./client";

const addBooking = (session_id, user_id) => {
  return apiClient.post("/bookings/add", { session_id, user_id });
};

export default addBooking;
