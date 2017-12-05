package com.ex.evemarketback.service;

import com.ex.evemarketback.domain.Build;
import com.ex.evemarketback.domain.User;
import com.ex.evemarketback.impl.BuildDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuildService {

    @Autowired
    private BuildDao buildDao;

    public void save(List<Build> buildList, Long userId) {
        for(Build b : buildList) {
            b.setUSERID(userId);
            buildDao.save(b);
        }
    }

    public Build getBuildsByUser(User user) {
//        return buildDao.findAllByUSERID(user.getUserId());
        return buildDao.findOne(user.getUserId());
    }
}
