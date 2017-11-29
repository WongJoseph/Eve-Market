package com.ex.evemarketback.domain;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "Orders")
public class Order implements Serializable{

        private static final Long serialVersionUID = 1L;

        @EmbeddedId
        private OrderPK orderPK;

        @Column(name = "TypeID")
        private Long typeID;

        @Column(name = "locationID")
        private Long locationID;

        @Column(name = "quantity")
        private Long quantity;

        @Column(name = "price")
        private Float price;

    public Order() {
    }

    public Order(OrderPK orderPK, Long typeID, Long locationID, Long quantity, Float price) {
        this.orderPK = orderPK;
        this.typeID = typeID;
        this.locationID = locationID;
        this.quantity = quantity;
        this.price = price;
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

    public Long getLocationID() {
        return locationID;
    }

    public void setLocationID(Long locationID) {
        this.locationID = locationID;
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
                ", locationID=" + locationID +
                ", quantity=" + quantity +
                ", price=" + price +
                '}';
    }
}
