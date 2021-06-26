package com.trainme.app.user.controller;

import com.trainme.app.user.entity.User;
import com.trainme.app.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("/admin")
public class AdminUserRestController {
    private final UserService userService;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAll().stream().map(u -> u.setPassword("***")).collect(Collectors.toList());
    }
}
