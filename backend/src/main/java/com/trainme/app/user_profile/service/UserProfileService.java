package com.trainme.app.user_profile.service;

import com.trainme.app.user_profile.entity.UserProfile;
import com.trainme.app.user_profile.repository.UserProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserProfileService {
    private final UserProfileRepository userProfileRepository;

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
