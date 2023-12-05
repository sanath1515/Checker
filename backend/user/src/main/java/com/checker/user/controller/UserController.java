package com.checker.user.controller;


import com.checker.user.dto.UserDto;
import com.checker.user.service.JwtGenerator;
import com.checker.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService, JwtGenerator jwtGenerator) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public UserDto fetchUserById(@PathVariable Integer id) {
        return userService.getUserById(id);
    }
}

