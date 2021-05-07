package com.dmytrochernykh.trainme.user.repository;

import com.dmytrochernykh.trainme.user.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
