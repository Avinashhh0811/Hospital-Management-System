package org.HMS.Service;

import org.HMS.Dto.Auth.AuthResponse;
import org.HMS.Dto.Auth.LoginRequestDto;
import org.HMS.Dto.Auth.OtpRequest;
import org.HMS.Dto.Auth.VerifyOtpRequest;

public interface AuthService {

    String register(VerifyOtpRequest request);

    AuthResponse login(LoginRequestDto request);

    String sendOtp(OtpRequest request);

}