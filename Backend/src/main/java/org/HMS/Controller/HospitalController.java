package org.HMS.Controller;

import org.HMS.Dto.AddHospitalResponseDto;
import org.HMS.Dto.HospitalDto;
import org.HMS.Entity.Hospital;
import org.HMS.Service.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hospital")
@CrossOrigin("http://localhost:5173")
public class HospitalController {

    @Autowired
    private HospitalService hospitalService;

    // Add Hospital
    @PostMapping("/add")
    public AddHospitalResponseDto addHospital(
            @RequestBody HospitalDto dto) {

        return hospitalService
                .addHospital(dto);
    }

    // Get All Hospitals
    @GetMapping("/all")
    public List<HospitalDto> getAllHospitals() {

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
    // Update Hospital

    @PutMapping("/update/{hospitalId}")
    public String updateHospital(

            @PathVariable Long hospitalId,

            @RequestBody HospitalDto dto

    ) {

        return hospitalService
                .updateHospital(
                        hospitalId,
                        dto
                );

    }
    @GetMapping("/{hospitalId}")
    public HospitalDto getHospitalById(
            @PathVariable Long hospitalId
    ){
        return hospitalService.getHospitalById(hospitalId);
    }
}
