package org.HMS.Service;

import org.HMS.Dto.AddHospitalResponseDto;
import org.HMS.Dto.HospitalDto;
import org.HMS.Entity.Hospital;
import org.HMS.Repository.HospitalRepository;
import org.HMS.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class HospitalServiceImpl implements HospitalService {

    @Autowired
    private HospitalRepository hospitalRepository;

    @Autowired
    private UserRepository userRepository;


    @Override
    public AddHospitalResponseDto addHospital(HospitalDto dto) {

        try {

            Hospital hospital = new Hospital();

            hospital.setHospitalName(dto.getHospitalName());
            hospital.setAddress(dto.getAddress());
            hospital.setCity(dto.getCity());
            hospital.setContactNumber(dto.getContactNumber());

            hospital.setRegistrationNumber(dto.getRegistrationNumber());

            hospital.setHospitalType(dto.getHospitalType());

            hospital.setState(dto.getState());

            hospital.setPincode(dto.getPincode());

            hospital.setEmail(dto.getEmail());

            hospital.setWebsite(dto.getWebsite());

            Hospital savedHospital =
                    hospitalRepository.save(hospital);

            return new AddHospitalResponseDto(

                    savedHospital.getHospitalId(),

                    savedHospital.getHospitalName(),

                    "Hospital Added Successfully"

            );

        } catch (Exception e) {

            e.printStackTrace();

            return new AddHospitalResponseDto(

                    null,

                    null,

                    "Error : " + e.getMessage()

            );
        }
    }

    @Override
    public String updateHospital(
            Long hospitalId,
            HospitalDto dto
    ) {

        Hospital hospital =
                hospitalRepository
                        .findById(hospitalId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Hospital Not Found"
                                )
                        );

        hospital.setHospitalName(
                dto.getHospitalName()
        );

        hospital.setAddress(
                dto.getAddress()
        );

        hospital.setCity(
                dto.getCity()
        );

        hospital.setContactNumber(
                dto.getContactNumber()
        );

        hospital.setRegistrationNumber(
                dto.getRegistrationNumber()
        );

        hospital.setHospitalType(
                dto.getHospitalType()
        );

        hospital.setState(
                dto.getState()
        );

        hospital.setPincode(
                dto.getPincode()
        );

        hospital.setEmail(
                dto.getEmail()
        );

        hospital.setWebsite(
                dto.getWebsite()
        );

        hospitalRepository.save(
                hospital
        );

        return "Hospital Updated Successfully";
    }

    @Override
    public List<HospitalDto> getAllHospitals() {

        List<Hospital> hospitals =
                hospitalRepository.findAll();

        List<HospitalDto> list =
                new ArrayList<>();

        for(Hospital hospital : hospitals){

            HospitalDto dto =
                    new HospitalDto();

            dto.setHospitalId(
                    hospital.getHospitalId()
            );

            dto.setHospitalName(
                    hospital.getHospitalName()
            );

            dto.setCity(
                    hospital.getCity()
            );

            dto.setContactNumber(
                    hospital.getContactNumber()
            );

            dto.setAddress(
                    hospital.getAddress()
            );

            dto.setAdminCreated(

                    userRepository.existsByHospital(
                            hospital
                    )

            );

            list.add(dto);

        }

        return list;

    }

    @Override
    public String deleteHospital(Long hospitalId) {

        Hospital hospital = hospitalRepository
                .findById(hospitalId)
                .orElseThrow(() ->
                        new RuntimeException("Hospital Not Found"));


        if (userRepository.existsByHospital(hospital)) {

            return "Cannot Delete Hospital. Hospital Admin Exists.";

        }

        hospitalRepository.delete(hospital);

        return "Hospital Deleted Successfully";
    }

    @Override
    public HospitalDto getHospitalById(Long hospitalId) {

        Hospital hospital = hospitalRepository
                .findById(hospitalId)
                .orElseThrow(() ->
                        new RuntimeException("Hospital Not Found"));

        HospitalDto dto = new HospitalDto();

        dto.setHospitalId(hospital.getHospitalId());
        dto.setHospitalName(hospital.getHospitalName());
        dto.setAddress(hospital.getAddress());
        dto.setCity(hospital.getCity());
        dto.setContactNumber(hospital.getContactNumber());
        dto.setRegistrationNumber(hospital.getRegistrationNumber());
        dto.setHospitalType(hospital.getHospitalType());
        dto.setState(hospital.getState());
        dto.setPincode(hospital.getPincode());
        dto.setEmail(hospital.getEmail());
        dto.setWebsite(hospital.getWebsite());

        return dto;
    }
}