package com.ex.evemarketback.domain;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Orders")
public class Order implements Serializable{

    private static final Long serialVersionUID = 1L;

    @EmbeddedId
    private OrderPK orderPK;

    @Column(name = "TypeID")
    private Long typeID;

    @Column(name = "regionID")
    private Long regionID;

    @Column(name = "stationname")
    private String stationName;

    @Column(name = "quantity")
    private Long quantity;

    @Column(name = "price")
    private Float price;

    public Order() {
    }

    public Order(OrderPK orderPK, Long typeID, Long regionID, String stationName, Long quantity, Float price) {
        this.orderPK = orderPK;
        this.typeID = typeID;
        this.regionID = regionID;
        this.stationName = stationName;
        this.quantity = quantity;
        this.price = price;
    }

    public Order(User user, ReturnedOrder returnedOrder) {
        OrderPK orderPK = new OrderPK();
        orderPK.setUser(user);
        orderPK.setOrderID(returnedOrder.getOrder_id());
        this.orderPK = orderPK;
        this.regionID = returnedOrder.getRegion_id();
        this.stationName = returnedOrder.getStationName();
        this.typeID = returnedOrder.getType_id();
        this.quantity = returnedOrder.getQuantity();
        this.price = returnedOrder.getPrice();
    }

    public static Long getSerialVersionUID() {
        return serialVersionUID;
    }

    public OrderPK getOrderPK() {
        return orderPK;
    }

    public void setOrderPK(OrderPK orderPK) {
        this.orderPK = orderPK;
    }

    public Long getTypeID() {
        return typeID;
    }

    public void setTypeID(Long typeID) {
        this.typeID = typeID;
    }

    public Long getRegionID() {
        return regionID;
    }

    public void setRegionID(Long regionID) {
        this.regionID = regionID;
    }

    public String getStationName() {
        return stationName;
    }

    public void setStationName(String stationName) {
        this.stationName = stationName;
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
        return "Order{" +
                "orderPK=" + orderPK +
                ", typeID=" + typeID +
                ", regionID=" + regionID +
                ", stationName='" + stationName + '\'' +
                ", quantity=" + quantity +
                ", price=" + price +
                '}';
    }
}