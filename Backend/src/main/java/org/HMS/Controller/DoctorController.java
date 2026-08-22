package org.HMS.Controller;

import org.HMS.Dto.Doctor.DoctorDto;
import org.HMS.Entity.Doctor;
import org.HMS.Service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctor")
@CrossOrigin("*")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    // Add Doctor
    @PostMapping("/add")
    public String addDoctor(
            @RequestBody DoctorDto dto) {

        return doctorService.addDoctor(dto);
    }

    // Get All Doctors
    @GetMapping("/all")
    public List<Doctor> getAllDoctors() {

        return doctorService.getAllDoctors();
    }

    @GetMapping("/hospital/{hospitalId}")
    public List<Doctor> getDoctorsByHospital(
            @PathVariable Long hospitalId
    ) {
        return doctorService.getDoctorsByHospital(hospitalId);
    }

    // Delete Doctor
    @DeleteMapping("/delete/{doctorId}")
    public String deleteDoctor(
            @PathVariable Long doctorId) {

        return doctorService
                .deleteDoctor(doctorId);
    }

    // Update Doctor
    @PutMapping("/update/{doctorId}")
    public String updateDoctor(
            @PathVariable Long doctorId,
            @RequestBody DoctorDto dto) {

        return doctorService
                .updateDoctor(doctorId, dto);
    }

    @GetMapping("/count/{hospitalId}")
    public long doctorCount(
            @PathVariable Long hospitalId
    ){

        return doctorService
                .doctorCount(hospitalId);

    }

    @GetMapping("/{doctorId}")
    public Doctor getDoctorById(
            @PathVariable Long doctorId
    ) {
        return doctorService.getDoctorById(doctorId);
    }

    @GetMapping("/specialization")
    public List<Doctor> getDoctorsBySpecialization(
            @RequestParam String specialization
    ) {

        return doctorService.getDoctorsBySpecialization(
                specialization
        );

    }

    @GetMapping("/filter")
    public List<Doctor> getDoctorsByHospitalAndSpecialization(

            @RequestParam Long hospitalId,

            @RequestParam String specialization

    ) {

        return doctorService
                .getDoctorsByHospitalAndSpecialization(
                        hospitalId,
                        specialization
                );

    }
}