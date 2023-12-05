package com.checker.user.service;

import com.checker.user.dto.UserDto;

import java.util.Map;

public interface JwtGenerator {
    Map<String,String> generateToken(UserDto userDto);
}
