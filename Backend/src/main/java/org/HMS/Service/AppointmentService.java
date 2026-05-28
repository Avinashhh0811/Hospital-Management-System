package org.HMS.Service;

import org.HMS.Dto.AppointmentDto;
import org.HMS.Entity.Appointment;

import java.util.List;

public interface AppointmentService {

    String bookAppointment(AppointmentDto dto);

    List<Appointment> getAllAppointments();

    String cancelAppointment(Long appointmentId);

    List<Appointment> getAppointmentsByDoctor(Long doctorId);

    List<Appointment> getAppointmentsByPatient(Long patientId);
}