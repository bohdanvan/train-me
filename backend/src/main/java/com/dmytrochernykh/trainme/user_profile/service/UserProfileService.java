package com.dmytrochernykh.trainme.user_profile.service;

import com.dmytrochernykh.trainme.user_profile.entity.UserProfile;
import com.dmytrochernykh.trainme.user_profile.repository.UserProfileRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserProfileService {
    private final UserProfileRepository userProfileRepository;

    public UserProfileService(UserProfileRepository userProfileRepository) {
        this.userProfileRepository = userProfileRepository;
    }

    public Optional<UserProfile> findById(Long id) {
        return userProfileRepository.findById(id);
    }

    public UserProfile save(UserProfile profile) {
        return userProfileRepository.save(profile);
    }

    public void delete(UserProfile profile) {
        userProfileRepository.delete(profile);
    }

    public void delete(Long id) {
        userProfileRepository.deleteById(id);
    }
}
