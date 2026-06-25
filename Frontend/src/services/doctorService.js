import { API } from "./api";

export const getAllDoctors = () =>
  API.get("/doctor/all");