package com.trainme.app.user.service;

import com.trainme.app.user.entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class UserServiceTest {
    @Autowired
    UserService userService;

//    @Test
//    public void existShouldReturnFalse() {
//        assertThat(userService.exists(new User())).isTrue();
//    }
}
