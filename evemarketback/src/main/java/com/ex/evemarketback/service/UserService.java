package com.ex.evemarketback.service;

import com.ex.evemarketback.domain.User;
import com.ex.evemarketback.domain.UserRole;
import com.ex.evemarketback.impl.UserDao;
import com.ex.evemarketback.impl.UserRolesDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

@Service
public class UserService{

    @Autowired
    private UserDao userDao;

    @Autowired
    private UserRolesDao userRolesDao;

    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;


    public void save(User user){
        String username = user.getUserName();
        UserRole userRole = new UserRole();

        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userDao.save(user);

        userRole.setRole("ROLE_USER");
        userRole.setUserid(userDao.findByUserName(username).getUserId());
        userRolesDao.save(userRole);

    }

<<<<<<< HEAD
    public User getUserByUsername(String username)
    {
        return userDao.findByUserName(username);
    }

=======
    public User findByusername(String username){
        return userDao.findByUserName(username);
    }

    public User findByemail(String email){
        return userDao.findByEmail(email);
    }

>>>>>>> e4a77ca3f5f8a6969b42cedeeadcd7ae22ce0473
}

//@Inject is newer than @Autowire but spring treats them the same way
