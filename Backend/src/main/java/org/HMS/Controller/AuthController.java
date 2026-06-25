package org.HMS.Controller;

import org.HMS.Dto.*;

import org.HMS.Entity.Patient;
import org.HMS.Entity.Role;
import org.HMS.Entity.User;

import org.HMS.Repository.PatientRepository;
import org.HMS.Repository.RoleRepository;
import org.HMS.Repository.UserRepository;

import org.HMS.Security.JwtService;
import org.HMS.Service.OtpService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private OtpService otpService;

    @Autowired
    private PatientRepository patientRepository;

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
                    .body(
                            "Failed To Send OTP : "
                                    + e.getMessage()
                    );
        }
    }

    //  VERIFY REGISTER
    @PostMapping("/verify-register")

    public ResponseEntity<?> verifyRegister(

            @RequestBody VerifyOtpRequest request
    ) {

        try {

            // VERIFY OTP

            boolean isValidOtp = otpService.verifyOtp(

                    request.getEmail(),
                    request.getOtp()
            );

            if(!isValidOtp){

                return ResponseEntity
                        .badRequest()
                        .body("Invalid OTP");
            }

            // ROLE

            Role role = roleRepository
                    .findByRoleName(request.getRole())
                    .orElse(null);

            if(role == null){

                return ResponseEntity
                        .badRequest()
                        .body("Role Not Found");
            }

            // USER SAVE
            User user = new User();

            user.setEmail(
                    request.getEmail()
            );

            user.setPassword(
                    passwordEncoder.encode(
                            request.getPassword()
                    )
            );

            user.setRole(role);

            userRepository.save(user);
            if (role.getRoleName().equals("ROLE_PATIENT")) {

                Patient patient = new Patient();

                patient.setUser(user);

                patient.setFullName(request.getFullName());
                patient.setPhone(request.getPhone());
                patient.setAge(request.getAge());
                patient.setGender(request.getGender());
                patient.setBloodGroup(request.getBloodGroup());
                patient.setAddress(request.getAddress());

                patientRepository.save(patient);
            }

            return ResponseEntity.ok(
                    "Registration Successful"
            );
        }

        catch (Exception e){

            e.printStackTrace();

            return ResponseEntity
                    .badRequest()
                    .body(
                            "Registration Failed"
                    );
        }
    }
//  LOGIN

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(
            @RequestBody LoginRequestDto request
    ) {

        try {

            User user = userRepository
                    .findByEmail(
                            request.getEmail()
                    )
                    .orElseThrow(() ->

                            new RuntimeException(
                                    "Invalid Email"
                            )
                    );

            boolean match =
                    passwordEncoder.matches(

                            request.getPassword(),

                            user.getPassword()
                    );

            if (!match) {

                return ResponseEntity
                        .badRequest()
                        .body("Invalid Password");
            }

            String token =
                    jwtService.generateToken(
                            user.getEmail()
                    );

            Long hospitalId = null;

            if (user.getHospital() != null) {

                hospitalId =
                        user.getHospital()
                                .getHospitalId();
            }

            AuthResponse response =
                    new AuthResponse(

                            token,

                            user.getEmail(),

                            user.getRole()
                                    .getRoleName(),

                            hospitalId
                    );

            return ResponseEntity.ok(
                    response
            );

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

            @RequestBody EmailRequest request
    ) {

        Optional<User> user = userRepository
                .findByEmail(request.getEmail());

        if(user.isEmpty()){

            return ResponseEntity
                    .badRequest()
                    .body("Email Not Registered");
        }

        try {

            otpService.sendOtp(
                    request.getEmail()
            );

            return ResponseEntity.ok(
                    "OTP Sent Successfully"
            );

        } catch (Exception e){

            e.printStackTrace();

            return ResponseEntity
                    .badRequest()
                    .body(
                            "Failed To Send OTP : "
                                    + e.getMessage()
                    );
        }
    }

    //  RESET PASSWORD

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(
            @RequestBody ResetPasswordRequest request
    ) {

        try {

            boolean valid =
                    otpService.verifyOtp(

                            request.getEmail(),

                            request.getOtp()
                    );

            if (!valid) {

                return ResponseEntity
                        .badRequest()
                        .body("Invalid OTP");
            }

            User user = userRepository
                    .findByEmail(
                            request.getEmail()
                    )
                    .orElseThrow(() ->

                            new RuntimeException(
                                    "User Not Found"
                            )
                    );

            user.setPassword(

                    passwordEncoder.encode(
                            request.getNewPassword()
                    )
            );

            userRepository.save(user);

            return ResponseEntity.ok(
                    "Password Reset Successful"
            );

        } catch (Exception e) {

            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }
}