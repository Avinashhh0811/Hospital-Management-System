package org.HMS.Repository;

import org.HMS.Entity.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HospitalRepository
        extends JpaRepository<Hospital, Long> {
    boolean existsByEmail(String email);

    boolean existsByContactNumber(String contactNumber);

    boolean existsByRegistrationNumber(String registrationNumber);
}