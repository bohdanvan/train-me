package com.trainme.app.login.controller;

import com.trainme.app.user.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginRestController {

    private final UserService userService;

    public LoginRestController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public boolean login(@RequestBody Login login) {
        return userService.save(user);
    }
}
