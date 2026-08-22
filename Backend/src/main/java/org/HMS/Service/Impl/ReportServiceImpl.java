package org.HMS.Service.Impl;

import org.HMS.Dto.Report.ReportDto;
import org.HMS.Entity.*;
import org.HMS.Repository.*;
import org.HMS.Service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class ReportServiceImpl implements ReportService {

    private static final String UPLOAD_DIR = "uploads/reports/";

    @Autowired
    private ReportRepository reportRepository;

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private HospitalRepository hospitalRepository;

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Override
    public String uploadReport(
            ReportDto dto,
            MultipartFile file
    ) {

        try {

            Patient patient = patientRepository.findById(dto.getPatientId())
                    .orElseThrow(() ->
                            new RuntimeException("Patient Not Found"));

            Doctor doctor = doctorRepository.findById(dto.getDoctorId())
                    .orElseThrow(() ->
                            new RuntimeException("Doctor Not Found"));

            Hospital hospital = hospitalRepository.findById(dto.getHospitalId())
                    .orElseThrow(() ->
                            new RuntimeException("Hospital Not Found"));

            Appointment appointment =
                    appointmentRepository.findById(dto.getAppointmentId())
                            .orElseThrow(() ->
                                    new RuntimeException("Appointment Not Found"));

            // Create uploads folder if not exists
            File folder = new File(UPLOAD_DIR);

            if (!folder.exists()) {
                folder.mkdirs();
            }

            // File extension
            String originalName = file.getOriginalFilename();

            String extension = "";

            if (originalName != null && originalName.contains(".")) {

                extension = originalName.substring(
                        originalName.lastIndexOf(".")
                );

            }

            // Unique file name

            String fileName =
                    "P" + patient.getId() + "_"
                            + dto.getReportType()
                            + "_"
                            + LocalDateTime.now().format(
                            DateTimeFormatter.ofPattern(
                                    "yyyyMMddHHmmss"
                            )
                    )
                            + extension;

            Path path = Paths.get(UPLOAD_DIR + fileName);

            Files.copy(file.getInputStream(), path);

            Report report = new Report();

            report.setPatient(patient);

            report.setDoctor(doctor);

            report.setHospital(hospital);

            report.setAppointment(appointment);

            report.setReportName(dto.getReportName());

            report.setReportType(dto.getReportType());

            report.setRemarks(dto.getRemarks());

            report.setStatus("UPLOADED");

            report.setFileName(fileName);

            report.setFileUrl(path.toString());

            report.setUploadedDate(LocalDateTime.now());

            reportRepository.save(report);

            return "Report Uploaded Successfully";

        } catch (IOException e) {

            throw new RuntimeException(
                    "File Upload Failed"
            );

        }

    }

    @Override
    public List<Report> getAllReports() {

        return reportRepository.findAll();

    }

    @Override
    public List<Report> getPatientReports(Long patientId) {

        return reportRepository.findByPatient_Id(patientId);

    }

    @Override
    public List<Report> getDoctorReports(Long doctorId) {

        return reportRepository.findByDoctor_DoctorId(doctorId);

    }

    @Override
    public List<Report> getHospitalReports(Long hospitalId) {

        return reportRepository.findByHospital_HospitalId(hospitalId);

    }

    @Override
    public String deleteReport(Long reportId) {

        Report report =
                reportRepository.findById(reportId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Report Not Found"
                                ));

        File file = new File(report.getFileUrl());

        try {
            if (file.exists()) {

                Files.deleteIfExists(Paths.get(report.getFileUrl()));

            }
        }
        catch (IOException e){
            throw new RuntimeException("Unable to delete reporrt file.");
        }

        reportRepository.delete(report);

        return "Report Deleted Successfully";
    }
}