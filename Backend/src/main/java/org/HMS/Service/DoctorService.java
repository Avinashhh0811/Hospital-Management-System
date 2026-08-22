package org.HMS.Service;

import org.HMS.Dto.Doctor.DoctorDto;
import org.HMS.Entity.Doctor;

import java.util.List;

public interface
DoctorService {

    String addDoctor(DoctorDto dto);

    List<Doctor> getAllDoctors();
    List<Doctor> getDoctorsByHospital(Long hospitalId);

    String deleteDoctor(Long doctorId);

    String updateDoctor(Long doctorId, DoctorDto dto);
    long doctorCount(Long hospitalId);
    Doctor getDoctorById(Long doctorId);

    List<Doctor> getDoctorsBySpecialization(
            String specialization
    );

    List<Doctor> getDoctorsByHospitalAndSpecialization(
            Long hospitalId,
            String specialization
    );

}