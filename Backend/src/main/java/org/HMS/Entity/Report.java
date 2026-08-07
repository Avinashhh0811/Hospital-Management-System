package org.HMS.Entity;

import jakarta.persistence.*;
import lombok.*;
import org.HMS.Enum.ReportType;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "reports")
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reportId;

    @OneToOne
    @JoinColumn(name = "appointment_id")
    private Appointment appointment;

    @ManyToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;

    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;

    @ManyToOne
    @JoinColumn(name = "hospital_id")
    private Hospital hospital;

    private String reportName;

    @Enumerated(EnumType.STRING)
    private ReportType reportType;

    // Original uploaded file name
    private String fileName;

    // Local path now, S3 URL in future
    private String fileUrl;

    private LocalDateTime uploadedDate;

    private String remarks;

    private String status;

}