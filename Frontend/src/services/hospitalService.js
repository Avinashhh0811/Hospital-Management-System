import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const hospitalApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


// ===============================
// GET ALL HOSPITALS
// ===============================

export const getAllHospitals = () => {
  return hospitalApi.get("/hospital/all");
};


// ===============================
// GET HOSPITAL BY ID
// ===============================

export const getHospitalById = async (hospitalId) => {
  const response = await getAllHospitals();

  const hospitals = response.data || [];

  return hospitals.find(
    (hospital) =>
      String(hospital.hospitalId) === String(hospitalId)
  );
};


// ===============================
// ADD HOSPITAL
// ===============================

export const addHospital = (hospitalData) => {
  return hospitalApi.post(
    "/hospital/add",
    hospitalData
  );
};


// ===============================
// DELETE HOSPITAL
// ===============================

export const deleteHospital = (hospitalId) => {
  return hospitalApi.delete(
    `/hospital/delete/${hospitalId}`
  );
};