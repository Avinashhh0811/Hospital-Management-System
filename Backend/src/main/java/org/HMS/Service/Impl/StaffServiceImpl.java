package org.HMS.Service.Impl;

import org.HMS.Dto.StaffDto;
import org.HMS.Entity.Hospital;
import org.HMS.Entity.Staff;
import org.HMS.Repository.HospitalRepository;
import org.HMS.Repository.StaffRepository;
import org.HMS.Service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffServiceImpl implements StaffService {

    @Autowired
    private StaffRepository staffRepository;

    @Autowired
    private HospitalRepository hospitalRepository;

    @Override
    public String addStaff(StaffDto dto) {

        if (staffRepository.existsByEmail(dto.getEmail())) {

            throw new RuntimeException(
                    "Staff Email Already Exists"
            );

        }

        if (staffRepository.existsByPhone(dto.getPhone())) {

            throw new RuntimeException(
                    "Staff Phone Already Exists"
            );

        }

        Hospital hospital = hospitalRepository
                .findById(dto.getHospitalId())
                .orElseThrow(() ->
                        new RuntimeException("Hospital Not Found"));

        Staff staff = new Staff();

        staff.setStaffName(dto.getStaffName());
        staff.setPhone(dto.getPhone());
        staff.setEmail(dto.getEmail());
        staff.setGender(dto.getGender());
        staff.setDesignation(dto.getDesignation());
        staff.setDepartment(dto.getDepartment());
        staff.setShift(dto.getShift());
        staff.setSalary(dto.getSalary());
        staff.setJoiningDate(dto.getJoiningDate());
        staff.setActive(dto.isActive());

        staff.setHospital(hospital);

        staffRepository.save(staff);

        return "Staff Added Successfully";
    }

    @Override
    public List<Staff> getAllStaff() {

        return staffRepository.findAll();
    }

    @Override
    public List<Staff> getStaffByHospital(Long hospitalId) {

        return staffRepository
                .findByHospitalHospitalId(hospitalId);
    }

    @Override
    public String updateStaff(Long staffId,
                              StaffDto dto) {

        Staff staff = staffRepository
                .findById(staffId)
                .orElseThrow(() ->
                        new RuntimeException("Staff Not Found"));

        Hospital hospital = hospitalRepository
                .findById(dto.getHospitalId())
                .orElseThrow(() ->
                        new RuntimeException("Hospital Not Found"));

        staff.setStaffName(dto.getStaffName());
        staff.setPhone(dto.getPhone());
        staff.setEmail(dto.getEmail());
        staff.setGender(dto.getGender());
        staff.setDesignation(dto.getDesignation());
        staff.setDepartment(dto.getDepartment());
        staff.setShift(dto.getShift());
        staff.setSalary(dto.getSalary());
        staff.setJoiningDate(dto.getJoiningDate());
        staff.setActive(dto.isActive());

        staff.setHospital(hospital);

        staffRepository.save(staff);

        return "Staff Updated Successfully";
    }

    @Override
    public String deleteStaff(Long staffId) {

        Staff staff = staffRepository
                .findById(staffId)
                .orElseThrow(() ->
                        new RuntimeException("Staff Not Found"));

        staffRepository.delete(staff);

        return "Staff Deleted Successfully";
    }

    @Override
    public long staffCount(Long hospitalId) {

        return staffRepository
                .countByHospitalHospitalId(hospitalId);
    }

    @Override
    public Staff getStaffById(Long staffId) {

        return staffRepository.findById(staffId)
                .orElseThrow(() ->
                        new RuntimeException("Staff Not Found"));

    }

}