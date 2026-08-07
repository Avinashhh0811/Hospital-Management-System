    package org.HMS.Controller;
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

    }