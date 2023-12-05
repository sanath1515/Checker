package com.checker.user.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.checker.user.dto.UserDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Map;

class JwtGeneratorImplTest {

    @InjectMocks
    private JwtGeneratorImpl jwtGenerator;

    @Mock
    private JwtGeneratorImpl jwtGeneratorSpy;

    private final String mockSecret = "aldfjiqueroieqruljqerqweroiqwuroewquqrquoihfanjadffdsdfafadsfsljlkfjlsdjfasdlfja";
    private final String mockMessage = "Logged in Successfully !";

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        jwtGenerator.secret = mockSecret;
        jwtGenerator.message = mockMessage;
    }

    @Test
    void testGenerateToken() {
        UserDto userDto = new UserDto();
        userDto.setEmail("naveen@example.com");

        String expectedToken = "eeyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYXZlZW5AZ21haWwuY29tIiwiaWF0IjoxNjkwOTU1NTgyfQ.C89rhphlm9xbErVCWAglvYmBkqQ4Minz1vwELQK86is";

        when(jwtGeneratorSpy.getSignKey()).thenReturn(jwtGenerator.getSignKey());
        when(jwtGeneratorSpy.generateToken(any(UserDto.class))).thenCallRealMethod();

        Map<String, String> result = jwtGenerator.generateToken(userDto);

        assertEquals(mockMessage, result.get("message"));
    }

    @Test
    void testValidateToken_ValidToken() {
        UserDto userDto = new UserDto();
        userDto.setEmail("test@example.com");

        Map<String, String> jwtTokenGen = jwtGenerator.generateToken(userDto);
        String token = jwtTokenGen.get("token");

        boolean result = jwtGenerator.validateToken(token);

        assertTrue(result);
    }

    @Test
    void testValidateToken_Exception() {
        String token = "invalid_token";

        when(jwtGeneratorSpy.getSignKey()).thenReturn(jwtGenerator.getSignKey());
        when(jwtGeneratorSpy.validateToken(anyString())).thenCallRealMethod();

        boolean result = jwtGenerator.validateToken(token);

        assertFalse(result);
    }
}