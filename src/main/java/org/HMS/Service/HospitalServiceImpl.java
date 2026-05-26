package org.HMS.Service;

import org.HMS.Dto.HospitalDto;
import org.HMS.Entity.Hospital;
import org.HMS.Repository.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HospitalServiceImpl
        implements HospitalService {

    @Autowired
    private HospitalRepository hospitalRepository;

    @Override
    public String addHospital(HospitalDto dto) {

        Hospital hospital = new Hospital();

        hospital.setHospitalName(dto.getHospitalName());
        hospital.setAddress(dto.getAddress());
        hospital.setCity(dto.getCity());
        hospital.setContactNumber(dto.getContactNumber());

        hospitalRepository.save(hospital);

        return "Hospital Added Successfully";
    }
}