package com.checker.user.controller;

import com.checker.user.dto.AuthenticationDto;
import com.checker.user.dto.LoginDto;
import com.checker.user.dto.UserDto;
import com.checker.user.dto.UserResponseDto;
import com.checker.user.exception.ResourceNotFound;
import com.checker.user.service.JwtGenerator;
import com.checker.user.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.*;

class AuthControllerTest {

    @Mock
    private UserService userService;

    @Mock
    private JwtGenerator jwtGenerator;

    @InjectMocks
    private AuthController authController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testRegister() {
        UserDto userDto = new UserDto();
        when(userService.createUser(userDto)).thenReturn(userDto);

        Map<String, String> token = new HashMap<>();
        when(jwtGenerator.generateToken(userDto)).thenReturn(token);

        ResponseEntity<UserResponseDto> response = authController.register(userDto);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(userDto, response.getBody().getUser());
        assertEquals(token, response.getBody().getToken());
    }

    @Test
    void testRegisterWithIllegalArgumentException() {
        UserDto userDto = new UserDto();
        userDto.setEmail("test@example.com");
        userDto.setPassword("password");

        when(userService.createUser(userDto)).thenThrow(IllegalArgumentException.class);

        ResponseEntity<UserResponseDto> response = authController.register(userDto);

        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
        assertNull(response.getBody());
        verify(jwtGenerator, never()).generateToken(any(UserDto.class));
    }

    @Test
    void testLogin() {
        LoginDto loginDto = new LoginDto();
        UserDto userDto = new UserDto();
        when(userService.getUser(loginDto)).thenReturn(userDto);

        Map<String, String> token = new HashMap<>();
        when(jwtGenerator.generateToken(userDto)).thenReturn(token);

        ResponseEntity<?> response = authController.login(loginDto);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(userDto, ((UserResponseDto) response.getBody()).getUser());
        assertEquals(token, ((UserResponseDto) response.getBody()).getToken());
    }

    @Test
    void testLoginWithIllegalArgumentException() {
        LoginDto loginDto = new LoginDto();
        loginDto.setEmail("test@example.com");
        loginDto.setPassword("password");

        when(userService.getUser(loginDto)).thenThrow(IllegalArgumentException.class);

        ResponseEntity<?> response = authController.login(loginDto);

        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
        assertNull(response.getBody());
        verify(jwtGenerator, never()).generateToken(any(UserDto.class));
    }

    @Test
    void testLoginWithResourceNotFound() {
        LoginDto loginDto = new LoginDto();
        loginDto.setEmail("test@example.com");
        loginDto.setPassword("password");

        when(userService.getUser(loginDto)).thenThrow(ResourceNotFound.class);

        ResponseEntity<UserResponseDto> response = authController.login(loginDto);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals(null, response.getBody());
        verify(jwtGenerator, never()).generateToken(any(UserDto.class));
    }

    @Test
    void testValidateTokenValid() {
        String token = "validToken";
        when(userService.validateToken(token)).thenReturn(true);

        ResponseEntity<String> response = authController.validateToken(token);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Valid Request", response.getBody());
    }

    @Test
    void testValidateTokenInvalid() {
        String token = "invalidToken";
        when(userService.validateToken(token)).thenReturn(false);

        ResponseEntity<String> response = authController.validateToken(token);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("Invalid Request", response.getBody());
    }

    @Test
    void testAuth0Register() {
        AuthenticationDto authenticationDto = new AuthenticationDto();
        UserDto userDto = new UserDto();
        when(userService.getUserDetailsFromToken(authenticationDto)).thenReturn(userDto);

        Map<String, String> token = new HashMap<>();
        when(jwtGenerator.generateToken(userDto)).thenReturn(token);

        ResponseEntity<UserResponseDto> response = authController.auth0Register(authenticationDto);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(userDto, response.getBody().getUser());
        assertEquals(token, response.getBody().getToken());
    }
}
