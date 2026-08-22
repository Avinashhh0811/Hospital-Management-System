package org.HMS.Controller;

import org.HMS.Dto.Auth.*;
import org.HMS.Repository.UserRepository;
import org.HMS.Service.Impl.OtpService;

import org.HMS.Service.AuthService;

import org.HMS.Service.PasswordService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private OtpService otpService;

    @Autowired
    private AuthService authService;

    @Autowired
    private PasswordService passwordService;

    @Autowired
    private UserRepository userRepository;
    // SEND REGISTER OTP
    @PostMapping("/send-otp")
    public ResponseEntity<?> sendOtp(
            @RequestBody OtpRequest request
    ) {
        try {
            if (userRepository.existsByEmail(
                    request.getEmail()
            )) {

                return ResponseEntity
                        .badRequest()
                        .body("Email Already Exists");
            }
            otpService.sendOtp(
                    request.getEmail()
            );
            return ResponseEntity.ok(
                    "OTP Sent Successfully"
            );
        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }
    //  VERIFY REGISTER
    @PostMapping("/verify-register")
    public ResponseEntity<?> verifyRegister(
            @RequestBody VerifyOtpRequest request) {
        try {
            String response = authService.register(request);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }
//  LOGIN
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(
            @RequestBody LoginRequestDto request) {
        try {
            AuthResponse response = authService.login(request);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }
    // VERIFY OTP
    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOtp(
            @RequestBody VerifyOtpRequest request
    ) {
        boolean valid =
                otpService.verifyOtp(

                        request.getEmail(),

                        request.getOtp()
                );
        if (valid) {
            return ResponseEntity.ok(
                    "OTP Verified Successfully"
            );
        }
        return ResponseEntity
                .badRequest()
                .body("Invalid OTP");
    }
    //forgot password send otp

    @PostMapping("/forgot-password/send-otp")
    public ResponseEntity<?> sendForgotPasswordOtp(
            @RequestBody EmailRequest request) {
        try {
            return ResponseEntity.ok(
                    passwordService.sendForgotPasswordOtp(request)
            );
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }
    //  RESET PASSWORD
    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(
            @RequestBody ResetPasswordRequest request) {
        try {
            return ResponseEntity.ok(
                    passwordService.resetPassword(request)
            );
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }
}