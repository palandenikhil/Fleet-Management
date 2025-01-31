 package com.example.Models;

import jakarta.persistence.*;


@Entity
public class HubMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long hubId;

    private String hubName;

    private String hubAddress;
    
    @Column(unique = true) 
    private Long contactNumber;

    @ManyToOne
    @JoinColumn(name = "cityId",referencedColumnName = "cityId" ,nullable = false)
    private CityMaster city;

    @ManyToOne
    @JoinColumn(name = "stateId", referencedColumnName = "stateId",nullable = false)
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

	public HubMaster(Long hubId, String hubName, String hubAddress, Long contactNumber, CityMaster city,
			StateMaster state) {
		super();
		this.hubId = hubId;
		this.hubName = hubName;
		this.hubAddress = hubAddress;
		this.contactNumber = contactNumber;
		this.city = city;
		this.state = state;
	}
    public HubMaster() {
    	
    }

	@Override
	public String toString() {
		return "HubMaster [hubId=" + hubId + ", hubName=" + hubName + ", hubAddress=" + hubAddress + ", contactNumber="
				+ contactNumber + ", city=" + city + ", state=" + state + "]";
	}
    
    
}
