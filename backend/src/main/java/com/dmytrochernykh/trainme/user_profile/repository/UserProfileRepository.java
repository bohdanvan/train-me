package com.dmytrochernykh.trainme.user_profile.repository;

import com.dmytrochernykh.trainme.user_profile.entity.UserProfile;
import org.springframework.data.repository.CrudRepository;

public interface UserProfileRepository extends CrudRepository<UserProfile, Long> {
}
