import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const adminApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


// =====================================
// GET ALL HOSPITAL ADMINS
// =====================================

export const getAllHospitalAdmins = () => {
  return adminApi.get("/api/admin/all-hospital-admins");
};


// =====================================
// CREATE HOSPITAL ADMIN
// =====================================

export const createHospitalAdmin = (adminData) => {
  return adminApi.post(
    "/api/admin/create-hospital-admin",
    adminData
  );
};


// =====================================
// DELETE HOSPITAL ADMIN
// =====================================

export const deleteHospitalAdmin = (adminId) => {
  return adminApi.delete(
    `/api/admin/delete-hospital-admin/${adminId}`
  );
};