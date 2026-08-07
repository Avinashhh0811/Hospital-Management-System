package org.HMS.Repository;

import org.HMS.Entity.Staff;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StaffRepository
        extends JpaRepository<Staff, Long> {

    List<Staff> findByHospitalHospitalId(Long hospitalId);

    long countByHospitalHospitalId(Long hospitalId);

    boolean existsByEmail(String email);

    boolean existsByPhone(String phone);

    List<Staff> findByHospitalHospitalIdAndActiveTrue(Long hospitalId);

}