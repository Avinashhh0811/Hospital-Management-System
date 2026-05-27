package org.HMS.Controller;

import org.HMS.Dto.HospitalDto;
import org.HMS.Entity.Hospital;
import org.HMS.Service.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hospital")
public class HospitalController {

    @Autowired
    private HospitalService hospitalService;

    // Add Hospital
    @PostMapping("/add")
    public String addHospital(
            @RequestBody HospitalDto dto) {

        return hospitalService
                .addHospital(dto);
    }

    // Get All Hospitals
    @GetMapping("/all")
    public List<Hospital> getAllHospitals() {

        return hospitalService
                .getAllHospitals();
    }

    // Delete Hospital
    @DeleteMapping("/delete/{hospitalId}")
    public String deleteHospital(
            @PathVariable Long hospitalId) {

        return hospitalService
                .deleteHospital(hospitalId);
    }
}