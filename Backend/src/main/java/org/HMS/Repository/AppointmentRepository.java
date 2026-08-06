package org.HMS.Repository;

import org.HMS.Entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public interface AppointmentRepository
        extends JpaRepository<Appointment, Long> {

    boolean existsByDoctor_DoctorIdAndAppointmentDateAndAppointmentTime(
            Long doctorId,
            LocalDate appointmentDate,
            LocalTime appointmentTime
    );

    List<Appointment> findByDoctor_DoctorId(Long doctorId);

    List<Appointment> findByPatient_Id(Long patientId);

    List<Appointment> findByDoctor_DoctorIdAndAppointmentDate(
            Long doctorId,
            LocalDate appointmentDate
    );

    List<Appointment> findByPatient_IdAndAppointmentDateGreaterThanEqual(
            Long patientId,
            LocalDate appointmentDate
    );

    List<Appointment> findByPatient_IdAndAppointmentDateLessThan(
            Long patientId,
            LocalDate appointmentDate
    );

    long countByPatient_Id(Long patientId);

    List<Appointment> findByStatus(String status);
}