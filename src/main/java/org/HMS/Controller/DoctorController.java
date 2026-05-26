package org.HMS.Controller;

import org.HMS.Dto.DoctorDto;
import org.HMS.Service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/doctor")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @PostMapping("/add")
    public String addDoctor(
            @RequestBody DoctorDto dto) {

        return doctorService.addDoctor(dto);
    }
}