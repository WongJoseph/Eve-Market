package com.ex.evemarketback.web;

import com.ex.evemarketback.domain.User;
import com.ex.evemarketback.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
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
public class UserController implements ServletContextAware {

    @Autowired
    private UserService userService;

    private ServletContext context;

    public void setServletContext(ServletContext servletContext) {
        this.context = servletContext;
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
            error = "Your account has been successfully registered with username " + requestParams.get("username");
            RequestDispatcher rd = context.getRequestDispatcher("/login.html");
            PrintWriter out = response.getWriter();
            out.println("<font color=green" + error + "</font>");

        }
    }

}
