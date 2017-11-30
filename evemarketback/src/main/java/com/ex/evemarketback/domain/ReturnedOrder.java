package com.ex.evemarketback.domain;

import java.io.Serializable;

public class ReturnedOrder implements Serializable{
    private static final long serialVersionUID = 1L;

    private Long order_id;
    private Long type_id;
    private Long region_id;
    private String stationName;
    private Long quantity;
    private Float price;

    public ReturnedOrder() {
    }

    public ReturnedOrder(Long order_id, Long type_id, Long region_id, String stationName, Long quantity, Float price) {
        this.order_id = order_id;
        this.type_id = type_id;
        this.region_id = region_id;
        this.stationName = stationName;
        this.quantity = quantity;
        this.price = price;
    }

    public ReturnedOrder(Order order) {
        this.order_id = order.getOrderPK().getOrderID();
        this.type_id = order.getTypeID();
        this.region_id = order.getRegionID();
        this.stationName = order.getStationName();
        this.quantity = order.getQuantity();
        this.price = order.getPrice();
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
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

    public Long getRegion_id() {
        return region_id;
    }

    public void setRegion_id(Long region_id) {
        this.region_id = region_id;
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
        return "ReturnedOrder{" +
                "order_id=" + order_id +
                ", type_id=" + type_id +
                ", region_id=" + region_id +
                ", stationName='" + stationName + '\'' +
                ", quantity=" + quantity +
                ", price=" + price +
                '}';
    }
}