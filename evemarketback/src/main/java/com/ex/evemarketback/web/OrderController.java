package com.ex.evemarketback.web;

import com.ex.evemarketback.domain.Order;
import com.ex.evemarketback.domain.OrderPK;
import com.ex.evemarketback.domain.ReturnedOrder;
import com.ex.evemarketback.domain.User;
import com.ex.evemarketback.service.OrderService;
import com.ex.evemarketback.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/addOrder", method = RequestMethod.POST)
    @ResponseBody
    public void addOrderToCart(@RequestParam("order_id") Long orderID, @RequestParam("type_id") Long typeID,
                               @RequestParam("location_id") Long locationID, @RequestParam("quantity") Long quantity,
                               @RequestParam("price") Float price){
        Order order = new Order();
        OrderPK orderPK = new OrderPK();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User user = userService.findByusername(username);
        System.out.println(user.toString());
        orderPK.setUser(user);
        orderPK.setOrderID(orderID);
        order.setOrderPK(orderPK);
        order.setLocationID(locationID);
        order.setTypeID(typeID);
        order.setQuantity(quantity);
        order.setPrice(price);
        System.out.println(order.toString());
        orderService.save(order);
        System.out.println("successfully added");
    }

    @RequestMapping(value = "/getCart", method = RequestMethod.POST)
    @ResponseBody
    public List<ReturnedOrder> getOrdersCurrentUser() {
        List<ReturnedOrder> cartItems= new ArrayList<ReturnedOrder>();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User user = userService.findByusername(username);
        List<Order> orders = orderService.getOrdersByUser(user);
        for (Order order: orders) {
            cartItems.add(new ReturnedOrder(order));
        }
        System.out.println(cartItems);
        return cartItems;
    }

}
