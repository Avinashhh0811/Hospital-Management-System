package org.HMS.Dto.Auth;


public class AuthResponse {

    private String token;

    private String email;

    private String role;

    private Long hospitalId;

    private String hospitalName;


    public AuthResponse() {
    }

    public AuthResponse(
            String token,
            String email,
            String role,
            Long hospitalId,
            String hospitalName
    ) {
        this.token = token;
        this.email = email;
        this.role = role;
        this.hospitalId = hospitalId;
        this.hospitalName = hospitalName;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Long getHospitalId() {
        return hospitalId;
    }

    public void setHospitalId(Long hospitalId) {
        this.hospitalId = hospitalId;
    }

    public String getHospitalName() {
        return hospitalName;
    }

    public void setHospitalName(String hospitalName) {
        this.hospitalName = hospitalName;
    }
}