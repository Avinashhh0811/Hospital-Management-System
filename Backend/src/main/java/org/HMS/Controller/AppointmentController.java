package org.HMS.Controller;

import org.HMS.Dto.AppointmentDto;
import org.HMS.Entity.Appointment;
import org.HMS.Service.AppointmentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointment")
@CrossOrigin("*")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

   //Book Appointment

    @PostMapping("/book")
    public String bookAppointment(
            @RequestBody AppointmentDto dto
    ) {

        return appointmentService
                .bookAppointment(dto);
    }

    // Get all appointments

    @GetMapping("/all")
    public List<Appointment> getAllAppointments() {

        return appointmentService
                .getAllAppointments();
    }

    // Cancel appointment

    @PutMapping("/cancel/{appointmentId}")
    public String cancelAppointment(
            @PathVariable Long appointmentId
    ) {

        return appointmentService
                .cancelAppointment(
                        appointmentId
                );
    }

    // Get Doctor appointment

    @GetMapping("/doctor/{doctorId}")
    public List<Appointment>
    getAppointmentsByDoctor(

            @PathVariable Long doctorId
    ) {

        return appointmentService
                .getAppointmentsByDoctor(
                        doctorId
                );
    }

    // Get patient appointment

    @GetMapping("/patient/{patientId}")
    public List<Appointment>
    getAppointmentsByPatient(

            @PathVariable Long patientId
    )
    {

        return appointmentService
                .getAppointmentsByPatient(
                        patientId
                );
    }
}