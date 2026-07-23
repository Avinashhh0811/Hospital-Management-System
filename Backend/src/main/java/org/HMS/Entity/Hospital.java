package org.HMS.Entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;




@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "hospitals")
public class Hospital {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long hospitalId;

    private String hospitalCode;

    private String hospitalName;

    private String address;

    private String city;

    private String contactNumber;

    private String registrationNumber;

    private String hospitalType;

    private String state;

    private String pincode;

    private String email;

    private String website;



    @OneToMany(mappedBy = "hospital")
    private List<Staff> staffList;
}