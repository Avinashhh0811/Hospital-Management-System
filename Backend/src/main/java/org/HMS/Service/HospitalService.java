package org.HMS.Service;

import org.HMS.Dto.Hospital.AddHospitalResponseDto;
import org.HMS.Dto.Hospital.HospitalDto;

import java.util.List;

public interface HospitalService {

    AddHospitalResponseDto addHospital(HospitalDto dto);
    List<HospitalDto> getAllHospitals();
    String deleteHospital(Long hospitalId);
    String updateHospital(Long hospitalId, HospitalDto dto);
    HospitalDto getHospitalById(Long hospitalId);

    List<HospitalDto> searchHospital(String keyword);

    List<HospitalDto> getHospitalByCity(String city);

    List<HospitalDto> getHospitalByType(String type);

    List<HospitalDto> getHospitalByState(String state);

    List<HospitalDto> getHospitalByStateAndCity(
            String state,
            String city
    );
}