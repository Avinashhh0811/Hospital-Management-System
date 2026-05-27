package org.HMS.Service;

import org.HMS.Dto.LoginRequestDto;
import org.HMS.Dto.RegisterRequestDto;

public interface AuthService {

    String register(RegisterRequestDto dto);

    String login(LoginRequestDto dto);
}