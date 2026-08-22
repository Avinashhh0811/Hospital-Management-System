package org.HMS.Dto.Hospital;

public class HospitalAdminDto {

    private Long id;
    private String email;
    private String hospitalName;

    public HospitalAdminDto() {
    }

    public HospitalAdminDto(Long id, String email, String hospitalName) {
        this.id = id;
        this.email = email;
        this.hospitalName = hospitalName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHospitalName() {
        return hospitalName;
    }

    public void setHospitalName(String hospitalName) {
        this.hospitalName = hospitalName;
    }
}