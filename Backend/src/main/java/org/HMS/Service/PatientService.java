package org.HMS.Service;

import org.HMS.Dto.PatientDto;
import org.HMS.Entity.Patient;

import java.util.List;

public interface PatientService {

    String addPatient(PatientDto dto);

    List<Patient> getAllPatients();
}