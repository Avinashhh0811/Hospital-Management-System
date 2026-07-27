package org.HMS.Config;

import jakarta.persistence.Entity;
import org.HMS.Entity.Role;
import org.HMS.Entity.User;
import org.HMS.Repository.RoleRepository;
import org.HMS.Repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;


@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initData(
            RoleRepository roleRepository,
            UserRepository userRepository,
            PasswordEncoder passwordEncoder) {

        return args -> {

            // ROLES

            if (roleRepository.findByRoleName("ROLE_SUPER_ADMIN").isEmpty()) {
                roleRepository.save(
                        new Role("ROLE_SUPER_ADMIN"));
            }

            if (roleRepository.findByRoleName("ROLE_HOSPITAL_ADMIN").isEmpty()) {
                roleRepository.save(
                        new Role("ROLE_HOSPITAL_ADMIN"));
            }

            if (roleRepository.findByRoleName("ROLE_PATIENT").isEmpty()) {
                roleRepository.save(
                        new Role("ROLE_PATIENT"));
            }



            // DEFAULT SUPER ADMIN

            if (!userRepository.existsByEmail("superadmin@hms.com")) {

                Role superAdminRole = roleRepository
                        .findByRoleName("ROLE_SUPER_ADMIN")
                        .orElseThrow();

                User user = new User();

                user.setEmail("superadmin@hms.com");

                user.setPassword(
                        passwordEncoder.encode("admin123")
                );

                user.setRole(superAdminRole);

                userRepository.save(user);

                System.out.println("SUPER ADMIN CREATED");
            }
        };
    }
}