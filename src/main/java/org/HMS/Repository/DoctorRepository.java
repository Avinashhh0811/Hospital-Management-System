package org.HMS.Repository;

import org.HMS.Entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository
        extends JpaRepository<Doctor, Long> {


    boolean existsByUserId(Long userId);
}