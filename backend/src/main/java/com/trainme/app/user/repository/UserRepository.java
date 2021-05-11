package com.trainme.app.user.repository;

import com.trainme.app.user.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
