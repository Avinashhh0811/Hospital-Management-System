package org.HMS.Controller;

import org.HMS.Dto.DoctorDto;
import org.HMS.Dto.HospitalDto;
import org.HMS.Dto.PatientDto;
import org.HMS.Entity.Patient;
import org.HMS.Repository.PatientRepository;

import org.HMS.Service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patient")
@CrossOrigin("*")
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private PatientService patientService;

    @GetMapping("/profile/{email}")
    public Patient getProfile(
            @PathVariable String email
    ) {
        return patientRepository
                .findByUserEmail(email)
                .orElse(null);
    }

    @GetMapping("/all")
    public List<Patient> getAllPatients() {

        return patientService.getAllPatients();

    }

    // Get Patient By Id

    @GetMapping("/{patientId}")
    public Patient getPatientById(
            @PathVariable Long patientId
    ) {

        return patientService.getPatientById(patientId);

    }


// Update Patient

    @PutMapping("/update/{patientId}")
    public String updatePatient(

            @PathVariable Long patientId,

            @RequestBody PatientDto dto

    ) {

        return patientService.updatePatient(
                patientId,
                dto
        );

    }
    @GetMapping("/hospital/search")
    public List<HospitalDto> searchHospital(
            @RequestParam String keyword
    ) {

        return patientService.searchHospital(keyword);

    }
    @GetMapping("/hospital/city")
    public List<HospitalDto> getHospitalByCity(
            @RequestParam String city
    ) {

        return patientService.getHospitalByCity(city);

    }

    @GetMapping("/hospital/state")
    public List<HospitalDto> getHospitalByState(
            @RequestParam String state
    ) {

        return patientService.getHospitalByState(state);

    }

    @GetMapping("/hospital/type")
    public List<HospitalDto> getHospitalByType(
            @RequestParam String type
    ) {

        return patientService.getHospitalByType(type);

    }
    @GetMapping("/doctor/hospital/{hospitalId}")
    public List<DoctorDto> getDoctorsByHospital(
            @PathVariable Long hospitalId
    ) {

        return patientService.getDoctorsByHospital(hospitalId);

    }
    @GetMapping("/doctor/department")
    public List<DoctorDto> getDoctorsByDepartment(
            @RequestParam String department
    ) {

        return patientService.getDoctorsByDepartment(department);

    }

    @GetMapping("/doctor/filter")
    public List<DoctorDto> getDoctorsByHospitalAndDepartment(

            @RequestParam Long hospitalId,

            @RequestParam String department

    ) {

        return patientService.getDoctorsByHospitalAndDepartment(
                hospitalId,
                department
        );

    }


}