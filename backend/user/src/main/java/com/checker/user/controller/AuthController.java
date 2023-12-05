package com.checker.user.controller;


import com.checker.user.dto.AuthenticationDto;
import com.checker.user.dto.LoginDto;
import com.checker.user.dto.UserDto;
import com.checker.user.dto.UserResponseDto;
import com.checker.user.exception.ResourceNotFound;
import com.checker.user.service.JwtGenerator;
import com.checker.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping(("/users/auth"))
@RequiredArgsConstructor
@CrossOrigin
public class AuthController {
    @Autowired
    private UserService userService;
    @Autowired
    private JwtGenerator jwtGenerator;

    @PostMapping("/signup")
    public ResponseEntity<UserResponseDto> register(@RequestBody UserDto userDto){
        try {
            UserDto createdUser= userService.createUser(userDto);
            Map<String, String> token= jwtGenerator.generateToken(createdUser);
            UserResponseDto responseDto = new UserResponseDto();
            responseDto.setUser(createdUser);
            responseDto.setToken(token);
            return new ResponseEntity<>(responseDto, HttpStatus.CREATED);
        }catch (IllegalArgumentException e){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<UserResponseDto> login(@RequestBody LoginDto loginDto){
        try {
            UserDto userDto= userService.getUser(loginDto);
            Map<String,String> token= jwtGenerator.generateToken(userDto);
            UserResponseDto responseDto= new UserResponseDto();
            responseDto.setUser(userDto);
            responseDto.setToken(token);

            return new ResponseEntity<>(responseDto, HttpStatus.OK);

        }catch (IllegalArgumentException e){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }catch (ResourceNotFound e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/validate")
    public ResponseEntity<String> validateToken(@RequestParam("token") String token) {
        boolean isValid=userService.validateToken(token);
        if (isValid){
            return new ResponseEntity<>("Valid Request",HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("Invalid Request",HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<UserResponseDto> auth0Register(@RequestBody AuthenticationDto authenticationDto){

        UserDto user= userService.getUserDetailsFromToken(authenticationDto);
        Map<String, String> token= jwtGenerator.generateToken(user);
        UserResponseDto responseDto = new UserResponseDto();
        responseDto.setUser(user);
        responseDto.setToken(token);
        return new  ResponseEntity<>(responseDto,HttpStatus.CREATED);
    }
}
