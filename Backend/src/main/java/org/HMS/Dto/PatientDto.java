package org.HMS.Dto;

public class PatientDto {

    private String fullName;

    private int age;

    private String gender;

    private String bloodGroup;

    private String address;

    private String phone;



    private Long userId;

    // CONSTRUCTOR

    public PatientDto() {
    }

    // GETTERS & SETTERS

    public String getFullName() {

        return fullName;
    }

    public void setFullName(String fullName) {

        this.fullName = fullName;
    }

    public int getAge() {

        return age;
    }

    public void setAge(int age) {

        this.age = age;
    }

    public String getGender() {

        return gender;
    }

    public void setGender(String gender) {

        this.gender = gender;
    }

    public String getBloodGroup() {

        return bloodGroup;
    }

    public void setBloodGroup(String bloodGroup) {

        this.bloodGroup = bloodGroup;
    }

    public String getAddress() {

        return address;
    }

    public void setAddress(String address) {

        this.address = address;
    }

    public String getPhone() {

        return phone;
    }

    public void setPhone(String phone) {

        this.phone = phone;
    }



    public Long getUserId() {

        return userId;
    }

    public void setUserId(Long userId) {

        this.userId = userId;
    }
}