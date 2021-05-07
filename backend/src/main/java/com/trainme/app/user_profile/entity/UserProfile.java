package com.trainme.app.user_profile.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@RequiredArgsConstructor
@Getter
@Setter
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

    public UserProfile(Long userId, String name, String email, String phone, UserGender gender, int age) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.age = age;
    }
}
