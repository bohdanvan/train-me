package com.trainme.app.user.service;

import com.trainme.app.common.controller.exceptions.UserAlreadyExistsException;
import com.trainme.app.security.jwt.SignUpRequest;
import com.trainme.app.user.entity.User;
import com.trainme.app.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public Optional<User> findById(long id) {
        return userRepository.findById(id);
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User save(User user) {
        if(user.getId() == null) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
        }
        return userRepository.save(user);
    }

    public User register(SignUpRequest request) {
        if (userRepository.findByEmail(request.getUsername()).isPresent()) {
            throw new UserAlreadyExistsException();
        }
        return userRepository.save(new User(request.getUsername(), request.getPassword()));
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }
}
