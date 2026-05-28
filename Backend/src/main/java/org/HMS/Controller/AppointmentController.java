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

    // ================= BOOK APPOINTMENT =================

    @PostMapping("/book")
    public String bookAppointment(
            @RequestBody AppointmentDto dto
    ) {

        return appointmentService
                .bookAppointment(dto);
    }

    // ================= GET ALL APPOINTMENTS =================

    @GetMapping("/all")
    public List<Appointment> getAllAppointments() {

        return appointmentService
                .getAllAppointments();
    }

    // ================= CANCEL APPOINTMENT =================

    @PutMapping("/cancel/{appointmentId}")
    public String cancelAppointment(
            @PathVariable Long appointmentId
    ) {

        return appointmentService
                .cancelAppointment(
                        appointmentId
                );
    }

    // ================= GET DOCTOR APPOINTMENTS =================

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

    // ================= GET PATIENT APPOINTMENTS =================

    @GetMapping("/patient/{patientId}")
    public List<Appointment>
    getAppointmentsByPatient(

            @PathVariable Long patientId
    ) {

        return appointmentService
                .getAppointmentsByPatient(
                        patientId
                );
    }
}