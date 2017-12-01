package com.ex.evemarketback.web;

import com.ex.evemarketback.domain.User;
import com.ex.evemarketback.service.UserService;
import com.sun.org.apache.xalan.internal.xsltc.compiler.util.ErrorMsg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.ServletContextAware;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;


@Controller
public class UserController {

    @Autowired
    private UserService userService;


    @RequestMapping(value = "/login", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<String> loginUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        username = "{\"username\": \"" + username + "\"}";
        return new ResponseEntity(username, HttpStatus.OK);
    }

    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<String> registerUser(@RequestBody Map<String, String> requestParams) throws IOException, ServletException {
        User user = new User();
        String error = null;

        System.out.println(requestParams.get("username"));
        System.out.println(requestParams.get("email"));
        System.out.println(requestParams.get("password"));
        if (userService.findByusername(requestParams.get("username")) != null) {
            error = "A user with this Username already exists";
        }
        if (userService.findByemail(requestParams.get("email")) != null) {
            error = "A user with this Email Address already exists";
        }
        if(requestParams.get("username") == ""){
            error = "Username cannot be empty";
        }
        if(requestParams.get("email") == ""){
            error = "Email Address cannot be empty";
        }
        if(requestParams.get("password") == ""){
            error = "Password cannot be empty";
        }
        if (error != null) {
            return new ResponseEntity(error, HttpStatus.INTERNAL_SERVER_ERROR);

        } else {

            user.setUserName(requestParams.get("username"));
            user.setEmail(requestParams.get("email"));
            user.setPassword(requestParams.get("password"));
            userService.save(user);
            return new ResponseEntity(user, HttpStatus.OK);


        }
    }
}

