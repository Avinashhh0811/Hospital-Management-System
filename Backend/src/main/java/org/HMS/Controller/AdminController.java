package org.HMS.Controller;

import org.HMS.Dto.Hospital.CreateHospitalAdminDto;
import org.HMS.Dto.Hospital.HospitalAdminDto;
import org.HMS.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private AdminService adminService;

    // Create Hospital Admin
    @PostMapping("/create-hospital-admin")
    public String createHospitalAdmin(
            @RequestBody CreateHospitalAdminDto dto) {

        return adminService.createHospitalAdmin(dto);
    }
    @GetMapping("/all-hospital-admins")
    public List<HospitalAdminDto> getAllHospitalAdmins() {

        return adminService
                .getAllHospitalAdmins();
    }

    @DeleteMapping("/delete-hospital-admin/{id}")
    public String deleteHospitalAdmin(
            @PathVariable Long id) {

        return adminService
                .deleteHospitalAdmin(id);
    }
}