package com.example.Repositories;

import com.example.Models.CityMaster;


import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository extends JpaRepository<CityMaster, Long> {
}

