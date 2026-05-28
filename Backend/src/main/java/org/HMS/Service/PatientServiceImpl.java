package org.HMS.Service;

import org.HMS.Dto.PatientDto;

import org.HMS.Entity.Patient;
import org.HMS.Entity.User;

import org.HMS.Repository.PatientRepository;
import org.HMS.Repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientServiceImpl
        implements PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public String addPatient(PatientDto dto) {

        User user = userRepository
                .findById(dto.getUserId())
                .orElseThrow(() ->
                        new RuntimeException("User Not Found"));

        Patient patient = new Patient();

        patient.setFullName(dto.getFullName());

        patient.setEmail(dto.getEmail());

        patient.setPhone(dto.getPhone());

        patient.setAge(dto.getAge());

        patient.setGender(dto.getGender());

        patient.setBloodGroup(dto.getBloodGroup());

        patient.setAddress(dto.getAddress());



        patientRepository.save(patient);

        return "Patient Added Successfully";
    }
}