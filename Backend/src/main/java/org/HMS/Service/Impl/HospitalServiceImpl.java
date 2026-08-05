package org.HMS.Service.Impl;

import org.HMS.Dto.AddHospitalResponseDto;
import org.HMS.Dto.HospitalDto;
import org.HMS.Entity.Hospital;
import org.HMS.Repository.HospitalRepository;
import org.HMS.Repository.UserRepository;
import org.HMS.Service.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import org.HMS.Mapper.HospitalMapper;

@Service
public class HospitalServiceImpl implements HospitalService {

    @Autowired
    private HospitalRepository hospitalRepository;

    @Autowired
    private UserRepository userRepository;


    @Override
    public AddHospitalResponseDto addHospital(HospitalDto dto) {
        if (hospitalRepository.existsByEmail(dto.getEmail())) {

            throw new RuntimeException(
                    "Hospital Email Already Exists"
            );

        }

        if (hospitalRepository.existsByContactNumber(dto.getContactNumber())) {

            throw new RuntimeException(
                    "Hospital Contact Number Already Exists"
            );

        }

        if (hospitalRepository.existsByRegistrationNumber(dto.getRegistrationNumber())) {

            throw new RuntimeException(
                    "Registration Number Already Exists"
            );

        }
        try {

            Hospital hospital = new Hospital();
            hospital.setHospitalCode(generateHospitalCode(dto.getHospitalName()));
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

        List<Hospital> hospitals = hospitalRepository.findAll();

        List<HospitalDto> list = new ArrayList<>();

        for (Hospital hospital : hospitals) {

            list.add(
                    HospitalMapper.toListDto(
                            hospital,
                            userRepository.existsByHospital(hospital)
                    )
            );

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

        return HospitalMapper.toDto(hospital);
    }

    private String generateHospitalCode(String hospitalName) {

        String[] words = hospitalName.trim().split("\\s+");

        StringBuilder code = new StringBuilder();

        for (String word : words) {

            code.append(
                    Character.toUpperCase(word.charAt(0))
            );

        }

        return code.toString();

    }

    @Override
    public List<HospitalDto> searchHospital(String keyword) {

        List<Hospital> hospitals =
                hospitalRepository.findByHospitalNameContainingIgnoreCase(keyword);

        List<HospitalDto> list = new ArrayList<>();

        for (Hospital hospital : hospitals) {

            list.add(HospitalMapper.toDto(hospital));

        }

        return list;
    }

    @Override
    public List<HospitalDto> getHospitalByCity(String city) {

        List<Hospital> hospitals =
                hospitalRepository.findByCityContainingIgnoreCase(city);

        List<HospitalDto> list = new ArrayList<>();

        for (Hospital hospital : hospitals) {

            list.add(HospitalMapper.toDto(hospital));

        }

        return list;
    }

    @Override
    public List<HospitalDto> getHospitalByType(String type) {

        List<Hospital> hospitals =
                hospitalRepository.findByHospitalTypeContainingIgnoreCase(type);

        List<HospitalDto> list = new ArrayList<>();

        for (Hospital hospital : hospitals) {

            list.add(HospitalMapper.toDto(hospital));

        }

        return list;
    }

    @Override
    public List<HospitalDto> getHospitalByState(String state) {

        List<Hospital> hospitals =
                hospitalRepository.findByStateContainingIgnoreCase(state);

        List<HospitalDto> list = new ArrayList<>();

        for (Hospital hospital : hospitals) {

            list.add(HospitalMapper.toDto(hospital));

        }

        return list;
    }

    @Override
    public List<HospitalDto> getHospitalByStateAndCity(String state, String city) {

        List<Hospital> hospitals =
                hospitalRepository
                        .findByStateContainingIgnoreCaseAndCityContainingIgnoreCase(
                                state,
                                city
                        );

        List<HospitalDto> list = new ArrayList<>();

        for (Hospital hospital : hospitals) {

            list.add(HospitalMapper.toDto(hospital));

        }

        return list;
    }
}