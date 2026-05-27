package org.HMS.Service;

import org.HMS.Dto.DoctorDto;
import org.HMS.Entity.Doctor;

import java.util.List;

public interface DoctorService {

    String addDoctor(DoctorDto dto);

    List<Doctor> getAllDoctors();

    String deleteDoctor(Long doctorId);

    String updateDoctor(Long doctorId,
                        DoctorDto dto);
}