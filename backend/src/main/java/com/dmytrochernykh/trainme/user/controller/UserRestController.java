package com.dmytrochernykh.trainme.user.controller;

import com.dmytrochernykh.trainme.user.controller.exceptions.EntityNotFoundException;
import com.dmytrochernykh.trainme.user.entity.User;
import com.dmytrochernykh.trainme.user.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserRestController {

    private final UserService userService;

    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    @PostMapping("/user")
    public User saveUser(@RequestBody User user) {
        return userService.save(user);
    }
}
