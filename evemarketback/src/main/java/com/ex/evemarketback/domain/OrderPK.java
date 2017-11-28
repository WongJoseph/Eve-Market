package com.ex.evemarketback.domain;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class OrderPK implements Serializable {
    @Column(name = "orderID")
    private Long orderID;

    private User user;

    public OrderPK() {
    }

    public OrderPK(Long orderID, User user) {
        this.orderID = orderID;
        this.user = user;
    }

    public Long getOrderID() {
        return orderID;
    }

    public void setOrderID(Long orderID) {
        this.orderID = orderID;
    }

    @ManyToOne
    @JoinColumn(name = "userID")
    public User getUser() {
        return user;
    }


    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof OrderPK)) return false;
        OrderPK that = (OrderPK) o;
        return Objects.equals(getOrderID(), that.getOrderID()) &&
                Objects.equals(getUser(), that.getUser());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getOrderID(), getUser());
    }
}