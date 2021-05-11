package com.trainme.app.user.controller;

import com.trainme.app.common.controller.exceptions.EntityNotFoundException;
import com.trainme.app.user.entity.User;
import com.trainme.app.user.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserRestController {

    private final UserService userService;

    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user/{id}")
    public User getUser(@PathVariable long id) {
        return userService.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    @PostMapping("/user")
    public User saveUser(@RequestBody User user) {
        return userService.save(user);
    }
}
