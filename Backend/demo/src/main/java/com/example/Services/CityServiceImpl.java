package com.example.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Models.CityMaster;
import com.example.Repositories.CityRepository;

@Service
public class CityServiceImpl implements CityService {

	@Autowired
	private CityRepository cityRepository;
	
	@Override
	public List<CityMaster> getCitiesByState(Long StateId){
		return cityRepository.findAll().stream().filter(city -> city.getState().getStateId().equals(StateId)).toList();
	}
}
