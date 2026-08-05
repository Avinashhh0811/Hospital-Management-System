package org.HMS.Service;

import org.HMS.Dto.DoctorDto;
import org.HMS.Dto.HospitalDto;
import org.HMS.Dto.PatientDto;
import org.HMS.Entity.Patient;

import java.util.List;

public interface PatientService {

    String addPatient(PatientDto dto);

    List<Patient> getAllPatients();

    String updatePatient(Long patientId, PatientDto dto);

    Patient getPatientById(Long patientId);

    List<HospitalDto> searchHospital(String keyword);

    List<HospitalDto> getHospitalByCity(String city);

    List<HospitalDto> getHospitalByState(String state);

    List<HospitalDto> getHospitalByType(String type);

    List<DoctorDto> getDoctorsByHospital(Long hospitalId);

    List<DoctorDto> getDoctorsByDepartment(String department);

    List<DoctorDto> getDoctorsByHospitalAndDepartment(
            Long hospitalId,
            String department
    );


}