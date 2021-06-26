package com.trainme.app.security.jwt.service;

import com.trainme.app.security.jwt.entity.JwtUserDetails;
import com.trainme.app.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JwtInMemoryUserDetailsService implements UserDetailsService {
    private final UserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userService.findByEmail(username)
                .map(JwtUserDetails::createFromUser)
                .orElseThrow(() -> new UsernameNotFoundException("loadUserByUsername fails for username: " + username));
    }
}
