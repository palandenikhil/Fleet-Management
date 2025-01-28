package com.example.Models;

import jakarta.persistence.*;


@Entity
public class HubMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long hubId;

    private String hubName;

    private String hubAddress;

    @ManyToOne
    @JoinColumn(name = "city_id",referencedColumnName = "cityId" ,nullable = false)
    private CityMaster city;

    @ManyToOne
    @JoinColumn(name = "state_id", referencedColumnName = "stateId",nullable = false)
    private StateMaster state;

    // Getters and Setters
    public Long getHubId() {
        return hubId;
    }

    public void setHubId(Long hubId) {
        this.hubId = hubId;
    }

    public String getHubName() {
        return hubName;
    }

    public void setHubName(String hubName) {
        this.hubName = hubName;
    }

    public String getHubAddress() {
        return hubAddress;
    }

    public void setHubAddress(String hubAddress) {
        this.hubAddress = hubAddress;
    }

    public CityMaster getCity() {
        return city;
    }

    public void setCity(CityMaster city) {
        this.city = city;
    }

    public StateMaster getState() {
        return state;
    }

    public void setState(StateMaster state) {
        this.state = state;
    }
}
