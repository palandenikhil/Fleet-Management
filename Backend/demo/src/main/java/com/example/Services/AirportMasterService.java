package com.example.Services;

import java.util.List;
import java.util.Optional;

import com.example.Models.AirportMaster;

public interface AirportMasterService {
    List<AirportMaster> getAllAirports();
//    Optional<AirportMaster> findByCode(String code);
//    Optional<AirportMaster> findByName(String name);
	Optional<AirportMaster> getAirportByName(String name);
	Optional<AirportMaster> getAirportByCode(String code);
    
}
