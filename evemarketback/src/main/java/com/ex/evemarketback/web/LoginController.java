package com.ex.evemarketback.web;

import com.ex.evemarketback.domain.User;
import com.ex.evemarketback.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@Controller
public class LoginController {

    @PostMapping("/Login")
    public void Login(@RequestParam Map<String,String> requestParams){

        String email = requestParams.get("email");
        String password = requestParams.get("password");
        String errorMsg = null;

        if (email == null || email.equals("")) {
            errorMsg = "User Email can't be null or empty";
        }
        if (password == null || password.equals("")) {
            errorMsg = "Password can't be null or empty";
        }

        if(errorMsg != null) {

        } else {
            UserService userService = new UserService();
            User byEmail = userService.findByEmail(email);

            if(byEmail != null) {
                if(password.equals(byEmail.getPassword())){
                    //Do stuff to validate login
                }
                else{
                    //Tell them username/password is incorrect
                }

            }
        }
    }

}
