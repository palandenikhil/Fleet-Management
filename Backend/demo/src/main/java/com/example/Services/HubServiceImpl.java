package com.example.Services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Models.HubMaster;
import com.example.Repositories.HubRepository;

@Service
public class HubServiceImpl implements HubService {
	
	@Autowired
	private HubRepository hubRepository;

	@Override
	public List<HubMaster> getHubsByCity(Long cityId) {
		 return hubRepository.findAll().stream()
	                .filter(hub -> hub.getCity().getCityId().equals(cityId)) 
	                .collect(Collectors.toList());	 
	}

	@Override
	public List<HubMaster> getAllHubs() {
		return hubRepository.findAll();
	}

	@Override
    public List<HubMaster> getHubsByState(Long stateId) {
        return hubRepository.findAll().stream()
                .filter(hub -> hub.getState().getStateId().equals(stateId))
                .toList();
    }	
}
