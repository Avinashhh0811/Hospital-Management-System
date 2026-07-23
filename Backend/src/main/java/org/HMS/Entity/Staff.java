package org.HMS.Entity;

import jakarta.persistence.*;

import java.time.LocalDate;
import lombok.*;
import org.HMS.Enum.Department;
import org.HMS.Enum.Designation;
import org.HMS.Enum.Shift;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "staff")
public class Staff {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long staffId;

    private String staffName;

    private String phone;

    private String email;

    private String gender;



    @Enumerated(EnumType.STRING)
    private Designation designation;

    @Enumerated(EnumType.STRING)
    private Department department;

    @Enumerated(EnumType.STRING)
    private Shift shift;

    private double salary;

    private LocalDate joiningDate;

    private boolean active = true;

    @ManyToOne
    @JoinColumn(name = "hospital_id")
    private Hospital hospital;


}