package org.HMS.Service;

import org.HMS.Dto.CreateHospitalAdminDto;
import org.HMS.Dto.HospitalAdminDto;

import java.util.List;

public interface AdminService {

    String createHospitalAdmin(CreateHospitalAdminDto dto);

    List<HospitalAdminDto> getAllHospitalAdmins();

    String deleteHospitalAdmin(Long id);

}