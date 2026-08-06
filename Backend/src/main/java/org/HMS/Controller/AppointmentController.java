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
public class  AppointmentController {

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

    @GetMapping("/available-slots")
    public List<String> getAvailableSlots(

            @RequestParam Long doctorId,

            @RequestParam String appointmentDate

    ) {

        return appointmentService.getAvailableSlots(
                doctorId,
                appointmentDate
        );

    }

    @GetMapping("/upcoming/{patientId}")
    public List<Appointment> getUpcomingAppointments(
            @PathVariable Long patientId
    ) {

        return appointmentService
                .getUpcomingAppointments(patientId);

    }

    @GetMapping("/history/{patientId}")
    public List<Appointment> getAppointmentHistory(
            @PathVariable Long patientId
    ) {

        return appointmentService
                .getAppointmentHistory(patientId);

    }

    @GetMapping("/count/{patientId}")
    public long appointmentCount(
            @PathVariable Long patientId
    ) {

        return appointmentService
                .appointmentCount(patientId);

    }

    @PutMapping("/complete/{appointmentId}")
    public String completeAppointment(
            @PathVariable Long appointmentId
    ) {

        return appointmentService
                .completeAppointment(appointmentId);

    }

    @GetMapping("/status")
    public List<Appointment> getAppointmentsByStatus(

            @RequestParam String status

    ) {

        return appointmentService
                .getAppointmentsByStatus(status);

    }
}