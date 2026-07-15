package com.contact_project.Smart.Contact.Manager.controller;

import com.contact_project.Smart.Contact.Manager.dto.JwtResponse;
import com.contact_project.Smart.Contact.Manager.dto.LoginDto;
import com.contact_project.Smart.Contact.Manager.jwt.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private  JwtService jwtService;

    @PostMapping("/login")
    public JwtResponse login(@RequestBody LoginDto dto){

        authenticationManager.authenticate(

                new UsernamePasswordAuthenticationToken(

                        dto.getEmail(),

                        dto.getPassword()

                )

        );

        String token = jwtService.generateToken(dto.getEmail());

        return new JwtResponse(token);

    }

}