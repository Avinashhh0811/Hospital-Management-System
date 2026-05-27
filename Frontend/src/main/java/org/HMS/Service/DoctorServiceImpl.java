package org.HMS.Service;

import org.HMS.Dto.DoctorDto;
import org.HMS.Entity.Doctor;
import org.HMS.Entity.Hospital;
import org.HMS.Entity.User;
import org.HMS.Repository.DoctorRepository;
import org.HMS.Repository.HospitalRepository;
import org.HMS.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorServiceImpl
        implements DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private HospitalRepository hospitalRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public String addDoctor(DoctorDto dto) {

        // Find Hospital
        Hospital hospital = hospitalRepository
                .findById(dto.getHospitalId())
                .orElseThrow(() ->
                        new RuntimeException("Hospital Not Found"));

        // Find User
        User user = userRepository
                .findById(dto.getUserId())
                .orElseThrow(() ->
                        new RuntimeException("User Not Found"));

        // Create Doctor
        Doctor doctor = new Doctor();

        doctor.setDoctorName(
                dto.getDoctorName());

        doctor.setSpecialization(
                dto.getSpecialization());

        doctor.setExperience(
                dto.getExperience());

        doctor.setFees(
                dto.getFees());

        doctor.setHospital(hospital);

        doctor.setUser(user);

        // Save Doctor
        doctorRepository.save(doctor);

        return "Doctor Added Successfully";
    }

    @Override
    public List<Doctor> getAllDoctors() {

        return doctorRepository.findAll();
    }

    @Override
    public String deleteDoctor(Long doctorId) {

        Doctor doctor = doctorRepository
                .findById(doctorId)
                .orElseThrow(() ->
                        new RuntimeException("Doctor Not Found"));

        doctorRepository.delete(doctor);

        return "Doctor Deleted Successfully";
    }

    @Override
    public String updateDoctor(Long doctorId,
                               DoctorDto dto) {

        // Find Doctor
        Doctor doctor = doctorRepository
                .findById(doctorId)
                .orElseThrow(() ->
                        new RuntimeException("Doctor Not Found"));

        // Find Hospital
        Hospital hospital = hospitalRepository
                .findById(dto.getHospitalId())
                .orElseThrow(() ->
                        new RuntimeException("Hospital Not Found"));

        // Find User
        User user = userRepository
                .findById(dto.getUserId())
                .orElseThrow(() ->
                        new RuntimeException("User Not Found"));

        // Update Doctor
        doctor.setDoctorName(
                dto.getDoctorName());

        doctor.setSpecialization(
                dto.getSpecialization());

        doctor.setExperience(
                dto.getExperience());

        doctor.setFees(
                dto.getFees());

        doctor.setHospital(hospital);

        doctor.setUser(user);

        // Save Updated Doctor
        doctorRepository.save(doctor);

        return "Doctor Updated Successfully";
    }
}