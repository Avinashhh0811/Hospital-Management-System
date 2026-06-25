package org.HMS.Service;

import org.HMS.Dto.DoctorDto;
import org.HMS.Entity.Doctor;

import java.util.List;

public interface
DoctorService {

    String addDoctor(DoctorDto dto);

    List<Doctor> getAllDoctors();
    List<Doctor> getDoctorsByHospital(Long hospitalId);

    String deleteDoctor(Long doctorId);

    String updateDoctor(Long doctorId, DoctorDto dto);
}