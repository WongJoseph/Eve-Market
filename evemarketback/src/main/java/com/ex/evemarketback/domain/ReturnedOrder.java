package com.ex.evemarketback.domain;


import java.io.Serializable;

public class ReturnedOrder implements Serializable{
    private static final long serialVersionUID = 1L;

    private Long order_id;
    private Long type_id;
    private Long location_id;
    private Long quantity;
    private Float price;

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

    public Long getOrder_id() {
        return order_id;
    }

    public void setOrder_id(Long order_id) {
        this.order_id = order_id;
    }

    public Long getType_id() {
        return type_id;
    }

    public void setType_id(Long type_id) {
        this.type_id = type_id;
    }

    public Long getLocation_id() {
        return location_id;
    }

    public void setLocation_id(Long location_id) {
        this.location_id = location_id;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
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
