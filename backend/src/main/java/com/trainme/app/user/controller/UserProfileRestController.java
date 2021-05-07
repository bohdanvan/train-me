package com.trainme.app.user.controller;

import com.trainme.app.user.controller.exceptions.EntityNotFoundException;
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
    public UserProfile getUserProfile(@PathVariable Long id) {
        return userProfileService.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    @PostMapping("/profile")
    public UserProfile saveUserProfile(@RequestBody UserProfile profile) {
        return userProfileService.save(profile);
    }

    @PutMapping("/profile")
    public UserProfile updateUserProfile(@RequestBody UserProfile profile) {
        return userProfileService.save(profile);
    }

    @DeleteMapping("/profile/{id}")
    public void saveUserProfile(@PathVariable Long id) {
        userProfileService.delete(id);
    }
}
