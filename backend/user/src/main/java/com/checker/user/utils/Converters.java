package com.checker.user.utils;

import com.checker.user.dto.UserDto;
import com.checker.user.entity.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class Converters {
    @Autowired
    public ModelMapper modelMapper;

    public UserDto entityToDto(User user) {
        return modelMapper.map(user, UserDto.class);

    }

    public User dtoToEntity(UserDto userDto) {
        return modelMapper.map(userDto, User.class);
    }
}
