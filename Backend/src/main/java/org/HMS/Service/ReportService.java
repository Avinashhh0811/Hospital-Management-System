package org.HMS.Service;

import org.HMS.Dto.Report.ReportDto;
import org.HMS.Entity.Report;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ReportService {

    String uploadReport(
            ReportDto dto,
            MultipartFile file
    );

    List<Report> getAllReports();

    List<Report> getPatientReports(Long patientId);

    List<Report> getDoctorReports(Long doctorId);

    List<Report> getHospitalReports(Long hospitalId);

    String deleteReport(Long reportId);

}