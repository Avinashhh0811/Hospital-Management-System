import { API } from "./api";

export const getPatientProfile = (email) =>
  API.get(`/patient/profile/${email}`);