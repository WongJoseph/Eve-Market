package com.ex.evemarketback.web;

import com.ex.evemarketback.domain.User;
import com.ex.evemarketback.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
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
    public void registerUser(@RequestParam Map<String, String> requestParams, HttpServletResponse response) throws IOException, ServletException {
        User user = new User();
        String error = null;

        if (userService.findByusername(requestParams.get("username")) != null) {
            error = "A user with this Username already exists";
        }
        if (userService.findByemail(requestParams.get("email")) != null) {
            error = "A user with this Email Address already exists";
        }

        if (error != null) {
            response.sendRedirect("register.html");
            response.getWriter().println("<font color=red>" + error + "</font>");

        } else {

            user.setUserName(requestParams.get("username"));
            user.setEmail(requestParams.get("email"));
            user.setPassword(requestParams.get("password"));
            userService.save(user);


        }
    }

}
