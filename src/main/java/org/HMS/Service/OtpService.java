package org.HMS.Service;

import org.HMS.Entity.Otp;
import org.HMS.Repository.OtpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Service
public class OtpService {

    @Autowired
    private OtpRepository otpRepository;

    @Autowired
    private EmailService emailService;

    // SEND OTP
    public void sendOtp(String email) {

        Random random = new Random();

        int otpNumber =
                100000 + random.nextInt(900000);

        String otp =
                String.valueOf(otpNumber);

        Otp existingOtp =
                otpRepository.findByEmail(email);

        // UPDATE EXISTING OTP
        if(existingOtp != null){

            existingOtp.setOtp(otp);

            existingOtp.setExpiryTime(
                    LocalDateTime.now().plusMinutes(5)
            );

            otpRepository.save(existingOtp);
        }

        // CREATE NEW OTP
        else {

            Otp newOtp = new Otp();

            newOtp.setEmail(email);

            newOtp.setOtp(otp);

            newOtp.setExpiryTime(
                    LocalDateTime.now().plusMinutes(5)
            );

            otpRepository.save(newOtp);
        }

        // SEND EMAIL
        emailService.sendEmail(
                email,
                "HMS OTP Verification",
                "Your OTP is : " + otp
        );
    }

    // VERIFY OTP
    public boolean verifyOtp(
            String email,
            String otp
    ) {

        Otp savedOtp =
                otpRepository.findByEmail(email);

        // OTP NOT FOUND
        if(savedOtp == null){

            return false;
        }

        // OTP EXPIRED
        if(savedOtp.getExpiryTime()
                .isBefore(LocalDateTime.now())) {

            otpRepository.delete(savedOtp);

            return false;
        }

        // WRONG OTP
        if(!savedOtp.getOtp().equals(otp)){

            return false;
        }

        // SUCCESS → DELETE OTP
        otpRepository.delete(savedOtp);

        return true;
    }
}