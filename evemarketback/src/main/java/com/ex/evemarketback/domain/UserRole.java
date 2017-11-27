package com.ex.evemarketback.domain;


import javax.persistence.*;

@Entity
@Table(name="user_roles")
public class UserRole {

    @Id
    @SequenceGenerator(name="USERROLE_SEQUENCE", sequenceName="USERROLE_SEQUENCE")
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="USERROLE_SEQUENCE")
    @Column(name="user_role_id")
    private Long userroleid;

    @Column(name="userid")
    private Long userid;

    @Column(name="role")
    private String role;

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public Long getUserroleid() {
        return userroleid;
    }

    public void setUserroleid(Long userroleid) {
        this.userroleid = userroleid;
    }

}