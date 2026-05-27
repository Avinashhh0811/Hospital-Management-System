package org.HMS.Repository;

import org.HMS.Entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository
        extends JpaRepository<Patient, Long> {
}