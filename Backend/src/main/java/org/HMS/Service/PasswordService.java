package org.HMS.Service;

import org.HMS.Dto.Auth.EmailRequest;
import org.HMS.Dto.Auth.ResetPasswordRequest;

public interface PasswordService {

    String sendForgotPasswordOtp(EmailRequest request);

    String resetPassword(ResetPasswordRequest request);

}