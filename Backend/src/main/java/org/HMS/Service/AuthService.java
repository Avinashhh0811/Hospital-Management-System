package org.HMS.Service;

import org.HMS.Dto.AuthResponse;
import org.HMS.Dto.LoginRequestDto;
import org.HMS.Dto.OtpRequest;
import org.HMS.Dto.VerifyOtpRequest;

public interface AuthService {

    String register(VerifyOtpRequest request);

    AuthResponse login(LoginRequestDto request);

    String sendOtp(OtpRequest request);

}