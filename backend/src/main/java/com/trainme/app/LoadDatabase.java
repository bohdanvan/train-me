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

@Configuration
public class LoadDatabase {
    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository, UserProfileRepository userProfileRepository) {
        return args -> {
            User user = userRepository.save(new User("bilbo@baggins", "burglar"));
            UserProfile profile = userProfileRepository.save(new UserProfile(
                    user.getId(),
                    "Bilbo Baggins",
                    user.getEmail(),
                    "044",
                    UserGender.MALE,
                    125));
            log.info("Preloading \nuser: " + user + "\nprofile: " + profile);
            user = userRepository.save(new User("frodo@baggins", "thief"));
            profile = userProfileRepository.save(new UserProfile(
                    user.getId(),
                    "Frodo Baggins",
                    user.getEmail(),
                    "045",
                    UserGender.MALE,
                    45));
            log.info("Preloading \nuser: " + user + "\nprofile: " + profile);
        };
    }
}
