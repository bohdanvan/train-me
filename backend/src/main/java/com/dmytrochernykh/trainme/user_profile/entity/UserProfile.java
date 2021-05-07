package com.dmytrochernykh.trainme.user_profile.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class UserProfile {
    @Id
    @GeneratedValue
    private Long userId;
    private String name;
    private String email;
    private String phone;
    private UserGender gender;
    private int age;

    public UserProfile() {

    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public UserGender getGender() {
        return gender;
    }

    public Long getUserId() {
        return userId;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }
}
