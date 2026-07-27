package org.HMS.Service;

import org.HMS.Dto.EmailRequest;
import org.HMS.Dto.ResetPasswordRequest;

public interface PasswordService {

    String sendForgotPasswordOtp(EmailRequest request);

    String resetPassword(ResetPasswordRequest request);

}