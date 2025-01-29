package com.example.Models;

import jakarta.persistence.*;

@Entity
public class AirportMaster {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long airportId;

	    private String airportName;

	    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	    @JoinColumn(name = "cityId",referencedColumnName = "cityId", nullable = false)
	    private CityMaster city;

	    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	    @JoinColumn(name = "stateId",referencedColumnName = "stateId", nullable = false)
	    private StateMaster state;
        
	    @Column(unique = true)
	    private String airportCode;

	    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	    @JoinColumn(name = "hubId",referencedColumnName = "hubId",nullable=false)
	    private HubMaster hub;
	    // Getters and Setters
	    public Long getAirportId() {
	        return airportId;
	    }

	    public void setAirportId(Long airportId) {
	        this.airportId = airportId;
	    }

	    public String getAirportName() {
	        return airportName;
	    }

	    public void setAirportName(String airportName) {
	        this.airportName = airportName;
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
	    
	    public HubMaster getHub() {
	        return hub;
	    }

	    public void setHub(HubMaster state) {
	        this.hub = hub;
	    }


	    public String getAirportCode() {
	        return airportCode;
	    }

	    public void setAirportCode(String airportCode) {
	        this.airportCode = airportCode;
	    }
}
