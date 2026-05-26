package org.HMS.Controller;

import org.HMS.Dto.PatientDto;
import org.HMS.Service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/patient")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @PostMapping("/add")
    public String addPatient(
            @RequestBody PatientDto dto) {

        return patientService.addPatient(dto);
    }
}