package org.HMS.Service;

import org.HMS.Dto.LoginRequestDto;
import org.HMS.Dto.RegisterRequestDto;
import org.HMS.Entity.Role;
import org.HMS.Entity.User;
import org.HMS.Repository.RoleRepository;
import org.HMS.Repository.UserRepository;
import org.HMS.Util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public String register(RegisterRequestDto dto) {

        // Check email already exists
        if(userRepository.findByEmail(dto.getEmail()).isPresent()) {
            return "Email already exists";
        }

        // Find role
        Role role = roleRepository
                .findByRoleName(dto.getRole())
                .orElseThrow(() ->
                        new RuntimeException("Role not found"));

        // Create user
        User user = new User();

        user.setFullName(dto.getFullName());
        user.setEmail(dto.getEmail());
        user.setPhone(dto.getPhone());

        // Encode password
        user.setPassword(
                passwordEncoder.encode(dto.getPassword())
        );

        user.setRole(role);

        userRepository.save(user);

        return "User Registered Successfully";
    }

    @Override
    public String login(LoginRequestDto dto) {

        User user = userRepository
                .findByEmail(dto.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("Invalid Email"));

        // Password match
        if(!passwordEncoder.matches(
                dto.getPassword(),
                user.getPassword())) {

            return "Invalid Password";
        }

        // Generate JWT Token
        return JwtUtil.generateToken(user.getEmail());
    }
}