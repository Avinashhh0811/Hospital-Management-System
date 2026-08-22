package org.HMS.Service;

import org.HMS.Dto.Staff.StaffDto;
import org.HMS.Entity.Staff;

import java.util.List;

public interface StaffService {

    String addStaff(StaffDto dto);

    List<Staff> getAllStaff();

    Staff getStaffById(Long staffId);


    List<Staff> getStaffByHospital(Long hospitalId);

    String updateStaff(Long staffId, StaffDto dto);

    String deleteStaff(Long staffId);

    long staffCount(Long hospitalId);

}