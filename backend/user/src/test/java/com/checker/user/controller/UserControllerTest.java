package com.checker.user.controller;
import com.checker.user.dto.UserDto;
import com.checker.user.service.JwtGenerator;
import com.checker.user.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class UserControllerTest {

    @Mock
    private UserService userService;

    @Mock
    private JwtGenerator jwtGenerator;

    @InjectMocks
    private UserController userController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testFetchUserByIdWhenUserExists() {
        Integer userId = 1;
        UserDto expectedUserDto = new UserDto();
        expectedUserDto.setId(userId);

        when(userService.getUserById(userId)).thenReturn(expectedUserDto);

        UserDto response = userController.fetchUserById(userId);

        assertEquals(expectedUserDto, response);
    }

    @Test
    void testFetchUserByIdWhenUserDoesNotExist() {
        Integer userId = 1;

        when(userService.getUserById(userId)).thenReturn(null);

        UserDto response = userController.fetchUserById(userId);

        assertEquals(null, response);
    }
}
