package com.ex.evemarketback.impl;

import com.ex.evemarketback.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, String > {
     User findByEmail(String email);
     User findByDisplayname(String display);
}
