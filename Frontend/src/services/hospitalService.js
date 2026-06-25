import { API } from "./api";

export const getAllHospitals = () =>
  API.get("/hospital/all");