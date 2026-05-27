package org.HMS.Repository;

import org.HMS.Entity.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HospitalRepository
        extends JpaRepository<Hospital, Long> {
}