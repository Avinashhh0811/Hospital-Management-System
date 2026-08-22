package org.HMS.Service.Impl;
import org.HMS.Dto.Patient.PatientDto;

import org.HMS.Entity.Patient;
import org.HMS.Entity.User;

import org.HMS.Repository.PatientRepository;
import org.HMS.Repository.UserRepository;

import org.HMS.Service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PatientServiceImpl
        implements PatientService {

    @Override
    public List<Patient> getAllPatients() {

        return patientRepository.findAll();

    }

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

        patient.setUser(user);

        patient.setFullName(dto.getFullName());

        patient.setPhone(dto.getPhone());

        patient.setAge(dto.getAge());

        patient.setGender(dto.getGender());

        patient.setBloodGroup(dto.getBloodGroup());

        patient.setAddress(dto.getAddress());

        patientRepository.save(patient);

        return "Patient Added Successfully";
    }

    @Override
    public String updatePatient(Long patientId, PatientDto dto) {

        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() ->
                        new RuntimeException("Patient Not Found"));

        patient.setFullName(dto.getFullName());
        patient.setPhone(dto.getPhone());
        patient.setAge(dto.getAge());
        patient.setGender(dto.getGender());
        patient.setBloodGroup(dto.getBloodGroup());
        patient.setAddress(dto.getAddress());

        patientRepository.save(patient);

        return "Patient Updated Successfully";
    }

    @Override
    public Patient getPatientById(Long patientId) {

        return patientRepository.findById(patientId)
                .orElseThrow(() ->
                        new RuntimeException("Patient Not Found"));
    }

}