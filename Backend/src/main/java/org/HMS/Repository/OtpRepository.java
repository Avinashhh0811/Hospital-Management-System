package org.HMS.Repository;

import org.HMS.Entity.Otp;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OtpRepository
        extends JpaRepository<Otp, Long> {

    Otp findByEmail(String email);

    void deleteByEmail(String email);
}