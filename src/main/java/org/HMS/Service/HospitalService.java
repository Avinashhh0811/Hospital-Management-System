package org.HMS.Service;

import org.HMS.Dto.HospitalDto;
import org.HMS.Entity.Hospital;

import java.util.List;

public interface HospitalService {

    String addHospital(HospitalDto dto);

    List<Hospital> getAllHospitals();

    String deleteHospital(Long hospitalId);
}