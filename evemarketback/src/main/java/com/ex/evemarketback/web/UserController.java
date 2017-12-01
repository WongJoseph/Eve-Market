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
import org.springframework.security.crypto.password.PasswordEncoder;
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

    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;


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
        if (requestParams.get("username").equals("")) {
            error = "Username cannot be empty";
        }
        if (requestParams.get("email").equals("")) {
            error = "Email Address cannot be empty";
        }
        if (requestParams.get("password").equals("")) {
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

    @RequestMapping(value = "/updateUser", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<String> updateUser(@RequestBody Map<String, String> requestParams) throws IOException, ServletException {
        String error = null;
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User user = userService.findByusername(username);

        System.out.println("Current Password: " + requestParams.get("password"));
        System.out.println("New Password: " + requestParams.get("newpassword"));
        System.out.println("Confirm Password: " + requestParams.get("confirmpassword"));
        System.out.println("Email: " + requestParams.get("email"));

        if(!requestParams.get("newpassword").equals(requestParams.get("confirmpassword")))
            error = "The New Password Fields did not match";
        if (requestParams.get("password").equals("")) {
            error = "Current Password cannot be empty";
        }
        if (error != null) {
            return new ResponseEntity(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (bCryptPasswordEncoder.matches(requestParams.get("password"), user.getPassword())) {
            if(!requestParams.get("email").equals(""))
                user.setEmail(requestParams.get("email"));
            if(!requestParams.get("newpassword").equals(""))
                user.setPassword(requestParams.get("newpassword"));
            userService.save(user);
            return new ResponseEntity(user, HttpStatus.OK);

        } else {
            error = "The password you entered was invalid";
            return new ResponseEntity(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
//
//    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//encoder.matches(password, user.getPassword());