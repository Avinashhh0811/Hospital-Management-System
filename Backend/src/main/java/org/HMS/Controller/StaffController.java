package org.HMS.Controller;

import org.HMS.Dto.StaffDto;
import org.HMS.Entity.Staff;
import org.HMS.Service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/staff")
@CrossOrigin("*")
public class StaffController {

    @Autowired
    private StaffService staffService;

    @PostMapping("/add")
    public String addStaff(
            @RequestBody StaffDto dto
    ) {

        return staffService.addStaff(dto);

    }

    @GetMapping("/all")
    public List<Staff> getAllStaff() {

        return staffService.getAllStaff();

    }

    @GetMapping("/hospital/{hospitalId}")
    public List<Staff> getHospitalStaff(
            @PathVariable Long hospitalId
    ) {

        return staffService
                .getStaffByHospital(hospitalId);

    }

    @PutMapping("/update/{staffId}")
    public String updateStaff(
            @PathVariable Long staffId,
            @RequestBody StaffDto dto
    ) {

        return staffService
                .updateStaff(staffId, dto);

    }

    @DeleteMapping("/delete/{staffId}")
    public String deleteStaff(
            @PathVariable Long staffId
    ) {

        return staffService
                .deleteStaff(staffId);

    }

    @GetMapping("/count/{hospitalId}")
    public long staffCount(
            @PathVariable Long hospitalId
    ) {

        return staffService
                .staffCount(hospitalId);

    }

}