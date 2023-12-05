package com.checker.user.service;

import com.checker.user.dto.AuthenticationDto;
import com.checker.user.dto.LoginDto;
import com.checker.user.dto.UserDto;
import com.checker.user.entity.User;
import com.checker.user.exception.NotFoundException;
import com.checker.user.exception.ResourceNotFound;
import com.checker.user.repository.UserRepository;
import com.checker.user.utils.Converters;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private Converters converters;

    @Mock
    private JwtGeneratorImpl jwtGenerator;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private UserServiceImpl userService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetUserByIdWhenUserExists() {
        Integer userId = 1;
        User user = new User();
        UserDto expectedUserDto = new UserDto();

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(userService.getUserById(userId)).thenReturn(expectedUserDto);

        UserDto result = userService.getUserById(userId);

        assertEquals(expectedUserDto, result);
    }

    @Test
    void testGetUserByIdWhenUserDoesNotExist() {
        Integer userId = 1;

        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        assertThrows(NotFoundException.class, () -> userService.getUserById(userId));
    }

    @Test
    void testCreateUserWhenUserDoesNotExist() {
        UserDto userDto = new UserDto();
        userDto.setEmail("test@example.com");
        userDto.setPassword("password");

        when(userRepository.findByEmail(userDto.getEmail())).thenReturn(Optional.empty());
        when(passwordEncoder.encode(userDto.getPassword())).thenReturn("encodedPassword");

        User savedUser = new User();
        savedUser.setEmail(userDto.getEmail());
        savedUser.setPassword("encodedPassword");

        when(userRepository.save(any(User.class))).thenReturn(savedUser);
        when(converters.entityToDto(savedUser)).thenReturn(userDto);

        UserDto result = userService.createUser(userDto);

        assertEquals(userDto, result);
    }

    @Test
    void testCreateUserWhenUserAlreadyExists() {
        UserDto userDto = new UserDto();
        userDto.setEmail("test@example.com");
        userDto.setPassword("password");

        when(userRepository.findByEmail(userDto.getEmail())).thenReturn(Optional.of(new User()));

        assertThrows(IllegalArgumentException.class, () -> userService.createUser(userDto));
    }

    @Test
    void testGetUserWhenUserExistsAndPasswordMatches() {
        String email = "test@example.com";
        String password = "password";

        LoginDto loginDto = new LoginDto();
        loginDto.setEmail(email);
        loginDto.setPassword(password);

        User user = new User();
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));

        UserDto expectedUserDto = new UserDto();
        expectedUserDto.setEmail(email);

        when(userRepository.findByEmail(email)).thenReturn(Optional.of(user));
        when(passwordEncoder.matches(password, user.getPassword())).thenReturn(true);
        when(converters.entityToDto(user)).thenReturn(expectedUserDto);

        UserDto result = userService.getUser(loginDto);

        assertEquals(expectedUserDto, result);
    }

    @Test
    void testGetUserWhenUserDoesNotExist() {
        String email = "test@example.com";
        String password = "password";

        LoginDto loginDto = new LoginDto();
        loginDto.setEmail(email);
        loginDto.setPassword(password);

        when(userRepository.findByEmail(email)).thenReturn(Optional.empty());

        assertThrows(ResourceNotFound.class, () -> userService.getUser(loginDto));
    }

    @Test
    void testGetUserWhenPasswordDoesNotMatch() {
        String email = "test@example.com";
        String password = "password";

        LoginDto loginDto = new LoginDto();
        loginDto.setEmail(email);
        loginDto.setPassword(password);

        User user = new User();
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode("incorrectPassword"));

        when(userRepository.findByEmail(email)).thenReturn(Optional.of(user));
        when(passwordEncoder.matches(password, user.getPassword())).thenReturn(false);

        assertThrows(ResourceNotFound.class, () -> userService.getUser(loginDto));
    }

    @Test
    void testValidateTokenValidToken() {
        String validToken = "validToken";
        when(jwtGenerator.validateToken(validToken)).thenReturn(true);

        boolean isValid = userService.validateToken(validToken);

        assertTrue(isValid);
    }
    @Test
    void testValidateTokenInvalidToken() {
        String invalidToken = "invalidToken";
        when(jwtGenerator.validateToken(invalidToken)).thenReturn(false);

        boolean isValid = userService.validateToken(invalidToken);

        assertFalse(isValid);
    }

    @Test
    void testGetUserDetailsFromTokenUserExists() {
        AuthenticationDto authenticationDto = new AuthenticationDto();
        authenticationDto.setEmail("user@example.com");
        User user = new User();
        user.setEmail(authenticationDto.getEmail());
        UserDto expectedUserDto = new UserDto();
        expectedUserDto.setEmail(authenticationDto.getEmail());

        when(userRepository.findByEmail(authenticationDto.getEmail())).thenReturn(Optional.of(user));
        when(converters.entityToDto(user)).thenReturn(expectedUserDto);

        UserDto result = userService.getUserDetailsFromToken(authenticationDto);

        assertNotNull(result);
        assertEquals(expectedUserDto.getEmail(), result.getEmail());
    }

    @Test
    void testGetUserDetailsFromTokenUserIsNull() {
        AuthenticationDto authenticationDto = new AuthenticationDto();
        authenticationDto.setEmail("user@example.com");

        when(userRepository.findByEmail(anyString())).thenReturn(Optional.empty());

        UserDto result = userService.getUserDetailsFromToken(authenticationDto);

        assertNull(result);
    }

    @Test
    void testGetUserDetailsFromTokenException() {
        AuthenticationDto authenticationDto = new AuthenticationDto();
        authenticationDto.setEmail("user@example.com");

        when(userRepository.findByEmail(anyString())).thenReturn(Optional.empty());
        doThrow(new RuntimeException("Something went wrong")).when(userRepository).save(any());

        assertThrows(ResourceNotFound.class, () -> {
            userService.getUserDetailsFromToken(authenticationDto);
        });
    }
}
