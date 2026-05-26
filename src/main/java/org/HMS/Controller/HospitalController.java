package org.HMS.Controller;

import org.HMS.Dto.HospitalDto;
import org.HMS.Service.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hospital")
public class HospitalController {

    @Autowired
    private HospitalService hospitalService;

    @PostMapping("/add")
    public String addHospital(
            @RequestBody HospitalDto dto) {

        return hospitalService.addHospital(dto);
    }
}