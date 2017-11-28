package com.ex.evemarketback.service;


import com.ex.evemarketback.domain.Order;
import com.ex.evemarketback.domain.User;
import com.ex.evemarketback.impl.OrderDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderDao orderDao;


    public void save(Order order){
        orderDao.save(order);
    }

    public List<Order> getOrdersByUser(User user) {
        return orderDao.findAllByUserID(user.getUserId());
    }
}
