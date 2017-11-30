package com.ex.evemarketback.web;

import com.ex.evemarketback.domain.Order;
import com.ex.evemarketback.domain.OrderPK;
import com.ex.evemarketback.domain.ReturnedOrder;
import com.ex.evemarketback.domain.User;
import com.ex.evemarketback.service.OrderService;
import com.ex.evemarketback.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/addOrder", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void addOrderToCart(@RequestBody ReturnedOrder returnedOrder){
        System.out.println(returnedOrder);
        OrderPK orderPK = new OrderPK();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User user = userService.findByusername(username);
        System.out.println(user);
        Order order = new Order(user, returnedOrder);
        orderService.save(order);
    }

    @RequestMapping(value = "/getCart", method = RequestMethod.GET)
    @ResponseBody
    public List<ReturnedOrder> getOrdersCurrentUser() {
        List<ReturnedOrder> cartItems= new ArrayList<>();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User user = userService.findByusername(username);
        List<Order> orders = orderService.getOrdersByUser(user);
        for (Order order: orders) {
            cartItems.add(new ReturnedOrder(order));
        }
        return cartItems;
    }

    @RequestMapping(value = "/deleteOrder", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteOrderFromCart(@RequestBody ReturnedOrder returnedOrder) {
        OrderPK orderPK = new OrderPK();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User user = userService.findByusername(username);
        orderPK.setUser(user);
        orderPK.setOrderID(returnedOrder.getOrder_id());
        orderService.deleteOrder(orderPK);
    }

}