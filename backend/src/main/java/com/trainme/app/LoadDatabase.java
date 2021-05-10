package com.trainme.app;

import com.trainme.app.user.entity.User;
import com.trainme.app.user.repository.UserRepository;
import com.trainme.app.user_profile.entity.UserGender;
import com.trainme.app.user_profile.entity.UserProfile;
import com.trainme.app.user_profile.repository.UserProfileRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;

@Configuration
public class LoadDatabase {
    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository, UserProfileRepository userProfileRepository) {
        return args -> {
            User user = userRepository.save(new User("bilbo@baggins", "burglar"));
            UserProfile profile = userProfileRepository.save(UserProfile.builder()
                    .userId(user.getId())
                    .name("Bilbo Baggins")
                    .email(user.getEmail())
                    .phone("044")
                    .gender(UserGender.MALE)
                    .birthDate(LocalDate.now().minusYears(125))
                    .build());
            log.info("Preloading user: {}, profile: {}", user, profile);
            user = userRepository.save(new User("frodo@baggins", "thief"));
            profile = userProfileRepository.save(
                    UserProfile.builder()
                            .userId(user.getId())
                            .name("Frodo Baggins")
                            .email(user.getEmail())
                            .phone("045")
                            .gender(UserGender.MALE)
                            .birthDate(LocalDate.now().minusYears(455))
                            .build()
            );
            log.info("Preloading user: {}, profile: {}", user, profile);
        };
    }
}
