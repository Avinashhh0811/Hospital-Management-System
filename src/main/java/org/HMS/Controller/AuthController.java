package org.HMS.Controller;

import org.HMS.Dto.LoginRequestDto;
import org.HMS.Dto.RegisterRequestDto;
import org.HMS.Service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public String register(
            @RequestBody RegisterRequestDto dto) {

        return authService.register(dto);
    }

    @PostMapping("/login")
    public String login(
            @RequestBody LoginRequestDto dto) {

        return authService.login(dto);
    }
}