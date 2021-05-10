package com.trainme.app.user_profile.controller;

import com.trainme.app.common.controller.exceptions.EntityNotFoundException;
import com.trainme.app.user_profile.entity.UserProfile;
import com.trainme.app.user_profile.service.UserProfileService;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserProfileRestController {

    private final UserProfileService userProfileService;

    public UserProfileRestController(UserProfileService userProfileService) {
        this.userProfileService = userProfileService;
    }

    @GetMapping("/profile/{id}")
    public UserProfile getUserProfile(@PathVariable long id) {
        return userProfileService.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    @PostMapping("/profile")
    public UserProfile saveUserProfile(@RequestBody UserProfile profile) {
        return userProfileService.save(profile);
    }

    @DeleteMapping("/profile/{id}")
    public void saveUserProfile(@PathVariable long id) {
        userProfileService.delete(id);
    }
}
