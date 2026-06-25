import { API } from "./api";

export const getAllAppointments = () =>
  API.get("/appointment/all");