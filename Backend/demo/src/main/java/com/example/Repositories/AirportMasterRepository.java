package com.example.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.Models.AirportMaster;

@Repository
public interface AirportMasterRepository extends JpaRepository<AirportMaster, Long> {

	Optional<AirportMaster> findByAirportName(String airportName);

//
	Optional<AirportMaster> findByAirportCode(String airportcode);
	
}
