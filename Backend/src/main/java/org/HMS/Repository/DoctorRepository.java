package org.HMS.Repository;

import org.HMS.Entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DoctorRepository
        extends JpaRepository<Doctor, Long> {
    List<Doctor> findByHospitalHospitalId(Long hospitalId);



    boolean existsByUserId(Long userId);
}