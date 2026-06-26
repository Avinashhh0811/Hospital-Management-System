package org.HMS.Service;

import org.HMS.Dto.AddHospitalResponseDto;
import org.HMS.Dto.HospitalDto;
import org.HMS.Entity.Hospital;

import java.util.List;

public interface HospitalService {

    AddHospitalResponseDto addHospital(HospitalDto dto);

    List<HospitalDto> getAllHospitals();

    String deleteHospital(Long hospitalId);
    String updateHospital(
            Long hospitalId, HospitalDto dto
    );
    HospitalDto getHospitalById(Long hospitalId);
}