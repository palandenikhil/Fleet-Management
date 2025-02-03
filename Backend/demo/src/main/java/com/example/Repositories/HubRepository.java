package com.example.Repositories;

import com.example.Models.HubMaster;


import org.springframework.data.jpa.repository.JpaRepository;

public interface HubRepository extends JpaRepository<HubMaster, Long> {
	
}

