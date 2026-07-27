package org.HMS.Service;

import org.HMS.Dto.EmailRequest;
import org.HMS.Dto.ResetPasswordRequest;
import org.HMS.Entity.User;
import org.HMS.Repository.UserRepository;
import org.HMS.Service.OtpService;
import org.HMS.Service.PasswordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PasswordServiceImpl implements PasswordService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OtpService otpService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String sendForgotPasswordOtp(EmailRequest request) {

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("Email Not Registered"));

        otpService.sendOtp(request.getEmail());

        return "OTP Sent Successfully";
    }

    @Override
    public String resetPassword(ResetPasswordRequest request) {

        boolean valid = otpService.verifyOtp(
                request.getEmail(),
                request.getOtp()
        );

        if (!valid) {
            throw new RuntimeException("Invalid OTP");
        }

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("User Not Found"));

        user.setPassword(
                passwordEncoder.encode(request.getNewPassword())
        );

        userRepository.save(user);

        return "Password Reset Successful";
    }
}