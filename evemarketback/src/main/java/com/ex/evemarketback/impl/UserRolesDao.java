package com.ex.evemarketback.impl;


import com.ex.evemarketback.domain.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRolesDao extends CrudRepository<UserRole, Long> {

    @Query("select a.role from UserRole a, User b where b.userName = ?1 and a.userid = b.userId")
    List<String> findRoleByUserName(String username);
}
