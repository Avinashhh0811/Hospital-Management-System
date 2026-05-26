package org.HMS.Service;

import org.HMS.Dto.DoctorDto;
import org.HMS.Entity.Doctor;
import org.HMS.Entity.Hospital;
import org.HMS.Repository.DoctorRepository;
import org.HMS.Repository.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorServiceImpl
        implements DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private HospitalRepository hospitalRepository;

    @Override
    public String addDoctor(DoctorDto dto) {

        Hospital hospital = hospitalRepository
                .findById(dto.getHospitalId())
                .orElseThrow(() ->
                        new RuntimeException("Hospital Not Found"));

        Doctor doctor = new Doctor();

        doctor.setDoctorName(dto.getDoctorName());
        doctor.setSpecialization(dto.getSpecialization());
        doctor.setExperience(dto.getExperience());
        doctor.setFees(dto.getFees());

        doctor.setHospital(hospital);

        doctorRepository.save(doctor);

        return "Doctor Added Successfully";
    }
}