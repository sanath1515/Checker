package com.checker.user.service;

import com.checker.user.dto.AuthenticationDto;
import com.checker.user.dto.LoginDto;
import com.checker.user.dto.UserDto;

public interface UserService {
    UserDto getUserById(Integer id);

    UserDto createUser(UserDto userDto);
    UserDto getUser(LoginDto loginDto);

    boolean validateToken(String token);

    UserDto  getUserDetailsFromToken(AuthenticationDto authenticationDto);
}
