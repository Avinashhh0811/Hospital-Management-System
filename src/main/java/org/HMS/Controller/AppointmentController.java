package org.HMS.Controller;

import org.HMS.Dto.AppointmentDto;
import org.HMS.Entity.Appointment;
import org.HMS.Service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointment")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    // Book Appointment
    @PostMapping("/book")
    public String bookAppointment(
            @RequestBody AppointmentDto dto) {

        return appointmentService.bookAppointment(dto);
    }

    // Get All Appointments
    @GetMapping("/all")
    public List<Appointment> getAllAppointments() {

        return appointmentService.getAllAppointments();
    }

    // Cancel Appointment
    @PutMapping("/cancel/{appointmentId}")
    public String cancelAppointment(
            @PathVariable Long appointmentId) {

        return appointmentService
                .cancelAppointment(appointmentId);
    }

    // Get Doctor Appointments
    @GetMapping("/doctor/{doctorId}")
    public List<Appointment> getAppointmentsByDoctor(
            @PathVariable Long doctorId) {

        return appointmentService
                .getAppointmentsByDoctor(doctorId);
    }

    // Get Patient Appointments
    @GetMapping("/patient/{patientId}")
    public List<Appointment> getAppointmentsByPatient(
            @PathVariable Long patientId) {

        return appointmentService
                .getAppointmentsByPatient(patientId);
    }
}