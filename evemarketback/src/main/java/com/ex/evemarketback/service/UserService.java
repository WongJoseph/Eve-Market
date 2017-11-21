package com.ex.evemarketback.service;

import com.ex.evemarketback.domain.User;
import com.ex.evemarketback.impl.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;

public class UserService {

    UserDao dao;

    @Autowired
    public void setDao(UserDao dao) {
        this.dao = dao;
    }

    @Bean
    public User findByEmail(String email) {
        return dao.findByEmail(email);
    }

    @Bean
    public User findByDisplay(String DisplayName) {
        return dao.findByDisplayname(DisplayName);
    }


}
