package com.ex.evemarketback.domain;

import javax.persistence.Column;
import java.io.Serializable;

public class ReturnedUser implements Serializable{
    private static final long serialVersionUID = 1L;

    private String username;

    @Column(name = "email")
    private String email;

    public ReturnedUser() {
    }

    public ReturnedUser(String userName, String email) {
        this.username = userName;
        this.email = email;
    }

    public ReturnedUser(User user) {
        this.username = user.getUserName();
        this.email = user.getEmail();
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "ReturnedUser{" +
                "username='" + username + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
