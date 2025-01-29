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
	                .filter(hub -> hub.getCity().getCityId().equals(cityId)) // Filtering by cityId
	                .collect(Collectors.toList());
	}	
}
