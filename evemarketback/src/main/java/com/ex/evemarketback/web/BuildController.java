package com.ex.evemarketback.web;

import com.ex.evemarketback.domain.Build;
import com.ex.evemarketback.domain.ReturnedBuild;
import com.ex.evemarketback.domain.User;
import com.ex.evemarketback.service.BuildService;
import com.ex.evemarketback.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class BuildController {

    @Autowired
    private BuildService buildService;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/saveBuild", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void saveBuild(@RequestBody ReturnedBuild returnedBuild) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User user = userService.findByusername(username);
        buildService.save(returnedBuild, user.getUserId());
    }

    @RequestMapping(value = "/getBuild", method = RequestMethod.GET)
    @ResponseBody
    public List<ReturnedBuild> getBuildCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User user = userService.findByusername(username);
        List<Build> builds = buildService.getBuildsByUser(user);
        List<ReturnedBuild> returnedBuilds = new ArrayList<ReturnedBuild>();
        for(Build b : builds) {
            returnedBuilds.add(new ReturnedBuild(b));
        }
        return returnedBuilds;
    }
}
