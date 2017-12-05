package com.ex.evemarketback.web;

import com.ex.evemarketback.domain.Build;
import com.ex.evemarketback.domain.User;
import com.ex.evemarketback.service.BuildService;
import com.ex.evemarketback.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class BuildController {

    @Autowired
    private BuildService buildService;

    @Autowired
    private UserService userService;

    @RequestMapping
    @ResponseStatus
    public void saveBuild(@RequestBody List<Build> buildList) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User user = userService.findByusername(username);
        buildService.save(buildList, user.getUserId());
    }

    @RequestMapping(value = "/getBuild", method = RequestMethod.GET)
    @ResponseBody
    public Build getBuildCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User user = userService.findByusername(username);
        Build builds = buildService.getBuildsByUser(user);
        return builds;
    }
}
