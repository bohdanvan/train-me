package com.trainme.app.user_profile.repository;

import com.trainme.app.user_profile.entity.UserProfile;
import org.springframework.data.repository.CrudRepository;

public interface UserProfileRepository extends CrudRepository<UserProfile, Long> {
}
