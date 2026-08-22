package org.HMS.Dto.Hospital;

public class AddHospitalResponseDto {

    private Long hospitalId;
    private String hospitalName;
    private String message;

    public AddHospitalResponseDto() {
    }

    public AddHospitalResponseDto(Long hospitalId,
                                  String hospitalName,
                                  String message) {
        this.hospitalId = hospitalId;
        this.hospitalName = hospitalName;
        this.message = message;
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

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}