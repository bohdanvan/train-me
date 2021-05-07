package com.dmytrochernykh.trainme.user.service;

import com.dmytrochernykh.trainme.user.entity.User;
import com.dmytrochernykh.trainme.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<User> findById(long id) {
        Optional<User> user = userRepository.findById(id);
        return user;
    }

    public User save(User user) {
        return userRepository.save(user);
    }
}
