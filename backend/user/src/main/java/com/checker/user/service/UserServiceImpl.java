package com.checker.user.service;

import com.checker.user.dto.AuthenticationDto;
import com.checker.user.dto.LoginDto;
import com.checker.user.dto.UserDto;
import com.checker.user.entity.User;
import com.checker.user.exception.NotFoundException;
import com.checker.user.exception.ResourceNotFound;
import com.checker.user.repository.UserRepository;
import com.checker.user.utils.Converters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class UserServiceImpl implements UserService {

    private final PasswordEncoder passwordEncoder;

    private final UserRepository userRepository;
    private final Converters converters;
    private final JwtGeneratorImpl jwtGenerator;

    @Autowired
    public UserServiceImpl(
            UserRepository userRepository,
            Converters converters,
            PasswordEncoder passwordEncoder,
            JwtGeneratorImpl jwtGenerator) {
        this.userRepository = userRepository;
        this.converters = converters;
        this.jwtGenerator = jwtGenerator;
        this.passwordEncoder = passwordEncoder;

    }


    @Override
    public UserDto getUserById(Integer id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return converters.entityToDto(user.get());
        } else {
            throw new NotFoundException("User Not Found");
        }
    }

    @Override
    public UserDto createUser(UserDto userDto) {
        Optional<User> userOptional=userRepository.findByEmail(userDto.getEmail());
        if(userOptional.isPresent())
            throw new IllegalArgumentException("User already exists !");
        else {
            User user= new User();
            user.setEmail(userDto.getEmail());
            user.setPassword(passwordEncoder.encode(userDto.getPassword()));
            User savedUser= userRepository.save(user);

            return converters.entityToDto(savedUser);

        }
    }

    @Override
    public UserDto getUser(LoginDto loginDto) {
        try {
            Optional<User> userOptional = userRepository.findByEmail(loginDto.getEmail());

            if (userOptional.isPresent()) {
                User user = userOptional.get();

                if (passwordEncoder.matches(loginDto.getPassword(), user.getPassword()))
                    return this.converters.entityToDto(user);

                throw new ResourceNotFound("You have entered invalid password !");
            }
            throw new ResourceNotFound("User Not Found !");

        } catch (Exception e) {
            throw new ResourceNotFound("User Not Found " + e.getMessage());
        }
    }

    public boolean validateToken(String token) {
        return jwtGenerator.validateToken(token);
    }

    @Override
    public UserDto getUserDetailsFromToken(AuthenticationDto authenticationDto) {
        try {
            User user= new User();
            user.setEmail(authenticationDto.getEmail());


            User isUser=userRepository.findByEmail(user.getEmail()).orElse(null);
            if(isUser!=null)
                return this.converters.entityToDto(isUser);

            userRepository.save(user);

            return this.converters.entityToDto(user);


        }catch (Exception e){
            throw new ResourceNotFound(e.getMessage());
        }
    }

}
