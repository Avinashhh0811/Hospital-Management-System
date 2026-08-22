package org.HMS.Service;

import org.HMS.Dto.Hospital.CreateHospitalAdminDto;
import org.HMS.Dto.Hospital.HospitalAdminDto;

import java.util.List;

public interface AdminService {

    String createHospitalAdmin(CreateHospitalAdminDto dto);

    List<HospitalAdminDto> getAllHospitalAdmins();

    String deleteHospitalAdmin(Long id);

}