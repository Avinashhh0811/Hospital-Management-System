package org.HMS.Mapper;

import org.HMS.Dto.Hospital.HospitalDto;
import org.HMS.Entity.Hospital;

public class HospitalMapper {

    // Full Details
    public static HospitalDto toDto(Hospital hospital) {

        HospitalDto dto = new HospitalDto();

        dto.setHospitalId(hospital.getHospitalId());
        dto.setHospitalName(hospital.getHospitalName());
        dto.setRegistrationNumber(hospital.getRegistrationNumber());
        dto.setHospitalType(hospital.getHospitalType());
        dto.setAddress(hospital.getAddress());
        dto.setCity(hospital.getCity());
        dto.setState(hospital.getState());
        dto.setPincode(hospital.getPincode());
        dto.setContactNumber(hospital.getContactNumber());
        dto.setEmail(hospital.getEmail());
        dto.setWebsite(hospital.getWebsite());

        return dto;
    }

    // List View (Dashboard)
    public static HospitalDto toListDto(Hospital hospital, boolean adminCreated) {

        HospitalDto dto = new HospitalDto();

        dto.setHospitalId(hospital.getHospitalId());
        dto.setHospitalName(hospital.getHospitalName());
        dto.setHospitalType(hospital.getHospitalType());
        dto.setCity(hospital.getCity());
        dto.setState(hospital.getState());
        dto.setAddress(hospital.getAddress());
        dto.setPincode(hospital.getPincode());
        dto.setContactNumber(hospital.getContactNumber());
        dto.setEmail(hospital.getEmail());
        dto.setWebsite(hospital.getWebsite());
        dto.setAdminCreated(adminCreated);

        return dto;
    }

}