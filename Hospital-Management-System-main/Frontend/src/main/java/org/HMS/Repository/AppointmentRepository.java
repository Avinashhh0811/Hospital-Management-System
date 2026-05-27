package org.HMS.Repository;

import org.HMS.Entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface AppointmentRepository
        extends JpaRepository<Appointment, Long> {

    boolean existsByDoctorDoctorIdAndAppointmentDateAndAppointmentTime(
            Long doctorId,
            LocalDate appointmentDate,
            String appointmentTime
    );

    List<Appointment> findByDoctorDoctorId(Long doctorId);

    List<Appointment> findByPatientPatientId(Long patientId);
}