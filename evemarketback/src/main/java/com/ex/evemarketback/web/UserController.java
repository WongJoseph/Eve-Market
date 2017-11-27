package com.ex.evemarketback.web;

import com.ex.evemarketback.domain.User;
import com.ex.evemarketback.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    public void registerUser(@RequestParam Map<String,String> requestParams){
        User user = new User();

        user.setUserName(requestParams.get("username"));
        user.setEmail(requestParams.get("email"));
        user.setPassword(requestParams.get("password"));

        userService.save(user);
    }
}
