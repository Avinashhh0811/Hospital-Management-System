package org.HMS.Service;

import org.HMS.Dto.HospitalDto;
import org.HMS.Entity.Hospital;
import org.HMS.Repository.HospitalRepository;
import org.HMS.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HospitalServiceImpl implements HospitalService {

    @Autowired
    private HospitalRepository hospitalRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public String addHospital(HospitalDto dto) {

        try {

            Hospital hospital = new Hospital();

            hospital.setHospitalName(dto.getHospitalName());
            hospital.setAddress(dto.getAddress());
            hospital.setCity(dto.getCity());
            hospital.setContactNumber(dto.getContactNumber());

            hospitalRepository.save(hospital);

            return "Hospital Added Successfully";

        } catch (Exception e) {

            e.printStackTrace();

            return "Error : " + e.getMessage();
        }
    }

    @Override
    public List<Hospital> getAllHospitals() {
        return hospitalRepository.findAll();
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
}