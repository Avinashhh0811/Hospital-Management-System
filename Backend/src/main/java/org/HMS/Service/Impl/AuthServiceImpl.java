package org.HMS.Service.Impl;

import org.HMS.Dto.Auth.AuthResponse;
import org.HMS.Dto.Auth.LoginRequestDto;
import org.HMS.Dto.Auth.OtpRequest;
import org.HMS.Dto.Auth.VerifyOtpRequest;
import org.HMS.Entity.Patient;
import org.HMS.Entity.Role;
import org.HMS.Entity.User;
import org.HMS.Repository.PatientRepository;
import org.HMS.Repository.RoleRepository;
import org.HMS.Repository.UserRepository;
import org.HMS.Security.JwtService;
import org.HMS.Service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private OtpService otpService;

    @Override
    public String register(VerifyOtpRequest request) {

        boolean isValidOtp = otpService.verifyOtp(
                request.getEmail(),
                request.getOtp()
        );

        if (!isValidOtp) {
            throw new RuntimeException("Invalid OTP");
        }

        Role role = roleRepository
                .findByRoleName(request.getRole())
                .orElseThrow(() ->
                        new RuntimeException("Role Not Found"));

        User user = new User();

        user.setEmail(request.getEmail());
        user.setPassword(
                passwordEncoder.encode(request.getPassword())
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

        return "Registration Successful";
    }

    @Override
    public AuthResponse login(LoginRequestDto request) {

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("Invalid Email"));

        boolean match = passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        );

        if (!match) {
            throw new RuntimeException("Invalid Password");
        }

        String token = jwtService.generateToken(user.getEmail());

        Long hospitalId = null;
        String hospitalName = null;

        if (user.getHospital() != null) {

            hospitalId = user.getHospital().getHospitalId();
            hospitalName = user.getHospital().getHospitalName();
        }

        return new AuthResponse(
                token,
                user.getEmail(),
                user.getRole().getRoleName(),
                hospitalId,
                hospitalName
        );
    }

    @Override
    public String sendOtp(OtpRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email Already Exists");
        }

        otpService.sendOtp(request.getEmail());

        return "OTP Sent Successfully";
    }
}