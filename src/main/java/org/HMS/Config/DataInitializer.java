package org.HMS.Config;

import org.HMS.Entity.Role;
import org.HMS.Repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initRoles(RoleRepository roleRepository) {

        return args -> {

            if(roleRepository.findByRoleName("ROLE_ADMIN").isEmpty()) {

                roleRepository.save(
                        new Role("ROLE_ADMIN"));
            }

            if(roleRepository.findByRoleName("ROLE_PATIENT").isEmpty()) {

                roleRepository.save(
                        new Role("ROLE_PATIENT"));
            }

            if(roleRepository.findByRoleName("ROLE_DOCTOR").isEmpty()) {

                roleRepository.save(
                        new Role("ROLE_DOCTOR"));
            }
        };
    }
}