package com.ex.evemarketback.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "BUILDS")
public class Build implements Serializable {

    private static final Long serialVersionUID = 1L;

    @Id
    @Column(name = "USERID")
    private Long USERID;

    @Column(name = "buildname")
    private String BUILDNAME;

    @Column(name = "typeid")
    private int TYPEID;

    @Column(name = "quantity")
    private int QUANTITY;

    @Column(name = "slot")
    private int SLOT;

    @Column(name = "regionid")
    private int REGIONID;

    public Build() {
    }

    public static Long getSerialVersionUID() {
        return serialVersionUID;
    }

    public Long getUSERID() {
        return USERID;
    }

    public void setUSERID(Long USERID) {
        this.USERID = USERID;
    }

    public String getBUILDNAME() {
        return BUILDNAME;
    }

    public void setBUILDNAME(String BUILDNAME) {
        this.BUILDNAME = BUILDNAME;
    }

    public int getTYPEID() {
        return TYPEID;
    }

    public void setTYPEID(int TYPEID) {
        this.TYPEID = TYPEID;
    }

    public int getQUANTITY() {
        return QUANTITY;
    }

    public void setQUANTITY(int QUANTITY) {
        this.QUANTITY = QUANTITY;
    }

    public int getSLOT() {
        return SLOT;
    }

    public void setSLOT(int SLOT) {
        this.SLOT = SLOT;
    }

    public int getREGIONID() {
        return REGIONID;
    }

    public void setREGIONID(int REGIONID) {
        this.REGIONID = REGIONID;
    }

    @Override
    public String toString() {
        return "Build{" +
                "USERID=" + USERID +
                ", BUILDNAME='" + BUILDNAME + '\'' +
                ", TYPEID=" + TYPEID +
                ", QUANTITY=" + QUANTITY +
                ", SLOT=" + SLOT +
                ", REGIONID=" + REGIONID +
                '}';
    }
}
