package com.ex.evemarketback.impl;

import com.ex.evemarketback.domain.Order;
import com.ex.evemarketback.domain.OrderPK;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderDao extends CrudRepository<Order, OrderPK> {
    List<Order> findAllByOrderPK_User_UserId(Long userID);

    Order save(Order order);


}
