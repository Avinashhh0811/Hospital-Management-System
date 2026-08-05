package org.HMS.Service.Impl;

import org.HMS.Dto.DoctorDto;
import org.HMS.Dto.HospitalDto;
import org.HMS.Dto.PatientDto;

import org.HMS.Entity.Doctor;
import org.HMS.Entity.Hospital;
import org.HMS.Entity.Patient;
import org.HMS.Entity.User;


import org.HMS.Mapper.HospitalMapper;
import org.HMS.Repository.DoctorRepository;
import org.HMS.Repository.HospitalRepository;
import org.HMS.Repository.PatientRepository;
import org.HMS.Repository.UserRepository;

import org.HMS.Service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PatientServiceImpl
        implements PatientService {

    @Override
    public List<Patient> getAllPatients() {

        return patientRepository.findAll();

    }

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private HospitalRepository hospitalRepository;

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


    @Override
    public List<HospitalDto> searchHospital(String keyword) {

        List<Hospital> hospitals =
                hospitalRepository.findByHospitalNameContainingIgnoreCase(keyword);

        List<HospitalDto> list = new ArrayList<>();

        for (Hospital hospital : hospitals) {

            list.add(HospitalMapper.toDto(hospital));

        }

        return list;
    }
    @Override
    public List<HospitalDto> getHospitalByCity(String city) {

        List<Hospital> hospitals =
                hospitalRepository.findByCityContainingIgnoreCase(city);

        List<HospitalDto> list = new ArrayList<>();

        for (Hospital hospital : hospitals) {

            list.add(HospitalMapper.toDto(hospital));

        }

        return list;
    }

    @Override
    public List<HospitalDto> getHospitalByState(String state) {

        List<Hospital> hospitals =
                hospitalRepository.findByStateContainingIgnoreCase(state);

        List<HospitalDto> list = new ArrayList<>();

        for (Hospital hospital : hospitals) {

            list.add(HospitalMapper.toDto(hospital));

        }

        return list;
    }

    @Override
    public List<HospitalDto> getHospitalByType(String type) {

        List<Hospital> hospitals =
                hospitalRepository.findByHospitalTypeContainingIgnoreCase(type);

        List<HospitalDto> list = new ArrayList<>();

        for (Hospital hospital : hospitals) {

            list.add(HospitalMapper.toDto(hospital));

        }

        return list;
    }

    @Override
    public List<DoctorDto> getDoctorsByHospital(Long hospitalId) {

        List<Doctor> doctors =
                doctorRepository.findByHospitalHospitalId(hospitalId);

        List<DoctorDto> list = new ArrayList<>();

        for (Doctor doctor : doctors) {

            list.add(
                    DoctorMapper.toDto(doctor)
            );

        }

        return list;
    }

    @Override
    public List<DoctorDto> getDoctorsByDepartment(String department) {

        List<Doctor> doctors =
                doctorRepository.findByDepartmentIgnoreCase(department);

        List<DoctorDto> list = new ArrayList<>();

        for (Doctor doctor : doctors) {

            list.add(
                    DoctorMapper.toDto(doctor)
            );

        }

        return list;
    }

    @Override
    public List<DoctorDto> getDoctorsByHospitalAndDepartment(
            Long hospitalId,
            String department
    ) {

        List<Doctor> doctors =
                doctorRepository
                        .findByHospitalHospitalIdAndDepartmentIgnoreCase(
                                hospitalId,
                                department
                        );

        List<DoctorDto> list = new ArrayList<>();

        for (Doctor doctor : doctors) {

            list.add(
                    DoctorMapper.toDto(doctor)
            );

        }

        return list;
    }
}