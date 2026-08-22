package org.HMS.Controller;

import org.HMS.Dto.Report.ReportDto;
import org.HMS.Entity.Report;
import org.HMS.Service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/report")
@CrossOrigin("*")
public class ReportController {

    @Autowired
    private ReportService reportService;

    // Upload Report

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String uploadReport(

            @RequestPart("report") ReportDto dto,

            @RequestPart("file") MultipartFile file

    ) {

        return reportService.uploadReport(dto, file);

    }

    // Get All Reports

    @GetMapping("/all")
    public List<Report> getAllReports() {

        return reportService.getAllReports();

    }

    // Patient Reports

    @GetMapping("/patient/{patientId}")
    public List<Report> getPatientReports(

            @PathVariable Long patientId

    ) {

        return reportService.getPatientReports(patientId);

    }

    // Doctor Reports

    @GetMapping("/doctor/{doctorId}")
    public List<Report> getDoctorReports(

            @PathVariable Long doctorId

    ) {

        return reportService.getDoctorReports(doctorId);

    }

    // Hospital Reports

    @GetMapping("/hospital/{hospitalId}")
    public List<Report> getHospitalReports(

            @PathVariable Long hospitalId

    ) {

        return reportService.getHospitalReports(hospitalId);

    }

    // Delete Report

    @DeleteMapping("/delete/{reportId}")
    public String deleteReport(

            @PathVariable Long reportId

    ) {

        return reportService.deleteReport(reportId);

    }

    // Download Report

    @GetMapping("/download/{fileName}")
    public ResponseEntity<Resource> downloadReport(

            @PathVariable String fileName

    ) throws MalformedURLException {

        Path path = Paths.get("uploads/reports/")
                .resolve(fileName);

        Resource resource =
                new UrlResource(path.toUri());

        return ResponseEntity.ok()

                .header(
                        HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=\"" +
                                resource.getFilename() + "\""
                )

                .body(resource);

    }

}