package org.HMS.Controller;

import org.HMS.Entity.Patient;
import org.HMS.Repository.PatientRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/patient")
@CrossOrigin("*")
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @GetMapping("/profile/{email}")
    public Patient getProfile(
            @PathVariable String email
    ) {

        return patientRepository
                .findByUserEmail(email)
                .orElse(null);
    }
}