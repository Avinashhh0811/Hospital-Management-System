package org.HMS.Service.Impl;

import org.HMS.Dto.AppointmentDto;
import org.HMS.Entity.Appointment;
import org.HMS.Entity.Doctor;
import org.HMS.Entity.Hospital;
import org.HMS.Entity.Patient;
import org.HMS.Enum.DoctorStatus;
import org.HMS.Repository.AppointmentRepository;
import org.HMS.Repository.DoctorRepository;
import org.HMS.Repository.HospitalRepository;
import org.HMS.Repository.PatientRepository;
import org.HMS.Service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class AppointmentServiceImpl
        implements AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private HospitalRepository hospitalRepository;

    @Override
    public String bookAppointment(AppointmentDto dto) {

        Patient patient = patientRepository
                .findById(dto.getPatientId())
                .orElseThrow(() ->
                        new RuntimeException("Patient Not Found"));

        Doctor doctor = doctorRepository
                .findById(dto.getDoctorId())
                .orElseThrow(() ->
                        new RuntimeException("Doctor Not Found"));

        if (doctor.getStatus() != DoctorStatus.ACTIVE) {
            return "Doctor is not available";
        }

        Hospital hospital = hospitalRepository
                .findById(dto.getHospitalId())
                .orElseThrow(() ->
                        new RuntimeException("Hospital Not Found"));

        LocalDate date =
                LocalDate.parse(dto.getAppointmentDate());

        if (date.isBefore(LocalDate.now())) {
            return "Past Date Appointment Not Allowed";
        }

        LocalTime time =
                LocalTime.parse(dto.getAppointmentTime());

        if (date.equals(LocalDate.now())
                && time.isBefore(LocalTime.now())) {

            return "Selected Time Already Passed";
        }

        boolean alreadyBooked =
                appointmentRepository
                        .existsByDoctor_DoctorIdAndAppointmentDateAndAppointmentTime(
                                dto.getDoctorId(),
                                date,
                                time
                        );

        if (alreadyBooked) {
            return "Slot Already Booked";
        }

        Appointment appointment = new Appointment();

        appointment.setDoctor(doctor);

        appointment.setPatient(patient);

        appointment.setHospital(hospital);

        appointment.setAppointmentDate(date);

        appointment.setAppointmentTime(time);

        appointment.setStatus("BOOKED");

        appointmentRepository.save(appointment);

        return "Appointment Booked Successfully";
    }

    @Override
    public List<Appointment> getAllAppointments() {

        return appointmentRepository.findAll();
    }

    @Override
    public String cancelAppointment(Long appointmentId) {

        Appointment appointment =
                appointmentRepository.findById(appointmentId)
                        .orElseThrow(() ->
                                new RuntimeException("Appointment Not Found"));

        appointment.setStatus("CANCELLED");

        appointmentRepository.save(appointment);

        return "Appointment Cancelled Successfully";
    }

    @Override
    public List<Appointment> getAppointmentsByDoctor(Long doctorId) {

        return appointmentRepository
                .findByDoctor_DoctorId(doctorId);
    }

    @Override
    public List<Appointment> getAppointmentsByPatient(Long patientId) {

        return appointmentRepository
                .findByPatient_Id(patientId);
    }

    @Override
    public List<String> getAvailableSlots(
            Long doctorId,
            String appointmentDate
    ) {

        Doctor doctor = doctorRepository.findById(doctorId)
                .orElseThrow(() ->
                        new RuntimeException("Doctor Not Found"));

        LocalDate date = LocalDate.parse(appointmentDate);

        List<Appointment> bookedAppointments =
                appointmentRepository
                        .findByDoctor_DoctorIdAndAppointmentDate(
                                doctorId,
                                date
                        );

        List<String> bookedSlots = new ArrayList<>();

        for (Appointment appointment : bookedAppointments) {

            bookedSlots.add(
                    appointment.getAppointmentTime().toString()
            );

        }

        // Example opdTiming = "09:00-17:00"

        String[] timing = doctor.getOpdTiming().split("-");

        LocalTime start = LocalTime.parse(timing[0]);

        LocalTime end = LocalTime.parse(timing[1]);

        List<String> availableSlots = new ArrayList<>();

        while (start.isBefore(end)) {

            String slot = start.toString();

            if (!bookedSlots.contains(slot)) {

                availableSlots.add(slot);

            }

            start = start.plusMinutes(30);

        }

        return availableSlots;
    }

    @Override
    public List<Appointment> getUpcomingAppointments(Long patientId) {

        return appointmentRepository
                .findByPatient_IdAndAppointmentDateGreaterThanEqual(
                        patientId,
                        LocalDate.now()
                );
    }

    @Override
    public List<Appointment> getAppointmentHistory(Long patientId) {

        return appointmentRepository
                .findByPatient_IdAndAppointmentDateLessThan(
                        patientId,
                        LocalDate.now()
                );
    }

    @Override
    public long appointmentCount(Long patientId) {

        return appointmentRepository
                .countByPatient_Id(patientId);

    }

    @Override
    public String completeAppointment(Long appointmentId) {

        Appointment appointment =
                appointmentRepository.findById(appointmentId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Appointment Not Found"
                                ));

        appointment.setStatus("COMPLETED");

        appointmentRepository.save(appointment);

        return "Appointment Completed Successfully";
    }

    @Override
    public List<Appointment> getAppointmentsByStatus(
            String status
    ) {

        return appointmentRepository
                .findByStatus(status);

    }
}