package com.example.Services;

import java.util.List;

import com.example.Models.HubMaster;

public interface HubService {
	public List<HubMaster> getHubsByCity(Long cityId);
	
	public List<HubMaster> getAllHubs();
	
	public List<HubMaster> getHubsByState(Long stateId);
	
}
