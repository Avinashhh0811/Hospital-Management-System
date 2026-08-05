package org.HMS.Service.Impl;

import org.HMS.Dto.CreateHospitalAdminDto;
import org.HMS.Entity.Hospital;
import org.HMS.Entity.Role;
import org.HMS.Entity.User;
import org.HMS.Repository.HospitalRepository;
import org.HMS.Repository.RoleRepository;
import org.HMS.Repository.UserRepository;
import org.HMS.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.HMS.Dto.HospitalAdminDto;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private HospitalRepository hospitalRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String createHospitalAdmin(CreateHospitalAdminDto dto) {

        try {

            // Email Already Exists
            if (userRepository.existsByEmail(dto.getEmail())) {
                return "Email Already Exists";
            }

            // Find Hospital
            Hospital hospital = hospitalRepository
                    .findById(dto.getHospitalId())
                    .orElseThrow(() ->
                            new RuntimeException("Hospital Not Found"));

            // Find Role
            Role role = roleRepository
                    .findByRoleName("ROLE_HOSPITAL_ADMIN")
                    .orElseThrow(() ->
                            new RuntimeException("Role Not Found"));

            // Create User
            User user = new User();

            user.setEmail(dto.getEmail());

            user.setPassword(
                    passwordEncoder.encode(dto.getPassword())
            );

            user.setRole(role);

            // Assign Hospital
            user.setHospital(hospital);

            userRepository.save(user);

            return "Hospital Admin Created Successfully";

        } catch (Exception e) {

            e.printStackTrace();

            return "Error : " + e.getMessage();
        }
    }

    @Override
    public List<HospitalAdminDto> getAllHospitalAdmins() {

        List<User> admins =
                userRepository.findByRoleRoleName(
                        "ROLE_HOSPITAL_ADMIN"
                );

        List<HospitalAdminDto> list =
                new ArrayList<>();

        for (User user : admins) {

            HospitalAdminDto dto =
                    new HospitalAdminDto();

            dto.setId(user.getId());

            dto.setEmail(user.getEmail());

            if (user.getHospital() != null) {

                dto.setHospitalName(
                        user.getHospital()
                                .getHospitalName()
                );

            }

            list.add(dto);
        }

        return list;
    }

    @Override
    public String deleteHospitalAdmin(Long id) {

        User user = userRepository
                .findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Admin Not Found"
                        ));

        userRepository.delete(user);

        return "Hospital Admin Deleted Successfully";
    }
}