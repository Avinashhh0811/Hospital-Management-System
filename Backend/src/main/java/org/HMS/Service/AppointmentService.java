package org.HMS.Service;

import org.HMS.Dto.Appointment.AppointmentDto;
import org.HMS.Entity.Appointment;

import java.util.List;

public interface AppointmentService {

    String bookAppointment(AppointmentDto dto);

    List<Appointment> getAllAppointments();

    String cancelAppointment(Long appointmentId);

    List<Appointment> getAppointmentsByDoctor(Long doctorId);

    List<Appointment> getAppointmentsByPatient(Long patientId);

    List<String> getAvailableSlots(
            Long doctorId,
            String appointmentDate
    );

    List<Appointment> getUpcomingAppointments(Long patientId);

    List<Appointment> getAppointmentHistory(Long patientId);

    long appointmentCount(Long patientId);

    String completeAppointment(Long appointmentId);

    List<Appointment> getAppointmentsByStatus(
            String status
    );

}