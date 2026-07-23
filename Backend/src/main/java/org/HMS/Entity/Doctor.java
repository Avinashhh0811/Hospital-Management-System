package org.HMS.Entity;

import jakarta.persistence.*;
import lombok.*;
import org.HMS.Enum.DoctorStatus;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "doctors")
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long doctorId;

    private String doctorName;

    private String specialization;

    private int experience;

    private double fees;

    private String qualification;

    private String phone;

    private String email;


    private String gender;

    private String opdTiming;

    @Enumerated(EnumType.STRING)
    private DoctorStatus status = DoctorStatus.ACTIVE;


    @ManyToOne
    @JoinColumn(name = "hospital_id")
    private Hospital hospital;


}