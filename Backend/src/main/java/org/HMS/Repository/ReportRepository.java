package org.HMS.Repository;

import org.HMS.Entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReportRepository extends JpaRepository<Report, Long> {

    List<Report> findByPatient_Id(Long patientId);

    List<Report> findByDoctor_DoctorId(Long doctorId);

    List<Report> findByHospital_HospitalId(Long hospitalId);

    Report findByAppointmentAppointmentId(Long appointmentId);
}