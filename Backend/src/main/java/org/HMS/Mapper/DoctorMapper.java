package org.HMS.Mapper;

import org.HMS.Dto.DoctorDto;
import org.HMS.Entity.Doctor;

public class DoctorMapper {

    public static DoctorDto toDto(Doctor doctor){

        DoctorDto dto = new DoctorDto();

        dto.setDoctorName(doctor.getDoctorName());
        dto.setSpecialization(doctor.getSpecialization());
        dto.setExperience(doctor.getExperience());
        dto.setFees(doctor.getFees());
        dto.setHospitalId(doctor.getHospital().getHospitalId());
        dto.setQualification(doctor.getQualification());
        dto.setPhone(doctor.getPhone());
        dto.setEmail(doctor.getEmail());
        dto.setGender(doctor.getGender());
        dto.setOpdTiming(doctor.getOpdTiming());
        dto.setStatus(doctor.getStatus());

        return dto;
    }

}