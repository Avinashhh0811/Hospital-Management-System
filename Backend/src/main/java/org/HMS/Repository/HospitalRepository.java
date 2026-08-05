package org.HMS.Repository;

import org.HMS.Entity.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.*;

public interface HospitalRepository
        extends JpaRepository<Hospital, Long> {
    boolean existsByEmail(String email);

    boolean existsByContactNumber(String contactNumber);

    boolean existsByRegistrationNumber(String registrationNumber);

    List<Hospital> findByHospitalNameContainingIgnoreCase(String hospitalName);

    List<Hospital> findByCityContainingIgnoreCase(String city);

    List<Hospital> findByHospitalTypeContainingIgnoreCase(String hospitalType);

    List<Hospital> findByStateContainingIgnoreCase(String state);

    List<Hospital> findByStateContainingIgnoreCaseAndCityContainingIgnoreCase(
            String state,
            String city
    );
}