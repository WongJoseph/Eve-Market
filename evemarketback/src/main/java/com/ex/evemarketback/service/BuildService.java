package com.ex.evemarketback.service;

import com.ex.evemarketback.domain.Build;
import com.ex.evemarketback.domain.ReturnedBuild;
import com.ex.evemarketback.domain.User;
import com.ex.evemarketback.impl.BuildDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuildService {

    @Autowired
    private BuildDao buildDao;

    public void save(ReturnedBuild returnedBuild, Long userId) {
        Build build = new Build(userId, returnedBuild.getBuildname(), returnedBuild.getEftString());
        buildDao.save(build);
    }

    public List<Build> getBuildsByUser(User user) {
        return buildDao.findAllByUserID(user.getUserId());
    }
}
