package com.ex.evemarketback;

import com.ex.evemarketback.domain.User;
import com.ex.evemarketback.impl.UserDao;
import com.ex.evemarketback.service.UserService;
import com.ex.evemarketback.web.OrderController;
import org.springframework.beans.factory.annotation.Autowired;

public class Test {

    @Autowired
    private static UserDao userDao;

    public static void main(String[] args) {

        System.out.println(userDao.findByUserName("jeremy"));
        //UserService userService = new UserService();

        //String username = "jeremy";
        //User user = userService.findByusername(username);

       // OrderController orderController = new OrderController();

        //orderController.addOrderToCart(4623824223L, 34L, 60005599L, 12L, 9.9F);

        //System.out.println(orderController.getOrdersCurrentUser());
    }
}
