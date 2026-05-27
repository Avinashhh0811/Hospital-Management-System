package org.HMS.Controller;

import org.HMS.Dto.DoctorDto;
import org.HMS.Entity.Doctor;
import org.HMS.Service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctor")
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
}