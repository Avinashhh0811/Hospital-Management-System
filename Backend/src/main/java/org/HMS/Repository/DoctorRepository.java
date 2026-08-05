package org.HMS.Repository;

import org.HMS.Entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

    List<Doctor> findByHospitalHospitalId(Long hospitalId);

    long countByHospitalHospitalId(Long hospitalId);
    boolean existsByEmail(String email);

    List<Doctor> findBySpecializationIgnoreCase(String specialization);

    List<Doctor> findByHospitalHospitalIdAndSpecializationIgnoreCase(
            Long hospitalId,
            String specialization
    );



}