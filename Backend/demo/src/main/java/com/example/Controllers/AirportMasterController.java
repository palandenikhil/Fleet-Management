package com.example.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Models.AirportMaster;
import com.example.Services.AirportMasterService;

@RestController
@RequestMapping("/api/airports")
public class AirportMasterController {

    @Autowired
    private AirportMasterService airportMasterService;

    @GetMapping
    public ResponseEntity<List<AirportMaster>> getAllAirports() {
        List<AirportMaster> airports = airportMasterService.getAllAirports();
        return ResponseEntity.ok(airports);
    }

    @GetMapping("/code/{code}")
    public ResponseEntity<AirportMaster> getAirportByCode(@PathVariable String code) {
        Optional<AirportMaster> airport = airportMasterService.getAirportByCode(code);
        return airport.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<AirportMaster> getAirportByName(@PathVariable String name) {
        Optional<AirportMaster> airport = airportMasterService.getAirportByName(name);
        return airport.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
