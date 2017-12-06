package com.ex.evemarketback.domain;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "BUILDS")
public class Build implements Serializable {

    private static final Long serialVersionUID = 1L;

    @Id
    @SequenceGenerator(name="BUILD_SEQUENCE", sequenceName="BUILD_SEQUENCE")
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="BUILD_SEQUENCE")
    @Column(name = "buildid")
    private Long buildID;

    @Column(name = "userid")
    private Long userID;

    @Column(name = "buildname")
    private String buildname;

    @Column(name = "eftstring")
    private String eftString;

    public Build() {
    }

    public Build(Long userID, String buildname, String eftString) {
        this.userID = userID;
        this.buildname = buildname;
        this.eftString = eftString;
    }

    public static Long getSerialVersionUID() {
        return serialVersionUID;
    }

    public Long getBuildID() {
        return buildID;
    }

    public void setBuildID(Long buildID) {
        this.buildID = buildID;
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public String getBuildname() {
        return buildname;
    }

    public void setBuildname(String buildname) {
        this.buildname = buildname;
    }

    public String getEftString() {
        return eftString;
    }

    public void setEftString(String eftString) {
        this.eftString = eftString;
    }

    @Override
    public String toString() {
        return "Build{" +
                "buildID=" + buildID +
                ", userID=" + userID +
                ", buildname='" + buildname + '\'' +
                ", eftString='" + eftString + '\'' +
                '}';
    }
}

