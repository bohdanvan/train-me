package com.dmytrochernykh.trainme.user.controller;

import com.dmytrochernykh.trainme.user.controller.exceptions.EntityNotFoundException;
import com.dmytrochernykh.trainme.user.entity.User;
import com.dmytrochernykh.trainme.user_profile.entity.UserProfile;
import com.dmytrochernykh.trainme.user_profile.service.UserProfileService;
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
