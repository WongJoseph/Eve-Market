package com.ex.evemarketback.impl;

import com.ex.evemarketback.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends CrudRepository<User, Long > {
     User findByUserName(String username);

}
