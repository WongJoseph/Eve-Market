package com.ex.evemarketback.domain;


import java.io.Serializable;

public class ReturnedOrder implements Serializable{
    Long order_id;
    Long type_id;
    Long location_id;
    Long quantity;
    Float price;

    public ReturnedOrder() {
    }

    public ReturnedOrder(Long order_id, Long type_id, Long location_id, Long quantity, Float price) {
        this.order_id = order_id;
        this.type_id = type_id;
        this.location_id = location_id;
        this.quantity = quantity;
        this.price = price;
    }

    public ReturnedOrder(Order order) {
        this.order_id = order.getOrderPK().getOrderID();
        this.type_id = order.getTypeID();
        this.location_id = order.getLocationID();
        this.quantity = order.getQuantity();
        this.price = order.getPrice();
    }

    @Override
    public String toString() {
        return "ReturnedOrder{" +
                "order_id=" + order_id +
                ", type_id=" + type_id +
                ", location_id=" + location_id +
                ", quantity=" + quantity +
                ", price=" + price +
                '}';
    }
}
