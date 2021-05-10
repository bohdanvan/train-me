package com.trainme.app.user_profile.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@RequiredArgsConstructor
@Getter
@Setter
@Builder
@Entity
public class UserProfile {
    @Id
    private Long userId;
    private String name;
    private String email;
    private String phone;
    private UserGender gender;
    private LocalDate birthDate;
}
