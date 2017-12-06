package com.ex.evemarketback.security;

import com.ex.evemarketback.domain.User;
import com.ex.evemarketback.impl.UserDao;
import com.ex.evemarketback.impl.UserRolesDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("customUserDetailsService")
public class CustomUserDetailsService implements UserDetailsService {
    private final UserDao userRepository;
    private final UserRolesDao userRolesRepository;

    @Autowired
    public CustomUserDetailsService(UserDao userRepository,UserRolesDao userRolesRepository) {
        this.userRepository = userRepository;
        this.userRolesRepository = userRolesRepository;
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user=userRepository.findByUserName(username);
        if(null == user){
            throw new UsernameNotFoundException("No user present with username: " + username);
        }else{
            List<String> userRoles=userRolesRepository.findRoleByUserName(username);
            return new CustomUserDetails(user,userRoles);
        }
    }

}

