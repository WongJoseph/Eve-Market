package com.ex.evemarketback.domain;

public class ReturnedBuild {
    private static final long serialVersionUID = 1L;

    private String buildname;
    private String eftString;

    public ReturnedBuild() {
    }

    public ReturnedBuild(String buildname, String eftString) {
        this.buildname = buildname;
        this.eftString = eftString;
    }

    public ReturnedBuild(Build b) {
        this.buildname = b.getBuildname();
        this.eftString = b.getEftString();
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
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
        return "ReturnedBuild{" +
                "buildname='" + buildname + '\'' +
                ", eftString='" + eftString + '\'' +
                '}';
    }
}
