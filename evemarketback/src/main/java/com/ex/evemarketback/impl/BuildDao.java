package com.ex.evemarketback.impl;

import com.ex.evemarketback.domain.Build;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BuildDao extends CrudRepository<Build, Long> {
//    List<Build> findAllByUSERID(Long userID);

    Build save(Build build);
}
