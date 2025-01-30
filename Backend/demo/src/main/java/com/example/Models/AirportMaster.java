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
	    private CityMaster cityId;

	    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	    @JoinColumn(name = "stateId",referencedColumnName = "stateId", nullable = false)
	    private StateMaster stateId;
        
	    @Column(unique = true)
	    private String airportCode;

	    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	    @JoinColumn(name = "hubId",referencedColumnName = "hubId",nullable=false)
	    private HubMaster hubId;
	    
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
	        return cityId;
	    }

	    public void setCity(CityMaster cityId) {
	        this.cityId = cityId;
	    }

	    public StateMaster getState() {
	        return stateId;
	    }

	    public void setState(StateMaster stateId) {
	        this.stateId = stateId;
	    }
	    
	    public HubMaster getHub() {
	        return hubId;
	    }

	    public void setHub(HubMaster hubId) {
	        this.hubId = hubId;
	    }


	    public String getAirportCode() {
	        return airportCode;
	    }

	    public void setAirportCode(String airportCode) {
	        this.airportCode = airportCode;
	    }

		public AirportMaster(Long airportId, String airportName, CityMaster city, StateMaster state, String airportCode,
				HubMaster hub) {
			super();
			this.airportId = airportId;
			this.airportName = airportName;
			this.cityId = city;
			this.stateId = state;
			this.airportCode = airportCode;
			this.hubId = hub;
		}
	    
	    public AirportMaster() {
	    	
	    }
}
